import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(600px_300px_at_10%_10%,#02c57a20,transparent),radial-gradient(600px_300px_at_90%_10%,#f8fe0620,transparent)]" />

      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#02c57a]" />
            Webagentur Münster – Webdesign, WordPress, SEO
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Junges Webdesign aus Münster – professionell, schnell, messbar
          </h1>
          <p className="mt-5 text-white/80 text-lg leading-relaxed">
            weblinity ist deine digitale Webagentur aus Münster. Wir konzipieren, designen und entwickeln performante Webseiten mit WordPress und Framer – SEO-stark, mobil-optimiert und bereit für Wachstum.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/analyse" className="px-6 py-3 rounded-xl bg-[#02c57a] text-slate-900 font-semibold hover:brightness-110 transition-all shadow-[0_10px_30px_rgba(2,197,122,0.35)]">
              Kostenlose Website-Analyse
            </Link>
            <Link to="/leistungen" className="px-6 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition">
              Leistungen entdecken
            </Link>
          </div>
          <div className="mt-6 text-xs text-white/60">
            Suchbegriffe: Webdesign Münster, Webagentur Münster, Homepage erstellen lassen Münster, WordPress Agentur Münster, Framer Webdesign, SEO Optimierung Münster.
          </div>
        </div>
        <div className="h-[420px] md:h-[540px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
