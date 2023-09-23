'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styless
import 'swiper/scss';
import 'swiper/scss/navigation';

import { Navigation, Autoplay } from 'swiper/modules';
import { SwiperProizvod } from '../';
import { Product } from '../../@types';

const MultipleSwipers = ({
  products,
}: {
  products: Omit<Product, 'kolicina'>[];
}) => {
  return (
    <Swiper
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      slidesPerView={1}
      breakpoints={{
        // when window width is >= 1536px
        1536: {
          width: 1536,
          slidesPerView: 5,
          spaceBetween: 30,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // when window width is >= 320px
        320: {
          // width: 400,
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }}
      modules={[Navigation, Autoplay]}
      // className="flex items-center  justify-center"
    >
      {products.map((p, idx) => (
        <SwiperSlide
          className="m-auto"
          key={idx}
          // className="select-none pb-12 flex items-center justify-center "
        >
          <SwiperProizvod proizvod={p} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MultipleSwipers;
