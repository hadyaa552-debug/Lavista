"use client"

export default function ProjectJade() {
  const phoneNumber = "+201119770408"
  const projectName = "El Patio Jade"
  const waLink = `/api/wa?project=${encodeURIComponent(projectName)}`

  return (
    <section id="jade" className="py-12 lg:py-16 bg-muted/20">
      <div className="w-full px-4 lg:px-8 max-w-screen-xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 mb-4">العاصمة الإدارية الجديدة</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">El Patio Jade</h2>
          <p className="text-xl text-muted-foreground">طرح جديد • ١٠٠ فدان من الرقي والخصوصية</p>
        </div>

        <div className="relative aspect-[16/7] overflow-hidden shadow-2xl mb-6">
          <img src="https://lavista.com.eg/wp-content/uploads/2026/01/bg.jpg" alt="El Patio Jade" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 right-8 text-right text-white">
            <p className="text-3xl font-bold">El Patio Jade</p>
            <p className="text-white/80">امتداد La Vista City – العاصمة الإدارية</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-6">
          <div className="text-right space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              مجتمع سكني متكامل يتميز بالخصوصية والمساحات الخضراء الواسعة. نسبة مباني ١٤٪ فقط مع كلوب هاوس ١٠ أفدنة ومسطحات مائية مميزة.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              {[{ value: "100", label: "فدان" }, { value: "14%", label: "نسبة مباني" }, { value: "10", label: "أفدنة كلوب هاوس" }].map((s, i) => (
                <div key={i} className="bg-muted/30 p-5">
                  <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {[
              { label: "الموقع", value: "امتداد La Vista City – العاصمة الإدارية" },
              { label: "الوحدات", value: "تاون هاوس • توين هاوس • فيلات مستقلة" },
              { label: "المساحات", value: "١٦٥م² حتى ٤١١م²" },
              { label: "السداد", value: "مقدم يبدأ من ٥٪ | تقسيط ١٠ سنوات" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-primary font-semibold">{item.value}</span>
                <span className="text-muted-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {["كلوب هاوس ١٠ أفدنة", "مسطحات مائية", "لاندسكيب واسع", "فود كورت", "ملاعب رياضية", "مناطق أطفال", "جيم خارجي", "أمن ٢٤/٧"].map((f, i) => (
            <div key={i} className="bg-background p-4 text-center text-sm text-muted-foreground font-medium border border-border">{f}</div>
          ))}
        </div>

        <div className="bg-primary p-8 lg:p-10 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">احجز وحدتك في El Patio Jade</h3>
          <p className="text-white/80 mb-6">تواصل معنا للحصول على العروض الحصرية والأسعار</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waLink} className="bg-white text-primary px-8 py-3 font-bold hover:bg-gray-100 transition-colors">واتساب</a>
            <a href={`tel:${phoneNumber}`} className="border-2 border-white text-white px-8 py-3 font-bold hover:bg-white hover:text-primary transition-colors">اتصل الآن</a>
          </div>
        </div>
      </div>
    </section>
  )
}
