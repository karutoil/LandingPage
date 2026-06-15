import { motion } from "framer-motion"
import { ArrowDown, Terminal } from "lucide-react"
import TypewriterText from "./TypewriterText"
import { identity, specs } from "../data"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center px-6 pt-24">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-7xl"
      >
        <motion.div variants={item} className="mb-6 flex items-center gap-3 text-oxide">
          <Terminal size={20} />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
            {identity.availability}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-6xl font-bold leading-[0.9] tracking-tight text-gradient md:text-8xl lg:text-9xl"
        >
          {identity.name}
        </motion.h1>

        <motion.div variants={item} className="mt-6 max-w-3xl">
          <TypewriterText text={identity.title} speed={35} />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-mist md:text-xl"
        >
          {identity.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="glow-oxide rounded bg-oxide px-7 py-3.5 font-mono text-sm font-bold text-void transition hover:scale-105"
          >
            Start a contract
          </a>
          <a
            href="#projects"
            className="rounded border border-mist/40 bg-plate px-7 py-3.5 font-mono text-sm font-bold text-pearl transition hover:border-signal hover:text-signal"
          >
            See the work
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-4 border-t border-dust/40 pt-8 md:grid-cols-5"
        >
          <Spec label="OS" value={specs.os} />
          <Spec label="Kernel" value={specs.kernel} />
          <Spec label="Shell" value={specs.shell} />
          <Spec label="Uptime" value={specs.uptime} />
          <Spec label="Status" value={specs.status} colSpan />
        </motion.div>
      </motion.div>

      <motion.a
        href="#stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-mist transition hover:text-oxide"
        aria-label="Scroll down"
      >
        <ArrowDown className="animate-bounce" size={24} />
      </motion.a>
    </section>
  )
}

function Spec({ label, value, colSpan = false }: { label: string; value: string; colSpan?: boolean }) {
  return (
    <div className={`${colSpan ? "col-span-2 md:col-span-1" : ""} font-mono`}>
      <div className="text-[10px] uppercase tracking-widest text-dust">{label}</div>
      <div className="mt-1 text-sm text-pearl/90">{value}</div>
    </div>
  )
}
