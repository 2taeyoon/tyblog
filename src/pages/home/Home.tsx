import React, { useState } from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import SliderFade from "../../components/ui/SliderFade";
import designStudyData from "../../data/designStudyData.json";
import publishingStudyData from "../../data/publishingStudyData.json";
import etcStudyData from "../../data/etcStudyData.json";
import CardPagination from "../../components/utill/CardPagination";
import Saying from "../../components/ui/Saying";

console.log(process.env.REACT_APP_SUPABASE_ANON, "REACT_APP_SUPABASE_ANON");
console.log(process.env.REACT_APP_SUPABASE_URL, "EACT_APP_SUPABASE_URL");

export default function Home() {

	const [currentPage, setCurrentPage] = useState(0);

	const combinedData = [
    ...designStudyData.cards.map(card => ({ ...card, type: "ds" })),
    ...etcStudyData.cards.map(card => ({ ...card, type: "es" })),
    ...publishingStudyData.cards.map(card => ({ ...card, type: "ps" })),
  ];

	// 최신 날짜순으로 정렬 START!
	const sortedData = combinedData.sort((a, b) => {
		const dateA:any = new Date(a.sortDate || "2024-01-01");
		const dateB:any = new Date(b.sortDate || "2024-01-01");
		return dateB - dateA; // 최신 날짜가 먼저 오도록 정렬
	});
	// 최신 날짜순으로 정렬 END!

  return (
    <>
      <CommonHelmet
        title="2taeyoon의 개인 블로그"
        description="개인 공간이자 포트폴리오 사이트"
        ogTitle="포트폴리오"
        ogDescription="개인 공간이자 포트폴리오 사이트"
        keywords="2taeyoon,이태윤,포트폴리오"
				ogImage="https://www.2taeyoon.com/favicon/favicon-512x512.png"
				ogURL="https://www.2taeyoon.com/"
      />
      <SliderFade typingText="" typingText2=""/>
			<div className="common_wrap pd_none_col">
				<Saying sessionName="Home"/>
			</div>
      <div className="common_wrap">
				<CardPagination filteredCards={sortedData} sessionName="HomeHashs" currentPage={currentPage} setCurrentPage={setCurrentPage}/>
			</div>
    </>
  );
}