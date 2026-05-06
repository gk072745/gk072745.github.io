import React, { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

import { cn } from '../../../helpers/animation'

/**
 * Custom listbox language picker — native `<select>` OS menus cannot be themed.
 */
function LanguageSelect({
  id,
  value,
  onChange,
  options,
  labelId,
  'aria-label': ariaLabel,
  className,
}) {
  const listId = useId()
  const rootRef = useRef(null)
  const triggerRef = useRef(null)
  const optionRefs = useRef([])

  const [open, setOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(() =>
    Math.max(
      0,
      options.findIndex((o) => o.code === value)
    )
  )

  const selectedIndex = options.findIndex((o) => o.code === value)
  const currentLabel = options[selectedIndex]?.label ?? options[0]?.label

  const close = useCallback(() => {
    setOpen(false)
    triggerRef.current?.focus({ preventScroll: true })
  }, [])

  const selectAt = useCallback(
    (index) => {
      const opt = options[index]
      if (!opt) return
      onChange(opt.code)
      close()
    },
    [close, onChange, options]
  )

  useEffect(() => {
    optionRefs.current = []
  }, [options.length, open])

  useLayoutEffect(() => {
    if (!open) return
    const t = window.requestAnimationFrame(() => {
      optionRefs.current[focusedIndex]?.focus({ preventScroll: true })
    })
    return () => window.cancelAnimationFrame(t)
  }, [open, focusedIndex])

  useEffect(() => {
    if (!open) return
    function onPointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    function onKey(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
      }
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  const moveFocus = useCallback(
    (delta) => {
      setFocusedIndex((i) => {
        const len = options.length
        if (len === 0) return 0
        const next = (i + delta + len) % len
        return next
      })
    },
    [options.length]
  )

  function onTriggerKeyDown(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      if (!open) {
        setFocusedIndex(selectedIndex >= 0 ? selectedIndex : 0)
        setOpen(true)
        return
      }
      moveFocus(e.key === 'ArrowDown' ? 1 : -1)
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setOpen((o) => !o)
      if (!open) {
        setFocusedIndex(selectedIndex >= 0 ? selectedIndex : 0)
      }
    }
    if (e.key === 'Escape' && open) {
      e.preventDefault()
      close()
    }
  }

  function onListKeyDown(e) {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        moveFocus(1)
        break
      case 'ArrowUp':
        e.preventDefault()
        moveFocus(-1)
        break
      case 'Home':
        e.preventDefault()
        setFocusedIndex(0)
        break
      case 'End':
        e.preventDefault()
        setFocusedIndex(options.length - 1)
        break
      case 'Escape':
        e.preventDefault()
        close()
        break
      default:
        break
    }
  }

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      <button
        ref={triggerRef}
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-labelledby={labelId}
        aria-label={labelId ? undefined : ariaLabel}
        onClick={() => {
          setOpen((o) => {
            const next = !o
            if (next) {
              setFocusedIndex(selectedIndex >= 0 ? selectedIndex : 0)
            }
            return next
          })
        }}
        onKeyDown={onTriggerKeyDown}
        className={cn(
          'inline-flex min-h-11 w-full min-w-[7rem] flex-1 items-center justify-between gap-2 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-left text-sm text-zinc-900 transition-colors hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800 sm:flex-initial',
          open && 'bg-violet-100 dark:bg-violet-950/55'
        )}
      >
        <span className="truncate">{currentLabel}</span>
        <MdKeyboardArrowDown
          aria-hidden
          className={cn(
            'h-5 w-5 shrink-0 text-zinc-500 transition-transform dark:text-zinc-400',
            open && 'rotate-180'
          )}
        />
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          tabIndex={-1}
          onKeyDownCapture={onListKeyDown}
          className="scrollbar-accent absolute left-0 right-0 top-[calc(100%+0.25rem)] z-[210] flex max-h-60 flex-col gap-1 overflow-y-auto overflow-x-hidden rounded-lg border border-violet-500/40 bg-white p-1 pr-0.5 shadow-lg shadow-zinc-900/10 ring-1 ring-violet-500/10 dark:border-violet-400/35 dark:bg-zinc-950 dark:shadow-black/40 dark:ring-violet-400/10"
        >
          {options.map((opt, index) => {
            const isSelected = value === opt.code
            const isFocused = index === focusedIndex
            return (
              <li
                key={opt.code}
                id={`${listId}-opt-${opt.code}`}
                role="option"
                aria-selected={isSelected}
                tabIndex={isFocused ? 0 : -1}
                ref={(el) => {
                  optionRefs.current[index] = el
                }}
                className={cn(
                  'flex min-h-11 cursor-pointer items-center rounded-md px-1.5 py-0.5 text-sm leading-snug outline-none transition-colors',
                  isSelected &&
                    cn(
                      'font-medium text-violet-900 dark:text-violet-100',
                      isFocused
                        ? 'bg-violet-300/95 dark:bg-violet-700/65'
                        : 'bg-violet-200/80 dark:bg-violet-900/60'
                    ),
                  !isSelected &&
                    cn(
                      'text-zinc-800 dark:text-zinc-100',
                      isFocused && 'bg-zinc-200 dark:bg-zinc-700'
                    )
                )}
                onMouseEnter={() => setFocusedIndex(index)}
                onClick={() => selectAt(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    selectAt(index)
                  }
                }}
              >
                {opt.label}
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

export default LanguageSelect
