import React from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import SliderFade from "../../components/ui/SliderFade";
import PublishingPortfolioCard from "../../data/publishingPortfolioData.json";
import Card from "../../components/list/Card";
import Saying from "../../components/ui/Saying";

export default function PublishingPortfolio() {
  return (
    <>
      <CommonHelmet
				title="퍼블리싱 포트폴리오"
        description="2taeyoon의 퍼블리싱 포트폴리오 페이지입니다."
        ogTitle="퍼블리싱 포트폴리오"
        ogDescription="2taeyoon의 퍼블리싱 포트폴리오 페이지입니다."
        keywords="2taeyoon, 퍼블리싱 포트폴리오"
      />
			<SliderFade typingText="퍼블리싱 관련<br/>포트폴리오 페이지입니다." typingText2="<br/><p class='sub_text'>이 페이지에서 저의 퍼블리싱 스타일을 보실 수 있습니다.</p>"/>
			<div className="common_wrap pd_none_col">
				<Saying sessionName="PublishingPortfolio"/>
				<div className="category_wrap">
					<div className="category_text">Publishing Portfolio</div>
				</div>
			</div>
			<div className="common_wrap">
				<div className="card_wrap">
					{PublishingPortfolioCard.cards.map(card => (
						<Card key={card.title} cards={[card]} />
					))}
				</div>
      </div>
    </>
  );
}
