import React /*, { useState }*/ from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import PublishingCard from "../../data/publishingStudyData.json";
import Card from "../../components/list/Card";
import SliderFade from "../../components/ui/SliderFade";
//import Tabs from "../../components/list/Tabs";

export default function PublishingStudy() {
	//const [activeTab, setActiveTab] = useState(1);

  //현재 활성화된 탭에 따라 카드를 필터링하는 상수
  //const filteredCards = PublishingCard.cards.slice((activeTab - 1) * 6, activeTab * 6);

  return (
    <>
      <CommonHelmet
        title="퍼블리싱 스터디"
        description="TYCODESIGN의 퍼블리싱 스터디 페이지입니다."
        ogTitle="퍼블리싱 스터디"
        ogDescription="TYCODESIGN의 퍼블리싱 스터디 페이지입니다."
        keywords="TYCODESIGN, 퍼블리싱 스터디"
      />
			<SliderFade typingText="웹 퍼블리싱 관련<br/>스터디 페이지입니다." typingText2="<br/><p class='sub_text'>퍼블리싱 관련 내용을 공부하고 기록한 페이지입니다.</p>"/>
			<div className="common_wrap">
        <Card cards={PublishingCard.cards} />
      </div>
			{/* <Tabs cards={PublishingCard.cards} activeTab={activeTab} setActiveTab={setActiveTab}/> */}
    </>
  );
}