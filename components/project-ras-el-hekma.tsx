"use client"

export default function ProjectRasElHekma() {
  const phoneNumber = "+201119770408"
  const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzwxvAOEKe3MolP0Pw2diePTdPuRGfFBJ_QitiyNhrhAKYqD57ssKzTHGYqlGs-NUNsSw/exec"
  const PAGE_ID = "lavista-multiproject"
  const projectName = "LA VISTA Ras El Hekma"
  const whatsappMessage = encodeURIComponent(`مرحباً، أنا مهتم بمشروع ${projectName} في الساحل الشمالي وأريد معرفة المزيد من التفاصيل`)

  const trackAndOpen = () => {
    const url = `${WEBHOOK_URL}?phone=غير+محدد&page=${PAGE_ID}&project=${encodeURIComponent(projectName)}`
    fetch(url, { method: "GET", mode: "no-cors" }).catch(() => {})
    window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`, "_blank")
  }

  return (
    <section id="ras-el-hekma" className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 mb-4">الساحل الشمالي – رأس الحكمة</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">LA VISTA Ras El Hekma</h2>
          <p className="text-xl text-muted-foreground">أجمل شواطئ مصر • إطلالة بحر مباشرة</p>
        </div>

        {/* Main Image Placeholder */}
        <div className="relative aspect-[16/7] overflow-hidden shadow-2xl mb-12 bg-muted/30 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <p className="text-6xl mb-4">🏖️</p>
            <p className="text-lg font-medium">LA VISTA Ras El Hekma</p>
          </div>
          <div className="absolute bottom-8 right-8 text-right text-foreground">
            <p className="text-3xl font-bold">Ras El Hekma</p>
            <p className="text-muted-foreground">الساحل الشمالي – رأس الحكمة</p>
          </div>
        </div>

        {/* Stats + Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="text-right space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              قرية ساحلية فاخرة في أجمل شواطئ مصر برأس الحكمة. جميع الوحدات تطل على البحر مباشرة مع بحيرات كريستالية وشلالات مائية ونادي صحي متكامل وجراجات خاصة لكل وحدة.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              {[
                { value: "100%", label: "إطلالة بحر" },
                { value: "5⭐", label: "معايير الجودة" },
                { value: "رأس الحكمة", label: "الموقع" },
              ].map((s, i) => (
                <div key={i} className="bg-muted/30 p-5">
                  <div className="text-2xl font-bold text-primary mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {[
              { label: "الموقع", value: "رأس الحكمة – الساحل الشمالي" },
              { label: "الوحدات", value: "شاليهات • توين هاوس • تاون هاوس" },
              { label: "مميز", value: "جميع الوحدات تطل على البحر مباشرة" },
              { label: "جراجات", value: "جراجات خاصة لكل وحدة" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-primary font-semibold">{item.value}</span>
                <span className="text-muted-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {["شاطئ رملي طبيعي", "بحيرات كريستالية", "شلالات مائية", "سبا عالمي وجيم", "منطقة تجارية", "مسارات شاطئية", "ملاعب رياضية", "جراجات خاصة"].map((f, i) => (
            <div key={i} className="bg-background p-4 text-center text-sm text-muted-foreground font-medium border border-border">{f}</div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary p-8 lg:p-10 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">احجز وحدتك في LA VISTA Ras El Hekma</h3>
          <p className="text-white/80 mb-6">تواصل معنا للحصول على العروض الحصرية والأسعار</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={trackAndOpen}
              className="bg-white text-primary px-8 py-3 font-bold hover:bg-gray-100 transition-colors cursor-pointer">
              واتساب
            </button>
            <a href={`tel:${phoneNumber}`}
              className="border-2 border-white text-white px-8 py-3 font-bold hover:bg-white hover:text-primary transition-colors">
              اتصل الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
