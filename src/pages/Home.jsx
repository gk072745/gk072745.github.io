import React from 'react'
import { useTranslation } from 'react-i18next'

import { SectionContainer } from '../components/shared'

function Home() {
  const { t } = useTranslation()

  return (
    <SectionContainer
      as="main"
      padded
      animateChildren
      animationVariant="fade-up"
    >
      <h1>{t('home.title')}</h1>
      <p className="u-text-muted">{t('home.subtitle')}</p>
    </SectionContainer>
  )
}

export default Home
