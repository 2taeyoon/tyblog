import React, { useEffect, useState } from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import { useParams } from "react-router-dom";
import PublishingCard from '../../data/publishingStudyData.json';
import { CardProps } from "../../types/props";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

export default function PublishingStudyContent() {
	const { title } = useParams();
  const hyphenRemoval = title?.replace(/-/g, " ");
	const PublishingCardFind = PublishingCard.cards.find((item: CardProps) => item.title === hyphenRemoval);

	const [markdown, setMarkdown] = useState("");

	useEffect(() => {
    fetch(`${PublishingCardFind?.mdFile}`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  });

  return (
    <>
      <CommonHelmet
        title={PublishingCardFind?.title}
        description={PublishingCardFind?.subTitle}
        ogTitle={PublishingCardFind?.title}
        ogDescription={PublishingCardFind?.subTitle}
        keywords={PublishingCardFind?.title}
      />
      <div className="common_wrap">
				<div className="blog">
					<div className="card_title">{PublishingCardFind?.title}</div>
					<div className="card_bottom_profile">
						<div className="card_profile" style={{ background: `url('${PublishingCardFind?.profileImage}') center center / cover` }}></div>
						<div className="card_nickname">{PublishingCardFind?.nickname}</div>
						<div className="card_date">{PublishingCardFind?.date}</div>
					</div>
					{ PublishingCardFind?.hashs ?
						<div className="card_hash_wrap">
							{ PublishingCardFind.hashs.map((hash, hashIndex) => (
								<div key={hashIndex} className="card_hash">
									<div className="hash_text">{hash.name}</div>
								</div>
							))}
						</div> : null
					}
					<div className="card_img" style={{ background: `url('${PublishingCardFind?.image}') center center / cover` }}></div>
					<ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeRaw]}>
						{markdown}
					</ReactMarkdown>
				</div>
			</div>
    </>
  );
}

// {
// 	"mdFile": "/images/publishing_study/02/02.md",
// 	"image": "/images/publishing_study/02/main_image.webp",
// 	"profileImage": "/favicon/favicon-32x32.png",
// 	"nickname": "2taeyoon",
// 	"date": "23년 10월 10일",
// 	"title": "React.FC와 타입 직접 선언",
// 	"subTitle": "React.FC는 React에서 함수형 컴포넌트를 정의하는 TypeScript에서 사용되는 제네릭 타입입니다. React.FC를 사용하여 타입을 명확하게 지정하여 Props에 대한 타입 검사를 수행합니다.",
// 	"hashs": [
// 		{"name": "#React"},
// 		{"name": "#TypeScript"},
// 		{"name": "#JavaScript"}
// 	]
// },