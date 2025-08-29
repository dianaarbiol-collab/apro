import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Just log for now - no email sending or Mailchimp
    console.log("Newsletter signup:", { email })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing newsletter signup:", error)
    return NextResponse.json({ error: "Error processing signup" }, { status: 500 })
  }
}
