'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const highlightClass = 'text-[#56D7C6] font-semibold'

  return (
    <motion.section
      id="hero"
      className="about-section min-h-screen snap-start flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="about-copy text-center w-[80%] p-[25px]">
        <p className="text-left text-[20px] text-[#A2B1CB] leading-[26px]">
          Soy desarrollador web especializado en crear experiencias digitales de alto impacto, combinando{' '}
          <span className={highlightClass}>diseno</span>, <span className={highlightClass}>rendimiento</span> y{' '}
          <span className={highlightClass}>tecnologia moderna</span> para construir productos rapidos, escalables y
          visualmente solidos.
          <br />
          <br />
          Trabajo principalmente con <span className={highlightClass}>WordPress</span>,{' '}
          <span className={highlightClass}>PHP</span>, <span className={highlightClass}>Laravel</span>,{' '}
          <span className={highlightClass}>React</span>, <span className={highlightClass}>Next.js</span> y{' '}
          <span className={highlightClass}>Node.js</span>, desarrollando desde landing pages optimizadas y plataformas
          personalizadas hasta aplicaciones web complejas con arquitecturas modernas.
          <br />
          <br />
          Ademas, desarrollo <span className={highlightClass}>automatizaciones avanzadas</span> con{' '}
          <span className={highlightClass}>n8n</span> e integro agentes impulsados por{' '}
          <span className={highlightClass}>inteligencia artificial</span> para optimizar procesos y potenciar
          ecosistemas digitales con soluciones inteligentes.
          <br />
          <br />
          Me caracteriza la capacidad de transformar ideas en productos funcionales y visualmente potentes, combinando{' '}
          <span className={highlightClass}>desarrollo</span>, <span className={highlightClass}>estrategia</span> y{' '}
          <span className={highlightClass}>experiencia digital</span> en una sola vision.
        </p>
      </div>
    </motion.section>
  )
}
