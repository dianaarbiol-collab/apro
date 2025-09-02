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

export default function AprosexClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const rotatingTexts = ["una organización de activismo"]

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
            <h1 className="text-6xl lg:text-9xl xl:text-[12rem] font-overwave text-cafe mb-8 tracking-widest">
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

      {/* About Section */}
      <section className="bg-melon">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-raleway-bold text-rojo-persa mb-12 text-center">
              ¿Quiénes somos?
            </h2>
            <h3 className="text-2xl lg:text-3xl font-raleway-semibold text-cafe mb-8 text-center">
              Bienvenide compañere, esta es tu casa.
            </h3>
            <p className="text-lg font-raleway-regular text-cafe leading-relaxed text-center max-w-4xl mx-auto">
              Somos un colectivo horizontal, transfeminista, interseccional y antirracista formado por trabajadores
              sexuales unides por la necesidad de luchar por nuestros derechos laborales y la desestigmatización social.
              Somos les herederes de una larga historia de activismo feminista con base en Barcelona que ha consolidado
              a APROSEX como una de las asociaciones proderechos de referencia en el estado español, algo de lo que
              estamos muy orgulloses.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Nueva Etapa Section */}
      <section className="bg-[rgba(215,189,172,1)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <AnimatedSection>
            <h3 className="text-2xl lg:text-3xl font-raleway-bold text-rojo-persa mb-8 text-center">
              Nueva Etapa: Cultura Puta como Resistencia
            </h3>
            <div className="space-y-6 text-cafe font-raleway-regular leading-relaxed">
              <p>
                Ahora, tras un periodo de reflexión y renovación, hemos impulsado con más fuerza e ilusión que nunca una
                nueva etapa para APROSEX en la que aspiramos a convertirnos en refugio para les putes a través del
                activismo y del arte. Reivindicamos y nos reapropiamos de una cultura puta que nos ha sido expoliada por
                décadas de estigmatización y silenciamiento.
              </p>
              <p>
                La cultura puta no es solo resistencia: es creación, es memoria, es sabiduría ancestral sobre placer,
                cuerpos y sexualidad que la sociedad ha intentado borrar. Es el conocimiento que generamos en nuestros
                trabajos, las estrategias de supervivencia que desarrollamos, el arte que creamos desde nuestras
                experiencias, la solidaridad que tejemos entre nosotras. Es política hecha cuerpo, es feminismo vivido
                en la práctica diaria.
              </p>
              <p>
                Nuestro objetivo es utilizar esta cultura puta como una poderosa arma para nuestra lucha por la justicia
                social. A través del arte, la performance, la literatura, el teatro y la educación sexual, transformamos
                el estigma en orgullo, la marginalización en centro de poder, el silencio en grito colectivo.
              </p>
              <p className="text-xl font-raleway-semibold text-rojo-persa text-center mt-8">
                Nada por les putas sin les putas.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Horizontalidad Section */}
      <section className="bg-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <AnimatedSection>
            <h3 className="text-2xl lg:text-3xl font-raleway-bold text-rojo-persa mb-8 text-center">
              Horizontalidad y Autoorganización
            </h3>
            <div className="space-y-6 text-cafe font-raleway-regular leading-relaxed">
              <p>
                Creemos que nuestro colectivo está lleno de personas creativas, comprometidas y llenas de buenas ideas.
                Por eso, aunque apreciamos el apoyo de les aliades, esta asociación será solo nuestra. Queremos abrazar
                la pluralidad de nuestro colectivo y convertirla en nuestra fuerza, para tomar de forma horizontal las
                decisiones sobre las problemáticas que nos atraviesan y crear respuestas y resiliencia desde dentro.
              </p>
              <p className="text-xl font-raleway-semibold text-rojo-persa text-center">
                APROSEX es casa de putas y solo les putas la construyen.
              </p>
              <p>
                Así que, hermane pute, seas quien seas, vengas de donde vengas, te vemos, te queremos y te necesitamos. Coge tus tacones y tu paraguas rojo y, como dice Georgina Orellano, "vayamos al barro". Te invitamos a participar y a hacer más grande a APROSEX con tus saberes, tu arte y tu cultura puta. A que vengas a compartir y a reírte con nosotras. Y a hacer ruido, mucho ruido. Que nos vean venir y se pongan a temblar.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-16 lg:py-24 bg-tea-rose">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-raleway-bold text-rojo-persa mb-16 text-center">
              Nuestra Historia
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-rojo-persa to-melon h-full"></div>

            <AnimatedSection>
              <div className="relative mb-16 lg:text-left">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-rojo-persa rounded-full border-4 border-beige z-10"></div>
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="bg-beige p-8 shadow-lg">
                    <div className="text-2xl font-raleway-bold text-rojo-persa mb-2">2013</div>
                    <h3 className="text-xl font-raleway-semibold text-cafe mb-4">Fundación de APROSEX</h3>
                    <p className="text-cafe font-raleway-regular">
                      APROSEX nace en 2013 a partir de la soledad que vivíamos les trabajadores sexuales independientes,
                      aislades en habitaciones o pisos con nuestros ordenadores, esperando clientes. Reflexionamos sobre
                      el estigma y las difíciles circunstancias económicas que enfrentábamos: deudas, ser madres
                      solteras, escapar de la violencia de género, ser migrantes soles o personas trans queriendo
                      normalizar sus vidas. Estas reflexiones nos llevaron a unirnos y formar una organización dedicada
                      a la lucha por nuestros derechos.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative mb-16 lg:text-right">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-rojo-persa rounded-full border-4 border-beige z-10"></div>
                <div className="lg:w-1/2 lg:pl-12 lg:ml-auto">
                  <div className="bg-beige p-8 shadow-lg">
                    <div className="text-2xl font-raleway-bold text-rojo-persa mb-2">2014-2016</div>
                    <h3 className="text-xl font-raleway-semibold text-cafe mb-4">
                      Consciencia y Lucha por los Derechos
                    </h3>
                    <p className="text-cafe font-raleway-regular">
                      Durante estos años, comenzamos una intensa lucha por los derechos de nuestro colectivo. Tomamos
                      conciencia de la violencia institucional que sufrimos simplemente por ser trabajadores sexuales.
                      Nos enfrentamos a la falta de reconocimiento de nuestro trabajo, derivada de intereses económicos
                      y sociales. Empezamos a organizar talleres y eventos para informar y educar, creando una comunidad
                      unida y fuerte.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative mb-16 lg:text-left">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-rojo-persa rounded-full border-4 border-beige z-10"></div>
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="bg-beige p-8 shadow-lg">
                    <div className="text-2xl font-raleway-bold text-rojo-persa mb-2">2017</div>
                    <h3 className="text-xl font-raleway-semibold text-cafe mb-4">Consolidación de la Organización</h3>
                    <p className="text-cafe font-raleway-regular">
                      APROSEX se consolidó como una organización interseccional, feminista y antirracista. Empezamos a
                      combatir no solo el estigma asociado al trabajo sexual, sino también la transfobia que afecta a
                      muchas de nuestres compañeres. En estos años, reforzamos nuestra estructura interna, promoviendo
                      la transparencia y la horizontalidad.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative mb-16 lg:text-right">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-rojo-persa rounded-full border-4 border-beige z-10"></div>
                <div className="lg:w-1/2 lg:pl-12 lg:ml-auto">
                  <div className="bg-beige p-8 shadow-lg">
                    <div className="text-2xl font-raleway-bold text-rojo-persa mb-2">2018-2020</div>
                    <h3 className="text-xl font-raleway-semibold text-cafe mb-4">Expansión y Visibilidad</h3>
                    <p className="text-cafe font-raleway-regular">
                      Durante estos años, aumentamos nuestra visibilidad y presencia pública. Organizamos numerosos
                      eventos y campañas para informar y sensibilizar sobre la realidad del trabajo sexual. Nuestra
                      lucha se centró en el reconocimiento de nuestros derechos laborales y en la eliminación del
                      estigma social.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative mb-16 lg:text-left">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-rojo-persa rounded-full border-4 border-beige z-10"></div>
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="bg-beige p-8 shadow-lg">
                    <div className="text-2xl font-raleway-bold text-rojo-persa mb-2">2021</div>
                    <h3 className="text-xl font-raleway-semibold text-cafe mb-4">Fortalecimiento de la Comunidad</h3>
                    <p className="text-cafe font-raleway-regular">
                      En 2021, fortalecimos nuestra comunidad a través de la autorganización y el arte. Realizamos
                      talleres y eventos culturales que no solo educaban, sino que también celebraban la libertad sexual
                      y la diversidad. La organización se convirtió en un espacio de apoyo y solidaridad para todes les
                      involucrades en el trabajo sexual.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative mb-16 lg:text-right">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-rojo-persa rounded-full border-4 border-beige z-10"></div>
                <div className="lg:w-1/2 lg:pl-12 lg:ml-auto">
                  <div className="bg-beige p-8 shadow-lg">
                    <div className="text-2xl font-raleway-bold text-rojo-persa mb-2">Presente</div>
                    <h3 className="text-xl font-raleway-semibold text-cafe mb-4">Lucha Continua y Reconocimiento</h3>
                    <p className="text-cafe font-raleway-regular">
                      Actualmente, APROSEX sigue siendo una fuerza activa en la lucha por el reconocimiento del trabajo
                      sexual y la eliminación del estigma. Nos enfocamos en la autorganización y la creación de espacios
                      seguros para nuestres afiliades. Continuamos combatiendo la violencia institucional y la
                      transfobia, y abogamos por un trato justo y digno para todes les trabajadores sexuales.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-melon">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-raleway-bold text-rojo-persa mb-16 text-center">Nuestro Equipo</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="team-card bg-beige p-8 shadow-lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="relative w-full h-80 md:h-64 overflow-hidden shadow-lg">
                      <img
                        src="/images/team-member-new.jpeg"
                        alt="Linda Porn Davis"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-raleway-bold text-rojo-persa mb-2">Linda Porn Davis</h3>
                    <p className="text-lg font-raleway-semibold text-cafe mb-4">Presidenta</p>
                    <p className="text-cafe font-raleway-regular text-sm leading-relaxed">
                      Soy una artista mexicana, trabajadora sexual, madre soltera y migrante con más de una década de
                      militancia en los diversos activismos que me atraviesan. Empecé mi activismo por los derechos de
                      las trabajadoras sexuales en Aprosex hace más de 10 años, organización de la que ahora soy
                      presidenta.
                      <br />
                      <br />
                      También milito en la organización antirracista Madrecitas contra el desmembramiento de familias
                      migrantes mediante la quita de custodia por parte del Reino de España. Como artista, he focalizado
                      mi trabajo en el antirracismo, el trabajo sexual, la maternidad, el trasnfeminismo y la
                      post-pornografía. Mi obra ha sido expuesta en museos como el MoMA de Nueva York, el MACBA o el
                      CCCB (Barcelona), así como en diferentes festivales sobre trabajo sexual en Estados Unidos y
                      diversos países de Europa. Mi última pieza de teatro 'La Llorona' -que interpreto junto a mi hija-
                      ha tenido una gira por España e Italia.
                      <br />
                      <br />
                      Veo Aprosex como una necesidad feminista y de justicia social. La ausencia de derechos
                      fundamentales por los derechos fundamentales y el racismo abocan a la explotación a las
                      trabajadoras sexuales migrantes como yo. Por ese motivo, para mi Aprosex es una alegría. Una
                      asociación donde las decisiones son tomadas por trabajadoras sexuales, donde se hace política
                      mediante el arte con horizontalidad y transparencia, siempre poniendo el cuerpo y la escucha.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="team-card bg-beige p-8 shadow-lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="relative w-full h-80 md:h-64 overflow-hidden shadow-lg">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-08%20at%2011.23.22-XenOPh6ryytZ4GlttkBAlWQkZFVltJ.jpeg"
                        alt="Anneke Necro"
                        className="absolute inset-0 w-full h-full object-cover object-center scale-125"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-raleway-bold text-rojo-persa mb-2">Anneke Necro</h3>
                    <p className="text-lg font-raleway-semibold text-cafe mb-4">Secretaria</p>
                    <p className="text-cafe font-raleway-regular text-sm leading-relaxed">
                      Después de ejercer de estilista de moda y directora de arte, decidí canalizar mi creatividad en el
                      mundo del porno y del trabajo sexual. Trabajo como performer y directora en la industria del cine
                      porno, donde dirijo el proyecto audiovisual Mantis Lab y el podcast sobre deseo disidente Hot
                      Topic.
                      <br />
                      <br />
                      Mi especialidad es la subcultura BDSM, en la que ejerzo como Dominatrix profesional e imparto
                      talleres sobre disidencias sexuales y BDSM. Además, investigo sobre el deseo y las políticas del
                      placer en la mediterránea occidental y he realizado cursos, exposiciones y conferencias en
                      espacios como el CCCB, el festival Curtocircuito, Espacio Nos, la UB, Observatorio del Placer o el
                      Primavera Pro.
                      <br />
                      <br />
                      Cuando empecé a trabajar en el mundo del sexo entendí que mi trabajo era una forma de posicionarme
                      en el mundo y en la sociedad. Particularmente, al trabajar en la industria porno, con una
                      visibilidad tan grande y donde todo el mundo puede acceder a ver aquello que se impone como íntimo
                      y hetero, mi trabajo devenía también un posicionamiento político. Activistas, trabajadoras
                      sexuales y performers como Annie Sprinkle, Nina Hartley, Stoya, Vanessa del Rio y Georgina
                      Orellano, entre otras, fueron la academia de expertas que me ayudó a consolidar mis ideas sobre el
                      feminismo puta, su lucha y sobre como el trabajo sexual atravesaba otras cuestiones como la clase,
                      las fronteras, la colonialización, el racismo, la cis-norma y el capacitismo.
                      <br />
                      <br />
                      Poco a poco fui conociendo a otras compañeras de mi territorio y empecé a militar con ellas hasta
                      el día de hoy. APROSEX fue la primera asociación de trabajadoras sexuales que conocí y con la que
                      empecé a participar en actos y manifestaciones. Por eso, esta asociación me hace sentir la lucha
                      como un hogar. Este es el lugar que me acogió, donde mi voz pudo amplificarse, donde conocí a
                      muchas compañeras con las que he compartido intensos momentos de lucha, pero también de apoyo
                      mutuo y cariño.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="team-card bg-beige p-8 shadow-lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="relative w-full h-80 md:h-64 overflow-hidden shadow-lg">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000011822-wvlbOF3k5ruSPIAzcrXZEjax75BMUO.jpeg"
                        alt="Frida Trejo"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-raleway-bold text-rojo-persa mb-2">Frida Trejo</h3>
                    <p className="text-lg font-raleway-semibold text-cafe mb-4">Tesorera</p>
                    <p className="text-cafe font-raleway-regular text-sm leading-relaxed">
                      Artista y actriz formada en la compañía, Los Menos teatro, en la obra OLUZ presentada en 2012
                      estando de gira hasta el 2013. Actualmente formo parte de Aprosex con el cargo de tesorera así
                      como en el documental "La Piel que Arde" como DA.
                      <br />
                      <br />
                      Desde que llegamos a Barcelona en 2013, tuve que crear lo que llamaría mi familia escogida, la
                      cual terminó siendo la comunidad de trabajadoras sexuales, desde pequeña comprendí la hipocresía
                      social hacia el colectivo, especialmente a partir de la violencia institucional que sufrí junto a
                      mi madre quien es trabajadora sexual.
                      <br />
                      <br />
                      Esta experiencia fue la que me llevó a activarme y a tomar conciencia de la violencia sistemática
                      a la que se enfrentan las trabajadoras sexuales y sus familias. A raíz de eso también me involucré
                      con la organización antirracista Madrecitas como parte de su junta directiva, trabajando en temas
                      relacionados con las retiradas de custodia por parte del Estado Español y actualmente formo parte
                      de la junta directiva de Aprosex como la tesorera, también me trabajo como diseñadora y
                      coordinadora de varios eventos de la organización.
                      <br />
                      <br />
                      Lo que más me inspira es el hecho de que Aprosex sea una organización llevada por y para
                      trabajadoras sexuales, no respondamos a intereses externos y siempre ha sido nuestro punto número
                      uno el conocimiento y las vivencias de las trabajadoras. Hemos trabajado duramente estos últimos
                      dos años para poder construir una organización con una visión política interseccional que busca un
                      cambio real en el territorio español para las trabajadoras, y participar en este proceso colectivo
                      de es una de las experiencias más gratificantes he vivido políticamente.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="team-card bg-beige p-8 shadow-lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="relative w-full h-80 md:h-64 overflow-hidden shadow-lg">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/urRci7tA_400x400.jpg-28cDQEfl1ZZ9kzdD9vVBJIub62CrVI.jpeg"
                        alt="Chloé Cruz"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-raleway-bold text-rojo-persa mb-2">Chloé Cruz</h3>
                    <p className="text-lg font-raleway-semibold text-cafe mb-4">Colaboradora</p>
                    <p className="text-cafe font-raleway-regular text-sm leading-relaxed">
                      Creativa, neurodivergente e inadaptada. Llegué al trabajo sexual como un pollo sin cabeza,
                      buscando poner en su sitio al patriarcado y a una sociedad que me había abandonado. Siempre lo
                      dije: El estigma que yo cargaba no era el de puta, era el de loca. El trabajo sexual me dio el
                      espacio para sanar, pagó miles de terapias y no rendir cuentas a nadie.
                      <br />
                      <br />
                      Siempre quise ayudar y devolver un poquito de lo que la comunidad me dio desde el primer día, hice
                      mapeos de clubes, di alguna charla con Aprosex hace años, aporté material fotográfico. No es fácil
                      estar en el cañón del activismo cuando no eres una persona muy funcional. Ahora puedo decir que
                      colaboro con Aprosex a nivel dirección creativa y estrategia, el modo que he encontrado de aportar
                      mi granito de arena.
                      <br />
                      <br />
                      Aprosex siempre me ha inspirado hogar. Fue la primera comunidad que me adoptó cuando no sabía ni
                      que existía el término Trabajo sexual, cuando empecé a trabajar de escort, 9 años atrás. Para mi
                      siempre ha sido un espacio de personas luchadoras, creativas, que no se rinden ante nada y que no
                      se dejarán hacer pequeñas ante nadie. Es una comunidad que espero que vuelva a florecer bajo esta
                      nueva directiva y que nos ayude, a todes, a crear un espacio por las putas, para las putas, en el
                      que el mundo nos vea brillar.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
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
