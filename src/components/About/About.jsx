import React from 'react'
import { useTranslation } from 'react-i18next'
import { portfolioContent } from '../../data/portfolioContent'
import { HighlightCheckRow, SectionContainer } from '../shared'

function About() {
  const { t } = useTranslation()
  const { about } = portfolioContent

  return (
    <SectionContainer
      id="about"
      as="section"
      padded
      animateChildren
      animationVariant="fade-up"
      className="scroll-mt-24 border-t border-zinc-200/80 sm:scroll-mt-28 dark:border-zinc-800/80"
      innerClassName="flex flex-col gap-10 md:gap-12 lg:gap-14"
      aria-labelledby="about-heading"
    >
      <header className="max-w-3xl">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-fuchsia-500 dark:text-fuchsia-400">
          {t('about.kicker')}
        </p>
        <h2
          id="about-heading"
          className="mb-4 text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {t('about.title')}
        </h2>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400" lang="en">
          {about.summary}
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 xl:gap-12">
        <div className="rounded-xl border border-zinc-200 bg-white/85 p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/85">
          <h3 className="mb-4 text-xl font-semibold leading-tight text-zinc-900 dark:text-zinc-50">
            {t('about.highlights')}
          </h3>
          <ul className="grid gap-0" aria-label={t('about.highlights')}>
            {about.highlights.map((item, index) => (
              <HighlightCheckRow key={index} lang="en">
                {item}
              </HighlightCheckRow>
            ))}
          </ul>
        </div>

        <div
          className="rounded-2xl border border-dashed border-violet-400/30 bg-gradient-to-b from-violet-500/10 to-transparent p-8 dark:from-violet-500/15"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            {t('about.focusEyebrow')}
          </p>
          <p className="text-base leading-relaxed text-zinc-800 dark:text-zinc-100">
            {t('about.focusBody')}
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}

export default About
