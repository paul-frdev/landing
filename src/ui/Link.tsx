import React from 'react'

type LinkProps = {
  children: React.ReactNode
  icon?: React.ReactElement
  href?: string;
}

export const Link: React.FC<LinkProps> = ({ children, icon, href }) => {
  return (
    <a href={href} className='custom-link' >
      <span> {icon && icon}</span>
      {children}
    </a>
  )
}
