import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, MessageCircle, Github } from "lucide-react"
import { contact } from "../data"

const iconMap = {
  discord: MessageCircle,
  email: Mail,
  github: Github
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex items-center justify-center gap-3 text-oxide">
            <span className="h-px w-10 bg-oxide" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-mist">/contact</span>
            <span className="h-px w-10 bg-oxide" />
          </div>

          <h3 className="font-display text-4xl font-medium text-pearl md:text-6xl">
            Let&apos;s build something reliable.
          </h3>
          <p className="mt-4 text-lg text-mist">
            Infrastructure audits, game-server ops, AI tooling, or full-stack builds.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 grid gap-4 sm:grid-cols-3"
        >
          {Object.entries(contact).map(([key, c]) => {
            const Icon = iconMap[key as keyof typeof iconMap]
            return (
              <a
                key={key}
                href={c.href}
                target={key === "email" ? undefined : "_blank"}
                rel={key === "email" ? undefined : "noreferrer"}
                className="terminal-border flex flex-col items-center gap-3 bg-plate p-6 transition hover:border-oxide/40"
              >
                <Icon className="h-6 w-6 text-oxide" />
                <div className="text-center">
                  <div className="font-mono text-xs uppercase tracking-wider text-dust">{c.label}</div>
                  <div className="mt-1 font-medium text-pearl">{c.value}</div>
                </div>
              </a>
            )
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-12 font-mono text-xs text-dust/80"
        >
          No cookies · No trackers · No analytics
        </motion.p>
      </div>
    </section>
  )
}
