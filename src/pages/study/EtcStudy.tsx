import React, { useEffect, useState } from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import EtcStudyData from "../../data/etcStudyData.json";
import SliderFade from "../../components/ui/SliderFade";
import Card from "../../components/list/Card";
import { CardProps } from "../../types/props";

export default function EtcStudy() {
	const [selectedHash, setSelectedHash] = useState<string | null>(null);
  const [filteredCards, setFilteredCards] = useState<CardProps[]>([]);

  useEffect(() => {
    if (selectedHash) {
      const newFilteredCards = EtcStudyData.cards.filter(card =>
        card.hashs.some(hash => hash.name === selectedHash)
      );
      setFilteredCards(newFilteredCards);
    } else {
      setFilteredCards(EtcStudyData.cards);
    }
  }, [selectedHash]);

	const uniqueHashs = Array.from(new Set(EtcStudyData.cards.flatMap(card => card.hashs.map(hash => hash.name))));

  return (
		<>
			<CommonHelmet
				title="이모저모 스터디"
				description="TYCODESIGN의 코드 스터디 페이지입니다."
				ogTitle="그 외 스터디"
				ogDescription="TYCODESIGN의 코드 스터디 페이지입니다."
				keywords="TYCODESIGN, 코드 스터디"
			/>
			<SliderFade typingText="디자인 및 퍼블리싱 외의<br/>스터디 페이지입니다." typingText2="<br/><p class='sub_text'>디자인 및 퍼블리싱 외의 내용을 공부하고 기록한 페이지입니다.</p>"/>
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
