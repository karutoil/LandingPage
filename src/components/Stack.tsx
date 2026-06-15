import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { stack } from "../data"

export default function Stack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="stack" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-3 text-signal">
          <span className="h-px w-10 bg-signal" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest">/packages</span>
        </div>
        <h3 className="mb-10 font-display text-4xl font-bold text-pearl md:text-5xl">
          Tools installed.
        </h3>

        <div className="flex flex-wrap gap-3">
          {stack.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.03, duration: 0.35 }}
              className="rounded border border-dust/60 bg-plate px-4 py-2 font-mono text-sm text-pearl/90 transition hover:-translate-y-0.5 hover:border-oxide hover:text-oxide"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
