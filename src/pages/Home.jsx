import React from 'react'

import About from '../components/About/About'
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
    </main>
  )
}

export default Home
