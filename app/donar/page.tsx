"use client"
import { useState } from "react"
import { Menu, X, Mail, MapPin, Twitter, Instagram } from "lucide-react"

export default function DonarPage() {
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
              <a className="btn-primary px-6 py-2 font-raleway-semibold" href="/asociarse">
                Asociarse
              </a>
              <a className="btn-secondary px-6 py-2 font-raleway-semibold" href="/donar">
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
                    className="block btn-primary px-6 py-2 font-raleway-semibold text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Asociarse
                  </a>
                  <a
                    href="/donar"
                    className="block btn-secondary px-6 py-2 font-raleway-semibold text-center"
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
            <h1 className="text-8xl lg:text-9xl xl:text-[12rem] font-overwave text-cafe mb-8 tracking-widest">
              APROSEX
            </h1>
          </div>
          <div className="text-2xl lg:text-4xl font-raleway-light text-cafe leading-relaxed">
            es <span className="text-rojo-persa font-raleway-semibold inline-block">una organización de activismo</span>
          </div>
        </div>
      </section>

      {/* Page Title Section */}
      <section className="py-16 lg:py-24 bg-melon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-6xl font-raleway-bold text-rojo-persa mb-8 lg:text-6xl tracking-normal">Donar</h2>
            <p className="text-2xl lg:text-3xl font-raleway-light text-cafe leading-relaxed">
              Apoya nuestra lucha por los derechos
            </p>
          </div>
        </div>
      </section>

      {/* What donations make possible */}
      <section className="py-16 lg:py-24 bg-tea-rose">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h3 className="text-3xl lg:text-4xl font-raleway-bold text-rojo-persa mb-12 text-center">
              Tu donación hace posible
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div>
              <div className="bg-beige p-8 text-center h-full flex flex-col">
                <div className="bg-beige p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <img src="/images/fusta.png" alt="Fusta icon" className="w-12 h-12 object-contain" />
                </div>
                <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">Talleres Gratuitos</h4>
                <p className="text-cafe font-raleway-regular flex-grow">
                  Formación en derechos legales, seguridad digital y autodefensa para trabajadoras sexuales.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-beige p-8 text-center h-full flex flex-col">
                <div className="bg-beige p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <img src="/images/tacon.png" alt="Tacón icon" className="w-12 h-12 object-contain" />
                </div>
                <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">Activismo</h4>
                <p className="text-cafe font-raleway-regular flex-grow">
                  Campañas de visibilización y lucha contra la discriminación y el estigma.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-beige p-8 text-center h-full flex flex-col">
                <div className="bg-beige p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <img src="/images/butt.png" alt="Butt plug icon" className="w-12 h-12 object-contain" />
                </div>
                <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">Cultura Puta</h4>
                <p className="text-cafe font-raleway-regular flex-grow">
                  Proyectos artísticos y culturales que reivindican nuestra identidad y resistencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Transfer Section */}
      <section className="py-16 lg:py-24 bg-melon">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="bg-beige p-8 lg:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-raleway-bold text-rojo-persa mb-4">Realizar Donación</h3>
                <p className="text-lg font-raleway-regular text-cafe">
                  Puedes realizar tu donación mediante transferencia bancaria a nuestra cuenta oficial
                </p>
              </div>

              <div className="bg-rojo-persa/10 border-l-4 border-rojo-persa p-8 mb-8">
                <h4 className="text-xl font-raleway-bold text-rojo-persa mb-6 text-center">Datos Bancarios</h4>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm font-raleway-semibold text-cafe block mb-1">Titular:</span>
                      <span className="font-raleway-regular text-cafe">Aprosex</span>
                    </div>
                    <div>
                      <span className="text-sm font-raleway-semibold text-cafe block mb-1">Banco:</span>
                      <span className="font-raleway-regular text-cafe">La Caixa</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-raleway-semibold text-cafe block mb-1">IBAN:</span>
                    <span className="font-raleway-bold text-rojo-persa text-lg tracking-wider">
                      ES94 2100 3043 4522 0049 6528
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-raleway-semibold text-cafe block mb-1">Concepto:</span>
                    <span className="font-raleway-regular text-cafe">Donación APROSEX</span>
                  </div>
                </div>
              </div>

              <div className="bg-tea-rose/30 p-6">
                <h4 className="font-raleway-semibold text-rojo-persa mb-3">Información importante:</h4>
                <ul className="text-sm font-raleway-regular text-cafe space-y-2">
                  <li>• Todas las donaciones son seguras y van directamente a apoyar nuestras actividades</li>
                  <li>• Si deseas un recibo de donación, envíanos un email con el comprobante de transferencia</li>
                  <li>• APROSEX es una asociación sin ánimo de lucro</li>
                  <li>• Tu apoyo nos permite seguir luchando por los derechos de las trabajadoras sexuales</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other ways to help */}
      <section className="py-16 lg:py-24 bg-tea-rose">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h3 className="text-3xl lg:text-4xl font-raleway-bold text-rojo-persa mb-12 text-center">
              Otras formas de ayudar
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="bg-beige p-8 text-center h-full flex flex-col">
                <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">Voluntariado</h4>
                <p className="text-cafe font-raleway-regular mb-6 flex-grow">
                  Ofrece tu tiempo y habilidades para apoyar nuestras actividades y eventos.
                </p>
                <a href="/contacto" className="btn-primary px-6 py-2 font-raleway-semibold">
                  Contáctanos
                </a>
              </div>
            </div>
            <div>
              <div className="bg-beige p-8 text-center h-full flex flex-col">
                <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">Difusión</h4>
                <p className="text-cafe font-raleway-regular mb-6 flex-grow">
                  Comparte nuestro trabajo en redes sociales y ayuda a visibilizar nuestras causas.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="https://x.com/Aprosex" className="text-rojo-persa hover:text-cafe">
                    <Twitter size={24} />
                  </a>
                  <a href="https://www.instagram.com/aprosex" className="text-rojo-persa hover:text-cafe">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-beige p-8 text-center h-full flex flex-col">
                <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-4">Asociarse</h4>
                <p className="text-cafe font-raleway-regular mb-6 flex-grow">
                  Únete como miembro activo y participa directamente en nuestras decisiones y actividades.
                </p>
                <a href="/asociarse" className="btn-primary px-6 py-2 font-raleway-semibold">
                  Asociarse
                </a>
              </div>
            </div>
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
                <a href="/asociarse" className="block btn-primary px-6 py-3 font-raleway-semibold text-center">
                  Asociarse
                </a>
                <a href="/donar" className="block btn-secondary px-6 py-3 font-raleway-semibold text-center">
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
                  className="w-full px-4 py-2 bg-beige text-cafe placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rojo-persa font-raleway-regular"
                />
                <button type="submit" className="w-full btn-primary px-4 py-2 font-raleway-semibold">
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
