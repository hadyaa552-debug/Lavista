import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, project } = body

    const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzwxvAOEKe3MolP0Pw2diePTdPuRGfFBJ_QitiyNhrhAKYqD57ssKzTHGYqlGs-NUNsSw/exec"
    const PAGE_ID = "lavista-multiproject"

    // Track to Google Sheet
    await fetch(`${WEBHOOK_URL}?phone=${encodeURIComponent(phone)}&page=${PAGE_ID}&project=${encodeURIComponent(project || "غير محدد")}`, {
      method: "GET",
    }).catch(() => {})

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 })
  }
}
