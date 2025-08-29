"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Menu, X, Mail, MapPin, Twitter, Instagram, Calendar, Clock, LocateIcon as Location } from "lucide-react"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

export default function CalendarioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Rotating text for hero section
  const rotatingTexts = ["una organización de activismo", "un espacio cultural", "un centro de aprendizaje", "un hogar"]
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)
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

  const upcomingEvents = [
    {
      id: "potencias-transfeministas",
      title: "Potencias transfeministas en tiempos reaccionarios",
      date: "30 de Agosto, 2025",
      time: "17:00-18:30",
      location: "Universidad de Verano Anticapitalista",
      description:
        "De sus pánicos morales a nuestras luchas radicales. Con Anneke Necro, Carolina Meloni e Ira Hybris.",
      type: "Charla",
      registrationUrl: "https://inscripcion.unianticapi.info:8181/univerano2025/",
    },
    {
      id: "putas-imagenes-charla",
      title: "Putas Imágenes",
      date: "30 de Agosto, 2025",
      time: "11:30-13:30",
      location: "Universidad de Verano Anticapitalista",
      description: "Perspectivas materialistas de la pornografía ante las urgencias del presente. Con Andrea Corrales.",
      type: "Charla",
      registrationUrl: "https://inscripcion.unianticapi.info:8181/univerano2025/",
    },
  ]

  const pastEvents = [
    {
      id: "presentacion-fanzine-santander",
      title: "Presentación fanzine Trabajo sexual y Colonialismo",
      date: "12 de Agosto, 2025",
      time: "19:00",
      location: "Librería la Libre, Santander",
      description: "Presentación del fanzine sobre trabajo sexual y colonialismo.",
      type: "Presentación",
    },
    {
      id: "internacional-queer-macba",
      title: "La internacional queer Performance",
      date: "20 de Junio, 2025",
      time: "18:00",
      location: "MACBA",
      description: "Performance queer internacional en el Museo de Arte Contemporáneo de Barcelona.",
      type: "Performance",
    },
    {
      id: "feria-libro-madrid",
      title: "Feria del libro de Madrid",
      date: "14 de Junio, 2025",
      time: "Todo el día",
      location: "Madrid",
      description: "Firma de libros, Deseo Disidente de Anneke Necro en la Feria del Libro.",
      type: "Firma",
    },
    {
      id: "espacio-cuidados",
      title: "Espacio de cuidados",
      date: "1 de Junio, 2025",
      time: "Cerrado",
      location: "Ateneu del Raval",
      description: "Domingo de espacio de cuidados para la comunidad (evento cerrado).",
      type: "Cuidados",
    },
    {
      id: "museo-puta-inauguracion",
      title: "Museo Puta - Inauguración",
      date: "31 de Mayo, 2025",
      time: "18:30",
      location: "La Escocesa",
      description: "Inauguración del Museo Puta, espacio de reivindicación cultural.",
      type: "Inauguración",
    },
    {
      id: "sant-jordi-putas-imagenes",
      title: "Sant Jordi - Presentación Putas Imágenes",
      date: "24 de Abril, 2025",
      time: "17:00",
      location: "Ateneu del Raval",
      description: "Presentación del libro Putas Imágenes de Andrea Corrales por Aprosex.",
      type: "Presentación",
    },
    {
      id: "firmas-sant-jordi",
      title: "Firmas Sant Jordi - Deseo Disidente",
      date: "23 de Abril, 2025",
      time: "Todo el día",
      location: "Ciutat Invisible",
      description: "Firmas del libro Deseo Disidente, las políticas del placer de Anneke Necro.",
      type: "Firma",
    },
    {
      id: "formacion-antirracista",
      title: "Formación antirracista para Muestra Fervor",
      date: "3 de Abril, 2025",
      time: "Por confirmar",
      location: "Ateneu del Raval",
      description: "Taller de formación antirracista en el marco de la Muestra Fervor.",
      type: "Formación",
    },
    {
      id: "la-llorona-reina-sofia",
      title: "La Llorona",
      date: "8 de Febrero, 2025",
      time: "17:00",
      location: "Museo Reina Sofía",
      description: "Presentación de la obra teatral La Llorona en el Museo Reina Sofía.",
      type: "Teatro",
    },
    {
      id: "presentacion-deseo-disidente",
      title: "Presentación de libro Deseo Disidente",
      date: "6 de Febrero, 2025",
      time: "18:00",
      location: "Ateneu la Maliciosa",
      description: "Presentación del libro sobre deseo disidente y políticas del placer.",
      type: "Presentación",
    },
  ]

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
              <a href="/asociarse" className="btn-primary px-6 py-2 rounded-full font-raleway-semibold">
                Asociarse
              </a>
              <a href="/donar" className="btn-secondary px-6 py-2 rounded-full font-raleway-semibold">
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
                <a href="/asociarse" className="btn-primary px-6 py-2 rounded-full font-raleway-semibold text-center">
                  Asociarse
                </a>
                <a href="/donar" className="btn-secondary px-6 py-2 rounded-full font-raleway-semibold text-center">
                  Donar
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-[rgba(215,189,172,1)]">
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

      {/* Page Title Section */}
      <section className="py-16 lg:py-20 bg-melon">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-6xl font-raleway-bold text-rojo-persa mb-6">Calendario</h2>
            <p className="text-xl lg:text-2xl font-raleway-light text-cafe leading-relaxed">
              Descubre nuestros próximos eventos, talleres y actividades
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 lg:py-24 bg-[rgba(232,179,166,0.7)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h3 className="text-3xl lg:text-4xl font-raleway-bold text-rojo-persa mb-12 text-center">
              Próximos Eventos
            </h3>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection key={index}>
                <div className="bg-beige p-6 shadow-lg h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <span className="bg-rojo-persa text-beige px-3 py-1 text-sm font-raleway-semibold rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">{event.title}</h4>

                  <div className="space-y-2 mb-4 text-cafe font-raleway-regular">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Location size={16} />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-cafe font-raleway-regular mb-6 flex-grow">{event.description}</p>

                  <motion.a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="btn-primary px-6 py-2 rounded-full font-raleway-semibold text-center inline-block"
                  >
                    Inscribirse
                  </motion.a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 lg:py-24 bg-[#E8DDD4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h3 className="text-3xl lg:text-4xl font-raleway-bold text-rojo-persa mb-12 text-center">
              Eventos Pasados
            </h3>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <AnimatedSection key={index}>
                <div className="bg-beige p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <span className="bg-gray-500 text-beige px-3 py-1 text-sm font-raleway-semibold rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">{event.title}</h4>

                  <div className="space-y-2 mb-4 text-cafe font-raleway-regular">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Location size={16} />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-cafe font-raleway-regular">{event.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-cafe text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Support Section */}
            <div>
              <h3 className="text-xl font-raleway-bold text-rojo-persa mb-6">Apoya la lucha por nuestros derechos</h3>
              <div className="space-y-4">
                <motion.a
                  href="/asociarse"
                  whileHover={{ scale: 1.05 }}
                  className="block btn-primary px-6 py-3 rounded-full font-raleway-semibold text-center"
                >
                  Asociarse
                </motion.a>
                <motion.a
                  href="/donar"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block btn-secondary px-6 py-3 rounded-full font-raleway-semibold text-center"
                >
                  Donar
                </motion.a>
              </div>
            </div>

            {/* Quick Navigation */}
            <div>
              <h3 className="text-xl font-raleway-bold text-rojo-persa mb-6">Navegación rápida</h3>
              <ul className="space-y-3 font-raleway-regular">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="hover:text-rojo-persa transition-colors duration-300">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-raleway-bold text-rojo-persa mb-6">Contacto</h3>
              <div className="space-y-3 font-raleway-regular">
                <div className="flex items-center space-x-3">
                  <Mail size={18} />
                  <span>info@aprosex.org</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={18} />
                  <span>Barcelona, España</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-raleway-bold text-rojo-persa mb-6">Newsletter</h3>
              <p className="mb-4 text-sm font-raleway-regular">
                Mantente informade sobre nuestras actividades y recursos.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full px-4 py-2 rounded-lg bg-beige text-cafe placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rojo-persa font-raleway-regular"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary px-4 py-2 rounded-lg font-raleway-semibold"
                >
                  Suscribirse
                </motion.button>
              </form>
            </div>
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
