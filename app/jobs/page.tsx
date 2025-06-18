"use client"

import { useState } from "react"
import Header from "@/components/Header"
import { Users, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Jobs() {
  const [activeCategory, setActiveCategory] = useState("COUNTRY WE SERVE")

  const categories = ["COUNTRY WE SERVE", "UNSKILLED", "SEMI-SKILLED", "SKILLED", "PROFESSIONAL"]

  const countries = [
    {
      name: "JOBS IN DUBAI",
      image: "/placeholder.svg?height=400&width=600",
      description: "Construction, hospitality, and technical opportunities in the UAE's business hub",
      jobCount: "150+ Jobs Available",
      href: "/jobs/dubai",
    },
    {
      name: "JOBS IN QATAR",
      image: "/placeholder.svg?height=400&width=600",
      description: "Infrastructure, sports, and service sector positions in Qatar",
      jobCount: "120+ Jobs Available",
      href: "/jobs/qatar",
    },
    {
      name: "JOBS IN SAUDI ARABIA",
      image: "/placeholder.svg?height=400&width=600",
      description: "Oil & gas, construction, and healthcare opportunities",
      jobCount: "200+ Jobs Available",
      href: "/jobs/saudi-arabia",
    },
    {
      name: "JOBS IN KUWAIT",
      image: "/placeholder.svg?height=400&width=600",
      description: "Engineering, healthcare, and administrative positions",
      jobCount: "80+ Jobs Available",
      href: "/jobs/kuwait",
    },
    {
      name: "JOBS IN MALAYSIA",
      image: "/placeholder.svg?height=400&width=600",
      description: "Manufacturing, plantation, and service industry roles",
      jobCount: "100+ Jobs Available",
      href: "/jobs/malaysia",
    },
    {
      name: "JOBS IN EUROPE",
      image: "/placeholder.svg?height=400&width=600",
      description: "Healthcare, agriculture, and hospitality across European countries",
      jobCount: "75+ Jobs Available",
      href: "/jobs/europe",
    },
    {
      name: "JOBS IN ISRAEL",
      image: "/placeholder.svg?height=400&width=600",
      description: "Agriculture, construction, and caregiving opportunities",
      jobCount: "60+ Jobs Available",
      href: "/jobs/israel",
    },
    {
      name: "JOBS IN SOUTH KOREA",
      image: "/placeholder.svg?height=400&width=600",
      description: "Manufacturing, technology, and service sector positions",
      jobCount: "90+ Jobs Available",
      href: "/jobs/south-korea",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#011D5B] via-[#0A2B6B] to-[#1E40AF] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            RECENT <span className="text-green-400">JOBS</span>
          </h1>
          <p className="text-xl text-gray-200 mb-4">
            Recent job listing available in Rising Youths Overseas Resources.
          </p>
          <p className="text-lg text-gray-300">
            Please contact our offices for more information regarding job details and quotas. Phone: +977-9823270812
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#011D5B] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <Link
                key={index}
                href={country.href}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Country Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110 transition-transform duration-700"></div>

                  {/* Country Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                      {country.name}
                    </h3>
                    <div className="flex items-center text-green-400 font-semibold">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{country.jobCount}</span>
                    </div>
                  </div>
                </div>

                {/* Country Info */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{country.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Updated Today</span>
                    </div>

                    <div className="flex items-center text-[#011D5B] font-semibold group-hover:text-green-600 transition-colors duration-300">
                      <span className="text-sm">View Jobs</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-400 rounded-2xl transition-colors duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-[#011D5B] to-[#0A2B6B] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Contact us today to learn more about available positions and application requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center"
            >
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+977-9823270812"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
