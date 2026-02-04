import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ErfahrungsberichtePage from './pages/ErfahrungsberichtePage'
import HomePage from './pages/HomePage'

const AppShell = () => {
  const location = useLocation()
  const isErf = location.pathname === '/erfahrungsberichte'
  const isHome = location.pathname === '/'

  return (
    <div className={`page${isErf ? ' page--erf' : ''}${isHome ? ' page--home' : ''}`}>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
