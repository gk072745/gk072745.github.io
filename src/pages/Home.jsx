import React from 'react'

import About from '../components/About/About'
import Certifications from '../components/Certifications/Certifications'
import Education from '../components/Education/Education'
import Experience from '../components/Experience/Experience'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
    </main>
  )
}

export default Home
