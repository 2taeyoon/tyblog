import React from "react";
import { Link } from "react-router-dom";
import CommonHelmet from "../../components/Common/CommonHelmet";

export default function Home() {
  return (
		<>
			<CommonHelmet
				title="TYCODESIGN"
				description="TYCODESIGN의 개인 공간이자 포트폴리오 사이트입니다."
				ogTitle="TYCODESIGN"
				ogDescription="TYCODESIGN의 개인 공간이자 포트폴리오 사이트입니다."
				keywords="TYCODESIGN"
      />
			{/* <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
				<Link to='blog' style={{textAlign: "center"}}>블로그 페이지로 이동</Link>
				<Link to='codestudy' style={{textAlign: "center"}}>코드 스터디 페이지로 이동</Link>
			</div> */}
			<div className="common_pd">Home page</div>
		</>
  );
}
