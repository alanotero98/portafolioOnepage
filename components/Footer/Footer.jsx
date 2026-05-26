// app/components/Footer.tsx
import './footer.css'; // Asegúrate de importar el archivo CSS
import { FaReact, FaNode, FaCss3Alt, FaJsSquare, FaHtml5, FaPhp } from 'react-icons/fa'; // Importando los íconos de react-icons
import { DiWordpress } from 'react-icons/di'; // Importando el ícono de WordPress

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logos del Stack Tecnológico */}
        <div className="footer-logos">
        <FaHtml5 className="logo html-logo" /> {/* Logo de HTML */}
        <FaCss3Alt className="logo tailwind-logo" />
        <FaJsSquare className="logo js-logo" />
        <FaReact className="logo react-logo" />
          <FaNode className="logo node-logo" />
          <FaPhp className="logo php-logo" /> {/* Logo de PHP */}
          <DiWordpress className="logo wordpress-logo" /> {/* Logo de WordPress */}

        </div>
        
        {/* Texto de Objetivos */}
        <p className="footer-text">
         Busco seguir creando experiencias digitales innovadoras mientras evoluciono como desarrollador y creativo. Mi objetivo es construir un negocio SaaS propio y continuar participando en proyectos que me reten, me inspiren y me impulsen a crecer tanto a nivel técnico como personal.
        </p>

        {/* Derechos de autor */}
        <p className="footer-rights">
          &copy; 2025 Alan Otero. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
