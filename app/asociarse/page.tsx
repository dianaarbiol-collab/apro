"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Menu, X, Mail, MapPin, Twitter, Instagram } from "lucide-react"
import { useRouter } from "next/navigation"

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

export default function AsociarsePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const router = useRouter()

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ciudad: "",
    edad: "",
    experiencia: "",
    motivacion: "",
    contribucion: "",
    privacidad: false,
    newsletter: false,
    whatsapp: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const rotatingTexts = ["una organización de activismo", "un espacio cultural", "un centro de aprendizaje", "un hogar"]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Aprosex", href: "/aprosex" },
    { name: "Recursos", href: "/recursos" },
    { name: "Actualidad Puta", href: "/actualidad" },
    { name: "Calendario", href: "/calendario" },
    { name: "Contacto", href: "/contacto" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/asociarse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        // Redirect to success page after a short delay
        setTimeout(() => {
          router.push("/asociarse/exito")
        }, 1500)
      } else {
        setSubmitStatus("error")
        setErrorMessage(data.error || "Error al enviar la solicitud")
      }
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Error de conexión. Por favor, inténtalo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

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
              <a href="/asociarse" className="btn-primary px-6 py-2 font-raleway-semibold">
                Asociarse
              </a>
              <a href="/donar" className="btn-secondary px-6 py-2 font-raleway-semibold">
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
      <section className="py-16 lg:py-24 bg-[rgba(239,205,206,1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-6xl font-raleway-bold text-rojo-persa mb-8 lg:text-6xl tracking-normal">Asóciate</h2>
            <p className="text-2xl lg:text-3xl font-raleway-light text-cafe leading-relaxed">
              Únete a nuestra lucha por los derechos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-16 lg:py-24 bg-melon">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-beige p-8 lg:p-12">
              <h3 className="text-3xl font-raleway-bold text-rojo-persa mb-8 text-center">Formulario de Asociación</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-raleway-semibold text-cafe mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white text-cafe placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rojo-persa font-raleway-regular"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-raleway-semibold text-cafe mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white text-cafe placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rojo-persa font-raleway-regular"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-raleway-semibold text-cafe mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white text-cafe placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rojo-persa font-raleway-regular"
                      placeholder="+34 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="ciudad" className="block text-sm font-raleway-semibold text-cafe mb-2">
                      Ciudad *
                    </label>
                    <input
                      type="text"
                      id="ciudad"
                      name="ciudad"
                      required
                      value={formData.ciudad}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white text-cafe placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rojo-persa font-raleway-regular"
                      placeholder="Tu ciudad"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="edad" className="block text-sm font-raleway-semibold text-cafe mb-2">
                    Edad *
                  </label>
                  <input
                    type="number"
                    id="edad"
                    name="edad"
                    required
                    min="18"
                    max="99"
                    value={formData.edad}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white text-cafe placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rojo-persa font-raleway-regular"
                    placeholder="Tu edad"
                  />
                </div>

                <div>
                  <label htmlFor="experiencia" className="block text-sm font-raleway-semibold text-cafe mb-2">
                    Experiencia en trabajo sexual
                  </label>
                  <select
                    id="experiencia"
                    name="experiencia"
                    value={formData.experiencia}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white text-cafe focus:outline-none focus:ring-2 focus:ring-rojo-persa font-raleway-regular"
                  >
                    <option value="">Selecciona tu experiencia</option>
                    <option value="menos-1">Menos de 1 año</option>
                    <option value="1-3">1-3 años</option>
                    <option value="3-5">3-5 años</option>
                    <option value="5-10">5-10 años</option>
                    <option value="mas-10">Más de 10 años</option>
                    <option value="no-aplica">No aplica</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="motivacion" className="block text-sm font-raleway-semibold text-cafe mb-2">
                    ¿Por qué quieres asociarte a APROSEX? *
                  </label>
                  <textarea
                    id="motivacion"
                    name="motivacion"
                    required
                    rows={4}
                    value={formData.motivacion}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white text-cafe placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rojo-persa font-raleway-regular resize-none"
                    placeholder="Cuéntanos qué te motiva a unirte a nuestra asociación..."
                  />
                </div>

                <div>
                  <label htmlFor="contribucion" className="block text-sm font-raleway-semibold text-cafe mb-2">
                    ¿Cómo te gustaría contribuir a APROSEX?
                  </label>
                  <textarea
                    id="contribucion"
                    name="contribucion"
                    rows={4}
                    value={formData.contribucion}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white text-cafe placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rojo-persa font-raleway-regular resize-none"
                    placeholder="Talleres, arte, activismo, apoyo legal, etc..."
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacidad"
                      name="privacidad"
                      required
                      checked={formData.privacidad}
                      onChange={handleInputChange}
                      className="mt-1 mr-3 h-4 w-4 text-rojo-persa focus:ring-rojo-persa"
                    />
                    <label htmlFor="privacidad" className="text-sm font-raleway-regular text-cafe">
                      Acepto la política de privacidad y el tratamiento de mis datos personales según la normativa
                      vigente. Entiendo que mis datos serán utilizados únicamente para fines asociativos y no serán
                      compartidos con terceros. *
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="whatsapp"
                      name="whatsapp"
                      checked={formData.whatsapp}
                      onChange={handleInputChange}
                      className="mt-1 mr-3 h-4 w-4 text-rojo-persa focus:ring-rojo-persa"
                    />
                    <label htmlFor="whatsapp" className="text-sm font-raleway-regular text-cafe">
                      Quiero recibir información por WhatsApp
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="mt-1 mr-3 h-4 w-4 text-rojo-persa focus:ring-rojo-persa"
                    />
                    <label htmlFor="newsletter" className="text-sm font-raleway-regular text-cafe">
                      Quiero recibir el newsletter de APROSEX con información sobre eventos, talleres y noticias
                      relevantes.
                    </label>
                  </div>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                    ¡Solicitud enviada correctamente! Redirigiendo...
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{errorMessage}</div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className={`w-full px-6 py-4 font-raleway-semibold text-lg ${
                    isSubmitting ? "bg-gray-400 cursor-not-allowed" : "btn-primary"
                  }`}
                >
                  {isSubmitting ? "Enviando solicitud..." : "Enviar Solicitud de Asociación"}
                </motion.button>
              </form>

              <div className="mt-8 p-6 bg-rojo-persa/10 border-l-4 border-rojo-persa">
                <h4 className="font-raleway-semibold text-cafe mb-2">Información importante:</h4>
                <ul className="text-sm font-raleway-regular text-cafe space-y-1">
                  <li>• La asociación a APROSEX es gratuita</li>
                  <li>• Revisaremos tu solicitud en un plazo de 7-10 días</li>
                  <li>• Te contactaremos por email para confirmar tu asociación</li>
                  <li>• Todos los datos son tratados con máxima confidencialidad</li>
                </ul>
              </div>
            </div>
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
                  className="block btn-primary px-6 py-3 font-raleway-semibold text-center"
                >
                  Asociarse
                </motion.a>
                <motion.a
                  href="/donar"
                  whileHover={{ scale: 1.05 }}
                  className="block btn-secondary px-6 py-3 font-raleway-semibold text-center"
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
