import React from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import CodeCard from '../../data/codeStudyData.json';
import Card from "../../components/list/Card";
import { useLocation } from "react-router-dom";

export default function CodeStudy() {
	const location = useLocation(); // 현재 위치 가져오기
	console.log(location.pathname)
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