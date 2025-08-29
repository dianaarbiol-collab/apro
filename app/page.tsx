"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Menu, X, Twitter, Instagram, Calendar, Clock, MapPin } from "lucide-react"
import { getUpcomingEvents } from "@/lib/calendar-events"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

// Animated section component
function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AprosexWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Rotating text for hero section
  const rotatingTexts = ["una organización de activismo", "un espacio cultural", "un centro de aprendizaje", "un hogar"]
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false)
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMenuOpen])

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Aprosex", href: "/aprosex" },
    { name: "Recursos", href: "/recursos" },
    { name: "Actualidad Puta", href: "/actualidad" },
    { name: "Calendario", href: "/calendario" },
    { name: "Contacto", href: "/contacto" },
  ]

  // Get upcoming events for the events section
  const upcomingEvents = getUpcomingEvents().slice(0, 3)

  return (
    <div className="min-h-screen bg-tea-rose text-cafe">
      {/* Header */}
      <header className="bg-melon sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="/images/logo.png" alt="Aprosex Logo" className="h-12 lg:h-16 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-cafe hover:text-rojo-persa font-raleway-medium transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex space-x-4">
              <a href="/asociarse" className="btn-primary px-6 py-2 font-raleway-semibold">
                Asociarse
              </a>
              <a href="/donar" className="btn-secondary px-6 py-2 font-raleway-semibold">
                Donar
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsMenuOpen(!isMenuOpen)
              }}
              className="lg:hidden p-2 rounded-md text-cafe hover:text-rojo-persa transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-cafe hover:text-rojo-persa font-raleway-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <a href="/asociarse" className="btn-primary px-6 py-2 font-raleway-semibold text-center">
                  Asociarse
                </a>
                <a href="/donar" className="btn-secondary px-6 py-2 font-raleway-semibold text-center">
                  Donar
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-16 lg:py-24 bg-[rgba(215,189,172,1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-8xl lg:text-9xl xl:text-[12rem] font-overwave text-cafe mb-8 tracking-widest">
              APROSEX
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl lg:text-4xl font-raleway-light text-cafe leading-relaxed"
          >
            es{" "}
            <motion.span
              key={currentTextIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-rojo-persa font-raleway-semibold inline-block"
            >
              {rotatingTexts[currentTextIndex]}
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-16 lg:py-24 bg-[rgba(246,237,224,1)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative py-0 mx-0">
                <img src="/images/aprosex-intro.jpg" alt="Aprosex" className="w-full object-cover shadow-lg" />
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-raleway-thin text-cafe leading-relaxed mb-8">
                  Somos un espacio de encuentro y pensamiento crítico creado por y para les trabajadores sexuales en el
                  que a través del arte, la formación y la divulgación de la cultura puta luchamos por nuestros derechos
                  humanos y contra el estigma.
                </h3>
                <motion.a
                  href="/aprosex"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary font-raleway-semibold text-lg inline-block text-center px-4 py-2.5"
                >
                  Somos Aprosex
                </motion.a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 lg:py-16 bg-[rgba(239,205,206,1)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <blockquote className="text-2xl lg:text-3xl font-raleway-light text-cafe italic mb-6">
              "En realidad no existe gente 'sin voz'.
              <br />
              Sólo existen los deliberadamente silenciados, o los preferiblemente no escuchados"
            </blockquote>
            <cite className="text-lg font-raleway-semibold text-rojo-persa text-right block">— Arundhati Roy</cite>
          </AnimatedSection>
        </div>
      </section>

      {/* Nuestras acciones */}
      <section className="py-16 lg:py-24 bg-[rgba(232,179,166,0.7)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-raleway-bold text-rojo-persa mb-16 text-center">
              Nuestras acciones
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatedSection>
              <div className="space-y-8">
                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <img src="/images/condom-icon.png" alt="Condom icon" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-2">Proveer recursos</h4>
                    <p className="text-cafe font-raleway-regular">
                      Ayudamos a les compañeres a acceder a información sobre el trabajo sexual en España
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <img src="/images/condom-icon.png" alt="Condom icon" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-2">
                      Desestigmatizar nuestro trabajo
                    </h4>
                    <p className="text-cafe font-raleway-regular">
                      Trabajamos en desestigmatizar nuestra labor con el fin de crear un espacio de trabajo más seguro
                      para todes les trabajadores sexuales
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <img src="/images/condom-icon.png" alt="Condom icon" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-2">Crear comunidad</h4>
                    <p className="text-cafe font-raleway-regular">
                      A través de nuestra acción, buscamos formar espacios seguros
                    </p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="space-y-8">
                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <img src="/images/condom-icon.png" alt="Condom icon" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-2">Educación y formación</h4>
                    <p className="text-cafe font-raleway-regular">
                      Ofrecemos talleres y cursos para capacitar a las trabajadoras sexuales en diversos temas
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <img src="/images/condom-icon.png" alt="Condom icon" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-2">Defensa legal</h4>
                    <p className="text-cafe font-raleway-regular">
                      Asesoramos y defendemos a las trabajadoras sexuales en casos legales relacionados con su trabajo
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <img src="/images/condom-icon.png" alt="Condom icon" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-2">Promoción cultural</h4>
                    <p className="text-cafe font-raleway-regular">
                      Celebramos y promovemos la cultura puta a través de exposiciones, eventos y proyectos artísticos
                    </p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Nuestro blog */}
      <section className="py-16 lg:py-24 bg-[rgba(215,189,172,1)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-raleway-bold text-rojo-persa mb-16 text-center">
              Actualidad Puta
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-beige p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="bg-rojo-persa text-beige px-3 py-1 text-sm font-raleway-semibold">Destacado</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-raleway-bold text-rojo-persa mb-4">Carta de la Directiva</h3>
                <p className="text-cafe font-raleway-regular mb-6 text-lg leading-relaxed">
                  Nos alegra comunicaros que Aprosex, una de las asociaciones pro-derechos de más larga tradición del
                  Estado español, retoma hoy su actividad con fuerza, ilusión, conciencia colectiva y rumbo renovado.
                  Una carta abierta sobre nuestro compromiso renovado con los derechos de las trabajadoras sexuales y
                  nuestra visión de futuro para la organización.
                </p>
                <div className="flex items-center mb-6 text-sm text-gray-600">
                  <span className="mr-4">Directiva APROSEX</span>
                  <span>15 de Enero, 2024</span>
                </div>
                <motion.a
                  href="/actualidad/carta-de-la-directiva"
                  whileHover={{ scale: 1.05 }}
                  className="btn-primary px-6 py-3 font-raleway-semibold inline-flex items-center"
                >
                  Leer más
                </motion.a>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="text-center mt-12">
              <motion.a
                href="/actualidad"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-rojo-persa text-beige px-8 py-4 font-raleway-semibold text-lg shadow-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Ver últimas noticias
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Nuestros próximos eventos */}
      <section className="py-16 lg:py-24 bg-[rgba(239,205,206,1)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-raleway-bold text-rojo-persa mb-16 text-center">
              Nuestros próximos eventos
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <AnimatedSection>
              <div className="bg-beige p-6 shadow-lg h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="bg-rojo-persa text-beige px-3 py-1 text-sm font-raleway-semibold">Charla</span>
                </div>
                <h3 className="text-xl font-raleway-semibold text-rojo-persa mb-4">
                  Potencias transfeministas en tiempos reaccionarios
                </h3>

                <div className="space-y-2 mb-4 text-cafe font-raleway-regular">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-rojo-persa" />
                    <span>30 de Agosto, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-rojo-persa" />
                    <span>17:00-18:30</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-rojo-persa" />
                    <span>Universidad de Verano Anticapitalista</span>
                  </div>
                </div>

                <p className="text-cafe font-raleway-regular mb-6 flex-grow">
                  De sus pánicos morales a nuestras luchas radicales. Con Anneke Necro, Carolina Meloni e Ira Hybris.
                </p>

                <motion.a
                  href="https://inscripcion.unianticapi.info:8181/univerano2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="btn-primary px-6 py-2 font-raleway-semibold text-center inline-block"
                >
                  Inscribirse
                </motion.a>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-beige p-6 shadow-lg h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="bg-rojo-persa text-beige px-3 py-1 text-sm font-raleway-semibold">Charla</span>
                </div>
                <h3 className="text-xl font-raleway-semibold text-rojo-persa mb-4">Putas Imágenes</h3>

                <div className="space-y-2 mb-4 text-cafe font-raleway-regular">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-rojo-persa" />
                    <span>30 de Agosto, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-rojo-persa" />
                    <span>11:30-13:30</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-rojo-persa" />
                    <span>Universidad de Verano Anticapitalista</span>
                  </div>
                </div>

                <p className="text-cafe font-raleway-regular mb-6 flex-grow">
                  Perspectivas materialistas de la pornografía ante las urgencias del presente. Con Andrea Corrales.
                </p>

                <motion.a
                  href="https://inscripcion.unianticapi.info:8181/univerano2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="btn-primary px-6 py-2 font-raleway-semibold text-center inline-block"
                >
                  Inscribirse
                </motion.a>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="text-center">
              <motion.a
                href="/calendario"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center btn-primary px-8 py-4 font-raleway-semibold text-lg shadow-lg"
              >
                Ver todos los eventos
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 lg:py-16 bg-[rgba(232,179,166,0.7)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Newsletter */}
          <div className="mb-12">
            <h3 className="text-xl font-raleway-bold text-rojo-persa mb-6">Newsletter</h3>
            <p className="mb-4 text-sm font-raleway-regular">
              Mantente informade sobre nuestras actividades y recursos.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-2 bg-beige text-cafe placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rojo-persa font-raleway-regular"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-primary px-4 py-2 font-raleway-semibold"
              >
                Suscribirse
              </motion.button>
            </form>
          </div>

          {/* Social Links */}
          <div className="border-t border-gray-600 pt-8 mb-8">
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://x.com/Aprosex"
                whileHover={{ scale: 1.2 }}
                className="text-white hover:text-rojo-persa transition-colors duration-300"
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/aprosex"
                whileHover={{ scale: 1.2 }}
                className="text-white hover:text-rojo-persa transition-colors duration-300"
              >
                <Instagram size={24} />
              </motion.a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400 border-t border-gray-600 pt-8 font-raleway-regular">
            <p>&copy; 2025 Aprosex - Asociación de Profesionales del Sexo. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
