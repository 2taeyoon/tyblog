import React, { useEffect, useState } from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import { useParams } from "react-router-dom";
import PublishingCard from "../../data/publishingStudyData.json";
import { CardProps } from "../../types/props";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"

export default function PublishingStudyContent() {
  const { title } = useParams();
  const hyphenRemoval = title?.replace(/-/g, " ");
  const PublishingCardFind = PublishingCard.cards.find(
    (item: CardProps) => item.title === hyphenRemoval
  );

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
        </div>
      </div>
    </>
  );
}
