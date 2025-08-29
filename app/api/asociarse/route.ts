import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      nombre,
      apellidos,
      email,
      telefono,
      fechaNacimiento,
      nacionalidad,
      direccion,
      codigoPostal,
      ciudad,
      provincia,
      motivacion,
    } = body

    // Log the association form submission
    console.log("Association form submission:", {
      nombre,
      apellidos,
      email,
      telefono,
      fechaNacimiento,
      nacionalidad,
      direccion,
      codigoPostal,
      ciudad,
      provincia,
      motivacion,
      timestamp: new Date().toISOString(),
    })

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Solicitud de asociación enviada correctamente. Te contactaremos pronto.",
    })
  } catch (error) {
    console.error("Error processing association form:", error)
    return NextResponse.json(
      { success: false, message: "Error al enviar la solicitud. Inténtalo de nuevo." },
      { status: 500 },
    )
  }
}
