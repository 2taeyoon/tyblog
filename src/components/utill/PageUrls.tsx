import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { CardProps, PageUrlsProps } from "../../types/props";

export default function PageUrls({ hyphenRemoval, cards, basePath }: PageUrlsProps) {

	// 현재 페이지의 JSON 배열을 받아 이전 페이지와 다음 페이지 URL 구현 START!
	function getPageUrls(currentTitle: string, cards: CardProps[]) {
		const currentIndex = cards.findIndex(card => card.title === currentTitle); // 현재 페이지의 Index 찾기
		const nextIndex = currentIndex + 1; // 다음 페이지 인덱스
		const prevIndex = currentIndex - 1; // 이전 페이지 인덱스

		let nextPageUrl = null; // 다음 페이지 URL을 null로 초기화
		let nextPageTitle = null; // 다음 페이지 타이틀을 null로 초기화

		let prevPageUrl = null; // 이전 페이지 URL을 null로 초기화
		let prevPageTitle = null; // 이전 페이지 타이틀을 null로 초기화
	
		// 다음 페이지가 존재하는 경우
		if (nextIndex < cards.length) {
			const nextTitle = cards[nextIndex].title; // 다음 페이지의 타이틀
			nextPageUrl = nextTitle?.replace(/\s+/g, '-'); // URL 형식으로 변환
			nextPageTitle = nextTitle; // 제목을 그대로 반환
		}
	
		// 이전 페이지가 존재하는 경우
		if (prevIndex >= 0) {
			const prevTitle = cards[prevIndex].title; // 이전 페이지의 타이틀
			prevPageUrl = prevTitle?.replace(/\s+/g, '-'); // URL 형식으로 변환
			prevPageTitle = prevTitle; // 제목을 그대로 반환
		}
	
		return { nextPageUrl, prevPageUrl, nextPageTitle, prevPageTitle }; // 다음 페이지와 이전 페이지의 URL을 반환
	}

	const { nextPageUrl, prevPageUrl, nextPageTitle, prevPageTitle } = getPageUrls(hyphenRemoval, cards);
	// 현재 페이지의 JSON 배열을 받아 이전 페이지와 다음 페이지 URL 구현 END!

	// 스크롤 초기화 함수 START!
	useEffect(()=>{
		window.scrollTo(0, 0);
	})
	// 스크롤 초기화 함수 END!

	return (
		<div className="page_url">
			{
				<Link to={`/${basePath}/${prevPageUrl}`} className="page_url_prev" >
					<div className="page_url_text">{prevPageUrl && "이전 포스트"}</div>
					<div className="prev_page">{ prevPageTitle }</div>
				</Link>
			}
			{
				<Link to={`/${basePath}/${nextPageUrl}`} className="page_url_next" >
					<div className="next_page">{nextPageUrl && "다음 포스트"}</div>
					<div className="page_url_text">{ nextPageTitle }</div>
				</Link>
			}
		</div>
	)
}
