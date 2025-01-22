import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import { supabase } from "../data/supabaseClient";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { v4 as uuidv4 } from "uuid";

// 환경 변수 확인
// console.log(process.env.REACT_APP_SUPABASE_ANON, "REACT_APP_SUPABASE_ANON");
// console.log(process.env.REACT_APP_SUPABASE_URL, "EACT_APP_SUPABASE_URL");

const Posting = () => {
  const [markdownText, setMarkdownText] = useState<string>(""); // Markdown 텍스트 상태(글 내용)
  const [title, setTitle] = useState<string>(""); // 제목 상태
	const [tags, setTags] = useState<string[]>([]); // 태그 리스트 상태
  const [currentTag, setCurrentTag] = useState(""); // 입력 중인 태그 상태
	const [category, setCategory] = useState("DesignStudy"); // 선택한 카테고리 상태

	// 태그 입력 변경 처리
	const handleTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTag(e.target.value); // 입력된 값을 상태에 저장
  };

	// 태그 입력 키 이벤트 처리
	const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		// Enter or Space를 누르고 현재 입력된 태그가 비어있지 않을 때
    if ((e.key === "Enter" || e.key === " ") && currentTag.trim() !== "") {
      e.preventDefault(); // 기본 동작 방지
      setTags([...tags, `#${currentTag.trim()}`]); //태그 리스트에 새 태그 추가
      setCurrentTag(""); // 입력 필드 초기화
    }
  };

	// 특정 태그 삭제
	const handleTagRemove = (index: number) => {
		setTags(tags.filter((_, i) => i !== index)); // 해당 인덱스의 태그 삭제
	};

	// 발행 버튼 클릭 시 유효성 검사 + 테이블 저장 + 스토리지 저장
	const handlePublish = async () => {
		if (!title && !tags.length && !markdownText) {
			alert("제목, 태그, 내용을 모두 입력해주세요!");
			return;
		}
	
		if (!title && !tags.length) {
			alert("제목과 태그를 입력해주세요!");
			return;
		}
	
		if (!title && !markdownText) {
			alert("제목과 내용을 입력해주세요!");
			return;
		}
	
		if (!tags.length && !markdownText) {
			alert("태그와 내용을 입력해주세요!");
			return;
		}
	
		if (!title) {
			alert("제목을 입력해주세요!");
			return;
		}
	
		if (!tags.length) {
			alert("태그를 입력해주세요!");
			return;
		}
	
		if (!markdownText) {
			alert("내용을 입력해주세요!");
			return;
		}

		if (!category) {
      alert("카테고리를 선택해주세요!");
      return;
    }

		// 마크다운을 HTML로 변환 후 텍스트 추출 START!
		const extractTextFromMarkdown = async (markdown: string, length: number) => {
			const processedMarkdown = await remark().use(remarkHtml).process(markdown);
			const htmlString = processedMarkdown.toString(); // HTML로 변환된 문자열
			const tempDiv = document.createElement("div");
			tempDiv.innerHTML = htmlString; // HTML을 DOM 요소로 변환

			tempDiv.querySelectorAll("img").forEach((img) => img.remove()); // 이미지 태그 제거
			tempDiv.querySelectorAll("a").forEach((link) => link.remove()); // 링크 텍스트 제거
			const text = tempDiv.textContent || tempDiv.innerText || ""; // 텍스트만 추출

			// 이모티콘 및 특수문자 제거
			const emojiRegex = /[\p{Emoji}\uFE0F\u200D]/gu;
			const cleanText = text.replace(emojiRegex, "");

			return cleanText.substring(0, length); // 150자 반환
		};

		console.log("카테고리:", category);
		console.log("md 본문 내용:", markdownText);

		try {
			// 마크다운을 HTML로 변환 후 텍스트 추출
			const subTitle = await extractTextFromMarkdown(markdownText, 150); // HTML로 변환 후 150자 추출
			const fileName = `${uuidv4()}`;

			// Supabase 테이블에 데이터 삽입
			const tableName = `posts_${category}`;
			const { data: insertedData, error: insertError } = await supabase
				.from(tableName)
				.insert([{ title, tags, subTitle, fileName }])
				.select("id"); // 삽입 후 ID를 반환

			if (insertError || !insertedData || insertedData.length === 0) {
				throw new Error(`테이블 데이터 삽입 중 오류가 발생했습니다. ${insertError?.message}`);
			}

			const newFolderId = insertedData[0].id; // 삽입된 데이터의 ID 가져오기
			console.log("새로운 폴더 ID:", newFolderId);

			// 스토리지 경로 설정 (중간 폴더 포함)
			const storagePath = `${category}/${newFolderId}/${fileName}`; // 중간 폴더 ID 추가
			console.log("스토리지 경로:", storagePath);

			// 스토리지 업로드 로직
			const { error: storageError } = await supabase.storage
				.from("Storage") // Storage 버킷 이름
				.upload(storagePath, new Blob([markdownText], { type: "text/markdown" }), {
					upsert: false, // 파일 덮어쓰기 방지
				});

			if (storageError) throw storageError;

			alert("발행되었습니다!");
			setMarkdownText("");
			setTitle("");
			setTags([]);
		} catch (error) {
			if(error instanceof Error){
				console.error("Error publishing post:", error.message);
				alert(`발행에 실패했습니다: ${error.message}`);
			} else {
				console.error("Unexpected error:", error);
				alert("알 수 없는 오류가 발생했습니다.");
			}
		}
	};

  return (
    <div className="publish">

      {/* 카테고리 선택 추가 */}
      <div>
        <label>
          <input
            type="radio"
            name="category"
            value="DesignStudy"
            checked={category === "DesignStudy"}
            onChange={() => setCategory("DesignStudy")}
          />
          Design Study
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="PublishingStudy"
            checked={category === "PublishingStudy"}
            onChange={() => setCategory("PublishingStudy")}
          />
          Publishing Study
        </label>
      </div>

			{/* Title Input */}
			<div className="title_tag">
        <input className="title" type="text" placeholder="제목을 입력하세요" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <div className="tag-container" style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {tags.map((tag, index) => (
            <div key={index} className="tag-item" style={{ padding: "5px 10px", backgroundColor: "#eee", borderRadius: "15px", display: "flex", alignItems: "center", gap: "5px", }}
						onClick={() => handleTagRemove(index)}>
              {tag}
            </div>
          ))}
          <input
            className="tag-input"
            type="text"
            placeholder="태그를 입력해주세요"
            value={currentTag}
            onChange={handleTagInput}
            onKeyDown={handleTagKeyDown}
            style={{ flexGrow: 1, border: "none", outline: "none" }}
          />
        </div>
      </div>
      <div className="markdown_content">

        {/* Markdown Textarea */}
				<textarea value={markdownText} placeholder="여기에 내용을 입력하세요..." onChange={(e) => setMarkdownText(e.target.value)}/>

        {/* Post View */}
        <div className="post_view">
          <ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeRaw]}>{markdownText}</ReactMarkdown>
        </div>
      </div>

			{/* Publish Buttons */}
			<div className="btn" style={{ }}>
				<button onClick={() => {setMarkdownText(""); setTitle(""); setTags([]);}}>이전으로</button>
				<button onClick={handlePublish}>발행하기</button>
			</div>
    </div>
  );
};

export default Posting;