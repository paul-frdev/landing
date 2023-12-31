import { cn } from '../lib/utils'
import { CartType } from '../types'
import { Button } from '../ui/Button'
import { Heading } from '../ui/Heading'


type CartProps = {
  cart: CartType
}
export const Cart: React.FC<CartProps> = ({ cart }) => {
  return (
    <div className='cart'>
      <div className="cart-container">
        <Heading size='sm' children={cart.title} />
        <img src={cart.src} alt="image" />
        <div className="cart-block">
          <div className='cart-desc'>
            <p className={cn(`label`, cart.type === 'Chill' ? 'bg-green' : 'bg-pink')}>{cart.type}</p>
            <p className='room'>{cart.room}</p>
            <p className='date'>{cart.date}</p>
          </div>
          <div className="cart-actions">
            <p className="price">{cart.price}</p>
            <Button onClick={() => { }}>Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
