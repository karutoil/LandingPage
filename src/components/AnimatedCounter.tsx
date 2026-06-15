import { useEffect, useRef, useState } from "react"
import { useInView, motion, useReducedMotion, useSpring, useTransform } from "framer-motion"

export default function AnimatedCounter({
  value,
  suffix = ""
}: {
  value: string
  suffix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const numeric = parseFloat(value.replace(/[^0-9.]/g, "")) || 0
  const [display, setDisplay] = useState(value)
  const reduced = useReducedMotion()

  const spring = useSpring(0, { mass: 1, stiffness: 75, damping: 15 })
  const rounded = useTransform(spring, (latest) =>
    Number.isInteger(numeric) ? Math.round(latest) : latest.toFixed(1)
  )

  useEffect(() => {
    if (!isInView) return
    if (reduced) {
      setDisplay(value)
      return
    }
    spring.set(numeric)
  }, [isInView, numeric, spring, reduced, value])

  useEffect(() => {
    if (reduced) return
    const unsubscribe = rounded.on("change", (latest) => {
      const raw = String(latest)
      setDisplay(value.replace(/[0-9.]+/, raw))
    })
    return unsubscribe
  }, [rounded, value, reduced])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {display}
      {suffix}
    </motion.span>
  )
}
