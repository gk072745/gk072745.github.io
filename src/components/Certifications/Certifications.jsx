import React from 'react'
import { useTranslation } from 'react-i18next'
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2'

import { portfolioContent } from '../../data/portfolioContent'
import { SectionContainer } from '../shared'

function Certifications() {
  const { t } = useTranslation()
  const { certifications } = portfolioContent

  return (
    <SectionContainer
      id="certifications"
      as="section"
      padded
      animateChildren
      animationVariant="fade-up"
      className="scroll-mt-24 border-t border-zinc-200/80 sm:scroll-mt-28 dark:border-zinc-800/80"
      innerClassName="flex flex-col gap-10 md:gap-12 lg:gap-14"
      aria-labelledby="certifications-heading"
    >
      <header className="max-w-3xl">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-fuchsia-500 dark:text-fuchsia-400">
          {t('certifications.kicker')}
        </p>
        <h2
          id="certifications-heading"
          className="mb-4 text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {t('certifications.title')}
        </h2>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400" lang="en">
          {certifications.summary}
        </p>
      </header>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {certifications.items.map((cert) => (
          <article
            key={cert.id}
            className="rounded-xl border border-zinc-200 bg-white/85 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/85"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {cert.year}
            </p>
            <h3 className="mt-2 text-xl font-semibold leading-tight text-zinc-900 dark:text-zinc-50">
              {cert.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{cert.issuer}</p>

            <div className="mt-5 border-t border-zinc-200/90 pt-5 dark:border-zinc-700/75">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:border-violet-500/35 hover:text-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:border-violet-400/35 dark:hover:text-violet-300"
              >
                {t('certifications.viewCredential')}
                <HiOutlineArrowTopRightOnSquare className="size-4 shrink-0 opacity-90" aria-hidden />
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  )
}

export default Certifications
