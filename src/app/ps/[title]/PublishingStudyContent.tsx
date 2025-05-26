'use client';

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import PublishingCard from "@/data/publishingStudyData.json";
import { CardProps, TitleProps } from "@/types/props";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm";
import PageUrls from "@/components/utill/PageUrl";
import Banner from "@/components/ui/Banner";

export default function PublishingStudyContent({title}: TitleProps) {
		const [markdown, setMarkdown] = useState("");
		const [notFoundState, setNotFoundState] = useState(false);

	  // URL 디코딩 (클라이언트에서도 한 번 더 안전 처리)
		const decodedTitle = decodeURIComponent(title).replace(/-/g, " ");
		const PublishingCardFind = PublishingCard.cards.find((item: CardProps) => item.title === decodedTitle);

		useEffect(() => {
			if (!PublishingCardFind) {
				setNotFoundState(true);
				return;
			}

			if (PublishingCardFind.mdFile) {
				fetch(PublishingCardFind.mdFile)
					.then((response) => response.text())
					.then((text) => setMarkdown(text));
			}
		}, [PublishingCardFind, title]);
	
		// 404 페이지 이동 처리 (useEffect 실행 후)
		if (notFoundState) return notFound();

  return (
    <>
			<div className="common_wrap banner_wrap">
				{PublishingCardFind && <Banner CardFind={PublishingCardFind} />}
			</div>
      <div className="common_wrap">
        <div className="blog">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeHighlight]}>
            {markdown}
          </ReactMarkdown>
					<PageUrls hyphenRemoval={decodedTitle} cards={PublishingCard.cards}/>
        </div>
      </div>
    </>
  );
}