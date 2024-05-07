import React from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import DesignPortfolioCard from "../../data/designPortfolioData.json";
import Card from "../../components/list/Card";
import SliderFade from "../../components/ui/SliderFade";
import Saying from "../../components/ui/Saying";

export default function DesignPortfolio() {
  return (
    <>
      <CommonHelmet
        title="디자인 포트폴리오"
        description="2taeyoon의 디자인 포트폴리오 페이지입니다."
        ogTitle="디자인 포트폴리오"
        ogDescription="2taeyoon의 디자인 포트폴리오 페이지입니다."
        keywords="2taeyoon, 디자인 포트폴리오"
      />
			<SliderFade typingText="디자인 관련<br/>포트폴리오 페이지입니다." typingText2="<br/><p class='sub_text'>이 페이지에서 저의 디자인 스타일을 보실 수 있습니다.</p>"/>
			<div className="common_wrap pd_none_col">
				<Saying sessionName="DesignPortfolio"/>
				<div className="category_wrap">
					<div className="category_text">Design Portfolio</div>
				</div>
			</div>
			<div className="common_wrap">
				<div className="card_wrap">
					{DesignPortfolioCard.cards.map(card => (
						<Card key={card.title} cards={[card]} />
					))}
				</div>
      </div>
    </>
  );
}