import { Heading } from '../ui/Heading'


type BlockTabsProps = {
  icon: React.ReactNode;
  pText1: string;
  heading1: string;
  pText2: string;
  heading2: string;
  className: string;
}
export const BlockTabs: React.FC<BlockTabsProps> = ({ pText1, pText2, heading1, heading2, icon, className }) => {
  return (
    <div className={`list-${className}`}>
      <div className='block'>
        <p className='text'>{pText1}</p>
        <Heading size='sm'>{heading1}</Heading>
      </div>
      <span>
        {icon}
      </span>
      <div className='block'>
        <p className='text'>{pText2}</p>
        <Heading size='sm'>{heading2}</Heading>
      </div>
    </div>
  )
}
