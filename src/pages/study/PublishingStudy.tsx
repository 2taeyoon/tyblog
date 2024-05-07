import React, { useEffect, useState } /*, { useState }*/ from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import PublishingStudyCard from "../../data/publishingStudyData.json";
import Card from "../../components/list/Card";
import SliderFade from "../../components/ui/SliderFade";
import { CardProps } from "../../types/props";
import Hashs from "../../components/utill/Hashs";
import Saying from "../../components/ui/Saying";

export default function PublishingStudy() {
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
        description="2taeyoon의 퍼블리싱 스터디 페이지입니다."
        ogTitle="퍼블리싱 스터디"
        ogDescription="2taeyoon의 퍼블리싱 스터디 페이지입니다."
        keywords="2taeyoon, 퍼블리싱 스터디"
      />
			<SliderFade typingText="퍼블리싱 관련<br/>스터디 페이지입니다." typingText2="<br/><p class='sub_text'>퍼블리싱 관련 내용을 공부하고 기록한 페이지입니다.</p>"/>
			<div className="common_wrap pd_none_col">
				<Saying sessionName="PublishingStudy"/>
				<div className="category_wrap">
					<div className="category_text">Publishing Study</div>
				</div>
				<Hashs selectedHash={selectedHash} setSelectedHash={setSelectedHash} uniqueHashs={uniqueHashs} sessionName="PublishingStudyHashs"/>
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