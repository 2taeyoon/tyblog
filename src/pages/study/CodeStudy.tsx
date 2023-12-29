import React from "react";
import CommonHelmet from "../../components/utill/CommonHelmet";
import CardList from "../../data/codeStudyData.json";
import Card from "../../components/list/Card";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function CodeStudy() {
  return (
    <>
      <CommonHelmet
        title="코드 스터디"
        description="TYCODESIGN의 코드 스터디 페이지입니다."
        ogTitle="코드 스터디"
        ogDescription="TYCODESIGN의 코드 스터디 페이지입니다."
        keywords="TYCODESIGN, 코드 스터디"
      />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
      <div className="common_pd">
        <Card cards={CardList.cards} />
      </div>
    </>
  );
}
