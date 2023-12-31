import { useRef } from 'react';
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
  
  return (
    <div ref={ref} className='menu'>
      <Hamburger toggled={isOpen} toggle={toggleOpen} size={40} color='#fff' />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='menu-block'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className='menu-list'>
              {menuList.map((item, idx) => (
                <motion.li
                  className='menu-link'
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + idx / 10,
                  }}
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
