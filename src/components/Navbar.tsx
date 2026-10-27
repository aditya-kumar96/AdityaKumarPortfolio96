
import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <a
          href="#home"
          onClick={() => setIsMenuOpen(false)}
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          Aadi<span className="text-blue-600">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 sm:inline-flex"
          >
            Let's Talk
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 md:hidden"
          >
            <span className="text-xl">{isMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-slate-200 bg-white px-6 py-3 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
