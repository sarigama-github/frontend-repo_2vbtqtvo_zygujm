import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Kontakt() {
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
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Kontakt – Webagentur Münster</h1>
          <p className="mt-4 text-white/80 max-w-2xl">Lass uns über dein Projekt sprechen. Klar, direkt und auf Augenhöhe. Hinweis: Du kannst jederzeit eine kostenlose Website-Analyse anfragen.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
              <div className="grid grid-cols-1 gap-4">
                <input className="px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10" placeholder="Name" required />
                <input type="email" className="px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10" placeholder="E-Mail" required />
                <input className="px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10" placeholder="Unternehmen / Domain" />
                <textarea rows="5" className="px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10" placeholder="Projektbeschreibung" />
                <button className="px-6 py-3 rounded-xl bg-[#02c57a] text-slate-900 font-semibold hover:brightness-110">Nachricht senden</button>
                {sent && <div className="text-[#02c57a]">Danke! Wir melden uns schnellstmöglich.</div>}
              </div>
            </form>
            <div className="text-white/80">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="font-semibold text-white">weblinity – Webagentur Münster</div>
                <div className="text-sm text-white/70 mt-2">Hafenviertel, 48155 Münster</div>
                <div className="mt-4 text-sm">E-Mail: hello@weblinity.de</div>
                <div className="mt-1 text-sm">Telefon: +49 (0)251 000000</div>
                <a href="/analyse" className="mt-6 inline-block px-5 py-3 rounded-xl bg-[#f8fe06] text-slate-900 font-semibold">Kostenlose Website-Analyse</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
