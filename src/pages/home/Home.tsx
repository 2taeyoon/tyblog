import React, { useEffect, useMemo, useState } from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import SliderFade from "../../components/ui/SliderFade";
import designStudyData from "../../data/designStudyData.json";
import publishingStudyData from "../../data/publishingStudyData.json";
import etcStudyData from "../../data/etcStudyData.json";
import CardPagination from "../../components/utill/CardPagination";
import Saying from "../../components/ui/Saying";
import Hashs from "../../components/utill/Hashs";
import { CardProps } from "../../types/props";

export default function Home() {
	const [selectedHash, setSelectedHash] = useState<string | null>(null); // 해시태그를 상태로 관리
	const [filteredCards, setFilteredCards] = useState<CardProps[]>([]);
	const [currentPage, setCurrentPage] = useState(0);

  const combinedData = useMemo(() => {
    return [
      ...designStudyData.cards.map(card => ({ ...card, type: "ds" })),
			...publishingStudyData.cards.map(card => ({ ...card, type: "ps" })),
      ...etcStudyData.cards.map(card => ({ ...card, type: "es" })),
    ];
  }, []);

	// 선택된 해시태그에 따라 카드를 필터링하는 함수 START!
	useEffect(() => {
		let filtered = combinedData;

		if (selectedHash) {
      // 선택된 해시태그에 따라 필터링
      filtered = combinedData.filter(card =>
        card.hashs.some(hash => hash.name === selectedHash)
      );
    }

		// 최신순으로 정렬
		const sorted = filtered.sort((a, b) => {
			const dateA = new Date(a.sortDate || "2024-01-01").getTime();
			const dateB = new Date(b.sortDate || "2024-01-01").getTime();
			return dateB - dateA;
		});

		setFilteredCards(sorted);
	}, [selectedHash, combinedData])
	// 선택된 해시태그에 따라 카드를 필터링하는 함수 END!

	// 카드에서 중복되지 않은 해시태그들만 추출하여 배열로 생성
	const uniqueHashs = Array.from(new Set(combinedData.flatMap(card => card.hashs.map(hash => hash.name))));

  return (
    <>
      <CommonHelmet
        title="2taeyoon"
        description="2taeyoon의 개인 블로그입니다."
        ogTitle="개인 블로그"
        ogDescription="2taeyoon의 개인 블로그입니다."
        keywords="2taeyoon,개인 블로그"
				ogImage="https://www.2taeyoon.com/favicon/favicon-512x512.png"
				ogURL="https://www.2taeyoon.com/"
				ogType="website"
      />
      <SliderFade/>
			<div className="common_wrap pd_none_col">
				<Saying sessionName="Home"/>
				<Hashs selectedHash={selectedHash} setSelectedHash={setSelectedHash} uniqueHashs={uniqueHashs} sessionName="Home" setCurrentPage={setCurrentPage}/>
			</div>
      <div className="common_wrap">
				<CardPagination filteredCards={filteredCards} sessionName="Home" currentPage={currentPage} setCurrentPage={setCurrentPage}/>
			</div>
    </>
  );
}