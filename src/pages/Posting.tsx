import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import { supabase } from "../data/supabaseClient";
import { remark } from "remark";
import remarkHtml from "remark-html";

// 환경 변수 확인
console.log(process.env.REACT_APP_SUPABASE_ANON, "REACT_APP_SUPABASE_ANON");
console.log(process.env.REACT_APP_SUPABASE_URL, "EACT_APP_SUPABASE_URL");

const MarkdownEditor = () => {
  const [markdownText, setMarkdownText] = useState<string>(""); // Markdown 텍스트 상태(글 내용)
  const [title, setTitle] = useState<string>(""); // 제목 상태
	const [tags, setTags] = useState<string[]>([]); // 태그 리스트 상태
  const [currentTag, setCurrentTag] = useState(""); // 입력 중인 태그 상태

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

	// 발행 버튼 클릭 시 유효성 검사
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
	
  	// 마크다운을 HTML로 변환 후 텍스트 추출
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

		const subTitle = await extractTextFromMarkdown(markdownText, 150); // HTML로 변환 후 150자 추출

		// Supabase 테이블에 삽입
		const { data, error } = await supabase.from("posts").insert([
			{ title: title, tags: tags, subTitle: subTitle },
		]);
	
		if (error) { // 발행 시 에러 처리
			console.error("Error publishing post:", error);
			alert(`발행에 실패했습니다: ${error.message}`);
		} else { // 성공 시 모든 상태 초기화
			alert("발행되었습니다!");
			setMarkdownText("");
			setTitle("");
			setTags([]);
		}
	};

  return (
    <div className="publish">

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

export default MarkdownEditor;