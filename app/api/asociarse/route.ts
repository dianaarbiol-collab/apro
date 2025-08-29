import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { getAssociationEmailTemplate, getAssociationConfirmationTemplate } from "@/lib/email-templates"

const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Preparar datos para el template
    const emailData = {
      nombre: data.nombre,
      apellidos: data.apellidos,
      email: data.email,
      telefono: data.telefono,
      fechaNacimiento: `${data.edad} años`,
      direccion: `${data.ciudad}, ${data.provincia}`,
      codigoPostal: data.codigoPostal,
      ciudad: data.ciudad,
      provincia: data.provincia,
      pais: "España",
      profesion: data.situacionLaboral,
      experiencia: data.experiencia,
      motivacion: data.motivacion,
      contribucion: data.aportacion,
      habilidades: data.habilidades,
      disponibilidad: data.disponibilidad,
      referencias: data.referencias,
      comentarios: data.expectativas,
    }

    // Enviar email a APROSEX
    await resend.emails.send({
      from: "noreply@aprosex.org",
      to: "info@aprosex.org",
      subject: `Nueva solicitud de asociación - ${data.nombre} ${data.apellidos}`,
      html: getAssociationEmailTemplate(emailData),
    })

    // Enviar email de confirmación al usuario
    await resend.emails.send({
      from: "noreply@aprosex.org",
      to: data.email,
      subject: "Confirmación de solicitud de asociación - APROSEX",
      html: getAssociationConfirmationTemplate(data.nombre),
    })

    console.log("✅ Solicitud de asociación procesada y emails enviados")

    return NextResponse.json({
      success: true,
      message: "Solicitud enviada correctamente",
    })
  } catch (error) {
    console.error("❌ Error procesando solicitud de asociación:", error)
    return NextResponse.json({ error: "Error enviando la solicitud. Por favor, inténtalo de nuevo." }, { status: 500 })
  }
}
