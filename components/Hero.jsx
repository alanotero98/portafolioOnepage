'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="min-h-screen snap-start flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="text-center w-[70%] p-[25px]">
      <p className="text-left text-[20px] text-[#A2B1CB] leading-[26px]">
  Soy un desarrollador frontend apasionado por crear interfaces interactivas, accesibles y optimizadas para una experiencia de usuario excepcional. 
  <br /><br />
  Mi carrera comenzó en <span className="text-[white]">Fenomena</span>, una agencia de marketing en Chile, donde me especialicé en la captación de leads, desarrollando soluciones web que mejoraron la interacción de los usuarios y la conversión de clientes potenciales.
  <br /><br />
  A lo largo de mi trayectoria, he realizado diversos cursos y entrenamientos en programación y tecnologías web, lo que me ha permitido ampliar mis conocimientos y mantenerme actualizado en las últimas tendencias del desarrollo frontend.
  <br /><br />
  Fuera del trabajo, soy un apasionado de <span className="text-[white] ">escuchar música</span>, <span className="text-[white] ">tomar café</span>, <span className="text-[white] ">entrenar</span>, jugar al fútbol y salir a correr por la ciudad, actividades que me ayudan a mantenerme motivado y con energía, mientras disfruto de un equilibrio entre mi vida profesional y personal.
</p>

      </div>
    </motion.section>
  )
}
