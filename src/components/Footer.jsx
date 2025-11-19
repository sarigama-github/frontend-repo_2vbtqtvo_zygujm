import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-12 mt-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 text-white/70 text-sm grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#02c57a]" />
            <span className="text-white font-bold">weblinity</span>
          </div>
          <p className="mt-3">Webagentur Münster – Webdesign, WordPress, Framer & SEO.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Leistungen</h4>
          <ul className="mt-3 space-y-2">
            <li><Link to="/leistungen#webdesign" className="hover:text-white">Webdesign</Link></li>
            <li><Link to="/leistungen#webentwicklung" className="hover:text-white">Webentwicklung</Link></li>
            <li><Link to="/leistungen#wordpress" className="hover:text-white">WordPress</Link></li>
            <li><Link to="/leistungen#framer" className="hover:text-white">Framer</Link></li>
            <li><Link to="/leistungen#seo" className="hover:text-white">SEO</Link></li>
            <li><Link to="/leistungen#relaunch" className="hover:text-white">Relaunch</Link></li>
            <li><Link to="/leistungen#hosting" className="hover:text-white">Hosting & Domain</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Unternehmen</h4>
          <ul className="mt-3 space-y-2">
            <li><Link to="/agentur" className="hover:text-white">Über uns</Link></li>
            <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link to="/kontakt" className="hover:text-white">Kontakt</Link></li>
            <li><Link to="/analyse" className="hover:text-white">Kostenlose Analyse</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Standort</h4>
          <p className="mt-3">weblinity – Webagentur Münster<br/>Hafenviertel, Münster</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 mt-8 text-white/40 text-xs">© {new Date().getFullYear()} weblinity. Alle Rechte vorbehalten.</div>
    </footer>
  )
}
