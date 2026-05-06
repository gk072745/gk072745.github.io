import React from 'react'
import { useTranslation } from 'react-i18next'

import { portfolioContent } from '../../data/portfolioContent'
import { HighlightCheckRow, SectionContainer, TechPill } from '../shared'
import { cn } from '../../helpers/animation'

function Experience() {
  const { t } = useTranslation()
  const { experience } = portfolioContent

  return (
    <SectionContainer
      id="experience"
      as="section"
      padded
      animateChildren
      animationVariant="fade-up"
      className="scroll-mt-24 border-t border-zinc-200/80 sm:scroll-mt-28 dark:border-zinc-800/80"
      innerClassName="flex flex-col gap-10 md:gap-12 lg:gap-14"
      aria-labelledby="experience-heading"
    >
      <header className="max-w-3xl">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-fuchsia-500 dark:text-fuchsia-400">
          {t('experience.kicker')}
        </p>
        <h2
          id="experience-heading"
          className="mb-4 text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {t('experience.title')}
        </h2>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400" lang="en">
          {experience.summary}
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 xl:gap-12">
        <div className="rounded-xl border border-zinc-200 bg-white/85 p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/85">
          <h3 className="mb-2 text-xl font-semibold leading-tight text-zinc-900 dark:text-zinc-50">
            {t('experience.listHeading')}
          </h3>

          <div className="flex flex-col">
            {experience.roles.map((role) => (
              <article
                key={role.id}
                className="border-t border-zinc-200 pb-8 pt-8 first:border-t-0 first:pt-0 last:pb-0 dark:border-zinc-700/75"
              >
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4">
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-zinc-50">{role.role}</p>
                    <p className="text-sm font-medium text-violet-600 dark:text-violet-400">{role.company}</p>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    <span>{role.location}</span>
                    <span className="mx-1 text-zinc-400 dark:text-zinc-600" aria-hidden>
                      ·
                    </span>
                    <span>
                      {role.start}–{role.end}
                    </span>
                  </p>
                </div>

                <ul className="grid gap-0">
                  {role.points.map((point, index) => (
                    <HighlightCheckRow key={`${role.id}-${index}`} lang="en">
                      {point}
                    </HighlightCheckRow>
                  ))}
                </ul>

                <div className="flex flex-col gap-2 border-t border-zinc-100 pt-3 dark:border-zinc-700/50">
                  <p
                    id={`${role.id}-tech-stack-label`}
                    className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
                  >
                    {t('experience.techStackLabel')}
                  </p>
                  <ul
                    className="flex flex-wrap items-center gap-3"
                    aria-labelledby={`${role.id}-tech-stack-label`}
                  >
                    {role.tech.map((tech) => (
                      <TechPill key={`${role.id}-${tech}`} tech={tech} />
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          className={cn(
            'rounded-2xl border border-dashed border-violet-400/30 p-8',
            'bg-gradient-to-b from-violet-500/10 to-transparent dark:from-violet-500/15'
          )}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            {t('experience.asideEyebrow')}
          </p>
          <p className="text-base leading-relaxed text-zinc-800 dark:text-zinc-100" lang="en">
            {experience.asideBody}
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Experience
