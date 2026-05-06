import React from 'react'
import { useTranslation } from 'react-i18next'
import { HiOutlineArrowRight } from 'react-icons/hi2'

import { SectionContainer } from '../shared'
import { cn } from '../../helpers/animation'

import resumePdfUrl from '../../assets/Govind_Kumawat_Resume_.pdf'

const RESUME_PATH = resumePdfUrl

function Hero() {
  const { t } = useTranslation()

  return (
    <SectionContainer
      id="hero"
      as="section"
      padded={false}
      animateChildren
      animationVariant="fade-up"
      className="relative overflow-x-clip scroll-mt-8 sm:scroll-mt-10"
      innerClassName="pb-14 pt-[6.5rem] md:pb-20 md:pt-32 lg:pb-28"
    >
      <div
        className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-[clamp(2rem,6vw,4rem)]"
        aria-labelledby="hero-name"
      >
        <div className="min-w-0">
          <p className="mb-4 inline-flex min-h-8 items-center rounded-full border border-violet-500/35 bg-zinc-900/5 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:bg-zinc-100/5 dark:text-violet-300">
            {t('hero.badge')}
          </p>

          <h1
            id="hero-name"
            className="mb-2 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            {t('hero.name')}
          </h1>

          <p className="mb-6 text-[clamp(1.25rem,2.4vw,2rem)] font-medium leading-tight text-zinc-800 dark:text-zinc-200">
            {t('hero.role')}
          </p>

          <p className="mb-8 max-w-[38ch] text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t('hero.lead')}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className={cn(
                'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-7 py-3 text-sm font-semibold shadow-sm transition-transform',
                'bg-gradient-to-br from-violet-600 to-violet-500 text-white',
                'hover:-translate-y-0.5 hover:shadow-md',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:from-violet-500 dark:to-fuchsia-500'
              )}
            >
              <span>{t('hero.ctaProjects')}</span>
              <HiOutlineArrowRight className="text-[1.1rem]" aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-all hover:-translate-y-px hover:border-violet-500/35 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:border-violet-400/35"
            >
              {t('hero.ctaContact')}
            </a>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold text-violet-600 underline-offset-4 transition-colors hover:text-fuchsia-500 hover:underline dark:text-violet-400 dark:hover:text-fuchsia-400"
            >
              {t('hero.ctaResume')}
            </a>
          </div>
        </div>

        <div className="relative min-h-[200px] lg:order-none lg:min-h-[280px]" aria-hidden="true">
          <div
            className="pointer-events-none absolute -right-[10%] -top-[20%] size-[min(420px,90vw)] rounded-full opacity-75 dark:opacity-55 lg:opacity-75"
            style={{
              background:
                'radial-gradient(circle at 30% 30%, rgb(139 92 246 / 0.45), transparent 62%)',
            }}
          />
          <div className="relative mx-auto max-w-[420px] rounded-xl border border-zinc-200 bg-white/80 p-8 shadow-lg backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80 lg:mx-0">
            <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500" />
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {t('hero.cardEyebrow')}
            </p>
            <p className="mb-2 text-xl font-semibold leading-tight text-zinc-900 dark:text-zinc-50">
              {t('hero.cardTitle')}
            </p>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t('hero.cardBody')}
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Hero
