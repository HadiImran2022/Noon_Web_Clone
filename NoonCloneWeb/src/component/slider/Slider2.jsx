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

import img1 from '../../assets/images/0a9eb102-1449-4612-85e1-b94c4920b01f.avif'
import img2 from '../../assets/images/715f6692-240e-4018-ac61-0537d627240b.png'
import img3 from '../../assets/images/2600313f-1710-4c01-a1d3-cdc98ff69589.jpeg'
import img4 from '../../assets/images/cf7d9bd1-315d-4182-840c-5d3d00226e55.gif'

const Slider2 = () => {
    return (
        <>
        <div className="container slider my-5">

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
          </Swiper>
        </div>
        </>
      );
}

export default Slider2;
