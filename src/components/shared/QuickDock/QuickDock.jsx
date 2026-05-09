import React, { useEffect, useMemo, useRef, useState } from 'react'
import { HiOutlineArrowDownTray, HiOutlineHome, HiOutlineXMark } from 'react-icons/hi2'
import { createRoot } from 'react-dom/client'

import { cn } from '../../../helpers/animation'

const STORAGE_OPEN_KEY = 'portfolio_quick_dock_open'
const STORAGE_PIP_PRIMED_KEY = 'portfolio_quick_dock_pip_primed'

function readBool(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key)
    if (raw === null) return fallback
    return raw === 'true'
  } catch {
    return fallback
  }
}

function writeBool(key, value) {
  try {
    window.localStorage.setItem(key, value ? 'true' : 'false')
  } catch {
    // ignore
  }
}

// (numbers not needed; kept intentionally simple)

function isDocPiPSupported() {
  return Boolean(window?.documentPictureInPicture?.requestWindow)
}

function copyDocumentStyles(fromDoc, toDoc) {
  const head = toDoc.head
  ;[...fromDoc.querySelectorAll('link[rel="stylesheet"], style')].forEach((node) => {
    head.appendChild(node.cloneNode(true))
  })
}

function QuickDockCard({
  name,
  role,
  highlights,
  ctaLabel,
  onCtaClick,
  onClose,
  resumeUrl,
  variant = 'full',
}) {
  const isPip = variant === 'pip'
  const pipHighlights = isPip ? highlights.filter(Boolean).slice(0, 3) : highlights
  return (
    <div className={cn('quickdock-card', isPip && 'quickdock-card--pip')}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-50">{name}</p>
          <p className="truncate text-sm text-zinc-600 dark:text-zinc-300">{role}</p>
        </div>
        {!isPip && onClose ? (
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
            aria-label="Close"
          >
            <HiOutlineXMark className="size-5" aria-hidden />
          </button>
        ) : null}
      </div>

      {!isPip && highlights.length ? (
        <ul className="mt-4 grid gap-2 text-sm text-zinc-700 dark:text-zinc-200">
          {highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-[0.45em] size-1.5 shrink-0 rounded-full bg-violet-500/70 dark:bg-violet-400/70" />
              <span className="min-w-0 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {isPip && pipHighlights.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {pipHighlights.map((skill) => (
            <span key={skill} className="quickdock-skill-pill">
              {skill}
            </span>
          ))}
        </div>
      ) : null}

      <div className={cn('mt-5 flex flex-wrap gap-3 border-t border-zinc-200/90 pt-4 dark:border-zinc-700/75', isPip && 'mt-3 border-t-0 pt-0')}>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          className={cn(
            isPip
              ? 'inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition-colors'
              : 'inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition-colors',
            'bg-violet-600 text-white hover:bg-violet-500',
            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500'
          )}
        >
          <HiOutlineArrowDownTray className="size-4" aria-hidden />
          Resume
        </a>

        {!isPip ? (
          <>
            <button
              type="button"
              onClick={() => {
                window.location.hash = '#hero'
              }}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:border-violet-500/35 hover:text-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:border-violet-400/35 dark:hover:text-violet-300"
            >
              <HiOutlineHome className="size-4" aria-hidden />
              Home
            </button>

            {ctaLabel ? (
              <button
                type="button"
                onClick={onCtaClick}
                className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:border-violet-500/35 hover:text-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:border-violet-400/35 dark:hover:text-violet-300"
              >
                {ctaLabel}
              </button>
            ) : null}
          </>
        ) : null}

      </div>
    </div>
  )
}

/**
 * Meet-style floating quick card.
 * - Syncs open state across tabs via localStorage + storage events
 */
