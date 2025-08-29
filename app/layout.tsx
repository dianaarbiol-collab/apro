import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aprosex - Asociación de Profesionales del Sexo",
  description: "Colectivo horizontal, transfeminista, interseccional y antirracista de trabajadores sexuales",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
