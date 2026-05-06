import React from 'react'
import { useTranslation } from 'react-i18next'
import { HiOutlineArrowRight } from 'react-icons/hi2'

import { SectionContainer } from '../shared'
import { cn } from '../../helpers/animation'
import styles from './Hero.module.scss'

const RESUME_PATH = '/resume.pdf'

function Hero() {
  const { t } = useTranslation()

  return (
    <SectionContainer
      id="hero"
      as="section"
      padded={false}
      animateChildren
      animationVariant="fade-up"
      className={styles.heroSection}
      innerClassName={styles.heroInner}
    >
      <div className={styles.grid} aria-labelledby="hero-name">
        <div className={styles.copy}>
          <p className={styles.badge}>{t('hero.badge')}</p>

          <h1 id="hero-name" className={styles.name}>
            {t('hero.name')}
          </h1>

          <p className={styles.role}>{t('hero.role')}</p>

          <p className={cn(styles.lead, 'u-text-muted')}>{t('hero.lead')}</p>

          <div className={styles.actions}>
            <a className={styles.btnPrimary} href="#projects">
              <span>{t('hero.ctaProjects')}</span>
              <HiOutlineArrowRight className={styles.btnIcon} aria-hidden />
            </a>
            <a className={styles.btnGhost} href="#contact">
              {t('hero.ctaContact')}
            </a>
            <a
              className={styles.btnLink}
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              {t('hero.ctaResume')}
            </a>
          </div>
        </div>

        <div className={styles.panel} aria-hidden="true">
          <div className={styles.glow} />
          <div className={styles.card}>
            <div className={styles.card__line} />
            <p className={styles.card__eyebrow}>{t('hero.cardEyebrow')}</p>
            <p className={styles.card__title}>{t('hero.cardTitle')}</p>
            <p className={cn(styles.card__body, 'u-text-muted')}>
              {t('hero.cardBody')}
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Hero
