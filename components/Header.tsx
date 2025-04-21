"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

interface HeaderProps {
  currentPage: number;
}

export default function Header({ currentPage }: HeaderProps) {
  const sectionMap = ["Acerca de mi", "Experiencia", "Proyectos", "Mis objetivos"];

  return (
    <div className="fixed top-0 left-0 h-full bg-[#0F172A] w-[45%] text-black p-[32px] flex items-start justify-start">
      <div className="w-full max-w-md text-left ml-[25%] mt-[60px]">
        {/* Título y descripción */}
        <div className="flex flex-col items-start">
          <h1 className="text-[50px] font-bold text-[white]">Alan Otero</h1>
          <h2 className="text-[22px] mt-[10px] text-[#EAEFFA]">Desarrollador Front-End</h2>
          <p className="text-[#7F92B6] mt-[22px] text-[20px] leading-[20px]">
            Creo experiencias digitales accesibles <br />
            y con píxeles perfectos para la web.
          </p>
        </div>

        {/* Navbar */}
        <nav className="mt-[20%] ml-[5px]">
  <ul className="flex flex-col items-start gap-[12px]">
    {sectionMap.map((section, index) => (
      <li className="list-none" key={section}>
       
        <a
          href={`#${section}`}
          className={`flex items-center justify-between w-full gap-[12px] text-[16px] font-medium transition-all duration-[300ms] no-underline ${
            currentPage === index
              ? "text-[white] scale-[1.05]"
              : "text-[#64748B]"
          }`}
        >
          <span
            className={`h-[2px] rounded-full  transition-all duration-[300ms] ${
              currentPage === index ? "w-[35px] bg-[white]" : "w-[16px] bg-[#64748B]"
            }`}
          />
          <span className="flex items-center gap-[8px]">
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </span>
          
        </a>
      </li>
    ))}
  </ul>
</nav>
  {/* Social Media Icons */}
  <div className="mt-[30%] ml-[2%] flex gap-[20px]">
          <a href="https://github.com/alanotero98" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-[white] text-[30px] hover:text-[#64748B] transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/alan-otero-688a59165/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[white] text-[30px] hover:text-[#64748B] transition-all" />
          </a>
          <a href="mailto:oteroalan06@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-[white] text-[30px] hover:text-[#64748B] transition-all" />
          </a>
          <a href="https://wa.me/5491137877374" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-[white] text-[30px] hover:text-[#64748B] transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
}
