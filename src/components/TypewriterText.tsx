import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

export default function TypewriterText({ text, speed = 40 }: { text: string; speed?: number }) {
  const [display, setDisplay] = useState("")
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) {
      setDisplay(text)
      return
    }
    let i = 0
    const id = setInterval(() => {
      setDisplay(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed, reduced])

  return (
    <span className="font-mono text-lg text-signal md:text-2xl text-glow-signal">
      {display}
      {!reduced && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          className="ml-1 inline-block h-5 w-2 bg-signal align-middle"
        />
      )}
    </span>
  )
}
