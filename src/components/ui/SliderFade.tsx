import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { CardProps } from "../../types/props";
import designStudyData from "../../data/designStudyData.json";
import publishingStudyData from "../../data/publishingStudyData.json";
import etcStudyData from "../../data/etcStudyData.json";
import { Link } from "react-router-dom";

export function SliderFadeComponent() {

  const [combinedData, setCombinedData] = useState<CardProps[]>([]);
  const [selectedCards, setSelectedCards] = useState<CardProps[]>([]);

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

	return (
    <div className="swiper_common">
      <Swiper
        loop={true}
        effect={"fade"}
				speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        allowTouchMove={false}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
				{selectedCards.map((card, index) => (
					<SwiperSlide key={index}>
						<Link to={`${card.type}/${card.title?.replace(/\s+/g, '-')}`} className="swiper_image_wrap">
							<div className="swiper_image" style={{ background: card.image ? `url('${card.image}') center center / cover` : "none" }}></div>
							<div className="description">
								<div className="title">{card.title}</div>
								<div className="sub_title">{card.subTitle}</div>
							</div>
						</Link>
					</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const SliderFade = React.memo(SliderFadeComponent);
export default SliderFade;