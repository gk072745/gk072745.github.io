/**
 * Concatenate class names — drops falsy segments.
 */
export function cn(...classes) {
  return classes.flat().filter(Boolean).join(' ')
}
