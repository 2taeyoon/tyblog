import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { homeSlides } from "../../data/slideData";

import Typewriter from 'typewriter-effect';

export default function SliderFade() {
	return (
    <div className="swiper_common">
      <Swiper
        loop={true}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        allowTouchMove={false}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {homeSlides.map((slideImage, index) => (
          <SwiperSlide key={index}>
            <div
              className="swiper_image"
              style={{
                background: `url('${slideImage}') center center / cover`
              }}
            ></div>
          </SwiperSlide>
        ))}
        <div className="title">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
								.changeDelay(70)
                .typeString("안녕하세요.<br/>1년차 웹디자이너<br/>이태윤입니다.")
								.callFunction(() => {
									const cursorElement = document.querySelector('.Typewriter__cursor') as HTMLElement;
									if (cursorElement) cursorElement.style.display = 'none';
								})
								.start()
            }}
          />
        </div>
      </Swiper>
    </div>
  );
}
