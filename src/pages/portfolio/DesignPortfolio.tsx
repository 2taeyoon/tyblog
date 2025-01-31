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
        description="이태윤의 디자인 포트폴리오"
        ogTitle="디자인 포트폴리오"
        ogDescription="이태윤의 디자인 포트폴리오"
        keywords="2taeyoon,이태윤,포트폴리오,디자인 포트폴리오"
				ogImage="https://www.2taeyoon.com/favicon/favicon-512x512.png"
				ogURL="https://www.2taeyoon.com/dp"
				ogType="website"
      />
			<SliderFade/>
			<div className="common_wrap pd_none_col">
				<Saying sessionName="DesignPortfolio"/>
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