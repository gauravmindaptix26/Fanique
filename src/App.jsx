import './App.css'
import 'lenis/dist/lenis.css'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import CustomCursor from './components/CustomCursor'
import Header from './components/Header'
import Footer from './components/Footer'
import ErfahrungsberichtePage from './pages/ErfahrungsberichtePage'
import HomePage from './pages/HomePage'
import EarningsCalculatorPage from './pages/EarningsCalculatorPage'

const AppShell = () => {
  const location = useLocation()
  const isErf = location.pathname === '/erfahrungsberichte'
  const isHome = location.pathname === '/'

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 2.2,
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.1,
      lerp: 0.08,
      easing: t => 1 - Math.pow(1 - t, 3),
    })

    let rafId
    const raf = time => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const target = document.getElementById(id)
    if (!target) return
    const timer = setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)
    return () => clearTimeout(timer)
  }, [location])

  return (
    <div className={`page${isErf ? ' page--erf' : ''}${isHome ? ' page--home' : ''}`}>
      <CustomCursor />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/einkommensrechner" element={<EarningsCalculatorPage />} />
          <Route path="/erfahrungsberichte" element={<ErfahrungsberichtePage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
