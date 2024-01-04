import React, { useEffect } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Typewriter from 'typewriter-effect';
import { TypingTextProps } from "../../types/props";
import { SlidesData } from "../../data/slideData";


export default function SliderFade({ typingText, typingText2 }: TypingTextProps) {

	//이미지 미리 로드하는 함수 START!
	useEffect(() => {
		preLoadImages(SlidesData);
	}, []);

	const preLoadImages = (imageArray: string[]) => {
		imageArray.forEach((image) => {
			const img = new Image();
			img.src = image;
		});
	};
	//이미지 미리 로드하는 함수 END!

	//슬라이더 이미지 랜덤으로 3개만 선택한 상수 START!
	const selectedIndices: number[] = [];
	while (selectedIndices.length < 3) {
		const randomIndex = Math.floor(Math.random() * SlidesData.length);
		if (!selectedIndices.includes(randomIndex)) {
			selectedIndices.push(randomIndex);
		}
	}
	//슬라이더 이미지 랜덤으로 3개만 선택한 상수 END!

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
								.changeDelay(50)
                .typeString(typingText)
								.callFunction(() => {
									const cursorElement = document.querySelector('.Typewriter__cursor') as HTMLElement;;
									if (cursorElement) cursorElement.style.fontSize = '2.0rem';
								})
								.typeString(typingText2)
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
