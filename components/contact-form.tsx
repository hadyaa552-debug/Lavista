"use client"

import type React from "react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzwxvAOEKe3MolP0Pw2diePTdPuRGfFBJ_QitiyNhrhAKYqD57ssKzTHGYqlGs-NUNsSw/exec"
const PAGE_ID = "lavista-multiproject"
const WA_NUMBER = "201119770408"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: "", phone: "", project: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      // Track to Google Sheet
      const sheetUrl = `${WEBHOOK_URL}?phone=${encodeURIComponent(formData.phone)}&page=${PAGE_ID}&project=${encodeURIComponent(formData.project || "غير محدد")}`
      fetch(sheetUrl, { method: "GET", mode: "no-cors" }).catch(() => {})

      // Send to FormSubmit
      const response = await fetch("https://formsubmit.co/ajax/Leads@grandeur-spaces.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          "المشروع المهتم به": formData.project || "لم يتم تحديده",
          _subject: "استفسار جديد – لا فيستا للتطوير العقاري",
          _captcha: "false",
          _template: "table",
        }),
      })

      // Open WhatsApp
      const msg = encodeURIComponent(`مرحباً، اسمي ${formData.name} وأنا مهتم بـ ${formData.project || "مشاريع لا فيستا"}. أرجو التواصل معي.`)
      window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank")

      if (response.ok) {
        toast({ title: "تم الإرسال بنجاح!", description: "سنتواصل معك في أقرب وقت ممكن" })
        setFormData({ name: "", phone: "", project: "" })
      } else throw new Error("Failed")
    } catch {
      toast({ title: "حدث خطأ", description: "يرجى المحاولة مرة أخرى", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <select value={formData.project}
        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
        required
        className="w-full border border-border bg-background text-foreground px-4 py-3 text-right focus:outline-none focus:border-primary">
        <option value="">اختر المشروع المهتم به *</option>
        <option value="El Patio Riva">El Patio Riva – القاهرة الجديدة</option>
        <option value="El Patio Jade">El Patio Jade – العاصمة الإدارية</option>
        <option value="LA VISTA Bay East">LA VISTA Bay East – الساحل الشمالي</option>
        <option value="LA VISTA Ras El Hekma">LA VISTA Ras El Hekma – رأس الحكمة</option>
        <option value="أكثر من مشروع">أكثر من مشروع</option>
      </select>
      <input type="text" placeholder="الاسم الكامل *"
        value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="w-full border border-border bg-background text-foreground px-4 py-3 text-right focus:outline-none focus:border-primary placeholder:text-muted-foreground" />
      <input type="tel" placeholder="رقم الهاتف *"
        value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required dir="ltr"
        className="w-full border border-border bg-background text-foreground px-4 py-3 text-right focus:outline-none focus:border-primary placeholder:text-muted-foreground" />
      <button type="submit" disabled={loading}
        className="w-full bg-primary text-white py-4 font-semibold text-base hover:bg-primary/90 transition-colors disabled:opacity-70">
        {loading ? "جاري الإرسال..." : "سجل اهتمامك"}
      </button>
    </form>
  )
}
