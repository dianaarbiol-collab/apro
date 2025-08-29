"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Menu, X, Mail, MapPin, Twitter, Instagram } from "lucide-react"

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

export default function SeguridadDigitalPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const rotatingTexts = ["un espacio seguro", "información confiable", "apoyo mutuo", "defensa de derechos"]

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
            <h2 className="text-3xl lg:text-5xl font-raleway-bold text-rojo-persa">
              Seguridad Digital y Protección Online
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-8 lg:py-12 bg-tea-rose">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-beige p-8">
              <h2 className="text-2xl font-raleway-semibold text-rojo-persa mb-4">Protección de Identidad Online</h2>
              <p className="font-raleway-regular text-cafe mb-4">
                En el mundo digital, proteger tu identidad real es fundamental para tu seguridad.{" "}
                <strong className="font-raleway-semibold">
                  Tu identidad real es tu tesoro más valioso: protégela usando todas las herramientas a tu disposición.
                </strong>
              </p>

              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">
                Regla de oro: Separación total
              </h3>
              <p className="font-raleway-regular text-cafe mb-4">
                Mantén completamente separada tu identidad de trabajo sexual de tu vida personal. Nunca compartas datos
                personales reales (nombre completo, dirección, número de teléfono personal) en tus perfiles públicos.
              </p>

              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">
                Creación de tu identidad de trabajo
              </h3>
              <div className="bg-rojo-persa/10 p-4 border-l-4 border-rojo-persa mb-4">
                <h4 className="font-raleway-semibold text-cafe">Lista de verificación para proteger tu identidad:</h4>
                <ul className="list-disc list-inside font-raleway-regular text-cafe">
                  <li>Usa un nombre artístico/falso en todas las plataformas</li>
                  <li>Fotos sin rostro identificable o con filtros/máscaras</li>
                  <li>Email exclusivo que no contenga tu nombre real</li>
                  <li>Número de teléfono separado (SIM secundaria o virtual)</li>
                  <li>Cuentas de redes sociales nuevas solo para trabajo</li>
                  <li>Dirección postal diferente (apartado de correos, etc.)</li>
                </ul>
              </div>

              <div className="bg-tea-rose/30 p-4">
                <h4 className="font-raleway-semibold text-rojo-persa">Consejo de seguridad</h4>
                <p className="font-raleway-regular text-cafe">
                  Si haces videollamadas o streams, considera usar mascarillas, pelucas, filtros o maquillaje que cambie
                  tus rasgos identificativos. La creatividad es tu aliada para mantener el anonimato.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-beige p-8">
              <h2 className="text-2xl font-raleway-semibold text-rojo-persa mb-4">
                Configuración de Seguridad en Cuentas
              </h2>
              <p className="font-raleway-regular text-cafe mb-4">
                Tus cuentas online son la puerta de entrada a tu trabajo y tus ingresos.{" "}
                <strong className="font-raleway-semibold">
                  Una cuenta hackeada puede significar pérdida de contenido, dinero y extorsión.
                </strong>
              </p>

              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">Contraseñas y autenticación</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-melon/30 p-4 text-center">
                  <h4 className="font-raleway-semibold text-rojo-persa mb-2">1. Contraseñas únicas</h4>
                  <p className="font-raleway-regular text-cafe text-sm">
                    Una contraseña diferente para cada plataforma, con mayúsculas, minúsculas, números y símbolos
                  </p>
                </div>
                <div className="bg-melon/30 p-4 text-center">
                  <h4 className="font-raleway-semibold text-rojo-persa mb-2">2. Verificación 2FA</h4>
                  <p className="font-raleway-regular text-cafe text-sm">
                    Activa siempre la verificación en dos pasos cuando esté disponible
                  </p>
                </div>
                <div className="bg-melon/30 p-4 text-center">
                  <h4 className="font-raleway-semibold text-rojo-persa mb-2">3. Acceso directo</h4>
                  <p className="font-raleway-regular text-cafe text-sm">
                    Nunca ingreses datos desde enlaces de emails no solicitados
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">Configuraciones de privacidad</h3>
              <div className="bg-beige/50 p-4">
                <h4 className="font-raleway-semibold text-rojo-persa">Herramientas de protección en plataformas:</h4>
                <ul className="list-disc list-inside font-raleway-regular text-cafe">
                  <li>Bloqueo geográfico: bloquea países/regiones donde tengas familia</li>
                  <li>Cuentas privadas: aprueba manualmente a seguidores</li>
                  <li>Sin geolocalización: desactiva ubicación en fotos y posts</li>
                  <li>Bloqueos preventivos: bloquea usuarios que te generen mal presentimiento</li>
                </ul>
              </div>

              <div className="bg-rojo-persa/10 p-4 border-l-4 border-rojo-persa mt-4">
                <h4 className="font-raleway-semibold text-cafe">Cuidado con el phishing</h4>
                <p className="font-raleway-regular text-cafe">
                  Si recibes emails sobre "problemas con tu cuenta de OnlyFans" o "verificación necesaria", NO hagas
                  clic. Los estafadores imitan perfectamente estas comunicaciones para robarte las credenciales.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-beige p-8">
              <h2 className="text-2xl font-raleway-semibold text-rojo-persa mb-4">Protección de Contenido</h2>
              <p className="font-raleway-regular text-cafe mb-4">
                Tu contenido es tu propiedad intelectual y tu fuente de ingresos.{" "}
                <strong className="font-raleway-semibold">
                  Protegerlo de filtraciones no autorizadas es crucial para tu negocio.
                </strong>
              </p>

              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">
                Marcas de agua y protección preventiva
              </h3>
              <div className="bg-tea-rose/30 p-4">
                <h4 className="font-raleway-semibold text-rojo-persa">Estrategias de protección:</h4>
                <ul className="list-disc list-inside font-raleway-regular text-cafe">
                  <li>Marcas de agua discretas pero identificables en todo tu contenido</li>
                  <li>Personalización por cliente (marca de agua con nombre de usuario)</li>
                  <li>No reutilices fotos de tus perfiles personales</li>
                  <li>Diferentes versiones para diferentes plataformas</li>
                </ul>
              </div>

              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">
                Si filtran tu contenido sin consentimiento
              </h3>
              <div className="grid md:grid-cols-4 gap-4 mb-4">
                <div className="bg-melon/30 p-4 text-center">
                  <h4 className="font-raleway-semibold text-rojo-persa mb-2">1. Documenta</h4>
                  <p className="font-raleway-regular text-cafe text-sm">
                    Capturas de pantalla, URLs, fechas, usuarios que lo publicaron
                  </p>
                </div>
                <div className="bg-melon/30 p-4 text-center">
                  <h4 className="font-raleway-semibold text-rojo-persa mb-2">2. Reporta</h4>
                  <p className="font-raleway-regular text-cafe text-sm">
                    Usa las herramientas de reporte de cada plataforma inmediatamente
                  </p>
                </div>
                <div className="bg-melon/30 p-4 text-center">
                  <h4 className="font-raleway-semibold text-rojo-persa mb-2">3. DMCA</h4>
                  <p className="font-raleway-regular text-cafe text-sm">
                    Envía avisos de copyright para remover contenido
                  </p>
                </div>
                <div className="bg-melon/30 p-4 text-center">
                  <h4 className="font-raleway-semibold text-rojo-persa mb-2">4. Denuncia</h4>
                  <p className="font-raleway-regular text-cafe text-sm">
                    En España es DELITO difundir contenido íntimo sin consentimiento
                  </p>
                </div>
              </div>

              <div className="bg-rojo-persa/10 p-4 border-l-4 border-rojo-persa">
                <h4 className="font-raleway-semibold text-cafe">Tus derechos de copyright en España</h4>
                <p className="font-raleway-regular text-cafe">
                  Tus fotos y vídeos son TU contenido. Tienes derechos de propiedad intelectual automáticos. Aunque
                  alguien haya pagado por verlo, NO tiene derecho a redistribuirlo. La difusión no autorizada es delito
                  bajo el artículo 197 del Código Penal español.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-beige p-8">
              <h2 className="text-2xl font-raleway-semibold text-rojo-persa mb-4">Autoprotección Digital Avanzada</h2>

              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">
                Herramientas de seguridad esenciales
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-melon/30 p-4">
                  <h4 className="font-raleway-semibold text-rojo-persa mb-2">VPN</h4>
                  <p className="font-raleway-regular text-cafe text-sm">Cifra tu tráfico y oculta tu ubicación real</p>
                </div>
                <div className="bg-melon/30 p-4">
                  <h4 className="font-raleway-semibold text-rojo-persa mb-2">Antivirus</h4>
                  <p className="font-raleway-regular text-cafe text-sm">Mantén actualizado siempre tu sistema</p>
                </div>
                <div className="bg-melon/30 p-4">
                  <h4 className="font-raleway-semibold text-rojo-persa mb-2">Copias de seguridad</h4>
                  <p className="font-raleway-regular text-cafe text-sm">
                    Guarda tu contenido en múltiples lugares seguros
                  </p>
                </div>
                <div className="bg-melon/30 p-4">
                  <h4 className="font-raleway-semibold text-rojo-persa mb-2">Signal/Telegram</h4>
                  <p className="font-raleway-regular text-cafe text-sm">
                    Mensajería cifrada para comunicaciones sensibles
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">Autocuidado digital y mental</h3>
              <div className="bg-beige/50 p-4">
                <h4 className="font-raleway-semibold text-rojo-persa">Establece límites saludables:</h4>
                <ul className="list-disc list-inside font-raleway-regular text-cafe">
                  <li>Horarios fijos para interactuar en plataformas de trabajo</li>
                  <li>Desconexión real fuera de esos horarios</li>
                  <li>Filtros de palabras para comentarios negativos</li>
                  <li>Bloqueos inmediatos ante faltas de respeto</li>
                  <li>Espacios seguros online con otras trabajadoras sexuales</li>
                </ul>
              </div>

              <div className="bg-tea-rose/30 p-4 mt-4">
                <h4 className="font-raleway-semibold text-rojo-persa">Tu bienestar mental es prioritario</h4>
                <p className="font-raleway-regular text-cafe">
                  Estar expueste online puede pasar factura emocional. Practica la autodefensa digital: no respondas en
                  caliente a comentarios negativos, respira, y recuerda que no te conocen realmente. Es tu espacio
                  digital y mereces respeto.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-beige p-8">
              <h2 className="text-2xl font-raleway-semibold text-rojo-persa mb-4">Tus Derechos Digitales en España</h2>
              <p className="font-raleway-regular text-cafe mb-4">
                Como persona que vive en España, tienes derechos digitales robustos protegidos por el GDPR y la
                legislación española.
              </p>

              <div className="bg-rojo-persa/10 p-4 border-l-4 border-rojo-persa mb-4">
                <h4 className="font-raleway-semibold text-cafe">Tus derechos según el GDPR:</h4>
                <ul className="list-disc list-inside font-raleway-regular text-cafe">
                  <li>Derecho al olvido: puedes pedir que borren tus datos</li>
                  <li>Derecho de acceso: saber qué datos tienen sobre ti</li>
                  <li>Derecho de rectificación: corregir información incorrecta</li>
                  <li>Derecho de portabilidad: llevarte tus datos a otra plataforma</li>
                  <li>Derecho de oposición: oponerte al procesamiento de datos</li>
                </ul>
              </div>

              <div className="bg-tea-rose/30 p-4">
                <h4 className="font-raleway-semibold text-rojo-persa">El acoso online ES UN DELITO</h4>
                <p className="font-raleway-regular text-cafe">
                  El artículo 172 ter del Código Penal criminaliza el acoso persistente a través de medios electrónicos
                  con penas de 3 meses a 2 años de prisión. NO tienes que tolerarlo. Guarda pruebas y denuncia.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-beige p-8">
              <h2 className="text-2xl font-raleway-semibold text-rojo-persa mb-4">Canales de Emergencia Digital</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-melon/30 p-4 text-center">
                  <strong className="font-raleway-semibold text-rojo-persa">AEPD Canal Prioritario</strong>
                  <p className="font-raleway-regular text-cafe text-sm">
                    Para eliminación urgente de contenido íntimo no consentido
                  </p>
                </div>
                <div className="bg-melon/30 p-4 text-center">
                  <strong className="font-raleway-semibold text-rojo-persa">Policía Nacional</strong>
                  <p className="font-raleway-regular text-cafe text-sm">
                    Denuncia cibercrímenes en cualquier comisaría
                  </p>
                </div>
                <div className="bg-melon/30 p-4 text-center">
                  <strong className="font-raleway-semibold text-rojo-persa">016</strong>
                  <p className="font-raleway-regular text-cafe text-sm">
                    Violencia de género (incluye violencia digital)
                  </p>
                </div>
                <div className="bg-melon/30 p-4 text-center">
                  <strong className="font-raleway-semibold text-rojo-persa">Aprosex</strong>
                  <p className="font-raleway-regular text-cafe text-sm">
                    Apoyo y asesoramiento específico para trabajadores sexuales
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cafe text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About Us */}
            <div>
              <img src="/images/logo-footer.png" alt="Aprosex Logo" className="h-12 lg:h-16 w-auto mb-4" />
              <p className="text-sm font-raleway-regular">
                Somos una asociación sin ánimo de lucro dedicada a la defensa de los derechos de los trabajadores
                sexuales en España.
              </p>
            </div>

            {/* Quick Navigation */}
            <div>
              <h3 className="text-xl font-raleway-bold text-rojo-persa mb-4">Navegación rápida</h3>
              <ul className="space-y-2 font-raleway-regular">
                <li>
                  <a href="/" className="hover:text-rojo-persa transition-colors duration-300">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/aprosex" className="hover:text-rojo-persa transition-colors duration-300">
                    Aprosex
                  </a>
                </li>
                <li>
                  <a href="/recursos" className="hover:text-rojo-persa transition-colors duration-300">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="/actualidad" className="hover:text-rojo-persa transition-colors duration-300">
                    Actualidad
                  </a>
                </li>
                <li>
                  <a href="/calendario" className="hover:text-rojo-persa transition-colors duration-300">
                    Calendario
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="hover:text-rojo-persa transition-colors duration-300">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-raleway-bold text-rojo-persa mb-4">Contacto</h3>
              <div className="space-y-2 font-raleway-regular">
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>info@aprosex.org</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>Barcelona, España</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-raleway-bold text-rojo-persa mb-4">Newsletter</h3>
              <p className="mb-2 text-sm font-raleway-regular">
                Mantente informade sobre nuestras actividades y recursos.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full px-3 py-2 rounded-md bg-beige text-cafe placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rojo-persa font-raleway-regular"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary px-4 py-2 rounded-md font-raleway-semibold"
                >
                  Suscribirse
                </motion.button>
              </form>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-gray-600 pt-6 mb-6">
            <div className="flex justify-center space-x-4">
              <motion.a
                href="https://x.com/Aprosex"
                whileHover={{ scale: 1.2 }}
                className="text-white hover:text-rojo-persa transition-colors duration-300"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/aprosex"
                whileHover={{ scale: 1.2 }}
                className="text-white hover:text-rojo-persa transition-colors duration-300"
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400 border-t border-gray-600 pt-6 font-raleway-regular">
            <p>&copy; 2025 Aprosex - Asociación de Profesionales del Sexo. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
