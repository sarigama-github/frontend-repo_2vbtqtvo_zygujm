import { CheckCircle2, Rocket, GaugeCircle, ShieldCheck, Stars } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: Rocket,
    title: 'Webdesign & Entwicklung',
    desc: 'Individuelles Webdesign, schnelle Umsetzung, klare Nutzerführung. Pixelgenau mit modernen Frameworks.',
  },
  {
    icon: Stars,
    title: 'WordPress & Framer',
    desc: 'Flexible CMS-Lösungen mit WordPress oder ultraschnelle Web-Experiences mit Framer – passend zu deinem Projekt.',
  },
  {
    icon: GaugeCircle,
    title: 'SEO & Performance',
    desc: 'Technische SEO, saubere Struktur, blitzschnelle Ladezeiten – sichtbar in Google und spürbar für Nutzer.',
  },
  {
    icon: ShieldCheck,
    title: 'Relaunch & Betreuung',
    desc: 'Sicherer Website-Relaunch, kontinuierliche Weiterentwicklung, Hosting & Domain-Setup inklusive.',
  },
]

export default function Features() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white hover:bg-white/10 transition-colors">
              <f.icon className="text-[#02c57a]" />
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="text-white/70 text-sm mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-white/70">
          <CheckCircle2 className="text-[#02c57a]" /> Transparenter Prozess
          <CheckCircle2 className="text-[#02c57a]" /> Feste Ansprechpartner
          <CheckCircle2 className="text-[#02c57a]" /> Schnelle Umsetzung
          <CheckCircle2 className="text-[#02c57a]" /> Fokus: Ergebnisse
        </div>
        <div className="mt-8">
          <Link to="/leistungen" className="inline-block px-5 py-3 rounded-xl bg-[#f8fe06] text-slate-900 font-semibold hover:brightness-110">
            Alle Leistungen ansehen
          </Link>
        </div>
      </div>
    </section>
  )
}
