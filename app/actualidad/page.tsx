"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Menu, X, Calendar, User, ArrowRight } from "lucide-react"
import { getFeaturedPost, getRegularPosts } from "@/lib/blog-posts"

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

export default function ActualidadPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const rotatingTexts = ["Dignidad", "Resistencia", "Visibilidad", "Empoderamiento"]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
    }, 2000)

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

  const featuredPost = getFeaturedPost()
  const regularPosts = getRegularPosts()

  return (
    <div className="min-h-screen bg-tea-rose text-cafe">
      {/* Header */}
      <header className="bg-melon sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/">
                <img src="/images/logo.png" alt="Aprosex Logo" className="h-12 lg:h-16 w-auto" />
              </a>
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
          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-4">
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
            <h2 className="text-4xl lg:text-6xl font-raleway-bold text-cafe mb-6">Actualidad Puta</h2>
            <h3 className="text-xl lg:text-2xl font-raleway-regular text-cafe leading-relaxed">
              Nuestras voces, nuestras luchas, nuestras historias
            </h3>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 lg:py-24 bg-tea-rose">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="bg-beige shadow-lg overflow-hidden">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="lg:order-2">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 lg:order-1">
                    <div className="flex items-center mb-4">
                      <span className="bg-rojo-persa text-beige px-3 py-1 text-sm font-raleway-semibold">
                        Destacado
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-raleway-bold text-rojo-persa mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-cafe font-raleway-regular mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center mb-6 text-sm text-gray-600">
                      <User size={16} className="mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Calendar size={16} className="mr-2" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <motion.a
                      href={`/actualidad/${featuredPost.slug}`}
                      whileHover={{ scale: 1.05 }}
                      className="btn-primary px-6 py-3 rounded-full font-raleway-semibold inline-flex items-center"
                    >
                      Leer más
                      <ArrowRight size={18} className="ml-2" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-16 lg:py-24 bg-[rgba(235,152,106,1)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-raleway-bold text-rojo-persa mb-8">
              No te pierdas nuestras actualizaciones
            </h2>
            <p className="text-xl font-raleway-regular text-cafe mb-8">
              Suscríbete a nuestro newsletter para recibir las últimas noticias y artículos directamente en tu correo.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-grow px-4 py-3 bg-beige text-cafe placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rojo-persa font-raleway-regular"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-6 py-3 font-raleway-semibold"
              >
                Suscribirse
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cafe text-beige py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <img src="/images/logo.png" alt="Aprosex Logo" className="h-16 w-auto mb-4" />
              <p className="font-raleway-regular text-lg leading-relaxed mb-6">
                Asociación de Profesionales del Sexo. Defendemos los derechos laborales, la dignidad y la seguridad de
                las trabajadoras sexuales en España.
              </p>
              <div className="flex space-x-4">
                <a href="https://x.com/Aprosex" className="text-beige hover:text-melon transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/aprosex" className="text-beige hover:text-melon transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297L3.488 17.328l1.637-1.637c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323L3.488 7.408l1.637-1.637c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297l1.637 1.637-1.637 1.637c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323l1.637 1.637-1.637 1.637c-.875.807-2.026 1.297-3.323 1.297z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-raleway-semibold text-lg mb-4">Navegación</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="font-raleway-regular hover:text-melon transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/aprosex" className="font-raleway-regular hover:text-melon transition-colors">
                    Aprosex
                  </a>
                </li>
                <li>
                  <a href="/recursos" className="font-raleway-regular hover:text-melon transition-colors">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="/actualidad" className="font-raleway-regular hover:text-melon transition-colors">
                    Actualidad Puta
                  </a>
                </li>
                <li>
                  <a href="/calendario" className="font-raleway-regular hover:text-melon transition-colors">
                    Calendario
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="font-raleway-regular hover:text-melon transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-raleway-semibold text-lg mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/recursos/derechos-legales"
                    className="font-raleway-regular hover:text-melon transition-colors"
                  >
                    Derechos Legales
                  </a>
                </li>
                <li>
                  <a
                    href="/recursos/seguridad-digital"
                    className="font-raleway-regular hover:text-melon transition-colors"
                  >
                    Seguridad Digital
                  </a>
                </li>
                <li>
                  <a
                    href="/recursos/finanzas-seguras"
                    className="font-raleway-regular hover:text-melon transition-colors"
                  >
                    Finanzas Seguras
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-beige/20 mt-12 pt-8 text-center">
            <p className="font-raleway-regular">
              &copy; 2025 APROSEX - Asociación de Profesionales del Sexo. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
