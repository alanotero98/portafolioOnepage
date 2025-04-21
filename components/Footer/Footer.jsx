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
          Mis objetivos son seguir aprendiendo y mejorando mis habilidades en desarrollo web,
          siempre trabajando con las tecnologías más innovadoras para crear soluciones eficientes y escalables.
        </p>

        {/* Derechos de autor */}
        <p className="footer-rights">
          &copy; 2025 Alan Otero. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
