"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Mail, MapPin, Twitter, Instagram, CheckCircle } from "lucide-react"

export default function ExitoAsociacionPage() {
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

      {/* Success Content */}
      <section className="py-16 lg:py-24 bg-tea-rose min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-beige p-8 lg:p-12 shadow-lg"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <CheckCircle size={80} className="text-green-500 mx-auto" />
            </motion.div>

            <h1 className="text-4xl lg:text-5xl font-raleway-bold text-rojo-persa mb-6">¡Solicitud Enviada!</h1>

            <p className="text-xl lg:text-2xl font-raleway-regular text-cafe mb-8 leading-relaxed">
              Gracias por querer formar parte de APROSEX. Hemos recibido tu solicitud de asociación correctamente.
            </p>

            <div className="bg-rojo-persa/10 border-l-4 border-rojo-persa p-6 mb-8 text-left">
              <h3 className="text-xl font-raleway-semibold text-rojo-persa mb-4">¿Qué sigue ahora?</h3>
              <ul className="space-y-3 text-cafe font-raleway-regular">
                <li className="flex items-start">
                  <span className="text-rojo-persa mr-2">•</span>
                  Revisaremos tu solicitud en un plazo de 7-10 días hábiles
                </li>
                <li className="flex items-start">
                  <span className="text-rojo-persa mr-2">•</span>
                  Te contactaremos por email para confirmar tu asociación
                </li>
                <li className="flex items-start">
                  <span className="text-rojo-persa mr-2">•</span>
                  Recibirás información sobre nuestras actividades y eventos
                </li>
                <li className="flex items-start">
                  <span className="text-rojo-persa mr-2">•</span>
                  Podrás participar en talleres, espacios de apoyo y más
                </li>
              </ul>
            </div>

            <div className="bg-tea-rose/30 p-6 mb-8">
              <h3 className="text-lg font-raleway-semibold text-rojo-persa mb-3">Mientras tanto...</h3>
              <p className="text-cafe font-raleway-regular mb-4">
                Puedes seguirnos en redes sociales y explorar nuestros recursos disponibles
              </p>
              <div className="flex justify-center space-x-4 mb-4">
                <a href="https://x.com/Aprosex" className="text-rojo-persa hover:text-cafe transition-colors">
                  <Twitter size={24} />
                </a>
                <a
                  href="https://www.instagram.com/aprosex"
                  className="text-rojo-persa hover:text-cafe transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <motion.a
                href="/recursos"
                whileHover={{ scale: 1.05 }}
                className="btn-primary px-8 py-3 font-raleway-semibold text-lg inline-block mr-4"
              >
                Explorar Recursos
              </motion.a>
              <motion.a
                href="/calendario"
                whileHover={{ scale: 1.05 }}
                className="btn-secondary px-8 py-3 font-raleway-semibold text-lg inline-block"
              >
                Ver Eventos
              </motion.a>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 font-raleway-regular">
                Si tienes alguna pregunta, no dudes en contactarnos en{" "}
                <a href="mailto:info@aprosex.org" className="text-rojo-persa hover:underline">
                  info@aprosex.org
                </a>
              </p>
            </div>
          </motion.div>
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
