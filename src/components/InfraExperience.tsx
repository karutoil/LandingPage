import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { HardDrive, Gamepad2, ClipboardList } from "lucide-react"
import { infra } from "../data"

const icons = [HardDrive, Gamepad2, ClipboardList]

export default function InfraExperience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="infra" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-3 text-signal">
          <span className="h-px w-10 bg-signal" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest">/infrastructure</span>
        </div>
        <h3 className="mb-12 font-display text-4xl font-bold text-pearl md:text-5xl">
          Production scars, documented.
        </h3>

        <div className="grid gap-6 lg:grid-cols-3">
          {infra.map((block, i) => {
            const Icon = icons[i] || HardDrive
            return (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="terminal-border relative overflow-hidden bg-plate p-8"
              >
                <div className="absolute right-4 top-4 font-mono text-5xl font-bold text-void">
                  {block.id}
                </div>
                <Icon className="mb-6 h-8 w-8 text-oxide" />
                <h4 className="font-display text-2xl font-bold text-pearl">{block.title}</h4>
                <ul className="mt-6 space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-mist">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
