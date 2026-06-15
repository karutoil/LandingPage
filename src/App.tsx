import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Stack from "./components/Stack"
import About from "./components/About"
import AIProjects from "./components/AIProjects"
import InfraExperience from "./components/InfraExperience"
import MajorProject from "./components/MajorProject"
import Contact from "./components/Contact"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import BackgroundScanline from "./components/BackgroundScanline"
import Spotlight from "./components/Spotlight"
import { useScroll, useTransform, motion } from "framer-motion"

export default function App() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 2000], [0, -120])
  const y2 = useTransform(scrollY, [0, 2000], [0, 120])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-void">
      <div className="pointer-events-none fixed inset-0 -z-10 noise opacity-60" />
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg bg-grid opacity-30" />
      <BackgroundScanline />
      <Spotlight />

      <motion.div
        style={{ y: y1 }}
        className="pointer-events-none fixed left-0 top-0 -z-10 h-[40rem] w-[40rem] rounded-full bg-oxide/5 blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none fixed bottom-0 right-0 -z-10 h-[35rem] w-[35rem] rounded-full bg-signal/5 blur-[120px]"
      />

      <Navigation />
      <main>
        <Hero />
        <Stats />
        <About />
        <Stack />
        <AIProjects />
        <InfraExperience />
        <MajorProject />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
