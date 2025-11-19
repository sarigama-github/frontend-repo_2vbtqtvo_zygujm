import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Agentur() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_0%_-10%,#02c57a15,transparent),radial-gradient(900px_450px_at_100%_-10%,#f8fe0615,transparent)] pointer-events-none" />
      <Navbar />
      <main className="relative pt-28 md:pt-36">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Über weblinity – Webagentur Münster</h1>
          <p className="mt-4 text-white/80 max-w-2xl">Jung, digital, performance-orientiert. Wir gestalten hochwertige Webseiten mit moderner Technik und klarer Kommunikation.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Qualität', desc: 'Saubere Prozesse, starke Designs, messbare Ergebnisse.' },
              { title: 'Moderne Technik', desc: 'WordPress, Framer, Headless – passend zum Projekt.' },
              { title: 'Transparenz', desc: 'Klare Angebote, offene Kommunikation, feste Ansprechpartner.' },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
                <h3 className="font-semibold text-lg">{c.title}</h3>
                <p className="text-white/70 mt-2 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-white/70 text-sm">
            Standort: Münster – Nähe Hafen, kurze Wege zu Unternehmen und Startups in der Region.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
