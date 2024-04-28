import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules";
import Card from '../card';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

function Caroussel() {
    return (
        <Swiper  
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={10}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
            <SwiperSlide>
                <Card />
            </SwiperSlide>

            <SwiperSlide>
                <Card />
            </SwiperSlide>
        </Swiper>
    )
};

export default Caroussel;