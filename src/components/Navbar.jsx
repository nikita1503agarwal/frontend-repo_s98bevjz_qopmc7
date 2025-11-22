import { useState } from 'react'
import { Menu, X, Mail } from 'lucide-react'

const navItems = [
  { label: 'Accueil', href: '#top' },
  { label: 'À propos', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/10">
          <div className="flex items-center justify-between px-5 py-4">
            <a href="#top" className="group inline-flex items-center gap-2" onClick={(e)=>{e.preventDefault();handleNav('#top')}}>
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 shadow ring-1 ring-white/20 grid place-items-center text-white font-bold">M</div>
              <div className="leading-tight">
                <p className="text-white font-semibold">Marketing & Com'</p>
                <p className="text-xs text-white/70">Spécialiste</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e)=>{e.preventDefault();handleNav(item.href)}}
                  className="text-sm text-white/80 hover:text-white transition"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e)=>{e.preventDefault();handleNav('#contact')}}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:from-blue-500 hover:to-indigo-500 transition"
              >
                <Mail className="h-4 w-4" /> Me contacter
              </a>
            </nav>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm">
          <div className="absolute right-4 top-6">
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white bg-white/5"
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="mx-4 mt-24 rounded-2xl border border-white/10 bg-white/10 p-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e)=>{e.preventDefault();handleNav(item.href)}}
                  className="rounded-lg px-4 py-3 text-base text-white/90 hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e)=>{e.preventDefault();handleNav('#contact')}}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-sm font-medium text-white shadow"
              >
                <Mail className="h-4 w-4" /> Me contacter
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
