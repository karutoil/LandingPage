import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Cpu, Sparkles } from "lucide-react"
import { projects, aiSkills } from "../data"

export default function AIProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-3 text-oxide">
          <span className="h-px w-10 bg-oxide" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-mist">/ai</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr,1.4fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="terminal-border h-fit bg-plate p-8"
          >
            <div className="mb-6 flex items-center gap-3 text-oxide">
              <Cpu size={22} />
              <h3 className="font-display text-2xl font-medium text-pearl">AI Engineering</h3>
            </div>
            <ul className="space-y-4">
              {aiSkills.core.map((s) => (
                <li key={s} className="flex gap-3 text-mist">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-oxide" />
                  <span className="leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3 border-t border-dust/30 pt-6">
              <Sparkles size={18} className="mt-1 shrink-0 text-oxide" />
              <p className="text-sm leading-relaxed text-mist/80">{aiSkills.approach}</p>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="terminal-border bg-plate p-6 transition hover:border-oxide/30"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h4 className="font-display text-2xl font-medium text-pearl">{p.title}</h4>
                    <p className="mt-1 font-mono text-xs text-mist">{p.tech}</p>
                  </div>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded border border-dust/40 px-3 py-1.5 font-mono text-xs text-pearl/90 transition hover:border-oxide hover:text-oxide"
                  >
                    Repo <ExternalLink size={12} />
                  </a>
                </div>
                <p className="mt-4 leading-relaxed text-mist">{p.description}</p>
                {p.bullets && (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-mist/80">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-oxide" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
