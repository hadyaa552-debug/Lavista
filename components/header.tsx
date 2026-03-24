"use client"

import { useState, useEffect } from "react"
import { Phone } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const phoneNumber = "+201119770408"
  const displayNumber = "0111 977 0408"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#riva", label: "El Patio Riva" },
    { href: "#jade", label: "El Patio Jade" },
    { href: "#bay-east", label: "Bay East" },
    { href: "#ras-el-hekma", label: "Ras El Hekma" },
    { href: "#contact", label: "تواصل معنا" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-black/30 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" className="flex flex-col items-start">
            <span className={`text-xl font-bold tracking-wide transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
              LA VISTA
            </span>
            <span className={`text-xs tracking-widest transition-colors ${isScrolled ? "text-primary" : "text-white/70"}`}>
              للتطوير العقاري
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-primary"}`}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href={`tel:${phoneNumber}`}
            className="hidden lg:flex items-center gap-2 bg-primary text-white px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors">
            <Phone className="h-4 w-4" />
            {displayNumber}
          </a>

          <button className={`lg:hidden p-2 ${isScrolled ? "text-gray-700" : "text-white"}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}
                  className="text-sm font-medium py-3 px-4 border-b border-gray-100 hover:text-primary hover:bg-gray-50 transition-colors text-gray-700"
                  onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 text-sm font-semibold text-primary py-3 px-4 mt-2">
                <Phone className="h-4 w-4" />
                {displayNumber}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
