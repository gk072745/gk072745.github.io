import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { HiOutlineEnvelope, HiOutlinePhone } from 'react-icons/hi2'

import { portfolioContent } from '../../data/portfolioContent'
import { SectionContainer } from '../shared'

function Contact() {
  const { t } = useTranslation()
  const { contact } = portfolioContent
  const [senderEmail, setSenderEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()

    if (!contact.formAccessKey) {
      setStatus('error')
      setStatusMessage(t('contact.errorConfigMissing'))
      return
    }

    setStatus('loading')
    setStatusMessage('')

    try {
      const response = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: contact.formAccessKey,
          subject: contact.defaultSubject,
          from_name: senderEmail,
          email: senderEmail,
          message,
        }),
      })

      const result = await response.json()
      if (response.ok && result.success) {
        setStatus('success')
        setStatusMessage(t('contact.successMessage'))
        setSenderEmail('')
        setMessage('')
        return
      }

      setStatus('error')
      setStatusMessage(result.message || t('contact.errorMessage'))
    } catch {
      setStatus('error')
      setStatusMessage(t('contact.errorMessage'))
    }
  }

  return (
    <SectionContainer
      id="contact"
      as="section"
      padded
      animateChildren
      animationVariant="fade-up"
      className="scroll-mt-24 border-t border-zinc-200/80 sm:scroll-mt-28 dark:border-zinc-800/80"
      innerClassName="flex flex-col gap-10 md:gap-12 lg:gap-14"
      aria-labelledby="contact-heading"
    >
      <header className="max-w-3xl">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-fuchsia-500 dark:text-fuchsia-400">
          {t('contact.kicker')}
        </p>
        <h2
          id="contact-heading"
          className="mb-4 text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {t('contact.title')}
        </h2>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400" lang="en">
          {contact.summary}
        </p>
      </header>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <form
          onSubmit={onSubmit}
          className="rounded-xl border border-zinc-200 bg-white/85 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/85"
        >
          <p className="mb-5 text-base font-semibold text-zinc-900 dark:text-zinc-50">{t('contact.formTitle')}</p>

          <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300" htmlFor="contact-email">
            {t('contact.emailLabel')}
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={senderEmail}
            onChange={(event) => {
              setSenderEmail(event.target.value)
            }}
            placeholder={t('contact.emailPlaceholder')}
            className="mb-4 block min-h-11 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500"
          />

          <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300" htmlFor="contact-message">
            {t('contact.messageLabel')}
          </label>
          <textarea
            id="contact-message"
            required
            rows={6}
            value={message}
            onChange={(event) => {
              setMessage(event.target.value)
            }}
            placeholder={t('contact.messagePlaceholder')}
            className="block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500"
          />

          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:bg-violet-500 dark:hover:bg-violet-400"
          >
            {status === 'loading' ? t('contact.sendingButton') : t('contact.sendButton')}
          </button>

          {statusMessage ? (
            <p
              className={
                status === 'success'
                  ? 'mt-3 text-sm text-emerald-700 dark:text-emerald-400'
                  : 'mt-3 text-sm text-rose-700 dark:text-rose-400'
              }
              role="status"
            >
              {statusMessage}
            </p>
          ) : null}
        </form>

        <aside className="rounded-xl border border-zinc-200 bg-white/85 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/85">
          <p className="text-base font-semibold text-zinc-900 dark:text-zinc-50">{t('contact.directTitle')}</p>
          <ul className="mt-3 flex flex-col gap-1.5 text-sm">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex min-h-[44px] items-center gap-2 font-medium text-violet-700 underline-offset-4 hover:underline dark:text-violet-300"
              >
                <HiOutlineEnvelope className="size-4 shrink-0" aria-hidden />
                <span className="text-zinc-700 dark:text-zinc-300">Email:</span>
                <span>{contact.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex min-h-[44px] items-center gap-2 font-medium text-violet-700 underline-offset-4 hover:underline dark:text-violet-300"
              >
                <HiOutlinePhone className="size-4 shrink-0" aria-hidden />
                <span className="text-zinc-700 dark:text-zinc-300">Mobile:</span>
                <span>{contact.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={contact.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 font-medium text-violet-700 underline-offset-4 hover:underline dark:text-violet-300"
              >
                <FaGithub className="size-4 shrink-0" aria-hidden />
                <span className="text-zinc-700 dark:text-zinc-300">GitHub:</span>
                <span className="break-all">{contact.socials.github}</span>
              </a>
            </li>
            <li>
              <a
                href={contact.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 font-medium text-violet-700 underline-offset-4 hover:underline dark:text-violet-300"
              >
                <FaLinkedin className="size-4 shrink-0" aria-hidden />
                <span className="text-zinc-700 dark:text-zinc-300">LinkedIn:</span>
                <span className="break-all">{contact.socials.linkedin}</span>
              </a>
            </li>
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{contact.note}</p>
        </aside>
      </div>
    </SectionContainer>
  )
}

export default Contact
