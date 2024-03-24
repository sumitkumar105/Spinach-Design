import React, { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Button, Stack } from "@mui/material";
import "swiper/css/autoplay";
import { useSwiper } from "swiper/react";
import Frame from "../Assets/Frame 965.png";
import Banner from "../Assets/Banner.jpg";
import Phase3 from "../Assets/Phase 3.jpg";
import Phase4 from "../Assets/Phase 4.jpg";
import Phase5 from "../Assets/Phase 5.jpg";
import "../App.css";
import Prev from "../Assets/Prev.svg";
import Next from "../Assets/Next.svg";
const ExpericenceSlider = () => {
  let swiperInstance;

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
      console.log(swiperInstance);
    }
  };

  return (
    <Swiper
      slidesPerView={1.5}
      loop={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      onSwiper={(swiper) => (swiperInstance = swiper)}
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      <SwiperSlide className="slide-wrapper">
        <img
          height="350px"
          width="100%"
          src={Banner}
          alt="slide1"
          className="slide-image"
        />
      </SwiperSlide>
      <SwiperSlide className="slide-wrapper">
        <img
          height="350px"
          width="100%"
          src={Frame}
          alt="slide2"
          className="slide-image"
        />
      </SwiperSlide>
      <SwiperSlide className="slide-wrapper">
        <img
          height="350px"
          width="100%"
          src={Phase3}
          alt="slide3"
          className="slide-image"
        />
      </SwiperSlide>
      <SwiperSlide className="slide-wrapper">
        <img
          height="350px"
          width="100%"
          src={Phase4}
          alt="slide3"
          className="slide-image"
        />
      </SwiperSlide>
      <SwiperSlide className="slide-wrapper">
        <img
          height="350px"
          width="100%"
          src={Phase5}
          alt="slide3"
          className="slide-image"
        />
      </SwiperSlide>
      <Stack
        direction="row"
        justifyContent="flex-end"
        spacing={4}
        sx={{ mt: 2 }}
      >
        {/* <Button variant="contained" onClick={handlePrev}>
          Prev
        </Button> */}

        <img src={Prev} alt="nextArrow" onClick={handlePrev} />
        <img src={Next} alt="PrevArrow" onClick={handleNext} />

        {/* <ArrowBackIcon sx={{ fontSize: 40 }} onClick={handlePrev} />
        <ArrowForwardIcon sx={{ fontSize: 40 }} onClick={handleNext} /> */}
        {/* <Button variant="contained" >
          Next
        </Button> */}
      </Stack>
    </Swiper>
  );
};

export default ExpericenceSlider;
