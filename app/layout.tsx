import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/toaster"

const cairo = Cairo({ subsets: ["arabic", "latin"] })

export const metadata: Metadata = {
  title: "لا فيستا للتطوير العقاري – El Patio Riva | El Patio Jade | Bay East | Ras El Hekma",
  description: "اكتشف أحدث مشاريع لا فيستا للتطوير العقاري – El Patio Riva في القاهرة الجديدة، El Patio Jade في العاصمة الإدارية، Bay East وRas El Hekma في الساحل الشمالي",
  keywords: "لا فيستا, El Patio Riva, El Patio Jade, Bay East, Ras El Hekma, الساحل الشمالي, القاهرة الجديدة, العاصمة الإدارية",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cairo.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
