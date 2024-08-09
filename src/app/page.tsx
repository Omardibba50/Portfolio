import dynamic from 'next/dynamic'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'

const Projects = dynamic(() => import('../components/Projects'), { ssr: false })

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
     
    </>
  )
}