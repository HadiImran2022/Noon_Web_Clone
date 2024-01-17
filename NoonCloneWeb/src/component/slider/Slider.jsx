import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import img1 from '../../assets/images/slider1.avif'
import img2 from '../../assets/images/slider2.avif'
import img3 from '../../assets/images/slider3.avif'
import img4 from '../../assets/images/slider4.avif'
import img6 from '../../assets/images/slider6.avif'
import img7 from '../../assets/images/slider7.avif'
import img8 from '../../assets/images/slider8.avif'

const Slider = () => {
    return (
        <>
        <div className="container slider mt-5">

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
                <div className="">
                    <img src={img1} width={"100%"} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src={img2} width={"100%"} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src={img3} width={"100%"} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src={img4} width={"100%"} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src={img6} width={"100%"} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src={img7} width={"100%"} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="">
                    <img src={img8} width={"100%"} alt="" />
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
        </>
      );
}

export default Slider;
