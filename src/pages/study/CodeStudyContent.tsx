import React from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import { useParams } from "react-router-dom";
import CodeCard from '../../data/codeStudyData.json';

export default function CodeStudyContent() {
	const { url } = useParams();
	const hyphenRemoval = url?.replace(/-/g, ' ');
	const CodeCardFind = CodeCard.cards.find(item => item.title === hyphenRemoval);

	//console.log('CodeCardFind??',CodeCardFind?.title);
  return (
    <>
      <CommonHelmet
        title="여기는 블로그의 제목이 들어갈 예정"
        description="여기는 블로그의 상세 내용이 들어갈 예정"
        ogTitle="여기는 블로그의 제목이 들어갈 예정"
        ogDescription="여기는 블로그의 상세 내용이 들어갈 예정"
        keywords="여기는 블로그의 제목이 들어갈 예정"
      />
      <div className="common_pd">{hyphenRemoval}</div>
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
