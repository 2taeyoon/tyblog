'use client';

import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { CardProps, PageUrlsProps } from "@/types/props";
import { usePathname } from "next/navigation";

import designStudyData from "@/data/designStudyData.json";
import publishingStudyData from "@/data/publishingStudyData.json";
import etcStudyData from "@/data/etcStudyData.json";

export default function PageUrls({ hyphenRemoval, cards, basePath }: PageUrlsProps) {

	const pathname = usePathname(); // 현재 경로 확인
	const [isFromHome, setIsFromHome] = useState(false);

	useEffect(() => {
		// 세션 스토리지에 fromHome이 있을 경우 isFromHome 활성화화
		if (sessionStorage.getItem("fromHome") === "/") {
			setIsFromHome(true);
		}
	}, [pathname]);

	const combinedData = [
		...designStudyData.cards.map(card => ({ ...card, type: "ds" })),
		...publishingStudyData.cards.map(card => ({ ...card, type: "ps" })),
		...etcStudyData.cards.map(card => ({ ...card, type: "es" })),
	];

	const sorted = combinedData.sort((a, b) => {
		const dateA = new Date(a.sortDate || "2024-01-01").getTime();
		const dateB = new Date(b.sortDate || "2024-01-01").getTime();
		return dateB - dateA;
	});

	// fromHome에 따라서 사용 데이터 결정
	const dataSource = isFromHome ? sorted : cards;

	// 현재 페이지의 JSON 배열을 받아 이전 페이지와 다음 페이지 URL 구현 START!
	function getPageUrls(currentTitle: string, cards: CardProps[]) {
		const currentIndex = cards.findIndex(card => card.title === currentTitle); // 현재 페이지의 Index 찾기
		const prevIndex = currentIndex + 1; // 이전 페이지 인덱스
		const nextIndex = currentIndex - 1; // 다음 페이지 인덱스

		let prevPageUrl = null; // 이전 페이지 URL을 null로 초기화
		let prevPageTitle = null; // 이전 페이지 타이틀을 null로 초기화
		let prevPageImage = null; // 이전 페이지 이미지 초기화

		let nextPageUrl = null; // 다음 페이지 URL을 null로 초기화
		let nextPageTitle = null; // 다음 페이지 타이틀을 null로 초기화
		let nextPageImage = null; // 다음 페이지 이미지 초기화
	
		// 이전 페이지가 존재하는 경우
		if (prevIndex < cards.length) {
      const prevCard = cards[prevIndex];
      prevPageUrl = prevCard?.title?.replace(/\s+/g, '-'); // URL 형식으로 변환
      prevPageTitle = prevCard.title; // 제목 설정
      prevPageImage = prevCard.image; // 이미지 설정
		}
	
		// 다음 페이지가 존재하는 경우
		if (nextIndex >= 0) {
      const nextCard = cards[nextIndex];
      nextPageUrl = nextCard?.title?.replace(/\s+/g, '-'); // URL 형식으로 변환
      nextPageTitle = nextCard.title; // 제목 설정
      nextPageImage = nextCard.image; // 이미지 설정
		}
	
		return { nextPageUrl, prevPageUrl, nextPageTitle, prevPageTitle, nextPageImage, prevPageImage }; // 다음 페이지와 이전 페이지의 URL을 반환
	}

	const { nextPageUrl, prevPageUrl, nextPageTitle, prevPageTitle, nextPageImage, prevPageImage } = getPageUrls(hyphenRemoval, dataSource);
	// 현재 페이지의 JSON 배열을 받아 이전 페이지와 다음 페이지 URL 구현 END!

	// 스크롤 초기화 함수 START!
	useEffect(()=>{
		window.scrollTo(0, 0);
	})
	// 스크롤 초기화 함수 END!

	return (
		<div className="design_pf">
			<div className="page_url">
				{ prevPageUrl ?
					<Link href={`/${basePath}/${prevPageUrl}`} className="page_url_wrap page_url_wrap1">
						<div className="page_url_prev" style={{ background: `url('${prevPageImage}') center center / cover` }}></div>
						<div className="page_url_item">
							<div className="page_url_item_arrow1" style={{ background: `url('/images/arrow.png') center center / cover` }}></div>
							<div className="page_url_item_text">
								<div className="prev_post">{prevPageUrl && "이전 포스트"}</div>
								<div className="page_url_text">{ prevPageTitle }</div>
							</div>
						</div>
					</Link>
					:
					<div></div>
				}
				{ nextPageUrl ?
					<Link href={`/${basePath}/${nextPageUrl}`} className="page_url_wrap page_url_wrap2">
						<div className="page_url_next" style={{ background: `url('${nextPageImage}') center center / cover` }}></div>
						<div className="page_url_item">
							<div className="page_url_item_text page_url_item_text2">
								<div className="next_post">{nextPageUrl && "다음 포스트"}</div>
								<div className="page_url_text">{ nextPageTitle }</div>
							</div>
							<div className="page_url_item_arrow2" style={{ background: `url('/images/arrow2.png') center center / cover` }}></div>
						</div>
					</Link>
					:
					<div></div>
				}
			</div>
		</div>
	)
}