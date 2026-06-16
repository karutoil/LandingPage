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

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-void">
      <div className="pointer-events-none fixed inset-0 -z-10 noise opacity-40" />
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg bg-grid opacity-20" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_70%_0%,rgba(255,77,0,0.07),transparent_45%)]" />

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
