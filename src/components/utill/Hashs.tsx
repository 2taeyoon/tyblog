import React, { useEffect, useRef } from 'react';
import { HashsProps } from "../../types/props";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper as SwiperClass } from 'swiper/types';

export default function Hashs({selectedHash, setSelectedHash, uniqueHashs, sessionName}: HashsProps) {
	const scrollSessionName = `${sessionName}-scroll`; // 스크롤 위치를 저장하는 세션 스토리지 키 이름
	const swiperRef = useRef<SwiperClass | null>(null); // Swiper 인스턴스를 저장하기 위한 ref 생성


	// 해시태그 선택 상태를 세션 스토리지에서 로드하는 useEffect START!
	useEffect(() => {
		const savedHash = sessionStorage.getItem(sessionName); // 세션 스토리지에서 저장된 해시태그를 가져옴
		if (savedHash) {
			setSelectedHash(savedHash); // 저장된 해시태그가 있으면 상태를 업데이트
		}
	}, [sessionName, setSelectedHash]);
	// 해시태그 선택 상태를 세션 스토리지에서 로드하는 useEffect END!


	// 선택된 해시태그를 세션 스토리지에 저장하거나 제거하는 useEffect START!
	useEffect(() => {
		if (selectedHash) {
			sessionStorage.setItem(sessionName, selectedHash); // 선택된 해시태그가 있으면 세션 스토리지에 저장
		} else {
			sessionStorage.removeItem(sessionName); // 선택된 해시태그가 없다면 세션 스토리지 제거합니다.
		}
	}, [sessionName, selectedHash]);
	// 선택된 해시태그를 세션 스토리지에 저장하거나 제거하는 useEffect END!


	// 슬라이더의 스크롤 위치를 세션 스토리지에서 로드하는 useEffect START!
	useEffect(() => {
		const swiper = swiperRef.current; // 현재 Swiper 인스턴스를 참조

		const savedScroll = sessionStorage.getItem(scrollSessionName); // 세션 스토리지에서 저장된 스크롤 위치를 가져옴
		if (savedScroll) {
				const scrollPosition = parseInt(savedScroll, 10); // 스크롤 위치를 정수로 변환
				swiper?.slideTo(scrollPosition, 0); // 저장된 스크롤 위치로 슬라이드를 이동
		}

		swiper?.on('slideChange', () => { // 슬라이드가 변경될 때마다 실행(swiper에 내장된 옵셔널 체이닝)
				sessionStorage.setItem(scrollSessionName, swiper.activeIndex.toString()); // 현재 슬라이드 인덱스를 세션 스토리지에 저장
		});

		}, [scrollSessionName]);
	// 슬라이더의 스크롤 위치를 세션 스토리지에서 로드하는 useEffect END!


	return (
		<div className="hashs_wrap">
			<Swiper
				slidesPerView={'auto'}
				freeMode={true}
				className="hashs_slider"
				onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)} // Swiper 인스턴스를 ref에 할당
			>
				<SwiperSlide className={!selectedHash ? 'active' : ''} onClick={() => setSelectedHash(null)} style={{width: 'auto'}}>전체보기</SwiperSlide>
				{uniqueHashs.map((hash: string) => (
					<SwiperSlide style={{width: 'auto'}} key={hash} className={selectedHash === hash ? 'active' : ''} onClick={() => setSelectedHash(hash)}>
						{hash}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}


