import { NextResponse } from "next/server"

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzwxvAOEKe3MolP0Pw2diePTdPuRGfFBJ_QitiyNhrhAKYqD57ssKzTHGYqlGs-NUNsSw/exec"
const WA_NUMBER = "201119770408"
const PAGE_ID = "lavista-multiproject"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const project = searchParams.get("project") || "general"
  const phone = searchParams.get("phone") || "غير محدد"

  // Track to Google Sheet server-side
  try {
    await fetch(`${WEBHOOK_URL}?phone=${encodeURIComponent(phone)}&page=${PAGE_ID}&project=${encodeURIComponent(project)}`)
  } catch {}

  // Redirect to WhatsApp
  const msg = encodeURIComponent(`مرحباً، أنا مهتم بمشروع ${project} من مشاريع لا فيستا. أرجو التواصل معي.`)
  return NextResponse.redirect(`https://wa.me/${WA_NUMBER}?text=${msg}`)
}
