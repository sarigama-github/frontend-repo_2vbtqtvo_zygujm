import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const projects = [
  { title: 'Tech Startup', before: 'Vorher: unübersichtlich', after: 'Nachher: klarer Funnel', tags: ['Framer', 'SEO', 'Design'] },
  { title: 'Mittelstand', before: 'Vorher: langsam', after: 'Nachher: 94/100 Pagespeed', tags: ['WordPress', 'Relaunch', 'Performance'] },
  { title: 'Kreativstudio', before: 'Vorher: veraltet', after: 'Nachher: modern & mutig', tags: ['Webdesign', 'Animation', 'UX'] },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_0%_-10%,#02c57a15,transparent),radial-gradient(900px_450px_at_100%_-10%,#f8fe0615,transparent)] pointer-events-none" />
      <Navbar />
      <main className="relative pt-28 md:pt-36">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Portfolio & Referenzen</h1>
          <p className="mt-4 text-white/80 max-w-2xl">Ausgewählte Case Studies mit Vorher/Nachher-Vergleich. Fokus auf klare Nutzerführung, Performance und SEO.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
                <div className="text-xs text-white/60">{p.before}</div>
                <div className="mt-2 text-lg font-semibold">{p.title}</div>
                <div className="text-sm text-[#02c57a]">{p.after}</div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
