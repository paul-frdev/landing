import React, { useEffect, useRef, useState } from 'react'
import { Destination } from './components/Destination'
import { Discover } from './components/Discover'
import { Footer } from './components/Footer'
import { Guide } from './components/Guide'
import { Header } from './components/Header'
import { Places } from './components/Places'
import { Reviews } from './components/Reviews'
import { Sales } from './components/Sales'
import { SlideTitle } from './components/SlideTitle'
import { UpComing } from './components/UpComing'
import { Button, ButtonProps } from './ui/Button'
import { IoIosArrowUp } from "react-icons/io";
import { animateScroll as scroll } from 'react-scroll';
import { MyContextProvider } from './context'


type ButtonUpProps = Omit<ButtonProps, 'ref'> & {
  onClick: () => void;
  className?: string;
};

const ButtonUp = React.forwardRef<HTMLButtonElement, ButtonUpProps>(
  ({ onClick, className, ...rest }, ref) => {
    return (
      <Button
        icon={<IoIosArrowUp />}
        onClick={onClick}
        className={className}
        ref={ref}
        {...rest}
      />
    );
  }
);


function App() {

  const [showButton, setShowButton] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null)


  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight;
      const shouldShow = window.scrollY > threshold;

      setShowButton(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <MyContextProvider>
        <Header />
        <SlideTitle />
        <Destination />
        <main>
          <UpComing />
          <Discover />
          <Places />
          <Guide />
          <Reviews />
          <Sales />
        </main>
        <Footer />
      </MyContextProvider>
      {showButton && (
        <ButtonUp onClick={scrollToTop} className='button-up' ref={buttonRef} />
      )}
    </>
  )
}

export default App
