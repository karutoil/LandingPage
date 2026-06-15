import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import AnimatedCounter from "./AnimatedCounter"
import { stats } from "../data"

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="stats" className="px-6 py-24">
      <div ref={ref} className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="terminal-border relative overflow-hidden bg-plate p-6"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-oxide to-signal opacity-60" />
            <div className="font-display text-4xl font-bold text-gradient md:text-5xl">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-wider text-mist">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
