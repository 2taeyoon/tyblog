import React, { useEffect, useState } from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import EtcStudyCard from "../../data/etcStudyData.json";
import SliderFade from "../../components/ui/SliderFade";
import { CardProps } from "../../types/props";
import Hashs from "../../components/utill/Hashs";
import Saying from "../../components/ui/Saying";
import CardPagination from "../../components/utill/CardPagination";

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
			<CommonHelmet
				title="이모저모 스터디"
				description="이태윤의 그 외 스터디 페이지입니다."
				ogTitle="그 외 스터디"
				ogDescription="이태윤의 그 외 스터디 페이지입니다."
				keywords="2taeyoon,이태윤,포트폴리오,그 외 스터디"
				ogImage="https://www.2taeyoon.com/favicon/favicon-512x512.png"
				ogURL="https://www.2taeyoon.com/es"
			/>
			<SliderFade typingText="그 외 스터디 페이지입니다." typingText2="그 외의 내용을 공부하고 기록한 페이지입니다."/>
			<div className="common_wrap pd_none_col">
				<Saying sessionName="EtcStudy"/>
				{/* <div className="category_wrap">
					<div className="category_text">Etc Study</div>
				</div> */}
				<Hashs selectedHash={selectedHash} setSelectedHash={setSelectedHash} uniqueHashs={uniqueHashs} sessionName="EtcStudyHashs" setCurrentPage={setCurrentPage}/>
			</div>
			<div className="common_wrap">
				<CardPagination filteredCards={filteredCards} sessionName="EtcStudyHashs" currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>
		</>
	);
}
