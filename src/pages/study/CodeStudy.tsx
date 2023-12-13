import React from 'react'

export default function CodeStudy() {
	return (
		<div>
			<div style={{background: "blue"}}>
				<div>1번의 상단 텍스트</div>
				<div>1번의 하단 텍스트</div>
			</div>
			<div style={{background: "red"}}>
				<div>2번의 상단 텍스트</div>
				<div>2번의 하단 텍스트</div>
			</div>
		</div>
	)
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