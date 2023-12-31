import { cn } from '../lib/utils'


interface TypographyProps {
  size?: 'lg' | 'md' | 'sm',
  children?: string;
  className?: string;
}
export const Typography = ({ size = 'md', children, className }: TypographyProps) => {
  return (
    <p className={cn(`typography, typography-${size}`, className)}>{children}</p>
  )
}
