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
                .typeString(typingText)
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
