import { Shell } from './components/layout/Shell/Shell'
import { AboutSection } from './components/sections/AboutSection/AboutSection'
import { ContactSection } from './components/sections/ContactSection/ContactSection'
import { HeroSection } from './components/sections/HeroSection/HeroSection'
import { ProblemsSection } from './components/sections/ProblemsSection/ProblemsSection'
import { ProjectsSection } from './components/sections/ProjectsSection/ProjectsSection'
import { SkillsSection } from './components/sections/SkillsSection/SkillsSection'
import { ExperienceSection } from './components/sections/ExperienceSection/ExperienceSection'

export default function App() {
  return (
    <Shell>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProblemsSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </Shell>
  )
}
