'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import './experience.css'

const experiences = [
  {
    id: 'fenomena',
    period: '2023 - 2025',
    role: 'Desarrollador Web / Frontend',
    company: 'Agencia Fenomena — Chile',
    shortDescription:
      'Trabajé en el desarrollo de sitios web, landing pages e interfaces enfocadas en marketing digital, captación de leads y optimización de conversión.',
    description:
      'En Agencia Fenomena trabajé como desarrollador web/frontend creando soluciones digitales para campañas, marcas y clientes de marketing. Participé en el desarrollo de sitios web, landing pages, interfaces dinámicas y optimización de experiencias orientadas a conversión.',
    responsibilities: [
      'Desarrollo y mantenimiento de sitios web y landing pages orientadas a campañas de marketing y lead generation.',
      'Implementación y optimización de interfaces modernas con HTML, CSS, JavaScript, React y WordPress.',
      'Coordinación técnica con equipos de diseño y estrategia para entregar productos visualmente consistentes y funcionales.',
      'Configuración y ajuste de herramientas y plugins de WordPress para mejorar rendimiento, SEO, formularios, analítica y gestión de contenido.'
    ],
    stack: ['WordPress', 'PHP', 'JavaScript', 'React', 'HTML/CSS', 'Elementor', 'SEO', 'Performance', 'Plugins WordPress', 'Lead Generation'],
    skills: ['WordPress', 'PHP', 'JavaScript', 'React', 'HTML/CSS', 'Elementor', 'SEO', 'Performance', 'Plugins WordPress']
  },
  {
    id: 'freelance',
    period: '2025 - 2026',
    role: 'Desarrollador Web Freelance',
    company: 'Freelance / Independiente',
    shortDescription:
      'Desarrollo independiente de sitios web, plataformas y soluciones digitales para agencias de marketing, estudios creativos y emprendedores.',
    description:
      'Como freelancer trabajé de forma independiente desarrollando proyectos web para agencias de marketing, incluyendo Fenomena, @audazstudio.ar y proyectos para emprendedores. Me enfoqué en crear soluciones funcionales, visualmente sólidas y adaptadas a las necesidades de cada cliente.',
    responsibilities: [
      'Desarrollo de proyectos web personalizados para agencias, estudios creativos y emprendedores.',
      'Construcción de interfaces modernas y soluciones digitales con WordPress, PHP, Laravel, React y Next.js.',
      'Integración de flujos y automatizaciones para mejorar procesos internos y experiencias digitales.',
      'Entrega de proyectos con enfoque en usabilidad, estética visual y adaptabilidad a distintos formatos y necesidades.'
    ],
    stack: ['WordPress', 'PHP', 'Laravel', 'React', 'Next.js', 'Node.js', 'n8n', 'Automatizaciones', 'Freelance'],
    skills: ['WordPress', 'PHP', 'Laravel', 'React', 'Next.js', 'Node.js', 'n8n', 'Automatizaciones', 'Freelance']
  },
  {
    id: 'marea-lab',
    period: '2026 - Actualidad',
    role: 'Desarrollador Web & Creative Tech',
    company: 'Marea Lab — Colombia',
    shortDescription:
      'Desarrollo soluciones web, interfaces interactivas, automatizaciones y experiencias digitales para una agencia de branding y diseño.',
    description:
      'Actualmente trabajo en Marea Lab, una agencia de branding y diseño ubicada en Colombia. Mi rol combina desarrollo web, tecnología creativa, automatizaciones e integración de inteligencia artificial para crear experiencias digitales más completas y estratégicas.',
    responsibilities: [
      'Desarrollo de sitios web, landing pages e interfaces interactivas alineadas con la identidad visual de la marca.',
      'Implementación de soluciones con React, Next.js, WordPress y Node.js para proyectos digitales escalables.',
      'Automatización de procesos con n8n y exploración de agentes con IA para potenciar flujos de trabajo.',
      'Construcción de productos digitales visualmente potentes, funcionales y coherentes con objetivos de branding y conversión.'
    ],
    stack: ['React', 'Next.js', 'WordPress', 'Node.js', 'n8n', 'IA Agents', 'Automatizaciones', 'Branding Digital', 'Creative Tech'],
    skills: ['React', 'Next.js', 'WordPress', 'Node.js', 'n8n', 'IA Agents', 'Automatizaciones', 'Branding Digital', 'Creative Tech']
  }
]

export default function Experience({ isActive = true }) {
  const [selectedExperienceId, setSelectedExperienceId] = useState(null)

  useEffect(() => {
    if (!isActive) {
      setSelectedExperienceId(null);
    }
  }, [isActive]);

  useEffect(() => {
    if (!selectedExperienceId) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedExperienceId(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedExperienceId]);

  const stopModalScrollPropagation = (event) => {
    event.stopPropagation();
  };

  const selectedExperience = experiences.find((item) => item.id === selectedExperienceId)

  return (
    <motion.section
      id="experience"
      className="experience-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="experience-container">
        <div className="experience-header">
          <p className="eyebrow">Experiencia</p>
          <h2 className="experience-title">Experiencia enfocada en desarrollo web, rendimiento y productos digitales con impacto.</h2>
        </div>

        <div className="experience-list">
          {experiences.map((experience) => (
            <motion.button
              key={experience.id}
              type="button"
              className="experience-card-button"
              onClick={() => setSelectedExperienceId(experience.id)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              aria-label={`Abrir detalles de ${experience.role} en ${experience.company}`}
            >
              <div className="experience-card">
                <div className="experience-row">
                  <div className="experience-date">
                    <p className="year">{experience.period}</p>
                    <p className="location">{experience.company}</p>
                  </div>
                  <div className="experience-details">
                    <h3 className="job-title">{experience.role}</h3>
                    <p className="description">{experience.shortDescription}</p>
                    <div className="tags">
                      {experience.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            className="experience-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExperienceId(null)}
            onWheel={stopModalScrollPropagation}
            onTouchMove={stopModalScrollPropagation}
          >
            <motion.div
              className="experience-modal"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
              onWheel={stopModalScrollPropagation}
              onTouchMove={stopModalScrollPropagation}
              role="dialog"
              aria-modal="true"
              aria-labelledby="experience-modal-title"
            >
              <div className="experience-modal-header">
                <div>
                  <p className="experience-modal-period">{selectedExperience.period}</p>
                  <h3 id="experience-modal-title" className="experience-modal-title">{selectedExperience.role}</h3>
                  <p className="experience-modal-company">{selectedExperience.company}</p>
                </div>

                <button
                  type="button"
                  className="experience-modal-close"
                  onClick={() => setSelectedExperienceId(null)}
                  aria-label="Cerrar detalles de experiencia"
                >
                  ×
                </button>
              </div>

              <p className="experience-modal-description">{selectedExperience.description}</p>

              <div className="experience-modal-section">
                <h4>Responsabilidades y logros</h4>
                <ul className="experience-modal-list">
                  {selectedExperience.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              

              <div className="experience-modal-section">
                <h4>Skills</h4>
                <div className="tags">
                  {selectedExperience.skills.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
