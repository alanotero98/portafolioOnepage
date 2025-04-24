'use client'
import { motion } from 'framer-motion'
import './projects.css'

export default function Projects() {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Proyecto 1 */}
        <a href='https://culinary.cl//'  className="list-none block no-underline text-inherit">
          <div className="project-card">
            <div className="project-image">
              <img src="/culinary.png" alt="Culinary.cl" />
            </div>
            <div className="project-content">
              <h3 className="project-title">Sitio web para Culinary</h3>
              <p className="project-description">Sitio web con nuevo diseño para Culinary.</p>
              <div className="tags">
                <span>React</span>
                <span>TailwindCSS</span>
              </div>
            </div>
          </div>
         </a>
          {/* Proyecto 2 */}
          <a href='https://lms.fenomena.cl/'  className="list-none block no-underline text-inherit">
          <div className="project-card">
            <div className="project-image">
              <img src="/volvo.jpg" alt="Proyecto 2" />
            </div>
            <div className="project-content">
              <h3 className="project-title">Plataforma de cursos digitales para Volvo</h3>
              <p className="project-description"> Plataforma de cursos con LearnDash LMS para conductores de Volvo.</p>
              <div className="tags">
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
          </a>
          {/* Proyecto 3 */}
          <div className="project-card">
            <div className="project-image">
              <img src="/godisdead.jpg" alt="Proyecto 3" />
            </div>
            <div className="project-content">
              <h3 className="project-title">Pagina web de remeras para God is Dead</h3>
              <p className="project-description">Descripción del proyecto.</p>
              <div className="tags">
                <span>JavaScript</span>
                <span>HTML</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
