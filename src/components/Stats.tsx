import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { stats } from "../data"

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="stats" className="px-6 py-20">
      <div ref={ref} className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="terminal-border bg-plate p-6 transition hover:border-oxide/30"
          >
            <div className="font-display text-4xl font-bold text-pearl md:text-5xl">
              {s.value}
              {s.suffix}
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-wider text-mist">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
