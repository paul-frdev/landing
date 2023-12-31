import { motion } from 'framer-motion'
import { useMyContext } from '../context'

export const SlideTitle = () => {
  const { isOpen } = useMyContext()
  return (
    <motion.div
      className='slide'
    >
      {!isOpen ?
        <motion.p
          className='slide-title'
        >Explore, Dream, Travel</motion.p>
        :
        null}
    </motion.div>
  )
}
