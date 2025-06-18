"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, MapPin, Phone, Mail, Plane, ChevronDown } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100) // Trigger after 100px scroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  const whoWeAreItems = [
    { name: "Message from Chairman", href: "/chairman" },
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "License & Certificates", href: "/certificates" },
    { name: "Organizational Chart", href: "/chart" },
  ]

  const whatWeDoItems = [
    { name: "Consulting", href: "/consulting" },
    { name: "Training & Orientation", href: "/training" },
    { name: "Travel Management", href: "/travel" },
    { name: "Human Resources", href: "/human-resources" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>
      {/* Top Header Section - Company Info (Scrolls Away) */}
      <div
        className={`bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden transition-all duration-500 ${
          isScrolled ? "transform -translate-y-full opacity-0" : "transform translate-y-0 opacity-100"
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <pattern id="dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="#ffffff" fillOpacity="0.05" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-4 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-sm opacity-75"></div>
                <Image
                  src="/logo.png"
                  alt="Rising Youths Overseas Logo"
                  width={70}
                  height={70}
                  className="relative rounded-full border-3 border-white/30 shadow-xl"
                />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-xl lg:text-2xl font-bold tracking-wide bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  RISING YOUTHS OVERSEAS PVT. LTD.
                </h1>
                <div className="flex items-center justify-center lg:justify-start space-x-2 mt-1">
                  <span className="text-sm text-emerald-300 italic font-medium">Where Careers Blossom</span>
                  <Plane className="w-4 h-4 text-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 text-sm">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-center lg:text-left text-gray-100">Putali Sadak 12, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-100">9823270812</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-100">info@manpowername.com.np</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar (Fixed Sticky with Scroll Effects) */}
      <nav
        className={`bg-gradient-to-r from-green-600 to-red-600 border-t border-emerald-400/20 shadow-lg sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-md bg-gradient-to-r from-green-600/95 to-red-600/95 shadow-2xl"
            : "bg-gradient-to-r from-green-600 to-red-600"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Scrolled Logo (appears when scrolled) */}
            {isScrolled && (
              <div className="flex items-center space-x-3 lg:hidden xl:flex animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-sm opacity-75"></div>
                  <Image
                    src="/logo.png"
                    alt="Rising Youths Overseas Logo"
                    width={45}
                    height={45}
                    className="relative rounded-full border-2 border-white/30 shadow-lg transform transition-all duration-500"
                  />
                </div>
                <div className="text-white">
                  <h2 className="text-sm font-bold tracking-wide">RYO</h2>
                  <p className="text-xs text-emerald-300">Where Careers Blossom</p>
                </div>
              </div>
            )}

            {/* Desktop Navigation */}
            <div
              className={`hidden lg:flex items-center transition-all duration-500 ${
                isScrolled ? "lg:justify-center xl:justify-end w-full xl:w-auto" : "justify-center w-full"
              }`}
            >
              <ul className="flex space-x-8 py-4">
                <li>
                  <Link
                    href="/"
                    className={`transition-colors duration-300 font-medium tracking-wide text-sm uppercase ${
                      isActive("/") ? "text-green-400" : "text-white hover:text-green-400"
                    }`}
                  >
                    HOME
                  </Link>
                </li>

                {/* Who We Are Dropdown */}
                <li
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown("who-we-are")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-1 text-white hover:text-green-400 transition-colors duration-300 font-medium tracking-wide text-sm uppercase">
                    <span>WHO WE ARE</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-[#011D5B]/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl transition-all duration-300 z-50 ${
                      activeDropdown === "who-we-are"
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <ul className="py-2">
                      {whoWeAreItems.map((item, index) => (
                        <li key={index}>
                          <Link
                            href={item.href}
                            className={`block px-4 py-2 transition-colors duration-200 text-sm uppercase tracking-wide ${
                              isActive(item.href)
                                ? "bg-green-600/20 text-green-400"
                                : "text-white hover:bg-green-600/20 hover:text-green-400"
                            }`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                {/* What We Do Dropdown */}
                <li
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown("what-we-do")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-1 text-white hover:text-green-400 transition-colors duration-300 font-medium tracking-wide text-sm uppercase">
                    <span>WHAT WE DO</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-[#011D5B]/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl transition-all duration-300 z-50 ${
                      activeDropdown === "what-we-do"
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <ul className="py-2">
                      {whatWeDoItems.map((item, index) => (
                        <li key={index}>
                          <Link
                            href={item.href}
                            className={`block px-4 py-2 transition-colors duration-200 text-sm uppercase tracking-wide ${
                              isActive(item.href)
                                ? "bg-green-600/20 text-green-400"
                                : "text-white hover:bg-green-600/20 hover:text-green-400"
                            }`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li>
                  <Link
                    href="/procedures"
                    className={`transition-colors duration-300 font-medium tracking-wide text-sm uppercase ${
                      isActive("/procedures") ? "text-green-400" : "text-white hover:text-green-400"
                    }`}
                  >
                    PROCEDURES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className={`transition-colors duration-300 font-medium tracking-wide text-sm uppercase ${
                      isActive("/gallery") ? "text-green-400" : "text-white hover:text-green-400"
                    }`}
                  >
                    GALLERY
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`transition-colors duration-300 font-medium tracking-wide text-sm uppercase ${
                      isActive("/blog") ? "text-green-400" : "text-white hover:text-green-400"
                    }`}
                  >
                    BLOG
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`transition-colors duration-300 font-medium tracking-wide text-sm uppercase ${
                      isActive("/contact") ? "text-red-400" : "text-white hover:text-red-400"
                    }`}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden w-full flex justify-end py-4">
              <button onClick={toggleMenu} className="text-white hover:text-green-400 transition-colors duration-300">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`lg:hidden transition-all duration-300 overflow-hidden ${
              isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="py-4 space-y-2 border-t border-white/20">
              <li>
                <Link
                  href="/"
                  className={`block py-2 transition-colors duration-300 font-medium tracking-wide text-sm uppercase ${
                    isActive("/") ? "text-green-400" : "text-white hover:text-green-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </Link>
              </li>

              {/* Mobile Who We Are */}
              <li>
                <button
                  onClick={() => handleDropdownToggle("mobile-who-we-are")}
                  className="flex items-center justify-between w-full py-2 text-white hover:text-green-400 transition-colors duration-300 font-medium tracking-wide text-sm uppercase"
                >
                  <span>WHO WE ARE</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === "mobile-who-we-are" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeDropdown === "mobile-who-we-are" ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="pl-4 mt-2 space-y-1">
                    {whoWeAreItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className={`block py-1 transition-colors duration-200 text-sm ${
                            isActive(item.href) ? "text-green-400" : "text-gray-300 hover:text-green-400"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* Mobile What We Do */}
              <li>
                <button
                  onClick={() => handleDropdownToggle("mobile-what-we-do")}
                  className="flex items-center justify-between w-full py-2 text-white hover:text-green-400 transition-colors duration-300 font-medium tracking-wide text-sm uppercase"
                >
                  <span>WHAT WE DO</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === "mobile-what-we-do" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeDropdown === "mobile-what-we-do" ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="pl-4 mt-2 space-y-1">
                    {whatWeDoItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className={`block py-1 transition-colors duration-200 text-sm ${
                            isActive(item.href) ? "text-green-400" : "text-gray-300 hover:text-green-400"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link
                  href="/procedures"
                  className={`block py-2 transition-colors duration-300 font-medium tracking-wide text-sm uppercase ${
                    isActive("/procedures") ? "text-green-400" : "text-white hover:text-green-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  PROCEDURES
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className={`block py-2 transition-colors duration-300 font-medium tracking-wide text-sm uppercase ${
                    isActive("/gallery") ? "text-green-400" : "text-white hover:text-green-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  GALLERY
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`block py-2 transition-colors duration-300 font-medium tracking-wide text-sm uppercase ${
                    isActive("/blog") ? "text-green-400" : "text-white hover:text-green-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 transition-colors duration-300 font-medium tracking-wide text-sm uppercase ${
                    isActive("/contact") ? "text-red-400" : "text-white hover:text-red-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
