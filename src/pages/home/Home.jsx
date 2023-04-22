import React from 'react'
import HeroSection from '../../components/hero/HeroSection'
import ProjectsSection from '../../components/projects/ProjectsSection'
import SkillsSection from '../../components/skills/SkillsSection'
import AboutSection from '../../components/about/AboutSection'
import ContactSection from '../../components/contact/ContactSection'

function Home({projects, contacts}) {

 



  return (
    <div>
        <HeroSection contacts={contacts}/>
        <ProjectsSection projects={projects}/>
        <SkillsSection />
        <AboutSection contacts={contacts}/>
        <ContactSection contacts={contacts}/>
    </div>
  )
}

export default Home