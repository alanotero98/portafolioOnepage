'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience/Experience'
import Projects from '@/components/Projects/Projects'
import Footer from '@/components/Footer/Footer'

export default function Page() {
  const [currentPage, setCurrentPage] = useState(0)
  const isScrollingRef = useRef(false)
  const pages = [<Hero />, <Experience />, <Projects />, <Footer />]
  const deltaThreshold = 1 // Umbral mínimo para deltaY

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isScrollingRef.current) return

      if (Math.abs(event.deltaY) < deltaThreshold) return // Ignorar scrolls suaves

      event.preventDefault()
      isScrollingRef.current = true

      const isScrollingDown = event.deltaY > 0

      if (isScrollingDown) {
        setCurrentPage((prev) => Math.min(pages.length - 1, prev + 1))
      } else {
        setCurrentPage((prev) => Math.max(0, prev - 1))
      }

      setTimeout(() => {
        isScrollingRef.current = false
      }, 1000) // Ajusta según la duración de tu animación
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [pages.length])

  return (
    <main className="flex bg-[#0F172A] h-screen overflow-hidden">
      <div className="w-[45%] h-screen sticky top-0 left-0 z-20">
        <Header currentPage={currentPage}/>
      </div>
      <div className="w-[55%] h-screen overflow-hidden z-10">
        {pages.map((PageComponent, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }} // Cuando entra, viene desde abajo
            animate={{
              opacity: currentPage === index ? 1 : 0,
              y: currentPage === index 
                ? 0 
                : currentPage < index  // Si estamos subiendo, animar desde arriba
                ? 100  // Desplazar hacia abajo
                : -100, // Si estamos bajando, animar desde abajo
            }}
            exit={{
              opacity: 0,
              y: currentPage < index ? -100 : 100, // La salida depende de la dirección del scroll
            }}
            transition={{
              duration: 1.5, // Duración de la animación
              ease: 'easeInOut',
            }}
            className={`min-h-screen ${currentPage === index ? 'block' : 'hidden'}`}
          >
            {PageComponent}
          </motion.div>
        ))}
      </div>
    </main>
  )
}
