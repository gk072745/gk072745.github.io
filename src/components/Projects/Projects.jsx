import React from 'react'
import { useTranslation } from 'react-i18next'
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2'

import { portfolioContent } from '../../data/portfolioContent'
import { SectionContainer, TechPill } from '../shared'
import { cn } from '../../helpers/animation'

const externalLinkBtn = cn(
  'inline-flex min-h-[44px] items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors',
  'border-zinc-300 bg-white text-zinc-900',
  'hover:border-violet-500/35 hover:text-violet-700',
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500',
  'dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:border-violet-400/35 dark:hover:text-violet-300'
)

const disabledLinkBtn = cn(
  'inline-flex min-h-[44px] items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold',
  'cursor-not-allowed border-zinc-200 bg-zinc-100 text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400'
)

function Projects() {
  const { t } = useTranslation()
  const {
    projects: { summary, items },
  } = portfolioContent

  return (
    <SectionContainer
      id="projects"
      as="section"
      padded
      animateChildren
      animationVariant="fade-up"
      className="scroll-mt-24 border-t border-zinc-200/80 sm:scroll-mt-28 dark:border-zinc-800/80"
      innerClassName="flex flex-col gap-10 md:gap-12 lg:gap-14"
      aria-labelledby="projects-heading"
    >
      <header className="max-w-3xl">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-fuchsia-500 dark:text-fuchsia-400">
          {t('projects.kicker')}
        </p>
        <h2
          id="projects-heading"
          className="mb-4 text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {t('projects.title')}
        </h2>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400" lang="en">
          {summary}
        </p>
      </header>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {items.map((project) => (
          <article
            key={project.id}
            className={cn(
              'flex flex-col rounded-xl border border-zinc-200 bg-white/85 p-6 shadow-sm',
              'dark:border-zinc-800 dark:bg-zinc-900/85'
            )}
          >
            <h3 className="text-xl font-semibold leading-tight text-zinc-900 dark:text-zinc-50">
              {project.title}
            </h3>

            <p className="mt-3 flex-1 text-base leading-relaxed text-zinc-600 dark:text-zinc-400" lang="en">
              {project.description}
            </p>

            <div
              className={cn(
                'mt-4 rounded-lg border border-violet-500/25 bg-violet-500/[0.07] p-4',
                'dark:border-violet-400/25 dark:bg-violet-500/10'
              )}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-700 dark:text-violet-300">
                {t('projects.impactEyebrow')}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-800 dark:text-zinc-200" lang="en">
                {project.impact}
              </p>
            </div>

            <ul className="mt-5 flex flex-wrap gap-3" aria-label={t('projects.tagsLabel')}>
              {project.tags.map((tag) => (
                <TechPill key={`${project.id}-${tag}`} tech={tag} />
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-3 border-t border-zinc-200/90 pt-5 dark:border-zinc-700/75">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLinkBtn}
                >
                  {t('projects.liveDemo')}
                  <HiOutlineArrowTopRightOnSquare className="size-4 shrink-0 opacity-90" aria-hidden />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  title={project.liveDisabledReason || 'Not publicly available.'}
                  className={disabledLinkBtn}
                >
                  {t('projects.liveDemo')}
                  <HiOutlineArrowTopRightOnSquare className="size-4 shrink-0 opacity-70" aria-hidden />
                </button>
              )}
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLinkBtn}
                >
                  {t('projects.sourceCode')}
                  <HiOutlineArrowTopRightOnSquare className="size-4 shrink-0 opacity-90" aria-hidden />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  title={project.repoDisabledReason || 'Private repository.'}
                  className={disabledLinkBtn}
                >
                  {t('projects.sourceCode')}
                  <HiOutlineArrowTopRightOnSquare className="size-4 shrink-0 opacity-70" aria-hidden />
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  )
}

export default Projects
