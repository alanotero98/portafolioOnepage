'use client'
import { motion } from 'framer-motion'
import './experience.css'

export default function Experience() {
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

       
        {/* Experience Card 1 */}
       <a href='https://pcfix.ar/'  className="list-none block no-underline text-inherit"
  target="_blank"
  rel="noopener noreferrer">
        <div className="experience-card">
          <div className="experience-row">
            <div className="experience-date">
              <p className="year">2022 - 2024</p>
              <p className="location">PCFix - Berazategui</p>
            </div>
            <div className="experience-details">
              <h3 className="job-title">Técnico de PC y Notebook</h3>
              <p className="description">
                Diagnóstico y resolución de problemas tanto de hardware como de software para equipos de PC y notebooks. Atendí clientes de manera directa, brindando soluciones rápidas y efectivas.
              </p>
              <div className="tags">
                <span>Hardware</span>
                <span>Software</span>
                <span>Soporte Técnico</span>
                <span>Diagnóstico</span>
              </div>
            </div>
          </div>
        </div>
    </a>
        {/* Experience Card 2 */}
        <div className="experience-card">
          <div className="experience-row">
            <div className="experience-date">
              <p className="year">2022 - 2024</p>
              <p className="location">Curso de desarrollador web</p>
            </div>
            <div className="experience-details">
              <h3 className="job-title">Desarrollador Full Stack</h3>
              <p className="description">
              Donde di mis primeros pasos como desarrollador aprendiendo HTML, CSS, JavaScript, React, Node,js.
              </p>
              <div className="tags">
              <span>MySQL</span>
                <span>Express</span>
                <span>Node.js</span>
                <span>React</span>
                <span>Redux</span>
                <span>JavaScript</span>
                <span>HTML/CSS</span>
              </div>
            </div>
          </div>
        </div>
    {/* Experience Card 2 */}
    <a href='https://fenomena.cl/'  className="list-none block no-underline text-inherit"
  target="_blank"
  rel="noopener noreferrer">
    <div className="experience-card">
          <div className="experience-row">
            <div className="experience-date">
              <p className="year">2024 - 2025</p>
              <p className="location">Agencia Fenomena - Chile</p>
            </div>
            <div className="experience-details">
              <h3 className="job-title">Desarrollador Frontend</h3>
              <p className="description">
                Desarrollo de interfaces dinámicas y optimizadas para la captación de leads utilizando tecnologías modernas como React y TailwindCSS.
              </p>
              <div className="tags">
                <span>React</span>
                <span>TailwindCSS</span>
                <span>JavaScript</span>
                <span>HTML/CSS</span>
              </div>
            </div>
          </div>
         
        </div>
        </a>
      </div>
      
    </motion.section>
  )
}
