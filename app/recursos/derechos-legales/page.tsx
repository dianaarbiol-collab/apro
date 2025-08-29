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

export default function DerechosLegalesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const rotatingTexts = ["un colectivo", "una familia", "APROSEX"]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
    }, 2500)

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px:8">
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
            <h2 className="text-3xl lg:text-5xl font-raleway-bold text-rojo-persa">Derechos Legales y Policiales</h2>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-8 lg:py-12 bg-tea-rose">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-beige p-8">
              <h2 className="text-2xl font-raleway-semibold text-rojo-persa mb-4">Ante una Intervención Policial</h2>
              <p className="font-raleway-regular text-cafe mb-4">
                Como trabajadore sexual, tienes los mismos derechos constitucionales que cualquier persona en España. No
                importa tu nacionalidad, situación migratoria o profesión:{" "}
                <strong className="font-raleway-semibold">tus derechos son inviolables</strong>.
              </p>
              <div className="bg-rojo-persa/10 p-4 border-l-4 border-rojo-persa mb-4">
                <h4 className="font-raleway-semibold text-cafe">¿Qué debe hacer la policía?</h4>
                <ul className="list-disc list-inside font-raleway-regular text-cafe">
                  <li>Identificarse con nombre y número de placa</li>
                  <li>Explicar claramente el motivo de la intervención en un idioma que entiendas</li>
                  <li>Tratarte con respeto y de forma proporcional</li>
                  <li>Respetar tu dignidad durante cualquier cacheo o registro</li>
                </ul>
              </div>

              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">Si te paran en la calle</h3>
              <p className="font-raleway-regular text-cafe mb-4">
                Mantén la calma siempre. No mientas, no huyas y no falsifiques documentos, ya que esto puede empeorar tu
                situación. Tienes derecho a saber por qué te están parando.
              </p>
              <div className="bg-tea-rose/30 p-4">
                <h4 className="font-raleway-semibold text-rojo-persa">Consejo práctico</h4>
                <p className="font-raleway-regular text-cafe">
                  Lleva siempre contigo documentación oficial con foto (DNI, NIE o pasaporte). Si no la tienes, pueden
                  detenerte solo para identificarte. Si estás en situación irregular, presenta cualquier documento que
                  tengas: padrón, tarjeta sanitaria, de asociación, etc.
                </p>
              </div>

              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">
                Si la policía llega a tu domicilio o trabajo
              </h3>
              <p className="font-raleway-regular text-cafe mb-4">
                <strong className="font-raleway-semibold">
                  Sin orden judicial, NO estás obligade a abrir la puerta.
                </strong>{" "}
                Abrir equivale a dar consentimiento para la entrada, así que puedes (y debes) negar la entrada
                claramente desde dentro.
              </p>
              <p className="font-raleway-regular text-cafe mb-4">
                Pide que les agentes muestren su identificación por la mirilla y anota sus datos. Solo pueden entrar sin
                orden si hay flagrante delito (sospecha clara de que se está cometiendo un delito grave en ese momento).
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-beige p-8">
              <h2 className="text-2xl font-raleway-semibold text-rojo-persa mb-4">Si te detienen</h2>
              <p className="font-raleway-regular text-cafe mb-4">
                La detención puede ocurrir porque la policía cree que cometiste un delito, por no poder identificarte o
                por estar en situación irregular.{" "}
                <strong className="font-raleway-semibold">Recuerda: siempre tienes derechos.</strong>
              </p>
              <div className="bg-beige/50 p-4">
                <h4 className="font-raleway-semibold text-rojo-persa">Tus derechos al ser detenide:</h4>
                <ul className="list-disc list-inside font-raleway-regular text-cafe">
                  <li>Guardar silencio y no declarar ante la policía hasta tener asesoría legal</li>
                  <li>Contactar con une abogade de tu confianza o solicitar une de oficio (gratuito)</li>
                  <li>Hablar en privado con tu abogade antes de cualquier declaración</li>
                  <li>Hacer una llamada para informar a alguien de confianza sobre tu detención</li>
                  <li>Tener un intérprete gratuito si no hablas español</li>
                  <li>Atención médica si has sufrido violencia durante la intervención</li>
                  <li>No estar detenide más de 72 horas sin ser pueste a disposición judicial</li>
                </ul>
              </div>
              <div className="bg-rojo-persa/10 p-4 border-l-4 border-rojo-persa mt-4">
                <h4 className="font-raleway-semibold text-cafe">
                  Importante: Todo lo que le cuentes a tu abogade es confidencial
                </h4>
                <p className="font-raleway-regular text-cafe">
                  Guarda siempre el contacto de tu abogade y mantente en comunicación. Incluso si estás en situación
                  irregular, tienes derechos legales básicos: no temas ejercerlos.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-beige p-8">
              <h2 className="text-2xl font-raleway-semibold text-rojo-persa mb-4">Órdenes de Expulsión y CIE</h2>
              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">
                Si estás en situación irregular
              </h3>
              <p className="font-raleway-regular text-cafe mb-4">
                Si te paran o detienen, pueden abrirte un proceso de expulsión. La orden se comunica a tu abogade, quien
                te representará durante todo el proceso.{" "}
                <strong className="font-raleway-semibold">
                  Solo hay 48 horas para presentar documentación y alegaciones.
                </strong>
              </p>
              <h3 className="text-xl font-raleway-semibold text-rojo-persa mt-6 mb-2">
                Centro de Internamiento de Extranjeros (CIE)
              </h3>
              <p className="font-raleway-regular text-cafe mb-4">
                Para ingresar en un CIE, deben cumplirse estos requisitos:
              </p>
              <ul className="list-disc list-inside font-raleway-regular text-cafe">
                <li>Tener una orden de expulsión firme</li>
                <li>Tener antecedentes penales o policiales</li>
                <li>Que un juez de guardia autorice la medida</li>
              </ul>
              <div className="bg-tea-rose/30 p-4 mt-4">
                <h4 className="font-raleway-semibold text-rojo-persa">Dato esperanzador</h4>
                <p className="font-raleway-regular text-cafe">
                  Solo el 50% de las personas en CIE son finalmente deportadas. Si te ingresan, puedes acudir al
                  SOJ-CIE, un servicio gratuito de orientación jurídica especializado en extranjería.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-beige p-8">
              <h2 className="text-2xl font-raleway-semibold text-rojo-persa mb-4">
                Protégete, incluso en situación irregular
              </h2>
              <p className="font-raleway-regular text-cafe mb-4">
                <strong className="font-raleway-semibold">Si no tienes papeles, no estás sole.</strong> Hay recursos que
                pueden ayudarte frente a la violencia institucional:
              </p>
              <div className="bg-rojo-persa/10 p-4 border-l-4 border-rojo-persa mt-4">
                <h4 className="font-raleway-semibold text-cafe">Estrategias de protección:</h4>
                <ul className="list-disc list-inside font-raleway-regular text-cafe">
                  <li>
                    Documenta tu arraigo: padrón, recibos, pruebas de convivencia con alguien en situación regular
                  </li>
                  <li>Busca respaldo: tus redes pueden ser clave para tu protección</li>
                  <li>Ten contactos a mano: abogade experte en extranjería</li>
                  <li>Busca apoyo comunitario: colectivos de trabajadores sexuales, ONGs, grupos de migrantes</li>
                </ul>
              </div>
              <div className="bg-tea-rose/30 p-4 mt-4">
                <h4 className="font-raleway-semibold text-rojo-persa">Cómo presentar una denuncia</h4>
                <ul className="list-disc list-inside font-raleway-regular text-cafe">
                  <li>En cualquier comisaría, fiscalía o juzgado</li>
                  <li>Al Defensor del Pueblo (gratuito para cualquier persona)</li>
                  <li>Tienes derecho a asistencia jurídica gratuita e intérprete</li>
                  <li>Documenta todo: nombres de agentes, lugar, hora, testigos</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-beige p-8">
              <h2 className="text-2xl font-raleway-semibold text-rojo-persa mb-4">Contactos de Emergencia</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-melon/30 p-4 text-center">
                  <strong className="font-raleway-semibold text-rojo-persa">112</strong>
                  <p className="font-raleway-regular text-cafe">Emergencias</p>
                </div>
                <div className="bg-melon/30 p-4 text-center">
                  <strong className="font-raleway-semibold text-rojo-persa">016</strong>
                  <p className="font-raleway-regular text-cafe">
                    Violencia de Género
                    <br />
                    (24h, gratuito)
                  </p>
                </div>
                <div className="bg-melon/30 p-4 text-center">
                  <strong className="font-raleway-semibold text-rojo-persa">Aprosex</strong>
                  <p className="font-raleway-regular text-cafe">Apoyo y asesoramiento</p>
                </div>
                <div className="bg-melon/30 p-4 text-center">
                  <strong className="font-raleway-semibold text-rojo-persa">Defensor del Pueblo</strong>
                  <p className="font-raleway-regular text-cafe">Quejas contra policía</p>
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
