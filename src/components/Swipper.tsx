import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';



type SwipperProps = {
  items: React.ReactElement[];
  options: SwiperOptions;
  slidesPerView?: number | 'auto'
}
export const Swipper: React.FC<SwipperProps> = ({ options, items, slidesPerView = 3 }) => {

  return (
    <Swiper  modules={[Navigation, Pagination]} slidesPerView={slidesPerView} {...options}>
      {items.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
    </Swiper>
  )
}
