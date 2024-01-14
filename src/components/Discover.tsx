import { Button } from '../ui/Button'
import { Heading } from '../ui/Heading'



export const Discover = () => {
  return (
    <section className="discover" id='books'>
      <div className="discover-container">
        <div className='discover-book'>
          <img src="/assets/svg/img.svg" alt="book" />
        </div>
        <div className='discover-desc'>
          <Heading size='md' children='Discover the world with us' />
          <p className='text'>
            Would you explore nature paradise in the world, let’s find the best destination in world with us, Would you explore nature paradise in the world, let’s find the best destination in world with us.
          </p>
          <Button onClick={() => { }}>Download Guide Book</Button>
        </div>
      </div>
    </section>
  )
}
