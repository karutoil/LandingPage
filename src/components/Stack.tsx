import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { stack } from "../data"

export default function Stack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="stack" className="px-6 py-20">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-3 text-oxide">
          <span className="h-px w-10 bg-oxide" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-mist">/packages</span>
        </div>
        <h3 className="mb-10 font-display text-4xl font-medium text-pearl md:text-5xl">
          Tools installed.
        </h3>

        <div className="flex flex-wrap gap-3">
          {stack.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.02, duration: 0.3 }}
              className="rounded border border-dust/40 bg-plate px-4 py-2 font-mono text-sm text-pearl/90 transition hover:border-oxide hover:text-oxide"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
