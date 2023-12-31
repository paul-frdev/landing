import { Button } from '../ui/Button'
import { Heading } from '../ui/Heading'

export const Sales = () => {
  return (
    <section className='sales'>
      <div className="sales-container">
        <Heading size='m' children='Register now for this weekend and save up to 10%!' />
        <Button onClick={() => { }}>Book Now</Button>
      </div>
    </section>
  )
}
