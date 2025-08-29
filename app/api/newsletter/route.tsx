import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Add to Mailchimp
    if (process.env.MAILCHIMP_API_KEY) {
      const response = await fetch(`https://us22.api.mailchimp.com/3.0/lists/5ebabd15c0/members`, {
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

      if (!response.ok && response.status !== 400) {
        throw new Error("Failed to add to Mailchimp")
      }
    }

    // Send welcome email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Bienvenide al newsletter de APROSEX",
      html: `
        <h2>¡Bienvenide a nuestra comunidad!</h2>
        <p>Gracias por suscribirte al newsletter de APROSEX.</p>
        <p>Te mantendremos informade sobre nuestras actividades y recursos.</p>
        <p>Saludos,<br>Equipo APROSEX</p>
      `,
    })

    // Notify APROSEX
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@aprosex.org",
      subject: "Nueva suscripción al newsletter",
      html: `
        <h2>Nueva suscripción</h2>
        <p>Email: ${email}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing newsletter signup:", error)
    return NextResponse.json({ error: "Error processing signup" }, { status: 500 })
  }
}