function QuickDock({
  name,
  role,
  highlights = [],
  ctaLabel,
  onCtaClick,
  resumeUrl = '/resume.pdf',
}) {
  const [open, setOpen] = useState(() => readBool(STORAGE_OPEN_KEY, false))
  const [pipPrimed, setPipPrimed] = useState(() => readBool(STORAGE_PIP_PRIMED_KEY, false))
  const pipWindowRef = useRef(null)
  const pipRootRef = useRef(null)

  const cleanHighlights = useMemo(
    () => highlights.filter(Boolean).slice(0, 3),
    [highlights]
  )

  const setOpenSynced = (next) => {
    setOpen(next)
    writeBool(STORAGE_OPEN_KEY, next)
  }

  useEffect(() => {
    function onStorage(event) {
      if (event.key !== STORAGE_OPEN_KEY) return
      if (event.newValue == null) return
      setOpen(event.newValue === 'true')
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const closePip = () => {
    try {
      pipRootRef.current?.unmount?.()
    } catch {
      // ignore
    }
    pipRootRef.current = null
    try {
      pipWindowRef.current?.close?.()
    } catch {
      // ignore
    }
    pipWindowRef.current = null
  }

  const openPip = async () => {
    if (!pipPrimed) return
    if (!isDocPiPSupported()) return
    if (pipWindowRef.current && !pipWindowRef.current.closed) return

    const pipWindow = await window.documentPictureInPicture.requestWindow({
      width: 360,
      height: 210,
    })
    pipWindowRef.current = pipWindow

    copyDocumentStyles(document, pipWindow.document)

    const mount = pipWindow.document.createElement('div')
    mount.id = 'quickdock-pip-root'
    pipWindow.document.body.style.margin = '0'
    pipWindow.document.body.appendChild(mount)

    const root = createRoot(mount)
    pipRootRef.current = root
    root.render(
      <div style={{ padding: '10px' }}>
        <QuickDockCard
          name={name}
          role={role}
          highlights={cleanHighlights}
          ctaLabel={null}
          onCtaClick={undefined}
          resumeUrl={resumeUrl}
          variant="pip"
        />
      </div>
    )

    pipWindow.addEventListener('pagehide', () => {
      pipWindowRef.current = null
      pipRootRef.current = null
    })
  }

  useEffect(() => {
    function onVisibility() {
      if (!pipPrimed) return
      if (!isDocPiPSupported()) return
      if (document.visibilityState === 'hidden') {
        void openPip()
      }
      if (document.visibilityState === 'visible') {
        closePip()
      }
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [pipPrimed])

  useEffect(() => {
    if (pipPrimed) return
    if (!isDocPiPSupported()) return

    // Browser requires a user gesture at least once. We "prime" silently
    // on the user's first interaction with the page.
    const prime = async () => {
      try {
        const pipWindow = await window.documentPictureInPicture.requestWindow({
          width: 1,
          height: 1,
        })
        try {
          pipWindow.close()
        } catch {
          // ignore
        }
        writeBool(STORAGE_PIP_PRIMED_KEY, true)
        setPipPrimed(true)
      } catch {
        // If blocked/unsupported, we keep it unprimed.
      }
      window.removeEventListener('pointerdown', prime, { capture: true })
      window.removeEventListener('keydown', prime, { capture: true })
    }

    window.addEventListener('pointerdown', prime, { capture: true, once: true })
    window.addEventListener('keydown', prime, { capture: true, once: true })

    return () => {
      window.removeEventListener('pointerdown', prime, { capture: true })
      window.removeEventListener('keydown', prime, { capture: true })
    }
  }, [pipPrimed])

  // Closed by default on the site. User can open it manually.

  return (
    <div className="fixed bottom-4 right-4 z-[250] w-[min(92vw,420px)]">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpenSynced(true)}
          className={cn(
            'group inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-lg',
            'bg-zinc-900 text-white shadow-zinc-900/15',
            'hover:shadow-xl hover:shadow-zinc-900/20',
            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500',
            'dark:bg-zinc-100 dark:text-zinc-950 dark:shadow-black/40'
          )}
        >
          <span className="quickdock-pulse-dot" aria-hidden />
          {name}
          <span className="text-white/70 group-hover:text-white/85 dark:text-zinc-600 dark:group-hover:text-zinc-700">
            •
          </span>
          <span className="text-white/85 dark:text-zinc-700">{role}</span>
        </button>
      ) : (
        <QuickDockCard
          name={name}
          role={role}
          highlights={cleanHighlights}
          ctaLabel={ctaLabel}
          onCtaClick={onCtaClick}
          onClose={() => setOpenSynced(false)}
          resumeUrl={resumeUrl}
        />
      )}
    </div>
  )
}

export default QuickDock
