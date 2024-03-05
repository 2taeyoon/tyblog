import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { CardProps, PageUrlsProps } from "../../types/props";

export default function PageUrls({ hyphenRemoval, cards, basePath }: PageUrlsProps) {

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

	const { nextPageUrl, prevPageUrl, nextPageTitle, prevPageTitle, nextPageImage, prevPageImage } = getPageUrls(hyphenRemoval, cards);
	// 현재 페이지의 JSON 배열을 받아 이전 페이지와 다음 페이지 URL 구현 END!

	// 스크롤 초기화 함수 START!
	useEffect(()=>{
		window.scrollTo(0, 0);
	})
	// 스크롤 초기화 함수 END!

	return (
		<div className="page_url">
			{ prevPageUrl ?
				<Link to={`/${basePath}/${prevPageUrl}`} className="page_url_wrap page_url_wrap1">
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
				<Link to={`/${basePath}/${nextPageUrl}`} className="page_url_wrap page_url_wrap2">
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
	)
}
