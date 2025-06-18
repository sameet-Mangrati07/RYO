"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, MapPin, Phone, Mail, Plane, ChevronDown } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  const whoWeAreItems = [
    "Message from Chairman",
    "About Us",
    "Our Team",
    "License & Certificates",
    "Organizational Chart",
  ]

  const whatWeDoItems = ["Consulting", "Training & Orientation", "Travel Management", "Human Resources"]

  return (
    <header className="w-full bg-white shadow-lg">
      {/* Top Header Section */}
      <div className="bg-gradient-to-r from-[#011D5B] to-[#0A2B6B] text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src="/src/assets/logo.jpg"
                  alt="Rising Youths Overseas Logo"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-white/20"
                />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-xl lg:text-2xl font-bold tracking-wide">RISING YOUTHS OVERSEAS PVT. LTD.</h1>
                <div className="flex items-center justify-center lg:justify-start space-x-2 mt-1">
                  <span className="text-sm text-gray-200 italic">Where Careers Blossom</span>
                  <Plane className="w-4 h-4 text-green-400" />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-center lg:text-left">Putali Sadak 12, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>9823270812</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>info@manpowername.com.np</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-[#011D5B] border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center w-full">
              <ul className="flex space-x-8 py-4">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-green-400 transition-colors duration-300 font-medium tracking-wide text-sm uppercase"
                  >
                    HOME
                  </a>
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
                    className={`absolute top-full left-0 mt-2 w-64 bg-[#011D5B] border border-white/20 rounded-lg shadow-xl transition-all duration-300 ${
                      activeDropdown === "who-we-are"
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <ul className="py-2">
                      {whoWeAreItems.map((item, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="block px-4 py-2 text-white hover:bg-green-600/20 hover:text-green-400 transition-colors duration-200 text-sm uppercase tracking-wide"
                          >
                            {item}
                          </a>
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
                    className={`absolute top-full left-0 mt-2 w-64 bg-[#011D5B] border border-white/20 rounded-lg shadow-xl transition-all duration-300 ${
                      activeDropdown === "what-we-do"
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <ul className="py-2">
                      {whatWeDoItems.map((item, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="block px-4 py-2 text-white hover:bg-green-600/20 hover:text-green-400 transition-colors duration-200 text-sm uppercase tracking-wide"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-white hover:text-green-400 transition-colors duration-300 font-medium tracking-wide text-sm uppercase"
                  >
                    PROCEDURES
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-green-400 transition-colors duration-300 font-medium tracking-wide text-sm uppercase"
                  >
                    GALLERY
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-green-400 transition-colors duration-300 font-medium tracking-wide text-sm uppercase"
                  >
                    BLOG
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-red-400 transition-colors duration-300 font-medium tracking-wide text-sm uppercase"
                  >
                    CONTACT
                  </a>
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
                <a
                  href="#"
                  className="block py-2 text-white hover:text-green-400 transition-colors duration-300 font-medium tracking-wide text-sm uppercase"
                >
                  HOME
                </a>
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
                        <a
                          href="#"
                          className="block py-1 text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                        >
                          {item}
                        </a>
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
                        <a
                          href="#"
                          className="block py-1 text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 text-white hover:text-green-400 transition-colors duration-300 font-medium tracking-wide text-sm uppercase"
                >
                  PROCEDURES
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-white hover:text-green-400 transition-colors duration-300 font-medium tracking-wide text-sm uppercase"
                >
                  GALLERY
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-white hover:text-green-400 transition-colors duration-300 font-medium tracking-wide text-sm uppercase"
                >
                  BLOG
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 text-white hover:text-red-400 transition-colors duration-300 font-medium tracking-wide text-sm uppercase"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
