import React, { useEffect, useState } from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import { useParams } from "react-router-dom";
import PublishingCard from "../../data/publishingStudyData.json";
import { CardProps } from "../../types/props";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import PageUrls from "../../components/utill/PageUrls";

export default function PublishingStudyContent() {
  const { title } = useParams(); // 현재 하이픈이 적용된 URL 가져오기
  const hyphenRemoval = title?.replace(/-/g, " ") ?? ""; // 현재 하이픈이 적용된 URL의 하이픈 제거 후, 공백 추가

	// JSON 파일의 title과 현재 URL을 비교하여 해당하는 객체 가져오기 START!
  const PublishingCardFind = PublishingCard.cards.find(
    (item: CardProps) => item.title === hyphenRemoval
  );
	// JSON 파일의 title과 현재 URL을 비교하여 해당하는 객체 가져오기 END!

	//마크다운 파일을 랜더링 START!
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(`${PublishingCardFind?.mdFile}`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  });
	//마크다운 파일을 랜더링 END!

  return (
    <>
      <CommonHelmet
        title={PublishingCardFind?.title}
        description={PublishingCardFind?.subTitle}
        ogTitle={PublishingCardFind?.title}
        ogDescription={PublishingCardFind?.subTitle}
        keywords={PublishingCardFind?.title}
      />
			<div className="common_wrap banner_wrap">
				<div className="banner">
					<div className="banner_image" style={{ background: `url('${PublishingCardFind?.image}') center center / cover` }}></div>
					<div className="banner_info">
						<div className="card_title">{PublishingCardFind?.title}</div>
						<div className="card_bottom_profile">
							<div className="card_nickname">{PublishingCardFind?.nickname}</div>
							<div className="card_date">{PublishingCardFind?.date}</div>
						</div>
						{ PublishingCardFind?.hashs ? (
							<div className="card_hash_wrap">
								{ PublishingCardFind.hashs.map((hash, hashIndex) => (
									<div key={hashIndex} className="card_hash">
										<div className="hash_text">{hash.name}</div>
									</div>
								))}
							</div>	) : null}
					</div>
				</div>
			</div>
      <div className="common_wrap">
        <div className="blog">
          <ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeRaw]}>
            {markdown}
          </ReactMarkdown>
					<PageUrls hyphenRemoval={hyphenRemoval} cards={PublishingCard.cards} basePath="publishingstudy"/>
        </div>
      </div>
    </>
  );
}
