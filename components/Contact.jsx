export default function Contact() {
    return (
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-teal-400 mb-6">Contacto</h2>
          <p className="text-gray-300 mb-4">¡Me encantaría saber de ti! Si tienes algún proyecto en mente o deseas más información, no dudes en contactarme.</p>
          <ul className="space-y-4">
            <li>
              <a
                href="mailto:tu-email@dominio.com"
                className="text-teal-400 hover:text-teal-600"
              >
                Enviar correo electrónico
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tu-perfil"
                className="text-teal-400 hover:text-teal-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mi LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/tu-perfil"
                className="text-teal-400 hover:text-teal-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mi GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
  