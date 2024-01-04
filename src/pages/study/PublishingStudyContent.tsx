import React, { useEffect, useState } from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import { useParams } from "react-router-dom";
import PublishingCard from '../../data/publishingStudyData.json';
import { CardProps } from "../../types/props";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

import "../../styles/css/markdown.css";
import "../../styles/css/markdownAtom.css";

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
					<div>{PublishingCardFind?.title}</div>
					<ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeRaw]}>
						{markdown}
					</ReactMarkdown>
				</div>
			</div>
    </>
  );
}


// import React, { useEffect, useState } from "react";
// import ReactMarkdown from "react-markdown";
// import rehypeHighlight from "rehype-highlight";
// import "../../styles/css/markdown.css";
// import "../../styles/css/markdown_atom.css";

// export default function Blog() {
//   const [markdown, setMarkdown] = useState("");

//   useEffect(() => {
//     fetch("./01.md")
//       .then((response) => response.text())
//       .then((text) => setMarkdown(text));
//   }, []);

//   return (
//     <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
//       <div style={{ maxWidth: "768px", width: "100%" }}>
//         블로그페이지
//         <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
//           {markdown}
//         </ReactMarkdown>
//       </div>
//     </div>
//   );
// }
