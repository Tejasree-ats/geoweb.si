import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type H1Props = ComponentProps<'h1'>
type H2Props = ComponentProps<'h2'>
type H3Props = ComponentProps<'h3'>

export function TypographyH1({ className, ...props }: H1Props) {
  return <h1 className={cn('type-display-1', className)} {...props} />
}

export function TypographyH2({ className, ...props }: H2Props) {
  return <h2 className={cn('type-display-2', className)} {...props} />
}

export function TypographyH3({ className, ...props }: H3Props) {
  return <h3 className={cn('type-display-3', className)} {...props} />
}
