"use client";

import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./header.css";

interface HeaderProps {
  currentPage: number;
  sections?: { id: string; label: string }[];
  onNavigate?: (index: number) => void;
}

export default function Header({ currentPage, sections, onNavigate }: HeaderProps) {
  const sectionMap = sections ?? [
    { id: "about", label: "Acerca de mi" },
    { id: "experience", label: "Experiencia" },
    { id: "projects", label: "Proyectos" },
    { id: "music", label: "Mi música" },
    { id: "goals", label: "Mis objetivos" },
  ];

  const handleNavigate = (index: number) => {
    if (onNavigate) {
      onNavigate(index);
      return;
    }

    document.getElementById(sectionMap[index].id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="header-top">
          <div className="header-intro">
            <h1>Alan Otero</h1>
            <h2>Desarrollador Full Stack</h2>
            <p>
              Creo experiencias digitales accesibles <br />
              y con pixeles perfectos para la web.
            </p>
          </div>

          <div className="header-socials" aria-label="Redes sociales">
            <a href="https://github.com/alanotero98" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/alan-otero-688a59165/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:oteroalan06@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://wa.me/5491137877374" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <nav className="header-nav" aria-label="Secciones principales">
          <ul>
            {sectionMap.map((section, index) => (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => handleNavigate(index)}
                  className={currentPage === index ? "active" : ""}
                  aria-current={currentPage === index ? "page" : undefined}
                >
                  <span className="nav-line" />
                  <span>{section.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
