import { Shell } from './components/layout/Shell/Shell'
import { AboutSection } from './components/sections/AboutSection/AboutSection'
import { ContactSection } from './components/sections/ContactSection/ContactSection'
import { HeroSection } from './components/sections/HeroSection/HeroSection'
import { ProblemsSection } from './components/sections/ProblemsSection/ProblemsSection'
import { ProjectsSection } from './components/sections/ProjectsSection/ProjectsSection'
import { SkillsSection } from './components/sections/SkillsSection/SkillsSection'
import { ExperienceSection } from './components/sections/ExperienceSection/ExperienceSection'
import { Reveal } from './components/common/Reveal/Reveal'

export default function App() {
  return (
    <Shell>
      <Reveal direction="left">
        <HeroSection />
      </Reveal>
      <Reveal direction="right">
        <AboutSection />
      </Reveal>
      <Reveal direction="left">
        <ExperienceSection />
      </Reveal>
      <Reveal direction="right">
        <ProblemsSection />
      </Reveal>
      <Reveal direction="left">
        <ProjectsSection />
      </Reveal>
      <Reveal direction="right">
        <SkillsSection />
      </Reveal>
      <Reveal direction="left">
        <ContactSection />
      </Reveal>
    </Shell>
  )
}