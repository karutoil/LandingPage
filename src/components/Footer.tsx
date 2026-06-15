export default function Footer() {
  return (
    <footer className="border-t border-dust/30 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <div className="font-display text-lg font-bold text-pearl">karutoil</div>
          <p className="mt-1 font-mono text-xs text-dust">
            Systems · Infrastructure · AI Tooling
          </p>
        </div>
        <p className="font-mono text-xs text-dust/80">
          Built with React, Vite, Tailwind & Framer Motion. Deployed via GitHub Actions.
        </p>
      </div>
    </footer>
  )
}
