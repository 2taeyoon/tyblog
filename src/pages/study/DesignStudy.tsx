import React from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import SliderFade from "../../components/ui/SliderFade";

export default function DesignStudy() {
  return (
    <>
      <CommonHelmet
        title="디자인 스터디"
        description="TYCODESIGN의 디자인 스터디 페이지입니다."
        ogTitle="디자인 스터디"
        ogDescription="TYCODESIGN의 디자인 스터디 페이지입니다."
        keywords="TYCODESIGN, 디자인 스터디"
      />
			<SliderFade typingText="디자인 관련<br/>스터디 페이지입니다." typingText2="<br/><p class='sub_text'>2023년부터 디자인 관련 내용을 공부하고 기록한 페이지입니다.</p>"/>
      <div className="common_wrap">DesignStudy page</div>
    </>
  );
}
