import { cart } from '../data'
import { CartType } from '../types'
import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { Cart } from './Cart'

export const UpComing = () => {
  return (
    <section className='upcoming' id='offers'>
      <Container>
        <Heading size='md' children='Upcoming Offers' />
        <div className='upcoming-container'>
          {cart.map((item: CartType) => (
            <Cart cart={item} key={item.id} />
          ))}
        </div>
      </Container>
    </section>
  )
}
