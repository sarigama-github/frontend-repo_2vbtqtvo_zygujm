import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const sections = [
  { id: 'webdesign', title: 'Webdesign Münster', text: 'Klares, conversion-starkes Webdesign mit Fokus auf Nutzerführung, Markenwirkung und Performance. Minimalistisch, modern und auf Wachstum ausgelegt.' },
  { id: 'webentwicklung', title: 'Webentwicklung', text: 'Sauberer, wartbarer Code mit modernen Frameworks. Performance, Barrierefreiheit und Skalierbarkeit sind Standard.' },
  { id: 'wordpress', title: 'WordPress Agentur Münster', text: 'Flexible CMS-Lösungen, individuelle Themes, Performance-Optimierung und technische Sicherheit für WordPress.' },
  { id: 'framer', title: 'Framer Webdesign', text: 'Ultra-schnelle, animierte Websites mit Framer – ideal für Landingpages, Startups und kreative Marken.' },
  { id: 'seo', title: 'SEO Optimierung Münster', text: 'Technische SEO, Content-Struktur, Core Web Vitals und interne Verlinkung für bessere Rankings.' },
  { id: 'relaunch', title: 'Website-Relaunch', text: 'Sicherer Relaunch mit sauberer Weiterleitung, Content-Migration und Ranking-Schutz.' },
  { id: 'hosting', title: 'Hosting & Domain', text: 'Einrichtung von Hosting, SSL, E-Mails und Domain-Setup – zuverlässig und unkompliziert.' },
]

export default function Leistungen() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_0%_-10%,#02c57a15,transparent),radial-gradient(900px_450px_at_100%_-10%,#f8fe0615,transparent)] pointer-events-none" />
      <Navbar />
      <main className="relative pt-28 md:pt-36">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Leistungen – Webseiten erstellen lassen</h1>
          <p className="mt-4 text-white/80 max-w-2xl">Von Webdesign über WordPress bis SEO – wir realisieren performante Websites, die Leads generieren und messbare Ergebnisse liefern.</p>

          <div className="mt-10 space-y-12">
            {sections.map((s) => (
              <section id={s.id} key={s.id} className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-white">{s.title}</h2>
                <p className="mt-3 text-white/80">{s.text}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/60">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Modernes UI/UX</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Mobile First</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Schnelle Ladezeiten</span>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12">
            <a href="/analyse" className="inline-block px-6 py-3 rounded-xl bg-[#02c57a] text-slate-900 font-semibold hover:brightness-110">Kostenlose Website-Analyse</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
