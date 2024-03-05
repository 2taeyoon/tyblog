import React, { useEffect, useState } /*, { useState }*/ from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import PublishingStudyCard from "../../data/publishingStudyData.json";
import Card from "../../components/list/Card";
import SliderFade from "../../components/ui/SliderFade";
import { CardProps } from "../../types/props";
import Hashs from "../../components/utill/Hashs";
//import Tabs from "../../components/list/Tabs";

export default function PublishingStudy() {
	//const [activeTab, setActiveTab] = useState(1);

  //현재 활성화된 탭에 따라 카드를 필터링하는 상수
  //const filteredCards = PublishingCard.cards.slice((activeTab - 1) * 6, activeTab * 6);

  const [selectedHash, setSelectedHash] = useState<string | null>(null); // 해시태그를 상태로 관리
  const [filteredCards, setFilteredCards] = useState<CardProps[]>([]); // 필터링 카드를 상태로 관리

	// 선택된 해시태그에 따라 카드를 필터링하는 함수 START!
  useEffect(() => {
    if (selectedHash) { // 카드 중 해시태그가 일치하는 카드만 필터링합니다.
      const newFilteredCards = PublishingStudyCard.cards.filter(card =>
        card.hashs.some(hash => hash.name === selectedHash)
      );
      setFilteredCards(newFilteredCards);
    } else { // 선택된 해시태그가 없다면 모든 카드를 표시
      setFilteredCards(PublishingStudyCard.cards);
    }
  }, [selectedHash])

	// 카드에서 중복되지 않은 해시태그들만 추출하여 배열로 생성
	const uniqueHashs = Array.from(new Set(PublishingStudyCard.cards.flatMap(card => card.hashs.map(hash => hash.name))));

  return (
    <>
      <CommonHelmet
        title="퍼블리싱 스터디"
        description="TYCODESIGN의 퍼블리싱 스터디 페이지입니다."
        ogTitle="퍼블리싱 스터디"
        ogDescription="TYCODESIGN의 퍼블리싱 스터디 페이지입니다."
        keywords="TYCODESIGN, 퍼블리싱 스터디"
      />
			<SliderFade typingText="퍼블리싱 관련<br/>스터디 페이지입니다." typingText2="<br/><p class='sub_text'>퍼블리싱 관련 내용을 공부하고 기록한 페이지입니다.</p>"/>
			<Hashs selectedHash={selectedHash} setSelectedHash={setSelectedHash} uniqueHashs={uniqueHashs} sessionName="PublishingStudyHashs"/>
			<div className="common_wrap">
				<div className="card_wrap">
					{filteredCards.map(card => (
						<Card key={card.title} cards={[card]} />
					))}
				</div>
      </div>
			{/* <Tabs cards={PublishingStudyCard.cards} activeTab={activeTab} setActiveTab={setActiveTab}/> */}
    </>
  );
}