import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { nombre, email, telefono, mensaje } = await request.json()

    // Send email to APROSEX
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@aprosex.org",
      subject: "Nuevo mensaje de contacto - APROSEX",
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    })

    // Send confirmation to user
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Hemos recibido tu mensaje - APROSEX",
      html: `
        <h2>¡Gracias por contactarnos!</h2>
        <p>Hola ${nombre},</p>
        <p>Hemos recibido tu mensaje y te responderemos lo antes posible.</p>
        <p>Saludos,<br>Equipo APROSEX</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Error sending email" }, { status: 500 })
  }
}
