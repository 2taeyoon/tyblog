import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Typewriter from 'typewriter-effect';
import { TypingTextProps } from "../../types/props";
import { SlidesData } from "../../data/slideData";


export default function SliderFade({ typingText }: TypingTextProps) {
	const selectedIndices: number[] = [];
	while (selectedIndices.length < 3) {
		const randomIndex = Math.floor(Math.random() * SlidesData.length);
		if (!selectedIndices.includes(randomIndex)) {
			selectedIndices.push(randomIndex);
		}
	}

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
        {selectedIndices.map((slideImage: number, index: number) => (
          <SwiperSlide key={index}>
            <div
              className="swiper_image"
              style={{ background: `url('${SlidesData[slideImage]}') center center / cover` }}
            ></div>
          </SwiperSlide>
        ))}
        <div className="title">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
								.changeDelay(70)
                .typeString("안녕하세요.<br/>1년차 웹 디자이너<br/>이태윤입니다.")
								.callFunction(() => {
									const cursorElement = document.querySelector('.Typewriter__cursor') as HTMLElement;;
									if (cursorElement) cursorElement.style.fontSize = '2.0rem';
								})
								.typeString("<br/><p class='point_color'>나만의 공간을 만들고 싶어, 부족한 실력으로 제작한 웹사이트입니다.</p>")
								.callFunction(() => {
									setTimeout(() => {
										const cursorElement = document.querySelector('.Typewriter__cursor') as HTMLElement;;
										if (cursorElement) cursorElement.style.display = 'none';
									}, 3000);
								})
								.start()
            }}
          />
        </div>
      </Swiper>
    </div>
  );
}
