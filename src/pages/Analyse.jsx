import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Analyse() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_0%_-10%,#02c57a15,transparent),radial-gradient(900px_450px_at_100%_-10%,#f8fe0615,transparent)] pointer-events-none" />
      <Navbar />
      <main className="relative pt-28 md:pt-36">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Kostenlose Website-Analyse</h1>
          <p className="mt-4 text-white/80 max-w-2xl">Erhalte eine klare Einschätzung zu Design, Technik, SEO und Conversion-Potenzial. Konkrete Handlungsempfehlungen inklusive.</p>

          <form onSubmit={onSubmit} className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10" placeholder="Name" required />
              <input type="email" className="px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10" placeholder="E-Mail" required />
              <input className="md:col-span-2 px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10" placeholder="Domain deiner Website" required />
              <textarea rows="5" className="md:col-span-2 px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10" placeholder="Was ist dein Ziel? Leads, Sichtbarkeit, Relaunch?" />
            </div>
            <button className="mt-6 px-6 py-3 rounded-xl bg-[#02c57a] text-slate-900 font-semibold hover:brightness-110">Analyse anfragen</button>
            {sent && <div className="mt-3 text-[#02c57a]">Danke! Wir melden uns mit deiner Analyse.</div>}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
