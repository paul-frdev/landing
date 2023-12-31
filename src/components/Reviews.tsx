import React from 'react';
import { Heading } from '../ui/Heading';
import { ReviewerType } from '../types';
import { reviews } from '../data';
import { Swipper } from './Swipper';
import { Container } from '../ui/Container';



const swiperOptions = {
  spaceBetween: 0,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  pagination: true,
  navigation: false,
  slidesPerView: 1.7,
};


const SwiperItem: React.FC<ReviewerType> = ({ src, title, text }) => {
  return (
    <div className='swiper-item'>
      <div className='inner'>
        <img src={src} alt="image" />
        <div className='block'>
          <p className='title'>{title}</p>
          <p className="text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export const Reviews = () => {

  const swiperItems = reviews.map((reviewer) => (
    <SwiperItem key={reviewer.id} src={reviewer.src} title={reviewer.title} text={reviewer.text} />
  ));

  return (
    <section className='reviews' id='reviews'>
      <Container>
        <Heading size='md' children='What customers say about us' />
        <div className="reviews-container">
          <div className='swiper-container '>
            <Swipper items={swiperItems} options={swiperOptions} />
          </div>
        </div>
      </Container>
    </section>
  )
}
