import React from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import CodeCard from '../../data/codeStudyContent.json';
import Card from "../../components/list/Card";

export default function CodeStudy() {
  return (
    <>
      <CommonHelmet
        title="코드 스터디"
        description="TYCODESIGN의 코드 스터디 페이지입니다."
        ogTitle="코드 스터디"
        ogDescription="TYCODESIGN의 코드 스터디 페이지입니다."
        keywords="TYCODESIGN, 코드 스터디"
      />
			<div className="common_pd">
				<Card cards={CodeCard.cards}/>
      </div>
    </>
  );
}

// import React from 'react'
// import { useParams } from 'react-router-dom';
// import projectDetailJson from '../../data/project.json'
// import ProjectDetailTop from './ProjectDetailTop';
// import ProjectDtailMiddle from './ProjectDetailMiddle';
// import ProjectDtailBottom from './ProjectDtailBottom';

// const ProjectDetailWrap = () => {
//     const { id } = useParams();
//     const projectFind = projectDetailJson.project.find(item => item.id === id);

//     return (
//         <div className='detail_wrap'>
//             <ProjectDetailTop projectFind={projectFind}/>
//             <ProjectDtailMiddle projectFind={projectFind}/>
//             <ProjectDtailBottom projectFind={projectFind}/>
//         </div>
//     )
// }


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
