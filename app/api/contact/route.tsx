import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Send email to APROSEX
    await resend.emails.send({
      from: "onboarding@resend.dev", // Using Resend's verified domain temporarily
      to: "info@aprosex.org",
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Hemos recibido tu mensaje - APROSEX",
      html: `
        <h2>¡Gracias por contactarnos!</h2>
        <p>Hola ${name},</p>
        <p>Hemos recibido tu mensaje y te responderemos lo antes posible.</p>
        <p>Tu mensaje:</p>
        <p><em>${message}</em></p>
        <br>
        <p>Saludos,<br>Equipo APROSEX</p>
      `,
    })

    return NextResponse.json({ success: true, message: "Mensaje enviado correctamente" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, message: "Error al enviar el mensaje" }, { status: 500 })
  }
}
