import React from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import DesignCard from "../../data/designPortfolioData.json";
import Card from "../../components/list/Card";
import SliderFade from "../../components/ui/SliderFade";

export default function DesignPortfolio() {
  return (
    <>
      <CommonHelmet
        title="디자인 포트폴리오"
        description="TYCODESIGN의 디자인 포트폴리오 페이지입니다."
        ogTitle="디자인 포트폴리오"
        ogDescription="TYCODESIGN의 디자인 포트폴리오 페이지입니다."
        keywords="TYCODESIGN, 디자인 포트폴리오"
      />
			<SliderFade typingText="디자인 관련<br/>포트폴리오 페이지입니다." typingText2="<br/><p class='sub_text'>이 페이지에서 저의 디자인 스타일을 보실 수 있습니다.</p>"/>
			<div className="common_wrap">
        <Card cards={DesignCard.cards} />
      </div>
    </>
  );
}
