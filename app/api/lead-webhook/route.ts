import { NextRequest, NextResponse } from "next/server"

const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/sHcfjYFcKaywNxchTSIJ/webhook-trigger/16ebf30d-bdc5-447a-bb62-160d77f3a8f8"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Send to GoHighLevel webhook
    const response = await fetch(GHL_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        plan: body.plan || "standard",
      }),
    })

    if (!response.ok) {
      console.error("GHL webhook error:", response.status, await response.text())
      return NextResponse.json({ success: false, error: "Webhook failed" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Lead webhook error:", error)
    return NextResponse.json({ success: false, error: "Internal error" }, { status: 500 })
  }
}
