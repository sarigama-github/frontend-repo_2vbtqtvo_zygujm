import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_0%_-10%,#02c57a15,transparent),radial-gradient(900px_450px_at_100%_-10%,#f8fe0615,transparent)] pointer-events-none" />
      <Navbar />
      <main className="relative pt-28 md:pt-36">
        <div className="mx-auto max-w-5xl px-4 text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">SEO für Webagentur weblinity</h1>
          <p className="mt-4 text-white/80 max-w-2xl">Strukturierte Daten, klare interne Verlinkungen, präzise Überschriften – alles für bessere Rankings in Münster und Umgebung.</p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
            <p>Wichtige Keywords: Webdesign Münster, Webagentur Münster, Homepage erstellen lassen Münster, WordPress Agentur Münster, Framer Webdesign, Webseiten erstellen lassen, SEO Optimierung Münster, Relaunch Webdesign, professionelle Webseite.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
