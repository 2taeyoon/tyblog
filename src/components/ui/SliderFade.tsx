'use client';

import React, { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { CardProps } from "../../types/props";
import designStudyData from "../../data/designStudyData.json";
import publishingStudyData from "../../data/publishingStudyData.json";
import etcStudyData from "../../data/etcStudyData.json";
import Link from "next/link";

export function SliderFadeComponent() {

  const [combinedData, setCombinedData] = useState<CardProps[]>([]);
  const [selectedCards, setSelectedCards] = useState<CardProps[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
	const swiperRef = useRef<SwiperClass | null>(null);

  // combinedData 업데이트 (리렌더링될 때마다 실행)
  useEffect(() => {
    setCombinedData([
      ...designStudyData.cards.map(card => ({ ...card, type: "ds" })),
      ...publishingStudyData.cards.map(card => ({ ...card, type: "ps" })),
      ...etcStudyData.cards.map(card => ({ ...card, type: "es" })),
    ]);
  }, []); // 빈 배열 -> 최초 1회 실행

  // selectedCards 업데이트 (combinedData가 변경될 때 실행)
  useEffect(() => {
    if (combinedData.length > 0) {
      const shuffled = [...combinedData].sort(() => 0.5 - Math.random()); // 랜덤 섞기
      setSelectedCards(shuffled.slice(0, 5)); // 5개 선택
    }
  }, [combinedData]); // combinedData가 변경될 때 실행

  const onAutoplayTimeLeft = (s: SwiperClass, timeLeft: number, progress: number) => {
		const activeIndex = s.realIndex
		setCurrentIndex(activeIndex + 1); // 1부터 시작하도록 설정
    if (progressRefs.current[activeIndex]) {
      progressRefs.current[activeIndex].style.width = `${(1 - progress) * 100}%`;
    } // progress가 1이면 시간이 남아있는 상태, 0이면 시간이 다 지나간 상태
			// timeLeft를 사용하지 않는데 제거하면 작동이 멈춤..
  };

	return (
    <div className="swiper_common">
			{selectedCards.length > 1 && (
				<Swiper
					loop={true}
					effect={"fade"}
					speed={1000} // 슬라이드 전환 속도
					autoplay={{
						delay: 5000, // 다음 슬라이드로 넘어가는 시간
						disableOnInteraction: false, // 상호작용해도 자동 재생이 멈추지 않음
						pauseOnMouseEnter: false, // 마우스를 올려도 멈추지 않음음
					}}
					allowTouchMove={false} // 사용자 상호작용 넘기기 비활성화
					modules={[Autoplay, EffectFade]}
					onAutoplayTimeLeft={onAutoplayTimeLeft} 
					onSwiper={(s) => (swiperRef.current = s)}
					className="mySwiper"
				>
					{selectedCards.map((card, index) => (
						<SwiperSlide key={index}>
							<Link href={`${card.type}/${card.title?.replace(/\s+/g, '-')}`} className="swiper_image_wrap">
								<div className="swiper_image" style={{ background: card.image ? `url('${card.image}') center center / cover` : "none" }}></div>
								<div className="description">
									<div className="title">{card.title}</div>
									<div className="sub_title">{card.subTitle}</div>
									<div className="autoplay_progress">
										<div className="progress_bar" ref={(el) => {progressRefs.current[index] = el}}></div>
									</div>
									<div className="current_page">
										<span>{currentIndex}</span>
										<span>/ </span>
										<span>{selectedCards.length}</span>
									</div>
								</div>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			)}
    </div>
  );
}

const SliderFade = React.memo(SliderFadeComponent);
export default SliderFade;