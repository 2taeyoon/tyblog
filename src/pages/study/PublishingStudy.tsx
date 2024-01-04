import React from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import PublishingCard from "../../data/publishingStudyData.json";
import Card from "../../components/list/Card";
import SliderFade from "../../components/ui/SliderFade";

export default function PublishingStudy() {
  return (
    <>
      <CommonHelmet
        title="퍼블리싱 스터디"
        description="TYCODESIGN의 퍼블리싱 스터디 페이지입니다."
        ogTitle="퍼블리싱 스터디"
        ogDescription="TYCODESIGN의 퍼블리싱 스터디 페이지입니다."
        keywords="TYCODESIGN, 퍼블리싱 스터디"
      />
			<SliderFade typingText="웹 퍼블리싱 관련<br/>스터디 페이지입니다." typingText2="<br/><p class='sub_text'>2023년부터 퍼블리싱 관련 내용을 공부하고 기록한 페이지입니다.</p>"/>
      <div className="common_wrap">
        <Card cards={PublishingCard.cards} />
      </div>
    </>
  );
}
