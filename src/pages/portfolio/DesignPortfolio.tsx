import React, { useEffect, useState } from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import DesignPortfolioCard from "../../data/designPortfolioData.json";
import Card from "../../components/list/Card";
import SliderFade from "../../components/ui/SliderFade";
import { CardProps } from "../../types/props";
import Hashs from "../../components/utill/Hashs";

export default function DesignPortfolio() {
  const [selectedHash, setSelectedHash] = useState<string | null>(null); // 해시태그를 상태로 관리
  const [filteredCards, setFilteredCards] = useState<CardProps[]>([]); // 필터링 카드를 상태로 관리

	// 선택된 해시태그에 따라 카드를 필터링하는 함수 START!
  useEffect(() => {
    if (selectedHash) { // 카드 중 해시태그가 일치하는 카드만 필터링합니다.
      const newFilteredCards = DesignPortfolioCard.cards.filter(card =>
        card.hashs.some(hash => hash.name === selectedHash)
      );
      setFilteredCards(newFilteredCards);
    } else { // 선택된 해시태그가 없다면 모든 카드를 표시
      setFilteredCards(DesignPortfolioCard.cards);
    }
  }, [selectedHash])

	// 카드에서 중복되지 않은 해시태그들만 추출하여 배열로 생성
	const uniqueHashs = Array.from(new Set(DesignPortfolioCard.cards.flatMap(card => card.hashs.map(hash => hash.name))));

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
			<Hashs selectedHash={selectedHash} setSelectedHash={setSelectedHash} uniqueHashs={uniqueHashs} sessionName="DesignPortfolioHashs"/>
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
