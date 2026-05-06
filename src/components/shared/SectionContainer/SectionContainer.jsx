import React from 'react'

import { cn } from '../../../helpers/animation'

const innerWidth = (narrow) =>
  narrow
    ? 'max-w-3xl px-4 sm:px-6'
    : 'max-w-6xl px-4 sm:px-6 lg:px-8'

const padders = (padded) =>
  padded ? 'py-14 md:py-20 lg:py-28' : ''

const enterMotion = {
  'fade-up':
    'motion-safe:opacity-0 motion-safe:[animation:fade-up_0.65s_cubic-bezier(0.16,1,0.3,1)_both] motion-reduce:animate-none motion-reduce:opacity-100',
  'fade-in':
    'motion-safe:opacity-0 motion-safe:[animation:fade-in_0.65s_cubic-bezier(0.16,1,0.3,1)_both] motion-reduce:animate-none motion-reduce:opacity-100',
  scale:
    'motion-safe:opacity-0 motion-safe:[animation:scale-in_0.35s_cubic-bezier(0.16,1,0.3,1)_both] motion-reduce:animate-none motion-reduce:opacity-100',
  float:
    'motion-safe:[animation:subtle-float_4s_cubic-bezier(0.4,0,0.2,1)_infinite] motion-reduce:animate-none',
}

function SectionContainer({
  as: Component = 'section',
  id,
  className,
  innerClassName,
  children,
  padded = true,
  narrow = false,
  animateChildren = false,
  animationVariant = 'fade-up',
  ...rest
}) {
  const motionClass = animateChildren
    ? enterMotion[animationVariant] ?? enterMotion['fade-up']
    : ''

  return (
    <Component
      id={id}
      className={cn('w-full scroll-mt-24 sm:scroll-mt-28', className)}
      {...rest}
    >
      <div
        className={cn(
          'mx-auto w-full',
          innerWidth(narrow),
          padders(padded),
          motionClass,
          innerClassName
        )}
      >
        {children}
      </div>
    </Component>
  )
}

export default SectionContainer
