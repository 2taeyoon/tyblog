import React from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import SliderFade from "../../components/ui/SliderFade";

export default function PublishingPortfolio() {
  return (
    <>
      <CommonHelmet
				title="퍼블리싱 포트폴리오"
        description="TYCODESIGN의 퍼블리싱 포트폴리오 페이지입니다."
        ogTitle="퍼블리싱 포트폴리오"
        ogDescription="TYCODESIGN의 퍼블리싱 포트폴리오 페이지입니다."
        keywords="TYCODESIGN, 퍼블리싱 포트폴리오"
      />
			<SliderFade typingText="웹 퍼블리싱 관련<br/>포트폴리오 페이지입니다." typingText2="<br/><p class='sub_text'>이 페이지에서 저의 퍼블리싱 스타일을 보실 수 있습니다.</p>"/>
      <div className="common_wrap">PublishingPortfolio page</div>
    </>
  );
}
