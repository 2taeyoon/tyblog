'use client';

import React, { useEffect, useState } from "react";
import EtcStudyCard from "@/data/etcStudyData.json";
import SliderFade from "@/components/ui/SliderFade";
import { CardProps } from "@/types/props";
import Hashs from "@/components/utill/Hashs";
import Saying from "@/components/ui/Saying";
import CardPagination from "@/components/utill/CardPagination";

export default function EtcStudy() {
  const [selectedHash, setSelectedHash] = useState<string | null>(null); // 해시태그를 상태로 관리
  const [filteredCards, setFilteredCards] = useState<CardProps[]>([]); // 필터링 카드를 상태로 관리
	const [currentPage, setCurrentPage] = useState(0);

	// 선택된 해시태그에 따라 카드를 필터링하는 함수 START!
  useEffect(() => {
    if (selectedHash) { // 카드 중 해시태그가 일치하는 카드만 필터링합니다.
      const newFilteredCards = EtcStudyCard.cards.filter(card =>
        card.hashs.some(hash => hash.name === selectedHash)
      );
      setFilteredCards(newFilteredCards);
    } else { // 선택된 해시태그가 없다면 모든 카드를 표시
      setFilteredCards(EtcStudyCard.cards);
    }
  }, [selectedHash])

	// 카드에서 중복되지 않은 해시태그들만 추출하여 배열로 생성
	const uniqueHashs = Array.from(new Set(EtcStudyCard.cards.flatMap(card => card.hashs.map(hash => hash.name))));

  return (
		<>
			<SliderFade/>
			<div className="common_wrap pd_none_col">
				<Saying sessionName="es"/>
				<Hashs selectedHash={selectedHash} setSelectedHash={setSelectedHash} uniqueHashs={uniqueHashs} sessionName="es" setCurrentPage={setCurrentPage}/>
			</div>
			<div className="common_wrap">
				<CardPagination filteredCards={filteredCards} sessionName="es" currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
		</>
	);
}
