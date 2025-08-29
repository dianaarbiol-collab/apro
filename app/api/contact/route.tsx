import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Send email to APROSEX
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["info@aprosex.org"],
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [email],
      subject: "Hemos recibido tu mensaje - APROSEX",
      html: `
        <h2>¡Gracias por contactarnos!</h2>
        <p>Hola ${name},</p>
        <p>Hemos recibido tu mensaje y te responderemos en un plazo de 24-48 horas.</p>
        <p><strong>Tu mensaje:</strong></p>
        <p><em>${message.replace(/\n/g, "<br>")}</em></p>
        <br>
        <p>Saludos,<br>El equipo de APROSEX</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending contact email:", error)
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 })
  }
}
