import React from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

export default function Home() {
  return (
    <>
      <CommonHelmet
        title="TYCODESIGN"
        description="TYCODESIGN의 개인 공간이자 포트폴리오 사이트입니다."
        ogTitle="TYCODESIGN"
        ogDescription="TYCODESIGN의 개인 공간이자 포트폴리오 사이트입니다."
        keywords="TYCODESIGN"
      />
			<div className="swiper_common">
				<Swiper
					loop={true}
					centeredSlides={true}
					// autoplay={{
					//   delay: 1000,
					//   disableOnInteraction: false
					// }}
					pagination={{
						clickable: true
					}}
					modules={[Autoplay, Pagination]}
					className="mySwiper"
				>
					<SwiperSlide><div className="swiper_image" style={{ background: `url('./images/23.jpg') center center / cover`}}></div></SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
				</Swiper>
			</div>
      <div className="common_pd">Home page</div>
    </>
  );
}
