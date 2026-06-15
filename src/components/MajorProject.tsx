import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Rocket, ExternalLink } from "lucide-react"
import { majorProject } from "../data"

export default function MajorProject() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="catalyst" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="terminal-border relative overflow-hidden bg-gradient-to-br from-panel to-panel-alt p-8 md:p-12"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-oxide/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-signal/5 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3 text-oxide">
              <span className="h-px w-10 bg-oxide" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest">/major_project</span>
            </div>

            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <Rocket className="h-8 w-8 text-oxide" />
                  <h3 className="font-display text-4xl font-bold text-gradient md:text-5xl">
                    {majorProject.name}
                  </h3>
                </div>
                <p className="mt-2 font-mono text-sm text-mist">{majorProject.description}</p>
              </div>
              <a
                href={majorProject.repo}
                target="_blank"
                rel="noreferrer"
                className="flex shrink-0 items-center gap-2 rounded border border-mist/40 bg-void px-5 py-2.5 font-mono text-sm text-pearl transition hover:border-oxide hover:text-oxide"
              >
                View repo <ExternalLink size={14} />
              </a>
            </div>

            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-dust">Stack</p>
            <p className="mt-2 max-w-4xl leading-relaxed text-signal">{majorProject.stack}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {majorProject.features.map((f) => (
                <div
                  key={f}
                  className="rounded border border-dust/40 bg-void/60 px-4 py-3 font-mono text-sm text-pearl/90"
                >
                  <span className="mr-2 text-oxide">~</span>{f}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
