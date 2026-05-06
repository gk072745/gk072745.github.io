import React from 'react'

import { getTechVisual } from '../../../helpers/resolveTechVisual'
import { cn } from '../../../helpers/animation'

/**
 * Pill with brand-styled icon + label; uses inset ring for a single clean edge (avoids uneven borders on wrap).
 */
function TechPill({ tech, className }) {
  const { Icon, iconClassName } = getTechVisual(tech)

  return (
    <li
      title={tech}
      className={cn(
        'inline-flex h-8 max-w-full shrink-0 items-center justify-center gap-1.5 rounded-full',
        'bg-zinc-100/95 px-2.5 text-zinc-800',
        'shadow-[inset_0_0_0_1px_theme(colors.zinc.900/12)]',
        'dark:bg-zinc-900/90 dark:text-zinc-100 dark:shadow-[inset_0_0_0_1px_theme(colors.white/16)]',
        'text-xs font-medium tracking-tight leading-none',
        className
      )}
    >
      <span
        className="relative grid h-4 w-4 shrink-0 place-items-center overflow-hidden [&>svg]:h-full [&>svg]:w-full [&>svg]:max-h-4 [&>svg]:max-w-4"
        aria-hidden="true"
      >
        <Icon className={iconClassName} />
      </span>
      <span className="min-w-0 truncate">{tech}</span>
    </li>
  )
}

export default TechPill
