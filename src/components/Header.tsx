
import { useEffect, useState } from 'react';
import { Heading } from '../ui/Heading'
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import { Container } from '../ui/Container';
import { menuList } from '../data';
import { useMediaQuery } from 'react-responsive'
import { MobileMenu } from './MobileMenu';


export const Header = () => {

  const [show, setShow] = useState(false)
  const isTablet = useMediaQuery({
    query: '(max-width: 912px)'
  })


  useEffect(() => {
    if (isTablet) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [isTablet])

  useEffect(() => {

    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <header className='header'>
      <Container>
        <span className='header-image' />
        <div className='header-container'>
          <a href="/">
            <Heading size='md' className='logo' >Travello</Heading>
          </a>

          {!show ? (<ul className='header-list'>
            {menuList.map((item: { id: number, text: string, src: string }) => (
              <li key={item.id}>
                <ScrollLink
                  className='header-link'
                  activeClass='active'
                  to={item.src}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1500}
                >
                  {item.text}
                </ScrollLink>
              </li>
            ))}
          </ul>) : (
            <MobileMenu />
          )}
        </div>
      </Container>
    </header>
  )
}
