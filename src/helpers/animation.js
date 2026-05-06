/**
 * Concatenate class names — drops falsy segments.
 */
export function cn(...classes) {
  return classes.flat().filter(Boolean).join(' ')
}

/**
 * Build animation modifier classes safely.
 */
export function buildMotionClasses({ animate, animation = 'fade-up' }) {
  if (!animate) return ''

  const map = {
    'fade-up': 'anim-fade-up',
    'fade-in': 'anim-fade-in',
    scale: 'anim-scale-in',
    float: 'anim-float',
  }

  const token = map[animation] ?? map['fade-up']
  return cn(token)
}
