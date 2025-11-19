import { ArrowRight, Layout, Settings, SearchCheck, ServerCog } from 'lucide-react'
import { Link } from 'react-router-dom'

const steps = [
  { icon: SearchCheck, title: 'Analyse & Strategie', desc: 'Kostenlose Website-Analyse, klare Roadmap und transparente Angebote.' },
  { icon: Layout, title: 'Design & UX', desc: 'Modernes, klares Webdesign mit Fokus auf Conversion und Markenwirkung.' },
  { icon: Settings, title: 'Entwicklung', desc: 'Sauberer Code, CMS-Setup (WordPress/Framer), technische SEO.' },
  { icon: ServerCog, title: 'Launch & Betreuung', desc: 'Go-Live, Monitoring, Updates, Hosting & Domain-Setup – alles aus einer Hand.' },
]

export default function Process() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <s.icon className="text-[#02c57a]" />
                <span className="text-white/60 text-sm">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-3 font-semibold text-lg">{s.title}</h3>
              <p className="text-white/70 text-sm mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-3 text-white/80">
          <span className="text-sm">Bereit, deine professionelle Webseite aufzubauen?</span>
          <ArrowRight className="hidden sm:block" />
          <Link to="/analyse" className="px-5 py-3 rounded-xl bg-[#02c57a] text-slate-900 font-semibold hover:brightness-110">Kostenlose Analyse starten</Link>
        </div>
      </div>
    </section>
  )
}
