'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience/Experience'
import Projects from '@/components/Projects/Projects'
import Music from '@/components/Music/Music'
import Footer from '@/components/Footer/Footer'

const sections = [
  { id: 'about', label: 'Acerca de mi' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'music', label: 'Mi música' },
  { id: 'goals', label: 'Mis objetivos' },
]

const TRANSITION_LOCK_MS = 1600
const WHEEL_GESTURE_END_MS = 600
const WHEEL_DELTA_THRESHOLD = 12
const TOUCH_DELTA_THRESHOLD = 48
const PAGE_COUNT = sections.length

export default function Page() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const isTransitioningRef = useRef(false)
  const isWheelGestureActiveRef = useRef(false)
  const isTouchGestureActiveRef = useRef(false)
  const wheelEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const touchStartYRef = useRef<number | null>(null)
  const pages = [<Hero />, <Experience isActive={currentPage === 1} />, <Projects />, <Music />, <Footer />]

  const lockTransition = () => {
    isTransitioningRef.current = true

    if (transitionTimerRef.current) {
      clearTimeout(transitionTimerRef.current)
    }

    transitionTimerRef.current = setTimeout(() => {
      isTransitioningRef.current = false
    }, TRANSITION_LOCK_MS)
  }

  const handleNavigate = (index: number) => {
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches) {
      setCurrentPage(index)
      document.getElementById(sections[index].id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    if (index === currentPage || isTransitioningRef.current) {
      return
    }

    isWheelGestureActiveRef.current = false
    isTouchGestureActiveRef.current = false

    if (wheelEndTimerRef.current) {
      clearTimeout(wheelEndTimerRef.current)
    }

    lockTransition()
    setCurrentPage(index)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const syncMobileState = () => setIsMobile(mediaQuery.matches)

    syncMobileState()
    mediaQuery.addEventListener('change', syncMobileState)

    return () => {
      mediaQuery.removeEventListener('change', syncMobileState)
    }
  }, [])

  useEffect(() => {
    if (isMobile) {
      return
    }

    const isInsideNativeScroll = (event: Event) => {
      const target = event.target as HTMLElement | null
      return Boolean(target?.closest('.experience-modal'))
    }

    const moveOneSection = (direction: 1 | -1) => {
      lockTransition()
      setCurrentPage((prev) => Math.max(0, Math.min(PAGE_COUNT - 1, prev + direction)))
    }

    const markWheelGestureActive = () => {
      isWheelGestureActiveRef.current = true

      if (wheelEndTimerRef.current) {
        clearTimeout(wheelEndTimerRef.current)
      }

      wheelEndTimerRef.current = setTimeout(() => {
        isWheelGestureActiveRef.current = false
      }, WHEEL_GESTURE_END_MS)
    }

    const handleWheel = (event: WheelEvent) => {
      if (isInsideNativeScroll(event)) {
        return
      }

      event.preventDefault()

      if (Math.abs(event.deltaY) < WHEEL_DELTA_THRESHOLD) {
        return
      }

      const wasWheelGestureActive = isWheelGestureActiveRef.current
      markWheelGestureActive()

      if (isTransitioningRef.current || wasWheelGestureActive) {
        return
      }

      moveOneSection(event.deltaY > 0 ? 1 : -1)
    }

    const handleTouchStart = (event: TouchEvent) => {
      if (isInsideNativeScroll(event)) {
        touchStartYRef.current = null
        return
      }

      touchStartYRef.current = event.touches[0]?.clientY ?? null
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (isInsideNativeScroll(event) || touchStartYRef.current === null) {
        return
      }

      const currentY = event.touches[0]?.clientY
      if (currentY === undefined) {
        return
      }

      const deltaY = touchStartYRef.current - currentY

      if (Math.abs(deltaY) < TOUCH_DELTA_THRESHOLD) {
        return
      }

      event.preventDefault()

      if (isTransitioningRef.current || isTouchGestureActiveRef.current) {
        return
      }

      isTouchGestureActiveRef.current = true
      moveOneSection(deltaY > 0 ? 1 : -1)
    }

    const handleTouchEnd = () => {
      touchStartYRef.current = null

      setTimeout(() => {
        isTouchGestureActiveRef.current = false
      }, TRANSITION_LOCK_MS)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd)
    window.addEventListener('touchcancel', handleTouchEnd)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('touchcancel', handleTouchEnd)

      if (wheelEndTimerRef.current) {
        clearTimeout(wheelEndTimerRef.current)
      }

      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current)
      }
    }
  }, [isMobile])

  useEffect(() => {
    if (!isMobile) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visibleEntry) {
          return
        }

        const nextIndex = sections.findIndex((section) => section.id === visibleEntry.target.id)
        if (nextIndex >= 0) {
          setCurrentPage(nextIndex)
        }
      },
      {
        rootMargin: '-36% 0px -52% 0px',
        threshold: [0.12, 0.35, 0.6],
      }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [isMobile])

  return (
    <main className="portfolio-shell">
      <div className="portfolio-sidebar">
        <Header currentPage={currentPage} sections={sections} onNavigate={handleNavigate} />
      </div>
      <div className="portfolio-content">
        {pages.map((PageComponent, index) => (
          <motion.div
            key={index}
            id={sections[index].id}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: isMobile || currentPage === index ? 1 : 0,
              y: isMobile || currentPage === index ? 0 : currentPage < index ? 100 : -100,
            }}
            exit={{
              opacity: 0,
              y: currentPage < index ? -100 : 100,
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
            }}
            className={`portfolio-panel ${currentPage === index ? 'is-active' : ''}`}
          >
            {PageComponent}
          </motion.div>
        ))}
      </div>
      <div className="desktop-scroll-progress" aria-label="Navegacion por secciones">
        <div className="scroll-progress-rail" aria-hidden="true">
          <span style={{ height: `${((currentPage + 1) / PAGE_COUNT) * 100}%` }} />
        </div>

        <div className="scroll-progress-dots">
          {sections.map((section, index) => (
            <button
              key={section.id}
              type="button"
              className={currentPage === index ? 'active' : ''}
              onClick={() => handleNavigate(index)}
              aria-label={`Ir a ${section.label}`}
              aria-current={currentPage === index ? 'page' : undefined}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
