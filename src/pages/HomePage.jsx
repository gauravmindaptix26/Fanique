import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import HeroSection from '../components/HeroSection'
import LogoSection from '../components/LogoSection'

const VideoSection = lazy(() => import('../components/VideoSection'))
const GlobeSection = lazy(() => import('../components/GlobeSection'))
const GuaranteeSection = lazy(() => import('../components/GuaranteeSection'))
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'))
const ManagementSection = lazy(() => import('../components/ManagementSection'))
const PlatformsSection = lazy(() => import('../components/PlatformsSection'))
const TimelineSection = lazy(() => import('../components/TimelineSection'))
const WomenSection = lazy(() => import('../components/WomenSection'))
const ComparisonSection = lazy(() => import('../components/ComparisonSection'))
const ApplicationStepsSection = lazy(() => import('../components/ApplicationStepsSection'))
const StatsCtaSection = lazy(() => import('../components/StatsCtaSection'))
const FaqSection = lazy(() => import('../components/FaqSection'))

const LazyMount = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current || isVisible) return
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isVisible])

  return <div ref={ref}>{isVisible ? children : null}</div>
}

const HomePage = () => (
  <>
    <HeroSection />
    <LogoSection />
    <Suspense fallback={null}>
      <LazyMount>
        <VideoSection />
      </LazyMount>
      <LazyMount>
        <GlobeSection />
      </LazyMount>
      <LazyMount>
        <GuaranteeSection />
      </LazyMount>
      <LazyMount>
        <TestimonialsSection />
      </LazyMount>
      <LazyMount>
        <ManagementSection />
      </LazyMount>
      <LazyMount>
        <PlatformsSection />
      </LazyMount>
      <LazyMount>
        <TimelineSection />
      </LazyMount>
      <LazyMount>
        <WomenSection />
      </LazyMount>
      <LazyMount>
        <ComparisonSection />
      </LazyMount>
      <LazyMount>
        <ApplicationStepsSection />
      </LazyMount>
      <LazyMount>
        <StatsCtaSection />
      </LazyMount>
      <LazyMount>
        <FaqSection />
      </LazyMount>
    </Suspense>
  </>
)

export default HomePage
