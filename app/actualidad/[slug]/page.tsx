"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Menu, X, ArrowLeft, Calendar, User, Twitter } from "lucide-react"
import { getBlogPost } from "@/lib/blog-posts"
import { notFound } from "next/navigation"

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

// Simple markdown-like content renderer
function renderContent(content: string) {
  const lines = content.trim().split("\n")
  const elements: React.ReactNode[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={i} className="text-3xl lg:text-4xl font-raleway-bold text-rojo-persa mb-6 mt-8">
          {line.substring(2)}
        </h1>,
      )
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl lg:text-3xl font-raleway-semibold text-rojo-persa mb-4 mt-6">
          {line.substring(3)}
        </h2>,
      )
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl lg:text-2xl font-raleway-semibold text-cafe mb-3 mt-4">
          {line.substring(4)}
        </h3>,
      )
    } else if (line.startsWith("- ")) {
      // Handle list items
      const listItems = []
      let j = i
      while (j < lines.length && lines[j].startsWith("- ")) {
        listItems.push(lines[j].substring(2))
        j++
      }
      elements.push(
        <ul key={i} className="list-disc list-inside font-raleway-regular text-cafe mb-4 space-y-2">
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>,
      )
      i = j - 1
    } else if (line.match(/^\d+\. /)) {
      // Handle numbered lists
      const listItems = []
      let j = i
      while (j < lines.length && lines[j].match(/^\d+\. /)) {
        listItems.push(lines[j].replace(/^\d+\. /, ""))
        j++
      }
      elements.push(
        <ol key={i} className="list-decimal list-inside font-raleway-regular text-cafe mb-4 space-y-2">
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>,
      )
      i = j - 1
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-raleway-bold text-cafe mb-4 text-center text-lg">
          {line.substring(2, line.length - 2)}
        </p>,
      )
    } else if (line.startsWith("*") && line.endsWith("*")) {
      elements.push(
        <p key={i} className="font-raleway-regular text-cafe mb-4 italic text-sm">
          {line.substring(1, line.length - 1)}
        </p>,
      )
    } else if (line.startsWith("---")) {
      elements.push(<hr key={i} className="border-t border-cafe/20 my-8" />)
    } else if (line.trim() !== "") {
      // Regular paragraph
      const processedLine = line
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-raleway-semibold">$1</strong>')
        .replace(/\*(.*?)\*/g, "<em>$1</em>")

      elements.push(
        <p
          key={i}
          className="font-raleway-regular text-cafe mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: processedLine }}
        />,
      )
    }
  }

  return elements
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const rotatingTexts = ["Dignidad", "Resistencia", "Visibilidad", "Empoderamiento"]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length)
    }, 2000)

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

  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
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

      {/* Back Button */}
      <section className="py-8 bg-melon">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.a
            href="/actualidad"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center text-cafe hover:text-rojo-persa font-raleway-medium transition-colors duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Volver a Actualidad Puta
          </motion.a>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-24 bg-tea-rose">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <article className="bg-beige p-8 lg:p-12 shadow-lg">
              {/* Article Header */}
              <header className="mb-8">
                <div className="flex items-center mb-4">
                  {post.featured && (
                    <span className="bg-rojo-persa text-beige px-3 py-1 text-sm font-raleway-semibold mr-3">
                      Destacado
                    </span>
                  )}
                </div>

                <h1 className="text-3xl lg:text-4xl font-raleway-bold text-rojo-persa mb-4">{post.title}</h1>

                <div className="flex items-center mb-6 text-sm text-gray-600">
                  <User size={16} className="mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                </div>

                {post.image && (
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-64 lg:h-96 object-cover shadow-lg mb-8"
                  />
                )}
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">{renderContent(post.content)}</div>
            </article>
          </AnimatedSection>

          {/* Share Section */}
          <AnimatedSection>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-raleway-semibold text-rojo-persa mb-4">Comparte este artículo</h3>
              <div className="flex justify-center space-x-4">
                <motion.a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="bg-rojo-persa text-beige p-3 hover:bg-cafe transition-colors duration-300"
                >
                  <Twitter size={20} />
                </motion.a>
                <motion.a
                  href="https://aprosex.bsky.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="bg-rojo-persa text-beige p-3 hover:bg-cafe transition-colors duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                    <path d="M7.5 8.5c1.5-1.5 3-2 4.5-2s3 .5 4.5 2c.5.5.5 1.5 0 2-.5.5-1.5.5-2 0-.5-.5-1-.5-1.5-.5s-1 0-1.5.5c-.5.5-1.5.5-2 0-.5-.5-.5-1.5 0-2z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cafe text-beige py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <img src="/images/logo.png" alt="Aprosex Logo" className="h-16 w-auto mb-4" />
              <p className="font-raleway-regular text-lg leading-relaxed mb-6">
                Asociación de Profesionales del Sexo. Defendemos los derechos laborales, la dignidad y la seguridad de
                las trabajadoras sexuales en España.
              </p>
              <div className="flex space-x-4">
                <a href="https://x.com/Aprosex" className="text-beige hover:text-melon transition-colors">
                  <span className="sr-only">Twitter</span>
                  <Twitter size={24} />
                </a>
                <a href="https://aprosex.bsky.social" className="text-beige hover:text-melon transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944.444 1.85.444 5.55c0 .995.78 9.588 1.875 10.812 1.072 1.2 2.944 1.029 5.178.853 2.329-.183 3.14-1.027 3.14-1.027s-.811.844-3.14 1.027c-2.234.176-4.106.347-5.178-.853C1.224 15.138.444 6.545.444 5.55c0-3.7 2.122-4.606 4.758-2.745C7.954 4.747 10.913 8.686 12 10.8z" />
                    <path d="M12 10.8c1.087-2.114 4.046-6.053 6.798-7.995C21.434.944 23.556 1.85 23.556 5.55c0 .995-.78 9.588-1.875 10.812-1.072 1.2-2.944 1.029-5.178.853-2.329-.183 3.14-1.027 3.14-1.027s.811.844 3.14 1.027c2.234.176 4.106.347 5.178-.853 1.095-1.224 1.875-9.817 1.875-10.812 0-3.7-2.122-4.606-4.758-2.745C16.046 4.747 13.087 8.686 12 10.8z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-raleway-semibold text-lg mb-4">Navegación</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="font-raleway-regular hover:text-melon transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/aprosex" className="font-raleway-regular hover:text-melon transition-colors">
                    Aprosex
                  </a>
                </li>
                <li>
                  <a href="/recursos" className="font-raleway-regular hover:text-melon transition-colors">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="/actualidad" className="font-raleway-regular hover:text-melon transition-colors">
                    Actualidad Puta
                  </a>
                </li>
                <li>
                  <a href="/calendario" className="font-raleway-regular hover:text-melon transition-colors">
                    Calendario
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="font-raleway-regular hover:text-melon transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-raleway-semibold text-lg mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/recursos/derechos-legales"
                    className="font-raleway-regular hover:text-melon transition-colors"
                  >
                    Derechos Legales
                  </a>
                </li>
                <li>
                  <a
                    href="/recursos/seguridad-digital"
                    className="font-raleway-regular hover:text-melon transition-colors"
                  >
                    Seguridad Digital
                  </a>
                </li>
                <li>
                  <a
                    href="/recursos/finanzas-seguras"
                    className="font-raleway-regular hover:text-melon transition-colors"
                  >
                    Finanzas Seguras
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-beige/20 mt-12 pt-8 text-center">
            <p className="font-raleway-regular">
              &copy; 2025 APROSEX - Asociación de Profesionales del Sexo. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
