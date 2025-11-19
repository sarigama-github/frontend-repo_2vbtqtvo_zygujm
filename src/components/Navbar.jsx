import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinkClasses = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
    isActive ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-[#02c57a] shadow-[0_0_20px_rgba(2,197,122,0.6)]" />
              <span className="text-white font-bold text-lg tracking-tight">weblinity</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <NavLink to="/leistungen" className={navLinkClasses}>Leistungen</NavLink>
              <NavLink to="/portfolio" className={navLinkClasses}>Portfolio</NavLink>
              <NavLink to="/agentur" className={navLinkClasses}>Über uns</NavLink>
              <NavLink to="/kontakt" className={navLinkClasses}>Kontakt</NavLink>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Link to="/analyse" className="px-4 py-2 rounded-xl bg-[#02c57a] text-slate-900 font-semibold hover:brightness-110 transition-all shadow-[0_8px_20px_rgba(2,197,122,0.35)]">
                Kostenlose Analyse
              </Link>
            </div>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-2 pb-3">
              <nav className="flex flex-col">
                <NavLink to="/leistungen" className={navLinkClasses} onClick={() => setOpen(false)}>Leistungen</NavLink>
                <NavLink to="/portfolio" className={navLinkClasses} onClick={() => setOpen(false)}>Portfolio</NavLink>
                <NavLink to="/agentur" className={navLinkClasses} onClick={() => setOpen(false)}>Über uns</NavLink>
                <NavLink to="/kontakt" className={navLinkClasses} onClick={() => setOpen(false)}>Kontakt</NavLink>
                <Link to="/analyse" onClick={() => setOpen(false)} className="mt-2 px-4 py-2 rounded-xl bg-[#02c57a] text-slate-900 font-semibold text-center">Kostenlose Analyse</Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
