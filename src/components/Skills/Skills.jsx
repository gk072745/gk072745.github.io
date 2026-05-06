import React from 'react'
import { useTranslation } from 'react-i18next'

import { portfolioContent } from '../../data/portfolioContent'
import { SectionContainer, TechPill } from '../shared'

const SKILL_GROUPS = [
  { key: 'languages', i18nKey: 'skills.groups.languages' },
  { key: 'frontend', i18nKey: 'skills.groups.frontend' },
  { key: 'backend', i18nKey: 'skills.groups.backend' },
  { key: 'databases', i18nKey: 'skills.groups.databases' },
  { key: 'tools', i18nKey: 'skills.groups.tools' },
]

function Skills() {
  const { t } = useTranslation()
  const { skills } = portfolioContent

  return (
    <SectionContainer
      id="skills"
      as="section"
      padded
      animateChildren
      animationVariant="fade-up"
      className="scroll-mt-24 border-t border-zinc-200/80 sm:scroll-mt-28 dark:border-zinc-800/80"
      innerClassName="flex flex-col gap-10 md:gap-12 lg:gap-14"
      aria-labelledby="skills-heading"
    >
      <header className="max-w-3xl">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-fuchsia-500 dark:text-fuchsia-400">
          {t('skills.kicker')}
        </p>
        <h2
          id="skills-heading"
          className="mb-4 text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {t('skills.title')}
        </h2>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400" lang="en">
          {skills.summary}
        </p>
      </header>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <article
            key={group.key}
            className="rounded-xl border border-zinc-200 bg-white/85 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/85"
          >
            <h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
              {t(group.i18nKey)}
            </h3>
            <ul className="flex flex-wrap gap-3" aria-label={t(group.i18nKey)}>
              {skills[group.key].map((tech) => (
                <TechPill key={`${group.key}-${tech}`} tech={tech} />
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionContainer>
  )
}

export default Skills
