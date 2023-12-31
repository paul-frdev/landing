import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Heading } from '../ui/Heading';
import { BlockTabs } from './BlockTabs';
import { Container } from '../ui/Container';


export const Destination = () => {
  return (
    <div className='destination' id='destinations'>
      <Container>
        <Tabs>
          <TabList className='destination-title-list'>
            <Tab>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3994 10.6301L15.7294 8.62006L14.6894 8.18006C14.5294 8.10006 14.3894 7.89006 14.3894 7.71006V4.65006C14.3894 3.69006 13.6794 2.55006 12.8194 2.11006C12.5194 1.96006 12.1594 1.96006 11.8594 2.11006C11.0094 2.55006 10.2994 3.70006 10.2994 4.66006V7.72006C10.2994 7.90006 10.1594 8.11006 9.99936 8.19006L4.29936 10.6401C3.66936 10.9001 3.15936 11.6901 3.15936 12.3701V13.6901C3.15936 14.5401 3.79936 14.9601 4.58936 14.6201L9.59936 12.4601C9.98936 12.2901 10.3094 12.5001 10.3094 12.9301V14.0401V15.8401C10.3094 16.0701 10.1794 16.4001 10.0194 16.5601L7.69936 18.8901C7.45936 19.1301 7.34936 19.6001 7.45936 19.9401L7.90936 21.3001C8.08936 21.8901 8.75936 22.1701 9.30936 21.8901L11.6894 19.8901C12.0494 19.5801 12.6394 19.5801 12.9994 19.8901L15.3794 21.8901C15.9294 22.1601 16.5994 21.8901 16.7994 21.3001L17.2494 19.9401C17.3594 19.6101 17.2494 19.1301 17.0094 18.8901L14.6894 16.5601C14.5194 16.4001 14.3894 16.0701 14.3894 15.8401V12.9301C14.3894 12.5001 14.6994 12.3001 15.0994 12.4601L20.1094 14.6201C20.8994 14.9601 21.5394 14.5401 21.5394 13.6901V12.3701C21.5394 11.6901 21.0294 10.9001 20.3994 10.6301Z" fill="white" />
              </svg>
              Flight
            </Tab>
            <Tab>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6693 3H5.43934C3.44934 3 2.44934 4.01 2.44934 6.02V22H7.84934V18.25C7.84934 17.84 8.18934 17.5 8.59934 17.5C9.00934 17.5 9.34934 17.83 9.34934 18.25V22H14.6493V6.02C14.6493 4.01 13.6593 3 11.6693 3ZM11.0993 12.75H6.14934C5.73934 12.75 5.39934 12.41 5.39934 12C5.39934 11.59 5.73934 11.25 6.14934 11.25H11.0993C11.5093 11.25 11.8493 11.59 11.8493 12C11.8493 12.41 11.5093 12.75 11.0993 12.75ZM11.0993 9H6.14934C5.73934 9 5.39934 8.66 5.39934 8.25C5.39934 7.84 5.73934 7.5 6.14934 7.5H11.0993C11.5093 7.5 11.8493 7.84 11.8493 8.25C11.8493 8.66 11.5093 9 11.0993 9Z" fill="#292D32" />
                <path d="M23.3494 21.25H21.0794V18.25C22.0294 17.94 22.7194 17.05 22.7194 16V14C22.7194 12.69 21.6494 11.62 20.3394 11.62C19.0294 11.62 17.9594 12.69 17.9594 14V16C17.9594 17.04 18.6394 17.92 19.5694 18.24V21.25H1.34937C0.939365 21.25 0.599365 21.59 0.599365 22C0.599365 22.41 0.939365 22.75 1.34937 22.75H20.2794C20.2994 22.75 20.3094 22.76 20.3294 22.76C20.3494 22.76 20.3594 22.75 20.3794 22.75H23.3494C23.7594 22.75 24.0994 22.41 24.0994 22C24.0994 21.59 23.7594 21.25 23.3494 21.25Z" fill="#292D32" />
              </svg>

              Hotel
            </Tab>
          </TabList>

          <div className='destination-content'>
            <TabPanel>
              <div className='list'>
                <div className='list-one'>
                  <div className='block'>
                    <p className='text'>Living From</p>
                    <Heading size='sm' className=''>Dubai</Heading>
                  </div>
                  <span>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.3994 10.6301L15.7294 8.62006L14.6894 8.18006C14.5294 8.10006 14.3894 7.89006 14.3894 7.71006V4.65006C14.3894 3.69006 13.6794 2.55006 12.8194 2.11006C12.5194 1.96006 12.1594 1.96006 11.8594 2.11006C11.0094 2.55006 10.2994 3.70006 10.2994 4.66006V7.72006C10.2994 7.90006 10.1594 8.11006 9.99936 8.19006L4.29936 10.6401C3.66936 10.9001 3.15936 11.6901 3.15936 12.3701V13.6901C3.15936 14.5401 3.79936 14.9601 4.58936 14.6201L9.59936 12.4601C9.98936 12.2901 10.3094 12.5001 10.3094 12.9301V14.0401V15.8401C10.3094 16.0701 10.1794 16.4001 10.0194 16.5601L7.69936 18.8901C7.45936 19.1301 7.34936 19.6001 7.45936 19.9401L7.90936 21.3001C8.08936 21.8901 8.75936 22.1701 9.30936 21.8901L11.6894 19.8901C12.0494 19.5801 12.6394 19.5801 12.9994 19.8901L15.3794 21.8901C15.9294 22.1601 16.5994 21.8901 16.7994 21.3001L17.2494 19.9401C17.3594 19.6101 17.2494 19.1301 17.0094 18.8901L14.6894 16.5601C14.5194 16.4001 14.3894 16.0701 14.3894 15.8401V12.9301C14.3894 12.5001 14.6994 12.3001 15.0994 12.4601L20.1094 14.6201C20.8994 14.9601 21.5394 14.5401 21.5394 13.6901V12.3701C21.5394 11.6901 21.0294 10.9001 20.3994 10.6301Z" fill="white" />
                    </svg>
                  </span>
                  <div className='block'>
                    <p className='text'>Going to</p>
                    <Heading size='sm' className=''>Istanbul</Heading>
                  </div>
                </div>
                <BlockTabs
                  pText1='Leave'
                  heading1='23 Jan, Sat'
                  pText2='Return'
                  heading2='14 Jan, Thu'
                  className='two'
                  icon={
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.1472 3.56V2C17.1472 1.59 16.8072 1.25 16.3972 1.25C15.9872 1.25 15.6472 1.59 15.6472 2V3.5H9.14717V2C9.14717 1.59 8.80717 1.25 8.39717 1.25C7.98717 1.25 7.64717 1.59 7.64717 2V3.56C4.94717 3.81 3.63717 5.42 3.43717 7.81C3.41717 8.1 3.65717 8.34 3.93717 8.34H20.8572C21.1472 8.34 21.3872 8.09 21.3572 7.81C21.1572 5.42 19.8472 3.81 17.1472 3.56Z" fill="#7F7F7F" />
                      <path d="M20.3972 9.83997H4.39717C3.84717 9.83997 3.39717 10.29 3.39717 10.84V17C3.39717 20 4.89717 22 8.39717 22H16.3972C19.8972 22 21.3972 20 21.3972 17V10.84C21.3972 10.29 20.9472 9.83997 20.3972 9.83997ZM9.60717 18.21C9.55717 18.25 9.50717 18.3 9.45717 18.33C9.39717 18.37 9.33717 18.4 9.27717 18.42C9.21717 18.45 9.15717 18.47 9.09717 18.48C9.02717 18.49 8.96717 18.5 8.89717 18.5C8.76717 18.5 8.63717 18.47 8.51717 18.42C8.38717 18.37 8.28717 18.3 8.18717 18.21C8.00717 18.02 7.89717 17.76 7.89717 17.5C7.89717 17.24 8.00717 16.98 8.18717 16.79C8.28717 16.7 8.38717 16.63 8.51717 16.58C8.69717 16.5 8.89717 16.48 9.09717 16.52C9.15717 16.53 9.21717 16.55 9.27717 16.58C9.33717 16.6 9.39717 16.63 9.45717 16.67C9.50717 16.71 9.55717 16.75 9.60717 16.79C9.78717 16.98 9.89717 17.24 9.89717 17.5C9.89717 17.76 9.78717 18.02 9.60717 18.21ZM9.60717 14.71C9.41717 14.89 9.15717 15 8.89717 15C8.63717 15 8.37717 14.89 8.18717 14.71C8.00717 14.52 7.89717 14.26 7.89717 14C7.89717 13.74 8.00717 13.48 8.18717 13.29C8.46717 13.01 8.90717 12.92 9.27717 13.08C9.40717 13.13 9.51717 13.2 9.60717 13.29C9.78717 13.48 9.89717 13.74 9.89717 14C9.89717 14.26 9.78717 14.52 9.60717 14.71ZM13.1072 18.21C12.9172 18.39 12.6572 18.5 12.3972 18.5C12.1372 18.5 11.8772 18.39 11.6872 18.21C11.5072 18.02 11.3972 17.76 11.3972 17.5C11.3972 17.24 11.5072 16.98 11.6872 16.79C12.0572 16.42 12.7372 16.42 13.1072 16.79C13.2872 16.98 13.3972 17.24 13.3972 17.5C13.3972 17.76 13.2872 18.02 13.1072 18.21ZM13.1072 14.71C13.0572 14.75 13.0072 14.79 12.9572 14.83C12.8972 14.87 12.8372 14.9 12.7772 14.92C12.7172 14.95 12.6572 14.97 12.5972 14.98C12.5272 14.99 12.4672 15 12.3972 15C12.1372 15 11.8772 14.89 11.6872 14.71C11.5072 14.52 11.3972 14.26 11.3972 14C11.3972 13.74 11.5072 13.48 11.6872 13.29C11.7772 13.2 11.8872 13.13 12.0172 13.08C12.3872 12.92 12.8272 13.01 13.1072 13.29C13.2872 13.48 13.3972 13.74 13.3972 14C13.3972 14.26 13.2872 14.52 13.1072 14.71ZM16.6072 18.21C16.4172 18.39 16.1572 18.5 15.8972 18.5C15.6372 18.5 15.3772 18.39 15.1872 18.21C15.0072 18.02 14.8972 17.76 14.8972 17.5C14.8972 17.24 15.0072 16.98 15.1872 16.79C15.5572 16.42 16.2372 16.42 16.6072 16.79C16.7872 16.98 16.8972 17.24 16.8972 17.5C16.8972 17.76 16.7872 18.02 16.6072 18.21ZM16.6072 14.71C16.5572 14.75 16.5072 14.79 16.4572 14.83C16.3972 14.87 16.3372 14.9 16.2772 14.92C16.2172 14.95 16.1572 14.97 16.0972 14.98C16.0272 14.99 15.9572 15 15.8972 15C15.6372 15 15.3772 14.89 15.1872 14.71C15.0072 14.52 14.8972 14.26 14.8972 14C14.8972 13.74 15.0072 13.48 15.1872 13.29C15.2872 13.2 15.3872 13.13 15.5172 13.08C15.6972 13 15.8972 12.98 16.0972 13.02C16.1572 13.03 16.2172 13.05 16.2772 13.08C16.3372 13.1 16.3972 13.13 16.4572 13.17C16.5072 13.21 16.5572 13.25 16.6072 13.29C16.7872 13.48 16.8972 13.74 16.8972 14C16.8972 14.26 16.7872 14.52 16.6072 14.71Z" fill="#7F7F7F" />
                    </svg>
                  }
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div className='list'>
                <BlockTabs
                  pText1='Leave'
                  heading1='23 Jan, Sat'
                  pText2='Return'
                  heading2='14 Jan, Thu'
                  className='one'
                  icon={
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.3994 10.6301L15.7294 8.62006L14.6894 8.18006C14.5294 8.10006 14.3894 7.89006 14.3894 7.71006V4.65006C14.3894 3.69006 13.6794 2.55006 12.8194 2.11006C12.5194 1.96006 12.1594 1.96006 11.8594 2.11006C11.0094 2.55006 10.2994 3.70006 10.2994 4.66006V7.72006C10.2994 7.90006 10.1594 8.11006 9.99936 8.19006L4.29936 10.6401C3.66936 10.9001 3.15936 11.6901 3.15936 12.3701V13.6901C3.15936 14.5401 3.79936 14.9601 4.58936 14.6201L9.59936 12.4601C9.98936 12.2901 10.3094 12.5001 10.3094 12.9301V14.0401V15.8401C10.3094 16.0701 10.1794 16.4001 10.0194 16.5601L7.69936 18.8901C7.45936 19.1301 7.34936 19.6001 7.45936 19.9401L7.90936 21.3001C8.08936 21.8901 8.75936 22.1701 9.30936 21.8901L11.6894 19.8901C12.0494 19.5801 12.6394 19.5801 12.9994 19.8901L15.3794 21.8901C15.9294 22.1601 16.5994 21.8901 16.7994 21.3001L17.2494 19.9401C17.3594 19.6101 17.2494 19.1301 17.0094 18.8901L14.6894 16.5601C14.5194 16.4001 14.3894 16.0701 14.3894 15.8401V12.9301C14.3894 12.5001 14.6994 12.3001 15.0994 12.4601L20.1094 14.6201C20.8994 14.9601 21.5394 14.5401 21.5394 13.6901V12.3701C21.5394 11.6901 21.0294 10.9001 20.3994 10.6301Z" fill="white" />
                    </svg>
                  }
                />
                <BlockTabs
                  pText1='Leave'
                  heading1='23 Jan, Sat'
                  pText2='Return'
                  heading2='14 Jan, Thu'
                  className='two'
                  icon={
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.1472 3.56V2C17.1472 1.59 16.8072 1.25 16.3972 1.25C15.9872 1.25 15.6472 1.59 15.6472 2V3.5H9.14717V2C9.14717 1.59 8.80717 1.25 8.39717 1.25C7.98717 1.25 7.64717 1.59 7.64717 2V3.56C4.94717 3.81 3.63717 5.42 3.43717 7.81C3.41717 8.1 3.65717 8.34 3.93717 8.34H20.8572C21.1472 8.34 21.3872 8.09 21.3572 7.81C21.1572 5.42 19.8472 3.81 17.1472 3.56Z" fill="#7F7F7F" />
                      <path d="M20.3972 9.83997H4.39717C3.84717 9.83997 3.39717 10.29 3.39717 10.84V17C3.39717 20 4.89717 22 8.39717 22H16.3972C19.8972 22 21.3972 20 21.3972 17V10.84C21.3972 10.29 20.9472 9.83997 20.3972 9.83997ZM9.60717 18.21C9.55717 18.25 9.50717 18.3 9.45717 18.33C9.39717 18.37 9.33717 18.4 9.27717 18.42C9.21717 18.45 9.15717 18.47 9.09717 18.48C9.02717 18.49 8.96717 18.5 8.89717 18.5C8.76717 18.5 8.63717 18.47 8.51717 18.42C8.38717 18.37 8.28717 18.3 8.18717 18.21C8.00717 18.02 7.89717 17.76 7.89717 17.5C7.89717 17.24 8.00717 16.98 8.18717 16.79C8.28717 16.7 8.38717 16.63 8.51717 16.58C8.69717 16.5 8.89717 16.48 9.09717 16.52C9.15717 16.53 9.21717 16.55 9.27717 16.58C9.33717 16.6 9.39717 16.63 9.45717 16.67C9.50717 16.71 9.55717 16.75 9.60717 16.79C9.78717 16.98 9.89717 17.24 9.89717 17.5C9.89717 17.76 9.78717 18.02 9.60717 18.21ZM9.60717 14.71C9.41717 14.89 9.15717 15 8.89717 15C8.63717 15 8.37717 14.89 8.18717 14.71C8.00717 14.52 7.89717 14.26 7.89717 14C7.89717 13.74 8.00717 13.48 8.18717 13.29C8.46717 13.01 8.90717 12.92 9.27717 13.08C9.40717 13.13 9.51717 13.2 9.60717 13.29C9.78717 13.48 9.89717 13.74 9.89717 14C9.89717 14.26 9.78717 14.52 9.60717 14.71ZM13.1072 18.21C12.9172 18.39 12.6572 18.5 12.3972 18.5C12.1372 18.5 11.8772 18.39 11.6872 18.21C11.5072 18.02 11.3972 17.76 11.3972 17.5C11.3972 17.24 11.5072 16.98 11.6872 16.79C12.0572 16.42 12.7372 16.42 13.1072 16.79C13.2872 16.98 13.3972 17.24 13.3972 17.5C13.3972 17.76 13.2872 18.02 13.1072 18.21ZM13.1072 14.71C13.0572 14.75 13.0072 14.79 12.9572 14.83C12.8972 14.87 12.8372 14.9 12.7772 14.92C12.7172 14.95 12.6572 14.97 12.5972 14.98C12.5272 14.99 12.4672 15 12.3972 15C12.1372 15 11.8772 14.89 11.6872 14.71C11.5072 14.52 11.3972 14.26 11.3972 14C11.3972 13.74 11.5072 13.48 11.6872 13.29C11.7772 13.2 11.8872 13.13 12.0172 13.08C12.3872 12.92 12.8272 13.01 13.1072 13.29C13.2872 13.48 13.3972 13.74 13.3972 14C13.3972 14.26 13.2872 14.52 13.1072 14.71ZM16.6072 18.21C16.4172 18.39 16.1572 18.5 15.8972 18.5C15.6372 18.5 15.3772 18.39 15.1872 18.21C15.0072 18.02 14.8972 17.76 14.8972 17.5C14.8972 17.24 15.0072 16.98 15.1872 16.79C15.5572 16.42 16.2372 16.42 16.6072 16.79C16.7872 16.98 16.8972 17.24 16.8972 17.5C16.8972 17.76 16.7872 18.02 16.6072 18.21ZM16.6072 14.71C16.5572 14.75 16.5072 14.79 16.4572 14.83C16.3972 14.87 16.3372 14.9 16.2772 14.92C16.2172 14.95 16.1572 14.97 16.0972 14.98C16.0272 14.99 15.9572 15 15.8972 15C15.6372 15 15.3772 14.89 15.1872 14.71C15.0072 14.52 14.8972 14.26 14.8972 14C14.8972 13.74 15.0072 13.48 15.1872 13.29C15.2872 13.2 15.3872 13.13 15.5172 13.08C15.6972 13 15.8972 12.98 16.0972 13.02C16.1572 13.03 16.2172 13.05 16.2772 13.08C16.3372 13.1 16.3972 13.13 16.4572 13.17C16.5072 13.21 16.5572 13.25 16.6072 13.29C16.7872 13.48 16.8972 13.74 16.8972 14C16.8972 14.26 16.7872 14.52 16.6072 14.71Z" fill="#7F7F7F" />
                    </svg>
                  }
                />
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </Container>
    </div>
  )
}