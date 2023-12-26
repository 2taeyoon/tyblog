import React from "react";
import CommonHelmet from "../../components/Common/CommonHelmet";
import codecode from '../../data/codeStudyContent.json';

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
			{/* <div className="common_pd">
      <div className="card_wrap">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card_top">
              <div className="card_img" style={{ background: `url('${card.image}') center center / cover` }}>
                <div className="card_badge">
                  <div>{card.badge}</div>
                </div>
              </div>
            </div>
            <div className="card_bottom">
              <div className="card_bottom_profile">
                <div className="card_profile" style={{ background: `url('${card.profileImage}') center center / cover` }}></div>
                <div className="card_nickname">{card.nickname}</div>
                <div className="card_date">{card.date}</div>
              </div>
              <div className="card_bottom_title">{card.title}</div>
              <div className="card_skill_wrap">
                {card.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="card_skill" style={{ backgroundColor: skill.color }}>
                    <div className="skill_img" style={{ background: `url('${skill.icon}') center center / cover` }}></div>
                    <div className="skill_text">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> */}
      {/* <div className="common_pd">
				<div className="card_wrap">

					<div className="card">
						<div className="card_top">
							<div className="card_img" style={{ background: `url('./images/title.jpg') center center / cover` }}>
								<div className="card_badge">
									<div>콘테스트 1등</div>
								</div>
							</div>
						</div>
						<div className="card_bottom">
							<div className="card_bottom_profile">
								<div className="card_profile" style={{ background: `url('./favicon/favicon-32x32.png') center center / cover` }}></div>
								<div className="card_nickname">2taeyoon</div>
								<div className="card_date">23년 10월 10일</div>
							</div>
							<div className="card_bottom_title">타이틀 제목입니다.</div>
							<div className="card_skill_wrap">
								<div className="card_skill" style={{ backgroundColor: `red`}}>
									<div className="skill_img" style={{ background: `url('./images/html5.svg') center center / cover` }}></div>
									<div className="skill_text">JavaScript</div>
								</div>
								<div className="card_skill" style={{ backgroundColor: `blue`}}>
									<div className="skill_img" style={{ background: `url('./images/html5.svg') center center / cover` }}></div>
									<div className="skill_text">TypeScript</div>
								</div>
								<div className="card_skill" style={{ backgroundColor: `blue`}}>
									<div className="skill_img" style={{ background: `url('./images/html5.svg') center center / cover` }}></div>
									<div className="skill_text">html</div>
								</div>
								<div className="card_skill" style={{ backgroundColor: `blue`}}>
									<div className="skill_img" style={{ background: `url('./images/html5.svg') center center / cover` }}></div>
									<div className="skill_text">css</div>
								</div>
								<div className="card_skill" style={{ backgroundColor: `blue`}}>
									<div className="skill_img" style={{ background: `url('./images/html5.svg') center center / cover` }}></div>
									<div className="skill_text">sass</div>
								</div>
								<div className="card_skill" style={{ backgroundColor: `blue`}}>
									<div className="skill_img" style={{ background: `url('./images/html5.svg') center center / cover` }}></div>
									<div className="skill_text">tailwind</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
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
