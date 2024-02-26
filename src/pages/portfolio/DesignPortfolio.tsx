import React, { useEffect, useState } from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import DesignCard from "../../data/designPortfolioData.json";
import Card from "../../components/list/Card";
import SliderFade from "../../components/ui/SliderFade";
import { CardProps } from "../../types/props";

export default function DesignPortfolio() {
	const [selectedHash, setSelectedHash] = useState<string | null>(null);
  const [filteredCards, setFilteredCards] = useState<CardProps[]>([]);

  useEffect(() => {
    if (selectedHash) {
      const newFilteredCards = DesignCard.cards.filter(card =>
        card.hashs.some(hash => hash.name === selectedHash)
      );
      setFilteredCards(newFilteredCards);
    } else {
      setFilteredCards(DesignCard.cards);
    }
  }, [selectedHash]);

	const uniqueHashs = Array.from(new Set(DesignCard.cards.flatMap(card => card.hashs.map(hash => hash.name))));
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
			<div className="hashs_wrap">
				<button onClick={() => setSelectedHash(null)}>모든 게시물</button>
				{uniqueHashs.map(hash => (
					<button key={hash} onClick={() => setSelectedHash(hash)}>
						{hash}
					</button>
				))}
			</div>
			<div className="common_wrap">
				<div className="card_wrap">
					{filteredCards.map(card => (
						<Card key={card.title} cards={[card]} />
					))}
				</div>
      </div>
    </>
  );
}
