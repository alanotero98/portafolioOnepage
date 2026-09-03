'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './projects.css'

const projects = [
  {
    title: 'Sitio web para Culinary',
    description: 'Sitio web con nuevo diseno para Culinary.',
    href: 'https://culinary.cl/',
    image: '/culinary.png',
    alt: 'Culinary.cl',
    tags: ['WordPress', 'PHP', 'Templates personalizados', 'CSS']
  },
  {
    title: 'Marketplace para Buscador Agricola',
    description: 'Marketplace enfocado en el sector agricola y el campo chileno.',
    href: 'https://buscadoragricola.cl/',
    image: 'https://buscadoragricola.cl/wp-content/uploads/2026/01/Logo-1.png',
    alt: 'Buscador Agricola',
    tags: ['WordPress', 'PHP', 'Dokan', 'WooCommerce'],
    containImage: true
  },
  {
    title: 'Pagina web para Reconnect Travel',
    description: 'Pagina para guia turista y experiencias de viaje.',
    href: 'https://www.reconnect.travel/',
    image: 'https://usercontent.one/wp/www.reconnect.travel/wp-content/uploads/2025/09/Vector.png?media=1760635054',
    alt: 'Reconnect Travel',
    tags: ['WordPress', 'Elementor Pro'],
    containImage: true
  },
  {
    title: 'Sitio web para Volvo Chile',
    description: 'Sitio web corporativo para Volvo Chile.',
    href: 'https://volvochile.cl/',
    image: '/volvo.jpg',
    alt: 'Volvo Chile',
    tags: ['WordPress', 'Automotriz', 'Web']
  },
  {
    title: 'Sitio web para MiRetail',
    description: 'Plataforma web para soluciones y servicios de retail.',
    href: 'https://miretail.cl/',
    image: 'https://miretail.cl/wp-content/uploads/2024/10/Logo-MiRetail-Bajada-2.png',
    alt: 'MiRetail',
    tags: ['WordPress', 'Retail', 'Web'],
    containImage: true
  },
  {
    title: 'Cooagropecuario',
    description: 'Edición y personalización de themes y plugins en WordPress para Cooagropecuario.',
    href: 'https://cooagropecuaria.coop/',
    image: '/globe.svg',
    alt: 'Cooagropecuario',
    tags: ['En construccion', 'Agro', 'Web'],
    containImage: true,
    status: 'En construccion'
  }
]

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false)
  const carouselProjects = [...projects, ...projects]

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const syncMobileState = () => setIsMobile(mediaQuery.matches)

    syncMobileState()
    mediaQuery.addEventListener('change', syncMobileState)

    return () => {
      mediaQuery.removeEventListener('change', syncMobileState)
    }
  }, [])

  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="projects-container">
        <div className="projects-header">
          <p className="projects-eyebrow">Proyectos</p>
          <h2 className="projects-title">Productos web, marketplaces y experiencias digitales.</h2>
        </div>

        <div className="projects-carousel" aria-label="Carrusel vertical de proyectos">
          <div className="projects-track">
            {carouselProjects.map((project, index) => (
              <motion.a
                key={`${project.title}-${index}`}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-card"
                initial={isMobile ? { opacity: 0, x: index % 2 === 0 ? -34 : 34 } : false}
                whileInView={isMobile ? { opacity: 1, x: 0 } : undefined}
                viewport={isMobile ? { once: true, amount: 0.32 } : undefined}
                transition={isMobile ? { duration: 0.45, ease: 'easeOut' } : undefined}
              >
                <article className="project-card">
                  <div className={`project-image ${project.containImage ? 'project-image-contain' : ''}`}>
                    <img src={project.image} alt={project.alt} />
                  </div>

                  <div className="project-content">
                    {project.status && <span className="project-status">{project.status}</span>}
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
