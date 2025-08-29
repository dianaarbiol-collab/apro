"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Menu, X, Mail, MapPin, Facebook, Twitter, Instagram, Send } from "lucide-react"

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

export default function ContactoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const rotatingTexts = ["un espacio seguro", "apoyo mutuo", "visibilidad"]

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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
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
            <h2 className="text-6xl font-raleway-bold text-rojo-persa mb-8 lg:text-6xl tracking-normal">Contacto</h2>
            <p className="text-2xl lg:text-3xl font-raleway-light text-cafe leading-relaxed">Escribe a Aprosex</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24 bg-tea-rose">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-beige p-8 shadow-lg">
                <h2 className="text-3xl font-raleway-bold text-rojo-persa mb-8">Envíanos un mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-raleway-semibold text-cafe mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white text-cafe placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rojo-persa font-raleway-regular"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-raleway-semibold text-cafe mb-2">
                      Email
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
                  <div>
                    <label htmlFor="subject" className="block text-sm font-raleway-semibold text-cafe mb-2">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white text-cafe placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rojo-persa font-raleway-regular"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-raleway-semibold text-cafe mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white text-cafe placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rojo-persa font-raleway-regular resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                      ¡Mensaje enviado correctamente! Te responderemos pronto.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                      Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    className={`w-full px-6 py-4 rounded-full font-raleway-semibold text-lg inline-flex items-center justify-center ${
                      isSubmitting ? "bg-gray-400 cursor-not-allowed" : "btn-primary"
                    }`}
                  >
                    <Send size={20} className="mr-2" />
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-raleway-bold text-rojo-persa mb-8">Información de contacto</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-rojo-persa text-beige p-3 flex-shrink-0">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-raleway-semibold text-cafe mb-2">Email</h3>
                        <p className="text-cafe font-raleway-regular">info@aprosex.org</p>
                        <p className="text-cafe font-raleway-regular text-sm">
                          Responderemos en un plazo de 24-48 horas
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-rojo-persa text-beige p-3 flex-shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-raleway-semibold text-cafe mb-2">Ubicación</h3>
                        <p className="text-cafe font-raleway-regular">Barcelona, España</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-xl font-raleway-bold text-rojo-persa mb-6">Síguenos en redes sociales</h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="bg-rojo-persa text-beige p-3 hover:bg-cafe transition-colors duration-300"
                    >
                      <Facebook size={24} />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="bg-rojo-persa text-beige p-3 hover:bg-cafe transition-colors duration-300"
                    >
                      <Twitter size={24} />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="bg-rojo-persa text-beige p-3 hover:bg-cafe transition-colors duration-300"
                    >
                      <Instagram size={24} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-melon">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-raleway-bold text-rojo-persa mb-12 text-center">
              Preguntas Frecuentes
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                question: "¿Cómo puedo asociarme a APROSEX?",
                answer:
                  "Puedes asociarte completando el formulario de asociación en nuestra página de asociación o contactándonos directamente.",
              },
              {
                question: "¿Cómo puedo participar en los talleres?",
                answer:
                  "Puedes inscribirte en nuestros talleres a través de la página de calendario o contactándonos directamente. Algunos talleres son gratuitos para asociadas.",
              },
              {
                question: "¿Mantienen la confidencialidad?",
                answer:
                  "Absolutamente. Cumplimos estrictamente con la Ley de Protección de Datos vigente en España. Toda la información facilitada será tratada con la máxima confidencialidad y sin riesgo para tu privacidad.",
              },
            ].map((faq, index) => (
              <AnimatedSection key={index}>
                <div className="bg-beige p-6 shadow-lg">
                  <h3 className="text-lg font-raleway-semibold text-rojo-persa mb-3">{faq.question}</h3>
                  <p className="text-cafe font-raleway-regular">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
