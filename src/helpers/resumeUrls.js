import resumePrimary from '../assets/Govind_Kumawat_Resume_.pdf'
import resumeAlternate from '../assets/Govind_Kumawat_Resume_s.pdf'

/** Both resume assets; each download picks one at random (see click handlers). */
export const RESUME_URLS = [resumePrimary, resumeAlternate]

export const DEFAULT_RESUME_URL = resumePrimary

export function pickRandomResumeUrl() {
  return RESUME_URLS[Math.floor(Math.random() * RESUME_URLS.length)]
}
