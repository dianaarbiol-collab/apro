"use client"
import { useState } from "react"
import { Menu, X, Mail, MapPin, Twitter, Instagram } from "lucide-react"

export default function RecursosPage() {
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
                  className="text-cafe hover:text-rojo-persa font-raleway-medium transition-colors duration-300"
                  href={item.href}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex space-x-4">
              <a className="btn-primary px-6 py-2 rounded-full font-raleway-semibold" href="/asociarse">
                Asociarse
              </a>
              <a className="btn-secondary px-6 py-2 rounded-full font-raleway-semibold" href="/donar">
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
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-melon">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-cafe hover:text-rojo-persa font-raleway-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 space-y-2">
                  <a
                    href="/asociarse"
                    className="block btn-primary px-6 py-2 rounded-full font-raleway-semibold text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Asociarse
                  </a>
                  <a
                    href="/donar"
                    className="block btn-secondary px-6 py-2 rounded-full font-raleway-semibold text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Donar
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-16 lg:py-24 bg-[rgba(215,189,172,1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h1 className="lg:text-9xl xl:text-[12rem] font-overwave text-cafe mb-8 tracking-widest text-6xl">
              APROSEX
            </h1>
          </div>

          <div className="text-2xl lg:text-4xl font-raleway-light text-cafe leading-relaxed">
            es <span className="text-rojo-persa font-raleway-semibold inline-block">una red de apoyo</span>
          </div>
        </div>
      </section>

      {/* Page Title Section */}
      <section className="py-16 lg:py-24 bg-melon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl font-raleway-bold text-rojo-persa mb-4 lg:text-6xl">Recursos</h2>
            <p className="text-xl font-raleway-light text-cafe lg:text-3xl">Nuestro saber, nuestra fuerza</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-tea-rose">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
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
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 lg:py-24 bg-melon">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <div className="bg-beige p-10 h-full flex flex-col">
                <div className="flex items-start mb-6">
                  <div className="text-beige p-3 mr-4 bg-transparent flex-shrink-0">
                    <img src="/images/fusta.png" alt="Fusta icon" className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-raleway-semibold text-rojo-persa leading-tight">
                    Derechos Legales y Policiales
                  </h3>
                </div>
                <p className="text-cafe font-raleway-regular mb-6 flex-grow">
                  Conoce tus derechos y protégete ante cualquier intervención
                </p>
                <a
                  className="btn-primary px-6 py-2 rounded-full font-raleway-semibold text-center inline-flex items-center justify-center"
                  href="/recursos/derechos-legales"
                >
                  Acceder
                </a>
              </div>
            </div>

            <div>
              <div className="bg-beige p-10 h-full flex flex-col">
                <div className="flex items-start mb-6">
                  <div className="text-beige p-3 mr-4 bg-transparent flex-shrink-0">
                    <img src="/images/butt.png" alt="Butt plug icon" className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-raleway-semibold text-rojo-persa leading-tight">
                    Seguridad Digital y Protección Online
                  </h3>
                </div>
                <p className="text-cafe font-raleway-regular mb-6 flex-grow">
                  Protege tu identidad, contenido y privacidad en el mundo digital
                </p>
                <a
                  className="btn-primary px-6 py-2 rounded-full font-raleway-semibold text-center inline-flex items-center justify-center"
                  href="/recursos/seguridad-digital"
                >
                  Acceder
                </a>
              </div>
            </div>

            <div>
              <div className="bg-beige p-10 h-full flex flex-col">
                <div className="flex items-start mb-6">
                  <div className="text-beige p-3 mr-4 bg-transparent flex-shrink-0">
                    <img src="/images/tacon.png" alt="High heel icon" className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-raleway-semibold text-rojo-persa leading-tight">
                    Finanzas y Pagos Seguros
                  </h3>
                </div>
                <p className="text-cafe font-raleway-regular mb-6 flex-grow">
                  Protege tus ingresos y maneja tu dinero con seguridad
                </p>
                <a
                  className="btn-primary px-6 py-2 rounded-full font-raleway-semibold text-center inline-flex items-center justify-center"
                  href="/recursos/finanzas-seguras"
                >
                  Acceder
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-melon">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-raleway-bold text-rojo-persa mb-8">
              ¿Necesitas ayuda específica?
            </h2>
            <p className="text-xl font-raleway-regular text-cafe mb-8">
              Si no encuentras lo que buscas o necesitas asesoramiento personalizado, no dudes en contactarnos.
            </p>
            <a className="btn-primary px-8 py-4 rounded-full font-raleway-semibold text-lg" href="/contacto">
              Contactar
            </a>
          </div>
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
