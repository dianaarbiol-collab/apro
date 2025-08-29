import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validación básica
    const requiredFields = [
      "nombre",
      "apellidos",
      "email",
      "telefono",
      "edad",
      "ciudad",
      "provincia",
      "codigoPostal",
      "situacionLaboral",
      "experiencia",
      "motivacion",
      "expectativas",
      "aportacion",
      "disponibilidad",
      "habilidades",
      "conocimientoAprosex",
      "referencias",
    ]

    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json({ error: `El campo ${field} es requerido` }, { status: 400 })
      }
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: "Email no válido" }, { status: 400 })
    }

    // Validar edad
    const edad = Number.parseInt(data.edad)
    if (isNaN(edad) || edad < 18 || edad > 100) {
      return NextResponse.json({ error: "La edad debe ser un número entre 18 y 100" }, { status: 400 })
    }

    // Log de la solicitud (para debugging)
    console.log("📝 Nueva solicitud de asociación recibida:")
    console.log("👤 Nombre:", data.nombre, data.apellidos)
    console.log("📧 Email:", data.email)
    console.log("📱 Teléfono:", data.telefono)
    console.log("🎂 Edad:", data.edad)
    console.log("📍 Ubicación:", data.ciudad, data.provincia)
    console.log("💼 Situación laboral:", data.situacionLaboral)
    console.log("⏰ Disponibilidad:", data.disponibilidad)
    console.log("🛠️ Habilidades:", data.habilidades)
    console.log("💭 Motivación:", data.motivacion.substring(0, 100) + "...")

    console.log("✅ Solicitud procesada correctamente")

    return NextResponse.json({
      success: true,
      message: "Solicitud enviada correctamente",
    })
  } catch (error) {
    console.error("❌ Error procesando solicitud de asociación:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
