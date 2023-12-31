import React from 'react'
import { cn } from '../lib/utils';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  size?: 'lg' | 'md' | 'm' | 'sm';
}

export const Heading: React.FC<HeadingProps> = ({ children, className, size = 'lg' }) => {
  return <h2 className={cn(`heading heading-${size} heading-${className}`)}>{children}</h2>;
}
