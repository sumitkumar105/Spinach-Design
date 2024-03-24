import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/autoplay";
import Frame from "../Assets/Frame 965.png";
import Banner from "../Assets/Banner.jpg";
import Phase3 from "../Assets/Phase 3.jpg";
import Phase4 from "../Assets/Phase 4.jpg";
import Phase5 from "../Assets/Phase 5.jpg";
const ExpericenceSlider = () => {
  return (
    <Swiper
      // slidesPerView={1}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }}
    >
      <SwiperSlide sx={{ margin: "10px" }}>
        <img height="400px" width="100%" src={Banner} alt="slide1" />
      </SwiperSlide>
      <SwiperSlide>
        <img height="400px" width="100%" src={Frame} alt="slide2" />
      </SwiperSlide>
      <SwiperSlide>
        <img height="400px" width="100%" src={Phase3} alt="slide3" />
      </SwiperSlide>
      <SwiperSlide>
        <img height="400px" width="100%" src={Phase4} alt="slide3" />
      </SwiperSlide>
      <SwiperSlide>
        <img height="400px" width="100%" src={Phase5} alt="slide3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ExpericenceSlider;
