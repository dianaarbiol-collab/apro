import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Log the contact form submission
    console.log("Contact form submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    })

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente. Te contactaremos pronto.",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { success: false, message: "Error al enviar el mensaje. Inténtalo de nuevo." },
      { status: 500 },
    )
  }
}
