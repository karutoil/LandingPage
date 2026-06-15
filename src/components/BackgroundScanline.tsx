import { motion, useReducedMotion } from "framer-motion"

export default function BackgroundScanline() {
  const reduced = useReducedMotion()
  if (reduced) return null

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-20">
      <motion.div
        animate={{ top: ["-10%", "110%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-oxide to-transparent shadow-[0_0_20px_rgba(255,77,0,0.5)]"
      />
    </div>
  )
}
