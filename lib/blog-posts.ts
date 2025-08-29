export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image?: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: "carta-de-la-directiva",
    title: "Carta de la Directiva",
    excerpt:
      "Nos alegra comunicaros que Aprosex, una de las asociaciones pro-derechos de más larga tradición del Estado español, retoma hoy su actividad con fuerza, ilusión, conciencia colectiva y rumbo renovado.",
    author: "Directiva APROSEX",
    date: "30 de Agosto, 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0151.jpg-FBetv2qUPNN5rYEe1frZS0bNFeCWsY.jpeg",
    featured: true,
    content: `
# Carta de la Directiva

Queridas compañeras,

Nos alegra comunicaros que Aprosex, una de las asociaciones pro-derechos de más larga tradición del Estado español formada mayoritariamente por trabajadoras sexuales y aliadas comprometidas, retoma hoy su actividad con fuerza, ilusión, conciencia colectiva y rumbo renovado.

Después de un período de pausa necesario, y tras una profunda reflexión interna sobre cómo queremos cuidarnos y organizarnos, hemos decidido relanzar el proyecto con una nueva dirección horizontal integrada por Anneke Necro, Chloe Cruz, Frida Trejo y Linda Porn, trabajadoras sexuales, artistas y activadoras culturales.

## Nuestra Nueva Apuesta

Nuestra nueva apuesta es clara: devolver a Aprosex su vocación de espacio de refugio, pensamiento, acción y comunidad para las trabajadoras sexuales de Barcelona. Un lugar desde el que pensarnos juntas, resistir el estigma y defender nuestros derechos humanos, laborales y culturales desde el arte y la reapropiación de la Cultura Puta.

Creemos firmemente en el arte como herramienta de transformación política. Porque todo arte es político, y la Cultura Puta que históricamente hemos construido desde los márgenes también lo es: feminista, insumisa, influyente y poderosa. Aunque desde la cultura hegemónica se nos niegue agencia y legitimidad artística o se desvirtúe nuestro trabajo y nuestra aportación cultural, nosotras sabemos que nuestras voces, nuestros cuerpos y nuestras creaciones valen y cuentan. Y es hora de reclamarlos y reapropiarnos con orgullo de ese legado.

**La Cultura Puta es desobediencia, orgullo, identidad y resistencia.**

## Nuestros Proyectos Actuales

Como ejemplo de esta nueva etapa de Aprosex, actualmente, nuestra principal línea de trabajo es el documental **La Piel que Arde**, creado y producido íntegramente por trabajadoras sexuales. Desde el guion hasta la dirección y la producción, cada etapa está liderada por nosotras, desde nuestras experiencias y saberes.

Además, estamos impulsando espacios de cuidados exclusivos para trabajadoras sexuales, encuentros no mixtos donde compartimos preocupaciones, risas y comunidad, libres de estigma y slut-shaming. Esta es una de nuestras señas de identidad, porque creemos que cuidarnos entre pares también es otra forma de hacer política.

## Nuestra Acción Política

Nuestra acción política también se extiende a las calles. Como parte de la clase trabajadora, tenemos derecho a ser vistas, escuchadas y apoyadas. Reclamamos el espacio público. Queremos que quienes luchan por los derechos laborales entiendan que nuestras demandas no son excepcionales: exigimos derechos humanos y laborales para todas las trabajadoras sexuales.

En definitiva, Aprosex renace como una organización política, cultural y feminista, que defiende con orgullo la Cultura Puta. Luchamos contra el estigma, creamos comunidad, hacemos arte político y reivindicamos derechos. Porque nadie vive mejor sin derechos.

## Agradecimientos

Gracias por estar,  
por volver,  
por confiar,  
y por construir juntas este nuevo capítulo de Aprosex.

Con fuerza y orgullo,

**El equipo renovado de Aprosex**
  `,
  },
  {
    slug: "taller-autodefensa-digital",
    title: "Próximo Taller: Autodefensa Digital para Trabajadoras Sexuales",
    excerpt:
      "Aprende a proteger tu privacidad y seguridad online en nuestro próximo taller especializado para trabajadoras sexuales.",
    author: "Equipo APROSEX",
    date: "10 de Enero, 2024",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    content: `
# Taller de Autodefensa Digital para Trabajadoras Sexuales

El próximo **15 de febrero** realizaremos nuestro taller especializado en autodefensa digital, diseñado específicamente para las necesidades de las trabajadoras sexuales.

## ¿Qué Aprenderás?

### Protección de Identidad
- Cómo separar tu identidad personal de tu identidad de trabajo
- Herramientas para mantener el anonimato online
- Configuración segura de perfiles y cuentas

### Seguridad en Plataformas
- Configuraciones de privacidad avanzadas
- Cómo protegerte del doxxing y acoso
- Manejo seguro de contenido digital

### Herramientas Técnicas
- VPNs y navegación anónima
- Aplicaciones de mensajería segura
- Copias de seguridad y protección de archivos

## Detalles del Taller

**Fecha**: 15 de febrero, 2024  
**Hora**: 18:00 - 20:00  
**Lugar**: Centro Cultural APROSEX  
**Precio**: Gratuito para asociadas, 15€ para no asociadas

## Inscripciones

Las plazas son limitadas para garantizar una atención personalizada. Para inscribirte, envía un email a talleres@aprosex.org con el asunto "Taller Autodefensa Digital".

¡Te esperamos!
    `,
  },
]

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((post) => post.featured)
}

export function getRegularPosts(): BlogPost[] {
  return blogPosts.filter((post) => !post.featured)
}
