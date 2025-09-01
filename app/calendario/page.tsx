"use client"

import type React from "react"
import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Menu, X, Calendar, Clock, MapPin, Mail, Twitter, Instagram } from "lucide-react"

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

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Aprosex", href: "/aprosex" },
    { name: "Recursos", href: "/recursos" },
    { name: "Actualidad Puta", href: "/actualidad" },
    { name: "Calendario", href: "/calendario" },
    { name: "Contacto", href: "/contacto" },
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-cafe hover:text-rojo-persa transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden ${isMenuOpen ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-cafe hover:text-rojo-persa font-raleway-medium transition-colors duration-300"
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
          </div>
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
            <h1 className="lg:text-9xl xl:text-[12rem] font-overwave text-cafe mb-8 tracking-widest text-6xl">
              APROSEX
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl lg:text-4xl font-raleway-light text-cafe leading-relaxed"
          >
            es <span className="text-rojo-persa font-raleway-semibold inline-block">una organización de activismo</span>
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

      {/* Próximos Eventos Section */}
      <section className="py-16 lg:py-24 bg-[rgba(232,179,166,0.7)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h3 className="text-3xl lg:text-4xl font-raleway-bold text-rojo-persa mb-12 text-center">
              Próximos Eventos
            </h3>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-beige p-6 shadow-lg h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="bg-rojo-persa text-beige px-3 py-1 text-sm font-raleway-semibold rounded-full">
                    Charla
                  </span>
                </div>
                <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">
                  Potencias transfeministas en tiempos reaccionarios
                </h4>
                <div className="space-y-2 mb-4 text-cafe font-raleway-regular">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>30 de Agosto, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>17:00-18:30</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>Universidad de Verano Anticapitalista</span>
                  </div>
                </div>
                <p className="text-cafe font-raleway-regular mb-6 flex-grow">
                  De sus pánicos morales a nuestras luchas radicales. Con Anneke Necro, Carolina Meloni e Ira Hybris.
                </p>
                <a
                  href="https://inscripcion.unianticapi.info:8181/univerano2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-6 py-2 rounded-full font-raleway-semibold text-center inline-block"
                >
                  Inscribirse
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-beige p-6 shadow-lg h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="bg-rojo-persa text-beige px-3 py-1 text-sm font-raleway-semibold rounded-full">
                    Charla
                  </span>
                </div>
                <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">Putas Imágenes</h4>
                <div className="space-y-2 mb-4 text-cafe font-raleway-regular">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>30 de Agosto, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>11:30-13:30</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>Universidad de Verano Anticapitalista</span>
                  </div>
                </div>
                <p className="text-cafe font-raleway-regular mb-6 flex-grow">
                  Perspectivas materialistas de la pornografía ante las urgencias del presente. Con Andrea Corrales.
                </p>
                <a
                  href="https://inscripcion.unianticapi.info:8181/univerano2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-6 py-2 rounded-full font-raleway-semibold text-center inline-block"
                >
                  Inscribirse
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Eventos Pasados Section */}
      <section className="py-16 lg:py-24 bg-[#E8DDD4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h3 className="text-3xl lg:text-4xl font-raleway-bold text-rojo-persa mb-12 text-center">
              Eventos Pasados
            </h3>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-beige p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-500 text-beige px-3 py-1 text-sm font-raleway-semibold rounded-full">
                    Presentación
                  </span>
                </div>
                <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">
                  Presentación fanzine Trabajo sexual y Colonialismo
                </h4>
                <div className="space-y-2 mb-4 text-cafe font-raleway-regular">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>12 de Agosto, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>Librería la Libre, Santander</span>
                  </div>
                </div>
                <p className="text-cafe font-raleway-regular">
                  Presentación del fanzine sobre trabajo sexual y colonialismo.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-beige p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-500 text-beige px-3 py-1 text-sm font-raleway-semibold rounded-full">
                    Performance
                  </span>
                </div>
                <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">
                  La internacional queer Performance
                </h4>
                <div className="space-y-2 mb-4 text-cafe font-raleway-regular">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>20 de Junio, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>MACBA</span>
                  </div>
                </div>
                <p className="text-cafe font-raleway-regular">
                  Performance queer internacional en el Museo de Arte Contemporáneo de Barcelona.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-beige p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-500 text-beige px-3 py-1 text-sm font-raleway-semibold rounded-full">
                    Firma
                  </span>
                </div>
                <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">Feria del libro de Madrid</h4>
                <div className="space-y-2 mb-4 text-cafe font-raleway-regular">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>14 de Junio, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>Madrid</span>
                  </div>
                </div>
                <p className="text-cafe font-raleway-regular">
                  Firma de libros, Deseo Disidente de Anneke Necro en la Feria del Libro.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-beige p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-500 text-beige px-3 py-1 text-sm font-raleway-semibold rounded-full">
                    Cuidados
                  </span>
                </div>
                <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">Espacio de cuidados</h4>
                <div className="space-y-2 mb-4 text-cafe font-raleway-regular">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>1 de Junio, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>Ateneu del Raval</span>
                  </div>
                </div>
                <p className="text-cafe font-raleway-regular">
                  Domingo de espacio de cuidados para la comunidad (evento cerrado).
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-beige p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-500 text-beige px-3 py-1 text-sm font-raleway-semibold rounded-full">
                    Inauguración
                  </span>
                </div>
                <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">Museo Puta - Inauguración</h4>
                <div className="space-y-2 mb-4 text-cafe font-raleway-regular">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>31 de Mayo, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>La Escocesa</span>
                  </div>
                </div>
                <p className="text-cafe font-raleway-regular">
                  Inauguración del Museo Puta, espacio de reivindicación cultural.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-beige p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-500 text-beige px-3 py-1 text-sm font-raleway-semibold rounded-full">
                    Presentación
                  </span>
                </div>
                <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">
                  Sant Jordi - Presentación Putas Imágenes
                </h4>
                <div className="space-y-2 mb-4 text-cafe font-raleway-regular">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>24 de Abril, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>Ateneu del Raval</span>
                  </div>
                </div>
                <p className="text-cafe font-raleway-regular">
                  Presentación del libro Putas Imágenes de Andrea Corrales por Aprosex.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-beige p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-500 text-beige px-3 py-1 text-sm font-raleway-semibold rounded-full">
                    Firma
                  </span>
                </div>
                <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">
                  Firmas Sant Jordi - Deseo Disidente
                </h4>
                <div className="space-y-2 mb-4 text-cafe font-raleway-regular">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>23 de Abril, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>Ciutat Invisible</span>
                  </div>
                </div>
                <p className="text-cafe font-raleway-regular">
                  Firmas del libro Deseo Disidente, las políticas del placer de Anneke Necro.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-beige p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-500 text-beige px-3 py-1 text-sm font-raleway-semibold rounded-full">
                    Formación
                  </span>
                </div>
                <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">
                  Formación antirracista para Muestra Fervor
                </h4>
                <div className="space-y-2 mb-4 text-cafe font-raleway-regular">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>3 de Abril, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>Ateneu del Raval</span>
                  </div>
                </div>
                <p className="text-cafe font-raleway-regular">
                  Taller de formación antirracista en el marco de la Muestra Fervor.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-beige p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-500 text-beige px-3 py-1 text-sm font-raleway-semibold rounded-full">
                    Teatro
                  </span>
                </div>
                <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">La Llorona</h4>
                <div className="space-y-2 mb-4 text-cafe font-raleway-regular">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>8 de Febrero, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>Museo Reina Sofía</span>
                  </div>
                </div>
                <p className="text-cafe font-raleway-regular">
                  Presentación de la obra teatral La Llorona en el Museo Reina Sofía.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-beige p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="bg-gray-500 text-beige px-3 py-1 text-sm font-raleway-semibold rounded-full">
                    Presentación
                  </span>
                </div>
                <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">
                  Presentación de libro Deseo Disidente
                </h4>
                <div className="space-y-2 mb-4 text-cafe font-raleway-regular">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>6 de Febrero, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>Ateneu la Maliciosa</span>
                  </div>
                </div>
                <p className="text-cafe font-raleway-regular">
                  Presentación del libro sobre deseo disidente y políticas del placer.
                </p>
              </div>
            </AnimatedSection>
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
                <a
                  href="/asociarse"
                  className="block btn-primary px-6 py-3 rounded-full font-raleway-semibold text-center"
                >
                  Asociarse
                </a>
                <a
                  href="/donar"
                  className="block btn-secondary px-6 py-3 rounded-full font-raleway-semibold text-center"
                >
                  Donar
                </a>
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
                  <span>aprosex@aprosex.org</span>
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
                Coming soon... 
              </p>
              
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-gray-600 pt-8 mb-8">
            <div className="flex justify-center space-x-6">
              <a
                href="https://x.com/Aprosex"
                className="text-white hover:text-rojo-persa transition-colors duration-300"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/aprosex"
                className="text-white hover:text-rojo-persa transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
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
