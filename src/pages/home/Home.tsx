import React from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import SliderFade from "../../components/ui/SliderFade";

export default function Home() {
  return (
    <>
      <CommonHelmet
        title="이태윤 포트폴리오"
        description="이태윤의 개인 공간이자 포트폴리오 사이트입니다."
        ogTitle="이태윤 포트폴리오"
        ogDescription="이태윤의 개인 공간이자 포트폴리오 사이트입니다."
        keywords="2taeyoon,이태윤,포트폴리오"
      />
      <SliderFade typingText="안녕하세요.<br/>1년차 웹 디자이너<br/>이태윤입니다." typingText2="<br/><p class='sub_text'>나만의 공간을 만들고 싶어, 부족한 실력으로 제작한 웹사이트입니다.</p>"/>
      <div className="common_wrap">
				여기는 이력서와 자기소개서가 들어가는 페이지 ing..
			</div>
    </>
  );
}