import React from "react";
import { Helmet } from 'react-helmet-async';
import CommonHelmet from "../../components/Common/CommonHelmet";

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
			<div style={{ background: "blue" }}>
				<div>1번의 상단 텍스트</div>
				<div>1번의 하단 텍스트</div>
			</div>
			<div style={{ background: "red" }}>
				<div>2번의 상단 텍스트</div>
				<div>2번의 하단 텍스트</div>
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
