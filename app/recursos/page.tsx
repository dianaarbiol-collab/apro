"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Menu, X, Mail, MapPin, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

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

export default function RecursosPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const rotatingTexts = ["una red de apoyo", "información útil", "un espacio seguro"]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
    }, 3000)

    return () => clearInterval(intervalId)
  }, [rotatingTexts.length])

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Aprosex", href: "/aprosex" },
    { name: "Recursos", href: "/recursos" },
    { name: "Actualidad Puta", href: "/actualidad" },
    { name: "Calendario", href: "/calendario" },
    { name: "Contacto", href: "/contacto" },
  ]

  const recursos = [
    {
      title: "Derechos Legales y Policiales",
      description: "Conoce tus derechos y protégete ante cualquier intervención",
      type: "Web",
      icon: <img src="/images/fusta.png" alt="Fusta icon" className="w-6 h-6" />,
      link: "/recursos/derechos-legales",
    },
    {
      title: "Seguridad Digital y Protección Online",
      description: "Protege tu identidad, contenido y privacidad en el mundo digital",
      type: "Web",
      icon: <img src="/images/butt.png" alt="Butt plug icon" className="w-6 h-6" />,
      link: "/recursos/seguridad-digital",
    },
    {
      title: "Finanzas y Pagos Seguros",
      description: "Protege tus ingresos y maneja tu dinero con seguridad",
      type: "Web",
      icon: <img src="/images/tacon.png" alt="High heel icon" className="w-6 h-6" />,
      link: "/recursos/finanzas-seguras",
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
              <Link href="/">
                <img src="/images/logo.png" alt="Aprosex Logo" className="h-12 lg:h-16 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-cafe hover:text-rojo-persa font-raleway-medium transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex space-x-4">
              <Link href="/asociarse" className="btn-primary px-6 py-2 rounded-full font-raleway-semibold">
                Asociarse
              </Link>
              <Link href="/donar" className="btn-secondary px-6 py-2 rounded-full font-raleway-semibold">
                Donar
              </Link>
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
          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-cafe hover:text-rojo-persa font-raleway-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
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

      {/* Page Title Section */}
      <section className="py-16 lg:py-24 bg-melon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-raleway-bold text-rojo-persa mb-4 lg:text-6xl">Recursos</h2>
            <p className="text-xl font-raleway-light text-cafe lg:text-3xl">Nuestro saber, nuestra fuerza</p>
          </motion.div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 lg:py-24 bg-tea-rose">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-lg font-raleway-light text-cafe leading-relaxed space-y-6">
              <p className="text-center">
                La información es poder, y en el trabajo sexual puede marcar la diferencia entre la seguridad y la
                libertad para decidir cómo queremos ejercer. En un contexto donde la estigmatización, la violencia
                institucional y la desinformación se utilizan como herramientas para controlarnos, conocer nuestros
                derechos y saber cómo protegernos se convierte en un acto de resistencia.
              </p>
              <p className="text-center">
                En APROSEX entendemos que el conocimiento no es solo individual: es un recurso colectivo que crece
                cuando lo compartimos. Por eso hemos creado este espacio como un archivo vivo donde se recopilan saberes
                prácticos y estrategias que han surgido de la experiencia directa de las propias trabajadoras sexuales.
                No se trata de teoría desconectada de la realidad, sino de herramientas nacidas en la calle, en el día a
                día, en las conversaciones entre compañeras que han aprendido a cuidarse mutuamente.
              </p>
              <p className="text-center">
                Queremos que esta sección sea un lugar donde encontrar respuestas rápidas y claras, pero también un
                recordatorio de que no estamos solas, de que la autoorganización y la solidaridad son nuestras mejores
                defensas.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Recursos Grid */}
      <section className="py-16 lg:py-24 bg-melon">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recursos.map((recurso, index) => (
              <AnimatedSection key={index}>
                <div className="bg-beige p-10 h-full flex flex-col">
                  <div className="flex items-start mb-6">
                    <div className="text-beige p-3 mr-4 bg-transparent flex-shrink-0">{recurso.icon}</div>
                    <h3 className="text-xl font-raleway-semibold text-rojo-persa leading-tight">{recurso.title}</h3>
                  </div>
                  <p className="text-cafe font-raleway-regular mb-6 flex-grow">{recurso.description}</p>
                  <Link
                    href={recurso.link}
                    className="btn-primary px-6 py-2 rounded-full font-raleway-semibold text-center inline-flex items-center justify-center"
                  >
                    Acceder
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-melon">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-raleway-bold text-rojo-persa mb-8">
              ¿Necesitas ayuda específica?
            </h2>
            <p className="text-xl font-raleway-regular text-cafe mb-8">
              Si no encuentras lo que buscas o necesitas asesoramiento personalizado, no dudes en contactarnos.
            </p>
            <Link href="/contacto" className="btn-primary px-8 py-4 rounded-full font-raleway-semibold text-lg">
              Contactar
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cafe text-white py-16">
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
