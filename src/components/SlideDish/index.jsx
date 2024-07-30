import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Container } from './styles';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export function SlideDish({children}) {

  return (
    <Container>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        breakpoints={
          {
           
            768: {
              slidesPerView: 2,
              spaceBetween: 45
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1224: {
              slidesPerView: 4,
            }
          }
        }
      >
      {children}
      </Swiper>
    </Container>
  );
}
