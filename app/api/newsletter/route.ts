import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Log the newsletter subscription
    console.log("Newsletter subscription:", {
      email,
      timestamp: new Date().toISOString(),
    })

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Te has suscrito correctamente al newsletter.",
    })
  } catch (error) {
    console.error("Error processing newsletter subscription:", error)
    return NextResponse.json({ success: false, message: "Error al suscribirse. Inténtalo de nuevo." }, { status: 500 })
  }
}
