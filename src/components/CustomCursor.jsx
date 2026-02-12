import { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const rafRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const ringTarget = useRef({ x: 0, y: 0 })
  const magnetTarget = useRef(null)
  const enabledRef = useRef(false)

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const isCoarse =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(pointer: coarse)').matches

    if (prefersReduced || isCoarse) {
      return
    }

    enabledRef.current = true
    document.body.classList.add('cursor-custom')

    const onMove = e => {
      target.current.x = e.clientX
      target.current.y = e.clientY
      ringTarget.current.x = e.clientX
      ringTarget.current.y = e.clientY
    }

    const onLeave = () => {
      if (dotRef.current) {
        dotRef.current.style.opacity = '0'
      }
      if (ringRef.current) {
        ringRef.current.style.opacity = '0'
      }
    }

    const onEnter = () => {
      if (dotRef.current) {
        dotRef.current.style.opacity = '1'
      }
      if (ringRef.current) {
        ringRef.current.style.opacity = '1'
      }
    }

    const isMagneticTarget = el =>
      el &&
      (el.closest('[data-magnet]') ||
        el.closest('a') ||
        el.closest('button') ||
        el.closest('.hero-cta'))

    const onPointerOver = e => {
      const targetEl = isMagneticTarget(e.target)
      if (!targetEl) return
      magnetTarget.current = targetEl
      if (ringRef.current) ringRef.current.classList.add('is-active')
    }

    const onPointerOut = e => {
      if (!magnetTarget.current) return
      if (e.relatedTarget && magnetTarget.current.contains(e.relatedTarget)) return
      magnetTarget.current = null
      if (ringRef.current) ringRef.current.classList.remove('is-active')
    }

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.25
      pos.current.y += (target.current.y - pos.current.y) * 0.25
      ringPos.current.x += (ringTarget.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (ringTarget.current.y - ringPos.current.y) * 0.12

      if (magnetTarget.current) {
        const rect = magnetTarget.current.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        ringTarget.current.x = cx
        ringTarget.current.y = cy
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseout', onLeave)
    window.addEventListener('mouseover', onEnter)
    window.addEventListener('pointerover', onPointerOver)
    window.addEventListener('pointerout', onPointerOut)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      enabledRef.current = false
      document.body.classList.remove('cursor-custom')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
      window.removeEventListener('mouseover', onEnter)
      window.removeEventListener('pointerover', onPointerOver)
      window.removeEventListener('pointerout', onPointerOut)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}

export default CustomCursor
