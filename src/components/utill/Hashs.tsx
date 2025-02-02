import React, { useEffect, useRef } from 'react';
import { HashsProps } from "@/types/props";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper as SwiperClass } from 'swiper/types';

export default function Hashs({selectedHash, setSelectedHash, uniqueHashs, sessionName, setCurrentPage}: HashsProps) {
	const swiperRef = useRef<SwiperClass | null>(null); // Swiper 인스턴스를 저장하기 위한 ref 생성


	// 해시태그 선택 상태를 세션 스토리지에서 로드하는 useEffect START!
	useEffect(() => {
		const storedData = JSON.parse(sessionStorage.getItem(sessionName) || "{}");
		if (storedData.Hash) {
			setSelectedHash(storedData.Hash); // 저장된 해시태그 상태를 로드
		}
	}, [sessionName, setSelectedHash]);
	// 해시태그 선택 상태를 세션 스토리지에서 로드하는 useEffect END!


	// 선택된 해시태그를 세션 스토리지에 저장하거나 제거하는 useEffect START!
	useEffect(() => {
		const storedData = JSON.parse(sessionStorage.getItem(sessionName) || "{}");
		const updatedData = {
			...storedData,
			Hash: selectedHash, // 선택된 해시태그를 세션에 Hash라는 이름으로 저장
		};
	
		if (selectedHash) {
			sessionStorage.setItem(sessionName, JSON.stringify(updatedData)); // 상태를 세션 스토리지에 저장
		} else {
			delete updatedData.selectedHash; // 선택된 해시태그가 없으면 삭제
			sessionStorage.setItem(sessionName, JSON.stringify(updatedData));
		}
	}, [sessionName, selectedHash]);
	// 선택된 해시태그를 세션 스토리지에 저장하거나 제거하는 useEffect END!


	// 슬라이더의 스크롤 위치를 세션 스토리지에서 로드하는 useEffect START!
	useEffect(() => {
		const storedData = JSON.parse(sessionStorage.getItem(sessionName) || "{}");

		// 스크롤 위치 로드
		if (storedData.Scroll !== undefined) {
			const scrollPosition = parseInt(storedData.Scroll, 10);
			swiperRef.current?.slideTo(scrollPosition, 0);
		}

		// 슬라이드 변경 시 스크롤 위치 저장
		swiperRef.current?.on("slideChange", () => {
			const updatedData = {
				...JSON.parse(sessionStorage.getItem(sessionName) || "{}"),
				Scroll: swiperRef.current?.activeIndex.toString(),
			};
			sessionStorage.setItem(sessionName, JSON.stringify(updatedData));
		});

	}, [sessionName]);
	// 슬라이더의 스크롤 위치를 세션 스토리지에서 로드하는 useEffect END!


	// 해시태그 클릭 시 페이지네이션을 초기화하는 함수
	const handleHashClick = (hash: string | null) => {
		setSelectedHash(hash);
		setCurrentPage(0);
	};

	return (
		<div className="hashs_wrap">
			<Swiper
				loop={false}
				slidesPerView={'auto'}
				freeMode={true}
				className="hashs_slider"
				onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)} // Swiper 인스턴스를 ref에 할당
			>
				<SwiperSlide className={!selectedHash ? 'active' : ''} onClick={() => handleHashClick(null)} style={{width: 'auto'}}>전체보기</SwiperSlide>
				{uniqueHashs.map((hash: string) => (
					<SwiperSlide style={{width: 'auto'}} key={hash} className={selectedHash === hash ? 'active' : ''} onClick={() => handleHashClick(hash)}>
						{hash}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}