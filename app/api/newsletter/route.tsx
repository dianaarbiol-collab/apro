import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email es requerido" }, { status: 400 })
    }

    // Add to Mailchimp
    const mailchimpResponse = await fetch(`https://us22.api.mailchimp.com/3.0/lists/5ebabd15c0/members`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    })

    const mailchimpData = await mailchimpResponse.json()

    // Handle duplicate email
    if (mailchimpResponse.status === 400 && mailchimpData.title === "Member Exists") {
      return NextResponse.json({ error: "Este email ya está suscrito a nuestro newsletter" }, { status: 400 })
    }

    if (!mailchimpResponse.ok) {
      throw new Error("Error adding to Mailchimp")
    }

    // Send welcome email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [email],
      subject: "¡Bienvenide al newsletter de APROSEX!",
      html: `
        <h2>¡Gracias por suscribirte!</h2>
        <p>Te has suscrito correctamente al newsletter de APROSEX.</p>
        <p>Recibirás información sobre nuestros eventos, talleres y noticias relevantes para la comunidad.</p>
        <br>
        <p>¡Bienvenide a la lucha por nuestros derechos!</p>
        <p>El equipo de APROSEX</p>
      `,
    })

    // Notify APROSEX
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["info@aprosex.org"],
      subject: "Nueva suscripción al newsletter",
      html: `
        <h2>Nueva suscripción al newsletter</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>Se ha añadido automáticamente a la lista de Mailchimp.</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing newsletter subscription:", error)
    return NextResponse.json({ error: "Error al procesar la suscripción" }, { status: 500 })
  }
}
