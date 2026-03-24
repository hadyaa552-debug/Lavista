"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const phoneNumber = "+201119770408"
  const whatsappMessage = encodeURIComponent("مرحباً، أنا مهتم بمشاريع لا فيستا للتطوير العقاري وأريد معرفة المزيد من التفاصيل")

  useEffect(() => { setIsVisible(true) }, [])

  return (
    <section id="home" className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://lavista.com.eg/wp-content/uploads/2024/08/bay-east-3.jpg')" }}>
      <div className="absolute inset-0 bg-black/60" />
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">لا فيستا للتطوير العقاري</p>
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">مشاريعنا المميزة</h1>
        <p className="text-xl lg:text-2xl text-white/85 mb-4">اختر وجهتك المثالية</p>
        <p className="text-base text-white/70 mb-10">El Patio Riva • El Patio Jade • Bay East • Ras El Hekma</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`}
            target="_blank" rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 font-semibold transition-colors text-lg">
            تواصل عبر واتساب
          </a>
          <a href={`tel:${phoneNumber}`}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 font-semibold transition-colors text-lg">
            اتصل الآن
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {[
            { href: "#riva", label: "El Patio Riva ↓" },
            { href: "#jade", label: "El Patio Jade ↓" },
            { href: "#bay-east", label: "Bay East ↓" },
            { href: "#ras-el-hekma", label: "Ras El Hekma ↓" },
          ].map((btn, i) => (
            <a key={i} href={btn.href}
              className="border border-white/50 text-white/80 hover:bg-white/10 px-5 py-2 text-sm transition-colors">
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
