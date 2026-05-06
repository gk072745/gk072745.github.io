import React from 'react'
import { useTranslation } from 'react-i18next'

import { portfolioContent } from '../../data/portfolioContent'
import { SectionContainer } from '../shared'

function Education() {
  const { t } = useTranslation()
  const { education } = portfolioContent

  return (
    <SectionContainer
      id="education"
      as="section"
      padded
      animateChildren
      animationVariant="fade-up"
      className="scroll-mt-24 border-t border-zinc-200/80 sm:scroll-mt-28 dark:border-zinc-800/80"
      innerClassName="flex flex-col gap-10 md:gap-12 lg:gap-14"
      aria-labelledby="education-heading"
    >
      <header className="max-w-3xl">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-fuchsia-500 dark:text-fuchsia-400">
          {t('education.kicker')}
        </p>
        <h2
          id="education-heading"
          className="mb-4 text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {t('education.title')}
        </h2>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400" lang="en">
          {education.summary}
        </p>
      </header>

      <div className="rounded-xl border border-zinc-200 bg-white/85 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/85 md:p-8">
        <h3 className="mb-5 text-xl font-semibold leading-tight text-zinc-900 dark:text-zinc-50">
          {t('education.listHeading')}
        </h3>
        <div className="flex flex-col">
          {education.items.map((item) => (
            <article
              key={item.id}
              className="border-t border-zinc-200 py-6 first:border-t-0 first:pt-0 last:pb-0 dark:border-zinc-700/75"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div>
                  <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{item.degree}</p>
                  <p className="text-sm font-medium text-violet-600 dark:text-violet-400">{item.school}</p>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {item.start} - {item.end}
                </p>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300" lang="en">
                <span className="font-semibold text-zinc-700 dark:text-zinc-200">
                  {t('education.noteLabel')}:
                </span>{' '}
                {item.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}

export default Education
