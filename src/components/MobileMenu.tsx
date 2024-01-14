import { useEffect, useRef } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import { AnimatePresence, motion } from "framer-motion";
import { menuList } from '../data';
import { Link as ScrollLink } from 'react-scroll';
import { useClickAway } from "react-use";
import { useMyContext } from '../context';

export const MobileMenu = () => {

  const { toggleOpen, isOpen } = useMyContext()

  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => toggleOpen());

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  const closeMenu = () => {
    toggleOpen();
  }

  return (
    <div className='menu'>
      <Hamburger toggled={isOpen} toggle={toggleOpen} size={40} color={'#fff'} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='menu-block'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, backgroundColor: 'rgba(255,255,255, 0.2)' }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            transition={{ duration: 0.3 }}
          >
            <ul className='menu-list'>
              {menuList.map((item, idx) => (
                <motion.li
                  className='menu-link'
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, color: '#292d32', transition: { type: 'spring', stiffness: 260, damping: 20, delay: 0.1 + idx / 10, } }}
                  exit={{ scale: 0, opacity: 0, transition: { type: 'keyframes', stiffness: 260, damping: 20 } }}
                  key={item.id}
                >
                  <ScrollLink
                    className='link'
                    activeClass='active'
                    to={item.src}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1500}
                    onClick={closeMenu}
                  >
                    {item.text}
                  </ScrollLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
