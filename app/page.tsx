"use client"
import { useState } from "react"
import { Menu, X, Calendar, Clock, MapPin, Twitter, Instagram, Mail } from "lucide-react"

export default function HomePage() {
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
              <img src="/images/logo.png" alt="Aprosex Logo" className="h-12 lg:h-16 w-auto" />
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
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <div className="py-4 space-y-4">
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
              <div className="flex flex-col space-y-3 pt-4">
                <a href="/asociarse" className="btn-primary px-6 py-2 font-raleway-semibold text-center">
                  Asociarse
                </a>
                <a href="/donar" className="btn-secondary px-6 py-2 font-raleway-semibold text-center">
                  Donar
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-16 lg:py-24 bg-[rgba(215,189,172,1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-overwave text-cafe mb-8 tracking-widest">
              APROSEX
            </h1>
          </div>
          <div className="text-2xl lg:text-4xl font-raleway-light text-cafe leading-relaxed">
            es <span className="text-rojo-persa font-raleway-semibold inline-block">una organización de activismo</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-[rgba(246,237,224,1)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative py-0 mx-0">
                <img src="/images/aprosex-intro.jpg" alt="Aprosex" className="w-full object-cover shadow-lg" />
              </div>
            </div>
            <div>
              <div className="text-center lg:text-left">
                <h3 className="lg:text-3xl font-raleway-thin text-cafe leading-relaxed mb-8 text-lg">
                  Somos un espacio de encuentro y pensamiento crítico creado por y para les trabajadores sexuales en el
                  que a través del arte, la formación y la divulgación de la cultura puta luchamos por nuestros derechos
                  humanos y contra el estigma.
                </h3>
                <a
                  href="/aprosex"
                  className="btn-primary font-raleway-semibold text-lg inline-block text-center px-4 py-2.5"
                >
                  Somos Aprosex
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 lg:py-16 bg-[rgba(239,205,206,1)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <blockquote className="lg:text-3xl font-raleway-light text-cafe italic mb-6 text-lg">
              "En realidad no existe gente 'sin voz'.
              <br />
              Sólo existen los deliberadamente silenciados, o los preferiblemente no escuchados"
            </blockquote>
            <cite className="text-lg font-raleway-semibold text-rojo-persa text-right block">— Arundhati Roy</cite>
          </div>
        </div>
      </section>

      {/* Actions Section */}
      <section className="py-16 lg:py-24 bg-[rgba(232,179,166,0.7)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl lg:text-5xl font-raleway-bold text-rojo-persa mb-16 text-center">
              Nuestras acciones
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <img src="/images/condom-icon.png" alt="Condom icon" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-2">Proveer recursos</h4>
                    <p className="text-cafe font-raleway-regular tracking-tighter">
                      Ayudamos a les compañeres a acceder a información sobre el trabajo sexual en España
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <img src="/images/condom-icon.png" alt="Condom icon" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-2">
                      Desestigmatizar nuestro trabajo
                    </h4>
                    <p className="text-cafe font-raleway-regular tracking-tighter">
                      Trabajamos en desestigmatizar nuestra labor con el fin de crear un espacio de trabajo más seguro
                      para todes les trabajadores sexuales
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <img src="/images/condom-icon.png" alt="Condom icon" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-2">Crear comunidad</h4>
                    <p className="text-cafe font-raleway-regular tracking-tighter">
                      A través de nuestra acción, buscamos formar espacios seguros
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <img src="/images/condom-icon.png" alt="Condom icon" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-2">Educación y formación</h4>
                    <p className="text-cafe font-raleway-regular tracking-tighter">
                      Ofrecemos talleres y cursos para capacitar a las trabajadoras sexuales en diversos temas
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <img src="/images/condom-icon.png" alt="Condom icon" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-2">Defensa legal</h4>
                    <p className="text-cafe font-raleway-regular tracking-tighter">
                      Asesoramos y defendemos a las trabajadoras sexuales en casos legales relacionados con su trabajo
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <img src="/images/condom-icon.png" alt="Condom icon" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xl font-raleway-semibold text-rojo-persa mb-2">Promoción cultural</h4>
                    <p className="text-cafe font-raleway-regular tracking-tighter">
                      Celebramos y promovemos la cultura puta a través de exposiciones, eventos y proyectos artísticos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actualidad Puta Section */}
      <section className="py-16 lg:py-24 bg-[rgba(215,189,172,1)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl lg:text-5xl font-raleway-bold text-rojo-persa mb-16 text-center">
              Actualidad Puta
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div>
              <div className="bg-beige p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="bg-rojo-persa text-beige px-3 py-1 text-sm font-raleway-semibold">Destacado</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-raleway-bold text-rojo-persa mb-4">Carta de la Directiva</h3>
                <p className="text-cafe font-raleway-regular mb-6 text-lg leading-relaxed tracking-tight">
                  Nos alegra comunicaros que Aprosex, una de las asociaciones pro-derechos de más larga tradición del
                  Estado español, retoma hoy su actividad con fuerza, ilusión, conciencia colectiva y rumbo renovado.
                  Una carta abierta sobre nuestro compromiso renovado con los derechos de las trabajadoras sexuales y
                  nuestra visión de futuro para la organización.
                </p>
                <div className="flex items-center mb-6 text-sm text-gray-600">
                  <span className="mr-4">Directiva APROSEX</span>
                  <span>30 de Agosto, 2025</span>
                </div>
                <a
                  href="/actualidad/carta-de-la-directiva"
                  className="btn-primary px-6 py-3 font-raleway-semibold inline-flex items-center"
                >
                  Leer más
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center mt-12">
              <a
                href="/actualidad"
                className="inline-flex items-center bg-rojo-persa text-beige px-8 py-4 font-raleway-semibold text-lg shadow-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Ver últimas noticias
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 lg:py-24 bg-[rgba(239,205,206,1)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl lg:text-5xl font-raleway-bold text-rojo-persa mb-16 text-center">
              Nuestros próximos eventos
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div>
              <div className="bg-beige p-6 shadow-lg h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="bg-rojo-persa text-beige px-3 py-1 text-sm font-raleway-semibold">Charla</span>
                </div>
                <h3 className="text-xl font-raleway-semibold text-rojo-persa mb-4">
                  Potencias transfeministas en tiempos reaccionarios
                </h3>
                <div className="space-y-2 mb-4 text-cafe font-raleway-regular">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-rojo-persa" />
                    <span>30 de Agosto, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-rojo-persa" />
                    <span>17:00-18:30</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-rojo-persa" />
                    <span>Universidad de Verano Anticapitalista</span>
                  </div>
                </div>
                <p className="text-cafe font-raleway-regular mb-6 flex-grow tracking-tighter">
                  De sus pánicos morales a nuestras luchas radicales. Con Anneke Necro, Carolina Meloni e Ira Hybris.
                </p>
                <a
                  href="https://inscripcion.unianticapi.info:8181/univerano2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-6 py-2 font-raleway-semibold text-center inline-block"
                >
                  Inscribirse
                </a>
              </div>
            </div>
            <div>
              <div className="bg-beige p-6 shadow-lg h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="bg-rojo-persa text-beige px-3 py-1 text-sm font-raleway-semibold">Charla</span>
                </div>
                <h3 className="text-xl font-raleway-semibold text-rojo-persa mb-4">Putas Imágenes</h3>
                <div className="space-y-2 mb-4 text-cafe font-raleway-regular">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-rojo-persa" />
                    <span>30 de Agosto, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-rojo-persa" />
                    <span>11:30-13:30</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-rojo-persa" />
                    <span>Universidad de Verano Anticapitalista</span>
                  </div>
                </div>
                <p className="text-cafe font-raleway-regular mb-6 flex-grow tracking-tighter">
                  Perspectivas materialistas de la pornografía ante las urgencias del presente. Con Andrea Corrales.
                </p>
                <a
                  href="https://inscripcion.unianticapi.info:8181/univerano2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-6 py-2 font-raleway-semibold text-center inline-block"
                >
                  Inscribirse
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center">
              <a
                href="/calendario"
                className="inline-flex items-center btn-primary px-8 py-4 font-raleway-semibold text-lg shadow-lg"
              >
                Ver todos los eventos
              </a>
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
