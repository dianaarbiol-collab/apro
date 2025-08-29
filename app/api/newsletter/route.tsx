import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

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

    if (!mailchimpResponse.ok && mailchimpData.title !== "Member Exists") {
      throw new Error(`Mailchimp error: ${mailchimpData.detail}`)
    }

    // Send welcome email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "¡Bienvenida al newsletter de APROSEX!",
      html: `
        <h2>¡Gracias por suscribirte!</h2>
        <p>Te has suscrito correctamente al newsletter de APROSEX.</p>
        <p>Recibirás noticias, eventos y recursos sobre derechos de las trabajadoras sexuales.</p>
        <br>
        <p>¡Bienvenida a la comunidad!</p>
        <p>Equipo APROSEX</p>
      `,
    })

    // Notify APROSEX
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@aprosex.org",
      subject: "Nueva suscripción al newsletter",
      html: `
        <h2>Nueva suscripción</h2>
        <p>Nueva suscripción al newsletter: ${email}</p>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Suscripción exitosa",
      isExisting: mailchimpData.title === "Member Exists",
    })
  } catch (error) {
    console.error("Error in newsletter subscription:", error)
    return NextResponse.json({ success: false, message: "Error en la suscripción" }, { status: 500 })
  }
}
