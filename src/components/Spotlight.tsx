import { useEffect } from "react"
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"

export default function Spotlight() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 50, damping: 20 })
  const springY = useSpring(y, { stiffness: 50, damping: 20 })
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [x, y, reduced])

  if (reduced) return null

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed -left-40 -top-40 -z-10 h-80 w-80 rounded-full opacity-30 blur-3xl"
    >
      <div className="h-full w-full bg-[radial-gradient(circle,rgba(255,77,0,0.35),transparent_70%)]" />
    </motion.div>
  )
}
