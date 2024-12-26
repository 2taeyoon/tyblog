import React from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import SliderFade from "../../components/ui/SliderFade";

export default function Home() {
  return (
    <>
      <CommonHelmet
        title="이태윤 포트폴리오"
        description="이태윤의 개인 공간이자 포트폴리오 사이트"
        ogTitle="이태윤 포트폴리오"
        ogDescription="이태윤의 개인 공간이자 포트폴리오 사이트"
        keywords="2taeyoon,이태윤,포트폴리오"
				ogImage="https://www.2taeyoon.com/favicon/favicon-512x512.png"
				ogURL="https://www.2taeyoon.com/"
      />
      <SliderFade typingText="1년차 퍼블리셔 이태윤입니다." typingText2="나만의 공간을 만들고 싶어 제작한 웹사이트입니다."/>
      <div className="common_wrap">
				여기는 이력서와 자기소개서가 들어가는 페이지 ing..
			</div>
    </>
  );
}