import React, { useState, useEffect } from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import { useParams } from "react-router-dom";
import DesignCard from "../../data/designPortfolioData.json";
import { CardProps } from "../../types/props";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import PageUrls from "../../components/utill/PageUrls";
import Info from "../../components/ui/Info";

export default function DesignPortfolioContent() {
	const { title } = useParams(); // 현재 하이픈이 적용된 URL 가져오기
  const hyphenRemoval = title?.replace(/-/g, " ") ?? ""; // 현재 하이픈이 적용된 URL의 하이픈 제거 후, 공백 추가

	// JSON 파일의 title과 현재 URL을 비교하여 해당하는 객체 가져오기 START!
  const DesignCardFind = DesignCard.cards.find(
    (item: CardProps) => item.title === hyphenRemoval
  );
	// JSON 파일의 title과 현재 URL을 비교하여 해당하는 객체 가져오기 END!

	//마크다운 파일을 랜더링 START!
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(`${DesignCardFind?.mdFile}`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  });
	//마크다운 파일을 랜더링 END!
  return (
    <>
      <CommonHelmet
        title={DesignCardFind?.title}
        description={DesignCardFind?.subTitle}
        ogTitle={DesignCardFind?.title}
        ogDescription={DesignCardFind?.subTitle}
        keywords={DesignCardFind?.title}
      />
			<div className="common_pf common_info">
				<Info cards={DesignCardFind}/>
			</div>
      <div className="common_wrap common_pf">
        <div className="blog">
          <ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeRaw]}>
            {markdown}
          </ReactMarkdown>
					<PageUrls hyphenRemoval={hyphenRemoval} cards={DesignCard.cards} basePath="designportfolio"/>
        </div>
      </div>
    </>
  );
}
