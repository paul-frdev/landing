import { Container } from '../ui/Container'
import { Heading } from '../ui/Heading'
import { Link } from '../ui/Link'
import { ContactForm } from './ContactForm'


const menu = [
  {
    id: 1,
    text: 'About Us'
  },
  {
    id: 2,
    text: 'Careers'
  },
  {
    id: 3,
    text: 'Collaboration'
  },
  {
    id: 4,
    text: 'Destinations'
  },
  {
    id: 5,
    text: 'policies'
  },
]

export const Footer = () => {
  return (
    <footer className='footer' id='contact'>
      <Container>
        <div className="footer-container">
          <div className='block-one'>
            <Heading children='Stay Connected' />
            <p className="text">Address: Istanbul, Turkey</p>
            <Link href='tel:(+90) 985 98 75'>Phone: (+90) 985 98 75</Link>
            <div>
              <Heading children='Follow us on social media' />
              <div>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.69 2.86816H8.31C4.67 2.86816 2.5 5.03816 2.5 8.67816V17.0482C2.5 20.6982 4.67 22.8682 8.31 22.8682H16.68C20.32 22.8682 22.49 20.6982 22.49 17.0582V8.67816C22.5 5.03816 20.33 2.86816 16.69 2.86816ZM12 18.1182C12 18.4782 11.64 18.7182 11.31 18.5782C10.1 18.0582 8.52 17.5782 7.42 17.4382L7.23 17.4182C6.62 17.3382 6.12 16.7682 6.12 16.1482V8.44816C6.12 7.67816 6.74 7.10816 7.5 7.16816C8.75 7.26816 10.6 7.86816 11.76 8.52816C11.92 8.61816 12 8.78816 12 8.95816V18.1182ZM18.88 16.1382C18.88 16.7582 18.38 17.3282 17.77 17.4082L17.56 17.4282C16.47 17.5782 14.9 18.0482 13.69 18.5582C13.36 18.6982 13 18.4582 13 18.0982V8.94816C13 8.76816 13.09 8.59816 13.25 8.50816C14.41 7.85816 16.22 7.27816 17.45 7.16816H17.49C18.26 7.16816 18.88 7.78816 18.88 8.55816V16.1382Z" fill="#292D32" />
                </svg>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.69 2.86816H8.31C4.67 2.86816 2.5 5.03816 2.5 8.67816V17.0482C2.5 20.6982 4.67 22.8682 8.31 22.8682H16.68C20.32 22.8682 22.49 20.6982 22.49 17.0582V8.67816C22.5 5.03816 20.33 2.86816 16.69 2.86816ZM12 18.1182C12 18.4782 11.64 18.7182 11.31 18.5782C10.1 18.0582 8.52 17.5782 7.42 17.4382L7.23 17.4182C6.62 17.3382 6.12 16.7682 6.12 16.1482V8.44816C6.12 7.67816 6.74 7.10816 7.5 7.16816C8.75 7.26816 10.6 7.86816 11.76 8.52816C11.92 8.61816 12 8.78816 12 8.95816V18.1182ZM18.88 16.1382C18.88 16.7582 18.38 17.3282 17.77 17.4082L17.56 17.4282C16.47 17.5782 14.9 18.0482 13.69 18.5582C13.36 18.6982 13 18.4582 13 18.0982V8.94816C13 8.76816 13.09 8.59816 13.25 8.50816C14.41 7.85816 16.22 7.27816 17.45 7.16816H17.49C18.26 7.16816 18.88 7.78816 18.88 8.55816V16.1382Z" fill="#292D32" />
                </svg>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.69 2.86816H8.31C4.67 2.86816 2.5 5.03816 2.5 8.67816V17.0482C2.5 20.6982 4.67 22.8682 8.31 22.8682H16.68C20.32 22.8682 22.49 20.6982 22.49 17.0582V8.67816C22.5 5.03816 20.33 2.86816 16.69 2.86816ZM12 18.1182C12 18.4782 11.64 18.7182 11.31 18.5782C10.1 18.0582 8.52 17.5782 7.42 17.4382L7.23 17.4182C6.62 17.3382 6.12 16.7682 6.12 16.1482V8.44816C6.12 7.67816 6.74 7.10816 7.5 7.16816C8.75 7.26816 10.6 7.86816 11.76 8.52816C11.92 8.61816 12 8.78816 12 8.95816V18.1182ZM18.88 16.1382C18.88 16.7582 18.38 17.3282 17.77 17.4082L17.56 17.4282C16.47 17.5782 14.9 18.0482 13.69 18.5582C13.36 18.6982 13 18.4582 13 18.0982V8.94816C13 8.76816 13.09 8.59816 13.25 8.50816C14.41 7.85816 16.22 7.27816 17.45 7.16816H17.49C18.26 7.16816 18.88 7.78816 18.88 8.55816V16.1382Z" fill="#292D32" />
                </svg>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.69 2.86816H8.31C4.67 2.86816 2.5 5.03816 2.5 8.67816V17.0482C2.5 20.6982 4.67 22.8682 8.31 22.8682H16.68C20.32 22.8682 22.49 20.6982 22.49 17.0582V8.67816C22.5 5.03816 20.33 2.86816 16.69 2.86816ZM12 18.1182C12 18.4782 11.64 18.7182 11.31 18.5782C10.1 18.0582 8.52 17.5782 7.42 17.4382L7.23 17.4182C6.62 17.3382 6.12 16.7682 6.12 16.1482V8.44816C6.12 7.67816 6.74 7.10816 7.5 7.16816C8.75 7.26816 10.6 7.86816 11.76 8.52816C11.92 8.61816 12 8.78816 12 8.95816V18.1182ZM18.88 16.1382C18.88 16.7582 18.38 17.3282 17.77 17.4082L17.56 17.4282C16.47 17.5782 14.9 18.0482 13.69 18.5582C13.36 18.6982 13 18.4582 13 18.0982V8.94816C13 8.76816 13.09 8.59816 13.25 8.50816C14.41 7.85816 16.22 7.27816 17.45 7.16816H17.49C18.26 7.16816 18.88 7.78816 18.88 8.55816V16.1382Z" fill="#292D32" />
                </svg>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.69 2.86816H8.31C4.67 2.86816 2.5 5.03816 2.5 8.67816V17.0482C2.5 20.6982 4.67 22.8682 8.31 22.8682H16.68C20.32 22.8682 22.49 20.6982 22.49 17.0582V8.67816C22.5 5.03816 20.33 2.86816 16.69 2.86816ZM12 18.1182C12 18.4782 11.64 18.7182 11.31 18.5782C10.1 18.0582 8.52 17.5782 7.42 17.4382L7.23 17.4182C6.62 17.3382 6.12 16.7682 6.12 16.1482V8.44816C6.12 7.67816 6.74 7.10816 7.5 7.16816C8.75 7.26816 10.6 7.86816 11.76 8.52816C11.92 8.61816 12 8.78816 12 8.95816V18.1182ZM18.88 16.1382C18.88 16.7582 18.38 17.3282 17.77 17.4082L17.56 17.4282C16.47 17.5782 14.9 18.0482 13.69 18.5582C13.36 18.6982 13 18.4582 13 18.0982V8.94816C13 8.76816 13.09 8.59816 13.25 8.50816C14.41 7.85816 16.22 7.27816 17.45 7.16816H17.49C18.26 7.16816 18.88 7.78816 18.88 8.55816V16.1382Z" fill="#292D32" />
                </svg>
              </div>
            </div>
          </div>
          <div className='block-two'>
            <Heading children='Travello' />
            <ul>
              {menu.map((item) => (
                <li key={item.id} className='text'>
                  <Link href='/'>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='block-three'>
            <Heading children='Instagram' />
            <div className="block-three__grid">
              <img src="/src/assets/1.jpg" alt="image" />
              <img src="/src/assets/1.jpg" alt="image" />
              <img src="/src/assets/1.jpg" alt="image" />
              <img src="/src/assets/1.jpg" alt="image" />
              <img src="/src/assets/1.jpg" alt="image" />
              <img src="/src/assets/1.jpg" alt="image" />
            </div>
          </div>
          <div className='block-four'>
            <Heading children='Newsletter' />
            <p className="text">get updated news and offers!</p>
            <ContactForm />
          </div>
        </div>
      </Container>
      <div className='footer-bottom'>
        <p className='text'>All Rights Reserved for Pigment Store.</p>
      </div>
    </footer>
  )
}
