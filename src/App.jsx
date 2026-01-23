import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LogoSection from './components/LogoSection'
import VideoSection from './components/VideoSection'
import GuaranteeSection from './components/GuaranteeSection'
import TestimonialsSection from './components/TestimonialsSection'
import ManagementSection from './components/ManagementSection'
import PlatformsSection from './components/PlatformsSection'
import TimelineSection from './components/TimelineSection'
import WomenSection from './components/WomenSection'
import ComparisonSection from './components/ComparisonSection'
import AboutSection from './components/AboutSection'
import ApplicationStepsSection from './components/ApplicationStepsSection'
import StatsCtaSection from './components/StatsCtaSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page">
      <Header />

      <main>
        <HeroSection />
        <LogoSection />
        <VideoSection />
        <GuaranteeSection />
        <TestimonialsSection />
        <ManagementSection />
        <PlatformsSection />
        <TimelineSection />
        <WomenSection />
        <ComparisonSection />
        <AboutSection />
        <ApplicationStepsSection />
        <StatsCtaSection />
        <FaqSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
