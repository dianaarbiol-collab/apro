import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email es obligatorio" }, { status: 400 })
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
      return NextResponse.json({
        success: true,
        message: "Ya estás suscrito a nuestro newsletter",
      })
    }

    if (!mailchimpResponse.ok) {
      throw new Error("Error adding to Mailchimp")
    }

    // Send welcome email with Resend
    await resend.emails.send({
      from: "noreply@aprosex.org",
      to: email,
      subject: "¡Bienvenide al newsletter de APROSEX!",
      html: `
        <h2>¡Gracias por suscribirte!</h2>
        <p>Te has suscrito correctamente al newsletter de APROSEX.</p>
        <p>Recibirás noticias, eventos y recursos sobre derechos sexuales y trabajo sexual.</p>
        <br>
        <p>¡Bienvenide a la comunidad!</p>
        <p>Equipo APROSEX</p>
      `,
    })

    // Notify APROSEX of new subscription
    await resend.emails.send({
      from: "noreply@aprosex.org",
      to: "info@aprosex.org",
      subject: "Nueva suscripción al newsletter",
      html: `
        <h2>Nueva suscripción</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>Se ha añadido automáticamente a Mailchimp.</p>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "¡Te has suscrito correctamente!",
    })
  } catch (error) {
    console.error("Error in newsletter subscription:", error)
    return NextResponse.json({ error: "Error al suscribirse" }, { status: 500 })
  }
}
