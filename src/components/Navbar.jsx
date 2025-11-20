import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-3">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-400 via-amber-300 to-cyan-400 text-slate-900 shadow-inner">
              <Sparkles size={18} />
            </span>
            <div className="leading-tight">
              <div className="text-sm uppercase tracking-[0.25em] text-amber-200/90">Nebula</div>
              <div className="text-lg font-semibold text-white">AI Video Studio</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="text-sm text-cyan-100/80 hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-amber-300 via-fuchsia-400 to-cyan-300 px-4 py-2 text-slate-900 font-semibold shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
              Get a quote
            </a>
          </nav>

          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl md:hidden">
            <div className="flex flex-col p-4">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-cyan-100/90 hover:bg-white/5 hover:text-white">
                  {n.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-300 via-fuchsia-400 to-cyan-300 px-4 py-3 text-slate-900 font-semibold">
                Get a quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
