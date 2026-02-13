import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Globe from 'react-globe.gl'

const DATA_URL = 'https://unpkg.com/globe.gl/example/datasets/world_population.csv'

const GlobeSection = () => {
  const { t } = useTranslation()
  const wrapRef = useRef(null)
  const globeRef = useRef(null)
  const [size, setSize] = useState({ width: 720, height: 720 })
  const [points, setPoints] = useState([])

  useEffect(() => {
    const handleResize = () => {
      if (!wrapRef.current) return
      const rect = wrapRef.current.getBoundingClientRect()
      const fallback = Math.min(window.innerWidth, window.innerHeight) * 0.8
      const base = Math.min(rect.width || fallback, rect.height || fallback)
      const next = Math.max(320, Math.min(base, 820))
      setSize({ width: next, height: next })
    }

    handleResize()

    let ro
    if (window.ResizeObserver) {
      ro = new ResizeObserver(handleResize)
      ro.observe(wrapRef.current)
    } else {
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (ro) ro.disconnect()
      else window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (!globeRef.current) return
    const controls = globeRef.current.controls()
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.4
    globeRef.current.pointOfView({ lat: 20, lng: 10, altitude: 2.2 })
  }, [])

  useEffect(() => {
    let isMounted = true
    fetch(DATA_URL)
      .then(res => res.text())
      .then(text => {
        if (!isMounted) return
        const lines = text.trim().split('\n')
        const headers = lines.shift()?.split(',') || []
        const latIdx = headers.indexOf('lat')
        const lngIdx = headers.indexOf('lng')
        const popIdx = headers.indexOf('pop')
        const parsed = lines.map(line => {
          const cols = line.split(',')
          return {
            lat: Number(cols[latIdx]),
            lng: Number(cols[lngIdx]),
            pop: Number(cols[popIdx]),
          }
        })
        setPoints(parsed)
      })
      .catch(() => {
        if (isMounted) setPoints([])
      })

    return () => {
      isMounted = false
    }
  }, [])

  const maxPop = useMemo(() => {
    if (!points.length) return 1
    return points.reduce((max, p) => (p.pop > max ? p.pop : max), 1)
  }, [points])

  const pointColor = (d) => {
    const tValue = d.pop / maxPop
    const hue = (0.6 - tValue * 0.5) * 360
    return `hsl(${hue}, 100%, 55%)`
  }

  return (
    <section className="globe-section globe-section--solo">
      <h2 className="globe-heading">
        <span>{t('globe.weAre')}</span>
        {t('globe.global')}
      </h2>
      <div className="globe-stage" ref={wrapRef}>
        <Globe
          ref={globeRef}
          width={size.width}
          height={size.height}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-dark.jpg"
          bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundImageUrl="https://unpkg.com/three-globe/example/img/night-sky.png"
          pointsData={points}
          pointLat="lat"
          pointLng="lng"
          pointAltitude={d => d.pop / maxPop}
          pointRadius={0.12}
          pointColor={pointColor}
          pointsMerge
          enablePointerInteraction={false}
          atmosphereColor="#6b51ff"
          atmosphereAltitude={0.25}
        />
      </div>
    </section>
  )
}

export default GlobeSection
