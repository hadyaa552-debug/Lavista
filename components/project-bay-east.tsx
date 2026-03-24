"use client"

export default function ProjectBayEast() {
  const phoneNumber = "+201119770408"
  const projectName = "LA VISTA Bay East"
  const waLink = `/api/wa?project=${encodeURIComponent(projectName)}`

  return (
    <section id="bay-east" className="py-12 lg:py-16 bg-background">
      <div className="w-full px-4 lg:px-8 max-w-screen-xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 mb-4">الساحل الشمالي – الكيلو ١٦٧</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">LA VISTA Bay East</h2>
          <p className="text-xl text-muted-foreground">بالقرب من العلمين الجديدة • إطلالة بحر مباشرة</p>
        </div>

        <div className="relative aspect-[16/7] overflow-hidden shadow-2xl mb-6">
          <img src="https://lavista.com.eg/wp-content/uploads/2024/08/bay-east-3.jpg" alt="Bay East" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 right-8 text-right text-white">
            <p className="text-3xl font-bold">Bay East</p>
            <p className="text-white/80">الكيلو ١٦٧ – طريق الإسكندرية مطروح</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-6">
          <div className="text-right space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              قرية ساحلية فاخرة في الساحل الشمالي بالكيلو ١٦٧. جميع الوحدات تطل على البحر مباشرة مع شاطئ رملي بطول ٨٠٠ متر وبحيرات كريستالية وشلالات مائية.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              {[{ value: "800م", label: "شاطئ رملي" }, { value: "100%", label: "إطلالة بحر" }, { value: "كيلو 167", label: "الموقع" }].map((s, i) => (
                <div key={i} className="bg-muted/30 p-5">
                  <div className="text-2xl font-bold text-primary mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {[
              { label: "الموقع", value: "الكيلو ١٦٧ – طريق الإسكندرية مطروح" },
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {["شاطئ رملي ٨٠٠ م", "بحيرات كريستالية", "شلالات مائية", "نادي صحي وسبا", "منطقة تجارية", "مسارات شاطئية", "ملاعب رياضية", "جراجات خاصة"].map((f, i) => (
            <div key={i} className="bg-muted/30 p-4 text-center text-sm text-muted-foreground font-medium">{f}</div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {["https://lavista.com.eg/wp-content/uploads/2024/08/bay-east-2.jpg", "https://lavista.com.eg/wp-content/uploads/2024/08/bay-east.jpg", "https://lavista.com.eg/wp-content/uploads/2023/10/Screen-Shot-2023-10-10-at-6.29.33-AM.png"].map((src, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden">
              <img src={src} alt="Bay East" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>

        <div className="bg-primary p-8 lg:p-10 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">احجز وحدتك في LA VISTA Bay East</h3>
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
