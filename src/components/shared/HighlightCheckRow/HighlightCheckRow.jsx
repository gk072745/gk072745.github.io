import React from 'react'
import { HiOutlineCheckCircle } from 'react-icons/hi2'

import { cn } from '../../../helpers/animation'

/**
 * Highlight line with circular check icon, aligned to the first line of text (multi-line safe).
 */
function HighlightCheckRow({ children, lang = undefined, className }) {
  return (
    <li
      className={cn(
        'flex gap-4 border-b border-zinc-200 py-4 text-base leading-relaxed text-zinc-800 last:border-b-0 dark:border-zinc-700/75 dark:text-zinc-100',
        className
      )}
    >
      <span
        className="flex h-[1lh] shrink-0 translate-y-[0.08em] items-center text-violet-600 dark:text-violet-400"
        aria-hidden="true"
      >
        <HiOutlineCheckCircle className="size-[1.125em]" />
      </span>
      <span className="min-w-0 flex-1" lang={lang}>
        {children}
      </span>
    </li>
  )
}

export default HighlightCheckRow
