import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Process from '../components/Process'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_0%_-10%,#02c57a15,transparent),radial-gradient(900px_450px_at_100%_-10%,#f8fe0615,transparent)] pointer-events-none" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Process />
      </main>
      <Footer />
    </div>
  )
}
