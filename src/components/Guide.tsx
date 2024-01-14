import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { Link } from '../ui/Link'

export const Guide = () => {
  return (
    <section className='guide' id='blog'>
      <Container>
        <div className="guide-container">
          <Heading size='md' children='Read Before You Travel' />
          <div className="block-one">
            <img src="/assets/guide1.jpg" alt="image" />
            <div className='inner'>
              <p className='title' >NUSA PENIDA ISLAND GUIDE</p>
              <p className='text'>
                The beautiful, exotic Nusa Penida island lies just 25 kilometers from Bali, the most famous tourist destination in Indonesia.
              </p>
              <Link icon={
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.69 2.5H8.31C4.67 2.5 2.5 4.67 2.5 8.31V16.68C2.5 20.33 4.67 22.5 8.31 22.5H16.68C20.32 22.5 22.49 20.33 22.49 16.69V8.31C22.5 4.67 20.33 2.5 16.69 2.5ZM19.03 13.03L14.74 17.32C14.59 17.47 14.4 17.54 14.21 17.54C14.02 17.54 13.83 17.47 13.68 17.32C13.39 17.03 13.39 16.55 13.68 16.26L16.69 13.25H6.5C6.09 13.25 5.75 12.91 5.75 12.5C5.75 12.09 6.09 11.75 6.5 11.75H16.69L13.68 8.74C13.39 8.45 13.39 7.97 13.68 7.68C13.97 7.39 14.45 7.39 14.74 7.68L19.03 11.97C19.17 12.11 19.25 12.3 19.25 12.5C19.25 12.7 19.17 12.89 19.03 13.03Z" fill="#292D32" />
                </svg>
              }
              > read more</Link>
            </div>
          </div>
          <div className="block-two">
            <div className='inner'>
              <p className='title' >17 BEST WATERFALLS IN INDONESIA</p>
              <p className='text'>
                Putting together an Indonesia waterfall guide is tough, because there are so many great waterfalls in this country.
              </p>
              <Link icon={
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.69 2.5H8.31C4.67 2.5 2.5 4.67 2.5 8.31V16.68C2.5 20.33 4.67 22.5 8.31 22.5H16.68C20.32 22.5 22.49 20.33 22.49 16.69V8.31C22.5 4.67 20.33 2.5 16.69 2.5ZM19.03 13.03L14.74 17.32C14.59 17.47 14.4 17.54 14.21 17.54C14.02 17.54 13.83 17.47 13.68 17.32C13.39 17.03 13.39 16.55 13.68 16.26L16.69 13.25H6.5C6.09 13.25 5.75 12.91 5.75 12.5C5.75 12.09 6.09 11.75 6.5 11.75H16.69L13.68 8.74C13.39 8.45 13.39 7.97 13.68 7.68C13.97 7.39 14.45 7.39 14.74 7.68L19.03 11.97C19.17 12.11 19.25 12.3 19.25 12.5C19.25 12.7 19.17 12.89 19.03 13.03Z" fill="#292D32" />
                </svg>
              }
              > read more</Link>
            </div>
            <img src="/assets/guide2.jpg" alt="image" />
          </div>
        </div>
      </Container>
    </section>
  )
}
