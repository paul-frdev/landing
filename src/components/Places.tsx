import { slidesPlaces } from '../data';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading'
import { Swipper } from './Swipper';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const swiperOptions = {
  breakpoints: {
    785: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesOffsetBefore: 0,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesOffsetBefore: 50,
    },
  },
  spaceBetween: 32,
  grabCursor: true,
  loop: true,
  pagination: false,
  slidesPerView: 3,
  navigation: {
    clickable: true,
    prevEl: ".custom-prev-arrow",
    nextEl: ".custom-next-arrow",
  },
  slidesOffsetBefore: 20,
};

interface CustomArrowPrev {
  onClick: () => void;
  icon?: React.ReactNode;
}

interface CustomArrowNext {
  onClick: () => void;
  icon?: React.ReactNode;
}


type SwiperItemProps = {
  src: string;
  title: string;
};

const SwiperItem: React.FC<SwiperItemProps> = ({ src, title }) => {
  return (
    <div className='swiper-item'>
      <img src={src} alt="image" />
      <p className='text'>{title}</p>
    </div>
  );
};

const CustomPrevArrow: React.FC<CustomArrowPrev> = ({ onClick, icon }) => (
  <Button onClick={onClick} className="custom-prev-arrow">
    {icon}
  </Button>
);

const CustomNextArrow: React.FC<CustomArrowNext> = ({ onClick, icon }) => (
  <Button onClick={onClick} className="custom-next-arrow">
    {icon}
  </Button>
);

export const Places = () => {

  const swiperItems = slidesPlaces.map((slide) => (
    <SwiperItem key={slide.id} src={slide.src} title={slide.title} />
  ));

  return (
    <section className='places' id='places'>
      <Container>
        <div className="places-container">
          <div className='places-desc'>
            <Heading size='md' children="Destinations You Shouldn't miss" />
            <p className="text">Choose Your Destination and Contact Our Experts for the Best Deals!</p>
            <CustomPrevArrow icon={<IoIosArrowBack />} onClick={() => { }} />
            <CustomNextArrow icon={<IoIosArrowForward />} onClick={() => { }} />
          </div>
          <Swipper items={swiperItems} options={swiperOptions} />
        </div>
      </Container>
    </section>
  )
}
