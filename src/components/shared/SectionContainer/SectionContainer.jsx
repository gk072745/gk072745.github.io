import React from 'react'
import { cn } from '../../../helpers/animation'
import styles from './SectionContainer.module.scss'

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
}) {
  return (
    <Component
      id={id}
      data-anim={animateChildren ? animationVariant : undefined}
      className={cn(
        styles.section,
        padded && styles._padded,
        animateChildren && styles._childrenAnimate,
        narrow && styles._narrow,
        className
      )}
    >
      <div className={cn(styles.inner, 'u-container', innerClassName)}>{children}</div>
    </Component>
  )
}

export default SectionContainer
