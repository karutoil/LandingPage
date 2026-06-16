import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "AI Projects", href: "#projects" },
  { label: "Infrastructure", href: "#infra" },
  { label: "Catalyst", href: "#catalyst" },
  { label: "Contact", href: "#contact" }
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-dust/30 bg-bunker/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-mono text-sm font-bold tracking-widest text-pearl">
          karutoil
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-xs font-medium uppercase tracking-wider text-mist transition-colors hover:text-pearl/95"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-oxide transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://github.com/karutoil"
          className="hidden md:inline-flex rounded border border-dust/60 bg-plate px-4 py-2 text-xs font-medium text-pearl transition hover:border-oxide hover:text-oxide"
        >
          GitHub
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded border border-dust/60 p-2 text-pearl hover:border-oxide hover:text-oxide"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-b border-dust/30 bg-bunker/95 px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium uppercase tracking-wider text-mist hover:text-oxide"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
