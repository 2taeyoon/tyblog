import React, { useEffect, useState } /*, { useState }*/ from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import PublishingCard from "../../data/publishingStudyData.json";
import Card from "../../components/list/Card";
import SliderFade from "../../components/ui/SliderFade";
import { CardProps } from "../../types/props";
//import Tabs from "../../components/list/Tabs";

export default function PublishingStudy() {
	//const [activeTab, setActiveTab] = useState(1);

  //현재 활성화된 탭에 따라 카드를 필터링하는 상수
  //const filteredCards = PublishingCard.cards.slice((activeTab - 1) * 6, activeTab * 6);

  const [selectedHash, setSelectedHash] = useState<string | null>(null);
  const [filteredCards, setFilteredCards] = useState<CardProps[]>([]);

  useEffect(() => {
    if (selectedHash) {
      const newFilteredCards = PublishingCard.cards.filter(card =>
        card.hashs.some(hash => hash.name === selectedHash)
      );
      setFilteredCards(newFilteredCards);
    } else {
      setFilteredCards(PublishingCard.cards);
    }
  }, [selectedHash]);

	const uniqueHashs = Array.from(new Set(PublishingCard.cards.flatMap(card => card.hashs.map(hash => hash.name))));

  return (
    <>
      <CommonHelmet
        title="퍼블리싱 스터디"
        description="TYCODESIGN의 퍼블리싱 스터디 페이지입니다."
        ogTitle="퍼블리싱 스터디"
        ogDescription="TYCODESIGN의 퍼블리싱 스터디 페이지입니다."
        keywords="TYCODESIGN, 퍼블리싱 스터디"
      />
			<SliderFade typingText="웹 퍼블리싱 관련<br/>스터디 페이지입니다." typingText2="<br/><p class='sub_text'>퍼블리싱 관련 내용을 공부하고 기록한 페이지입니다.</p>"/>
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
			{/* <Tabs cards={PublishingCard.cards} activeTab={activeTab} setActiveTab={setActiveTab}/> */}
    </>
  );
}