import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ErfahrungsberichtePage from './pages/ErfahrungsberichtePage'
import HomePage from './pages/HomePage'

const AppShell = () => {
  const location = useLocation()
  const isErf = location.pathname === '/erfahrungsberichte'

  return (
    <div className={`page${isErf ? ' page--erf' : ''}`}>
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
