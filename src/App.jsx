import Home from './pages/Home'
import Leistungen from './pages/Leistungen'
import Agentur from './pages/Agentur'
import Portfolio from './pages/Portfolio'
import Kontakt from './pages/Kontakt'
import Analyse from './pages/Analyse'
import SEOPage from './pages/SEO'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leistungen" element={<Leistungen />} />
      <Route path="/agentur" element={<Agentur />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="/analyse" element={<Analyse />} />
      <Route path="/seo" element={<SEOPage />} />
    </Routes>
  )
}

export default App
