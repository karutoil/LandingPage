import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Server, Cpu, Brain } from "lucide-react"
import { identity } from "../data"

const icons = [Server, Cpu, Brain]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr,320px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-3 text-oxide">
              <span className="h-px w-10 bg-oxide" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-mist">/identity</span>
            </div>
            <h3 className="font-display text-4xl font-medium text-pearl md:text-5xl">
              Built for the parts you never see.
            </h3>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-mist">
              {identity.bio.map((p, i) => {
                const Icon = icons[i] || Server
                return (
                  <p key={i} className="flex gap-4">
                    <Icon className="mt-1.5 h-5 w-5 shrink-0 text-oxide" />
                    <span dangerouslySetInnerHTML={{ __html: boldTerms(p) }} />
                  </p>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative h-fit"
          >
            <div className="terminal-border relative overflow-hidden bg-plate p-2">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-oxide/5 to-transparent" />
              <img
                src={identity.avatar}
                alt={`${identity.name} avatar`}
                className="aspect-square w-full rounded object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded bg-void/80 px-3 py-1.5 backdrop-blur">
                <span className="font-mono text-xs text-oxide">{identity.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function boldTerms(text: string) {
  const terms = [
    "Proxmox",
    "PXE",
    "VirtFusion",
    "Tenantos",
    "Minecraft",
    "FiveM",
    "Factorio",
    "Space Engineers",
    "Torch",
    "AI engineering"
  ]
  let html = text
  terms.forEach((t) => {
    html = html.replace(
      new RegExp(`\\b${t}\\b`, "g"),
      `<span class="font-semibold text-pearl">${t}</span>`
    )
  })
  return html
}
