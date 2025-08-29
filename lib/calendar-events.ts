export interface CalendarEvent {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  type: string
  image?: string
}

export const upcomingEvents: CalendarEvent[] = [
  {
    id: "taller-autodefensa-digital",
    title: "Taller de Autodefensa Digital",
    date: "15 de Febrero, 2024",
    time: "18:00 - 20:00",
    location: "Centro Cultural APROSEX",
    description: "Aprende a proteger tu privacidad y seguridad online como trabajadora sexual.",
    type: "Taller",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "circulo-apoyo-mutuo",
    title: "Círculo de Apoyo Mutuo",
    date: "22 de Febrero, 2024",
    time: "19:00 - 21:00",
    location: "Espacio Seguro APROSEX",
    description: "Espacio de encuentro y apoyo entre compañeras para compartir experiencias.",
    type: "Encuentro",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "workshop-derechos-laborales",
    title: "Workshop: Derechos Laborales",
    date: "1 de Marzo, 2024",
    time: "17:00 - 19:30",
    location: "Aula Virtual",
    description: "Conoce tus derechos como trabajadora sexual en España.",
    type: "Workshop",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export const pastEvents: CalendarEvent[] = [
  {
    id: "exposicion-cultura-puta",
    title: "Exposición: Cultura Puta",
    date: "10 de Enero, 2024",
    time: "19:00 - 22:00",
    location: "Galería Alternativa",
    description: "Muestra artística sobre la cultura puta como resistencia.",
    type: "Exposición",
  },
  {
    id: "charla-feminismo-trabajo-sexual",
    title: "Charla: Feminismo y Trabajo Sexual",
    date: "20 de Diciembre, 2023",
    time: "18:00 - 20:00",
    location: "Universidad de Barcelona",
    description: "Mesa redonda sobre feminismo interseccional y trabajo sexual.",
    type: "Charla",
  },
]

export function getUpcomingEvents(): CalendarEvent[] {
  return upcomingEvents
}

export function getPastEvents(): CalendarEvent[] {
  return pastEvents
}

export function getNextThreeEvents(): CalendarEvent[] {
  return upcomingEvents.slice(0, 3)
}
