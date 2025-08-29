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

export default function FinanzasSeguras() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const rotatingTexts = ["un espacio seguro", "una comunidad", "información útil", "apoyo mutuo"]

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
            <h2 className="text-3xl lg:text-5xl font-raleway-bold text-rojo-persa">Finanzas y Pagos Seguros</h2>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-8 lg:py-12 bg-tea-rose">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-beige p-8">
              <h2 className="text-2xl font-raleway-semibold text-rojo-persa mb-4">
                La Discriminación Financiera es Real
              </h2>
              <p className="font-raleway-regular text-cafe mb-4">
                Aunque el trabajo sexual en línea es legal en España, muchas plataformas de pago y bancos discriminan
                sistemáticamente a trabajadores sexuales.{" "}
                <strong className="font-raleway-semibold">Es importante conocer esta realidad para protegerte.</strong>
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-rojo-persa/10 p-4 border-l-4 border-rojo-persa">
                  <h4 className="font-raleway-semibold text-cafe mb-2">PayPal</h4>
                  <p className="font-raleway-regular text-cafe text-sm">
                    Prohíbe explícitamente transacciones de "contenido sexual". Congela cuentas sin previo aviso y
                    retiene fondos hasta 180 días.
                  </p>
                </div>
                <div className="bg-rojo-persa/10 p-4 border-l-4 border-rojo-persa">
                  <h4 className="font-raleway-semibold text-cafe mb-2">Bancos tradicionales</h4>
                  <p className="font-raleway-regular text-cafe text-sm">
                    BBVA, Santander, CaixaBank pueden cerrar cuentas citando "políticas de riesgo" sin explicaciones
                    detalladas.
                  </p>
                </div>
                <div className="bg-rojo-persa/10 p-4 border-l-4 border-rojo-persa">
                  <h4 className="font-raleway-semibold text-cafe mb-2">Otras plataformas</h4>
                  <p className="font-raleway-regular text-cafe text-sm">
                    Venmo, CashApp, Stripe y similares también restringen el trabajo sexual, aunque sea legal.
                  </p>
                </div>
              </div>

              <div className="bg-tea-rose/30 p-4">
                <h4 className="font-raleway-semibold text-rojo-persa">Esta discriminación NO es legal</h4>
                <p className="font-raleway-regular text-cafe">
                  La discriminación financiera contra trabajadores sexuales viola principios de igualdad, pero ocurre
                  debido a presiones de procesadores de tarjetas y regulaciones bancarias estadounidenses que afectan
                  globalmente.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-beige p-8">
              <h2 className="text-2xl font-raleway-semibold text-rojo-persa mb-4">
                Estrategias de Protección Financiera
              </h2>

              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">Diversificación es clave</h3>
              <p className="font-raleway-regular text-cafe mb-4">
                Nunca dependas de una sola plataforma de pago. Si te bloquean una cuenta, necesitas alternativas
                inmediatas para no quedarte sin ingresos.
              </p>

              <div className="bg-beige/50 p-4 mb-6">
                <h4 className="font-raleway-semibold text-rojo-persa">Estrategias de diversificación:</h4>
                <ul className="list-disc list-inside font-raleway-regular text-cafe">
                  <li>Múltiples cuentas bancarias en diferentes entidades</li>
                  <li>Cuenta exclusiva de trabajo separada de la personal</li>
                  <li>Tarjetas prepago o virtuales con saldo limitado</li>
                  <li>Retiros frecuentes de monederos digitales</li>
                  <li>Efectivo para servicios presenciales cuando sea posible</li>
                </ul>
              </div>

              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">Alternativas a PayPal</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-melon/30 p-4">
                  <h4 className="font-raleway-semibold text-rojo-persa mb-2">Bizum</h4>
                  <p className="font-raleway-regular text-cafe text-sm">
                    Sistema español ampliamente usado, pero ten cuidado con la nueva normativa fiscal de 2026
                  </p>
                </div>
                <div className="bg-melon/30 p-4">
                  <h4 className="font-raleway-semibold text-rojo-persa mb-2">Transferencias directas</h4>
                  <p className="font-raleway-regular text-cafe text-sm">
                    A través de tu cuenta bancaria exclusiva de trabajo
                  </p>
                </div>
                <div className="bg-melon/30 p-4">
                  <h4 className="font-raleway-semibold text-rojo-persa mb-2">Plataformas especializadas</h4>
                  <p className="font-raleway-regular text-cafe text-sm">
                    Wishtender, Paxum, Skrill (más amigables con adultos)
                  </p>
                </div>
                <div className="bg-melon/30 p-4">
                  <h4 className="font-raleway-semibold text-rojo-persa mb-2">Criptomonedas</h4>
                  <p className="font-raleway-regular text-cafe text-sm">
                    Bitcoin, Ethereum para clientes tech-savvy (cuidado con volatilidad)
                  </p>
                </div>
              </div>

              <div className="bg-tea-rose/30 p-4">
                <h4 className="font-raleway-semibold text-rojo-persa">
                  Consejo para usar PayPal (si decides arriesgarte)
                </h4>
                <ul className="list-disc list-inside font-raleway-regular text-cafe">
                  <li>
                    Usa descripciones neutras en transacciones (evita palabras como "contenido", "adulto", "sexy")
                  </li>
                  <li>Retira dinero frecuentemente, no acumules grandes cantidades</li>
                  <li>Ten una cuenta de respaldo siempre preparada</li>
                  <li>Documenta todas las transacciones</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-beige p-8">
              <h2 className="text-2xl font-raleway-semibold text-rojo-persa mb-4">Cobrando de Forma Segura</h2>

              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">En plataformas online</h3>
              <p className="font-raleway-regular text-cafe mb-4">
                Siempre que sea posible, usa los sistemas internos de pago de plataformas como OnlyFans, ManyVids, etc.
                Aunque se queden comisión, te garantizan el cobro y evitan estafas.
              </p>

              <div className="bg-rojo-persa/10 p-4 border-l-4 border-rojo-persa mb-6">
                <h4 className="font-raleway-semibold text-cafe">¿Por qué usar sistemas internos?</h4>
                <ul className="list-disc list-inside font-raleway-regular text-cafe">
                  <li>Pago garantizado: el cliente paga por adelantado</li>
                  <li>Protección contra fraudes: no lidias con tarjetas robadas</li>
                  <li>Sin contracargos: la plataforma se encarga de disputas</li>
                  <li>Soporte técnico: ayuda en caso de problemas</li>
                </ul>
              </div>

              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">
                Pagos personalizados fuera de plataformas
              </h3>
              <div className="bg-beige/50 p-4 mb-6">
                <h4 className="font-raleway-semibold text-rojo-persa">Prácticas seguras:</h4>
                <ul className="list-disc list-inside font-raleway-regular text-cafe">
                  <li>Nunca envíes contenido completo sin recibir el pago primero</li>
                  <li>Pide depósito inicial para contenido personalizado costoso</li>
                  <li>Verifica la recepción del pago en tu propia cuenta antes de entregar</li>
                  <li>Usa facturación profesional cuando sea posible (PayPal Goods/Services)</li>
                  <li>Establece términos claros por escrito antes del servicio</li>
                </ul>
              </div>

              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">Pagos en persona</h3>
              <div className="bg-tea-rose/30 p-4">
                <h4 className="font-raleway-semibold text-rojo-persa">Seguridad en pagos presenciales</h4>
                <ul className="list-disc list-inside font-raleway-regular text-cafe">
                  <li>Efectivo preferentemente: anónimo y definitivo</li>
                  <li>Verifica billetes: especialmente de denominaciones altas</li>
                  <li>Pago antes del servicio: nunca "después" o "retiene algo como garantía"</li>
                  <li>Lectores de tarjeta móviles: si usas tecnología, con descripciones discretas</li>
                  <li>Seguridad al salir: deposita grandes cantidades en cajeros cercanos</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-beige p-8">
              <h2 className="text-2xl font-raleway-semibold text-rojo-persa mb-4">Estafas Comunes y Cómo Evitarlas</h2>

              <div className="bg-rojo-persa/10 p-4 border-l-4 border-rojo-persa mb-6">
                <h4 className="font-raleway-semibold text-cafe">Señales de alarma - NUNCA hagas esto:</h4>
                <ul className="list-disc list-inside font-raleway-regular text-cafe">
                  <li>"Te envié dinero de más por error" - piden reembolso de diferencia</li>
                  <li>Cheques - casi siempre fraudulentos</li>
                  <li>Western Union de desconocidos - método típico de estafas</li>
                  <li>Pago con código de verificación - nunca compartas códigos</li>
                  <li>Ofertas demasiado buenas - sumas enormes de dinero de la nada</li>
                  <li>"Pago después del servicio" - especialmente de clientes nuevos</li>
                </ul>
              </div>

              <div className="bg-tea-rose/30 p-4 mb-6">
                <h4 className="font-raleway-semibold text-rojo-persa">
                  Regla de oro: Si suena demasiado bueno para ser verdad, probablemente lo sea
                </h4>
                <p className="font-raleway-regular text-cafe">
                  Mantén un sano escepticismo profesional con nuevos clientes. La gente seria respetará tus
                  precauciones; quien presione para saltárselas probablemente no es de fiar.
                </p>
              </div>

              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">
                Protección de datos financieros
              </h3>
              <div className="bg-beige/50 p-4">
                <h4 className="font-raleway-semibold text-rojo-persa">NUNCA compartas esto:</h4>
                <ul className="list-disc list-inside font-raleway-regular text-cafe">
                  <li>Contraseñas de cuentas bancarias o digitales</li>
                  <li>Códigos de verificación por SMS</li>
                  <li>Número completo de tarjeta por chat no seguro</li>
                  <li>PINs o claves de acceso</li>
                  <li>Datos de acceso a plataformas de trabajo</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-beige p-8">
              <h2 className="text-2xl font-raleway-semibold text-rojo-persa mb-4">Gestión Financiera Inteligente</h2>

              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">Organización y registros</h3>
              <p className="font-raleway-regular text-cafe mb-4">
                Aunque sea tentador manejar todo "en negro", llevar registros te beneficia a largo plazo para
                regularización fiscal, prestaciones y control de ingresos.
              </p>

              <div className="bg-rojo-persa/10 p-4 border-l-4 border-rojo-persa mb-6">
                <h4 className="font-raleway-semibold text-cafe">Beneficios de llevar registros:</h4>
                <ul className="list-disc list-inside font-raleway-regular text-cafe">
                  <li>Control de ingresos: sabes exactamente cuánto ganas</li>
                  <li>Detección de fraudes: identificas transacciones incorrectas</li>
                  <li>Regularización fiscal: si decides darte de alta como autónomo</li>
                  <li>Acceso a prestaciones: derecho a pensión, cobertura sanitaria</li>
                  <li>Créditos y hipotecas: demostrar ingresos regulares</li>
                </ul>
              </div>

              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">Planificación financiera</h3>
              <div className="bg-tea-rose/30 p-4 mb-6">
                <h4 className="font-raleway-semibold text-rojo-persa">Consejos de gestión:</h4>
                <ul className="list-disc list-inside font-raleway-regular text-cafe">
                  <li>Fondo de emergencia: ahorra para cubrir 3-6 meses de gastos</li>
                  <li>Diversifica ingresos: no dependas solo de una plataforma</li>
                  <li>Invierte en ti: formación, equipamiento, marketing</li>
                  <li>Separa gastos: personales vs. empresariales</li>
                  <li>Asesoría fiscal: consulta profesionales sobre tu situación</li>
                </ul>
              </div>

              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">Consideraciones fiscales</h3>
              <div className="bg-beige/50 p-4">
                <h4 className="font-raleway-semibold text-rojo-persa">Nuevas normativas en España</h4>
                <p className="font-raleway-regular text-cafe">
                  A partir de enero 2026, todas las transacciones comerciales por Bizum se reportarán automáticamente a
                  Hacienda, independientemente del importe. Los autónomos que usen Bizum para cobros empresariales
                  enfrentarán mayor escrutinio fiscal.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-beige p-8">
              <h2 className="text-2xl font-raleway-semibold text-rojo-persa mb-4">
                ¿Qué hacer si te discriminan financieramente?
              </h2>

              <div className="bg-rojo-persa/10 p-4 border-l-4 border-rojo-persa mb-6">
                <h4 className="font-raleway-semibold text-cafe">Pasos a seguir:</h4>
                <ul className="list-disc list-inside font-raleway-regular text-cafe">
                  <li>Documenta todo: emails, capturas de pantalla, fechas</li>
                  <li>Presenta queja formal: al Banco de España si es un banco</li>
                  <li>Busca asesoría legal: especializada en discriminación</li>
                  <li>Comparte experiencia: advierte a la comunidad</li>
                </ul>
              </div>

              <div className="bg-tea-rose/30 p-4">
                <h4 className="font-raleway-semibold text-rojo-persa">Apoyo comunitario</h4>
                <p className="font-raleway-regular text-cafe">
                  No estás sole en esto. La discriminación financiera es un problema sistémico que afecta a toda la
                  comunidad de trabajadores sexuales. Compartir experiencias y estrategias nos fortalece a todes.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-beige p-8">
              <h2 className="text-2xl font-raleway-semibold text-rojo-persa mb-4">Recursos de Apoyo Financiero</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-melon/30 p-4 text-center">
                  <strong className="font-raleway-semibold text-rojo-persa">Banco de España</strong>
                  <p className="font-raleway-regular text-cafe text-sm">Quejas contra entidades bancarias</p>
                </div>
                <div className="bg-melon/30 p-4 text-center">
                  <strong className="font-raleway-semibold text-rojo-persa">Aprosex</strong>
                  <p className="font-raleway-regular text-cafe text-sm">Asesoramiento y apoyo específico</p>
                </div>
                <div className="bg-melon/30 p-4 text-center">
                  <strong className="font-raleway-semibold text-rojo-persa">Colegios de Abogados</strong>
                  <p className="font-raleway-regular text-cafe text-sm">Asesoría legal en discriminación</p>
                </div>
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
                <button type="submit" className="w-full btn-primary px-4 py-2 rounded-lg font-raleway-semibold">
                  Suscribirse
                </button>
              </form>
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
