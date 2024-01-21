import React from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import EtcStudyData from "../../data/etcStudyData.json";
import SliderFade from "../../components/ui/SliderFade";
import Card from "../../components/list/Card";

export default function EtcStudy() {
  return (
		<>
			<CommonHelmet
				title="이모저모 스터디"
				description="TYCODESIGN의 코드 스터디 페이지입니다."
				ogTitle="그 외 스터디"
				ogDescription="TYCODESIGN의 코드 스터디 페이지입니다."
				keywords="TYCODESIGN, 코드 스터디"
			/>
			<SliderFade typingText="디자인 및 퍼블리싱 외의<br/>스터디 페이지입니다." typingText2="<br/><p class='sub_text'>디자인 및 퍼블리싱 외의 내용을 공부하고 기록한 페이지입니다.</p>"/>
			<div className="common_wrap">
        <Card cards={EtcStudyData.cards} />
      </div>
		</>
	);
}
