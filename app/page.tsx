"use client"

import { useEffect, useRef, useState } from "react"
import Header from "@/components/Header"
import {
  ArrowRight,
  CheckCircle,
  MessageSquare,
  GraduationCap,
  Plane,
  Building,
  Users,
  Clock,
  ChevronLeft,
  ChevronRight,
  Calendar,
  ExternalLink,
  User,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [jobsVisible, setJobsVisible] = useState(false)
  const [newsVisible, setNewsVisible] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const jobsRef = useRef<HTMLDivElement>(null)
  const newsRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState("COUNTRY WE SERVE")

  // News carousel state
  const [isNewsHovered, setIsNewsHovered] = useState(false)
  const newsCarouselRef = useRef<HTMLDivElement>(null)
  const [currentTranslate, setCurrentTranslate] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === servicesRef.current && entry.isIntersecting) {
            setIsVisible(true)
          }
          if (entry.target === jobsRef.current && entry.isIntersecting) {
            setJobsVisible(true)
          }
          if (entry.target === newsRef.current && entry.isIntersecting) {
            setNewsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }
    if (jobsRef.current) {
      observer.observe(jobsRef.current)
    }
    if (newsRef.current) {
      observer.observe(newsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Infinite auto-scroll for news carousel
  useEffect(() => {
    if (!isNewsHovered && newsVisible) {
      const interval = setInterval(() => {
        setCurrentTranslate((prev) => {
          const cardWidth = 400 // Width of each card including gap
          const maxTranslate = -(cardWidth * newsAndBlogItems.length)
          const newTranslate = prev - 1 // Move 1px per interval for smooth movement

          // Reset to start when reaching the end
          if (newTranslate <= maxTranslate) {
            return 0
          }
          return newTranslate
        })
      }, 20) // Update every 20ms for smooth animation

      return () => clearInterval(interval)
    }
  }, [isNewsHovered, newsVisible])

  // Apply transform to carousel
  useEffect(() => {
    if (newsCarouselRef.current) {
      newsCarouselRef.current.style.transform = `translateX(${currentTranslate}px)`
    }
  }, [currentTranslate])

  const services = [
    {
      icon: MessageSquare,
      title: "Consulting Services",
      description:
        "Expert guidance for your overseas career journey with personalized consultation and strategic planning.",
      href: "/consulting",
      delay: "0ms",
    },
    {
      icon: GraduationCap,
      title: "Training & Orientation",
      description:
        "Comprehensive preparation for international work environments with cultural and technical training.",
      href: "/training",
      delay: "200ms",
    },
    {
      icon: Plane,
      title: "Travel Management",
      description: "Complete travel arrangements and documentation support for seamless international transitions.",
      href: "/travel",
      delay: "400ms",
    },
    {
      icon: Building,
      title: "Human Resources",
      description: "Professional HR services connecting skilled talent with global employment opportunities.",
      href: "/human-resources",
      delay: "600ms",
    },
  ]

  const categories = ["COUNTRY WE SERVE", "UNSKILLED", "SEMI-SKILLED", "SKILLED", "PROFESSIONAL"]

  const countries = [
    {
      name: "JOBS IN DUBAI",
      image: "/countries/dubai.jpg",
      description: "Construction, hospitality, and technical opportunities in the UAE's business hub",
      jobCount: "150+ Jobs Available",
      href: "/jobs/dubai",
    },
    {
      name: "JOBS IN QATAR",
      image: "/countries/qatar.jpg",
      description: "Infrastructure, sports, and service sector positions in Qatar",
      jobCount: "120+ Jobs Available",
      href: "/jobs/qatar",
    },
    {
      name: "JOBS IN SAUDI ARABIA",
      image: "/countries/saudi-arabia.jpg",
      description: "Oil & gas, construction, and healthcare opportunities",
      jobCount: "200+ Jobs Available",
      href: "/jobs/saudi-arabia",
    },
    {
      name: "JOBS IN KUWAIT",
      image: "/countries/kuwait.jpg",
      description: "Engineering, healthcare, and administrative positions",
      jobCount: "80+ Jobs Available",
      href: "/jobs/kuwait",
    },
    {
      name: "JOBS IN MALAYSIA",
      image: "/countries/malaysia.jpg",
      description: "Manufacturing, plantation, and service industry roles",
      jobCount: "100+ Jobs Available",
      href: "/jobs/malaysia",
    },
    {
      name: "JOBS IN EUROPE",
      image: "/countries/europe.jpg",
      description: "Healthcare, agriculture, and hospitality across European countries",
      jobCount: "75+ Jobs Available",
      href: "/jobs/europe",
    },
    {
      name: "JOBS IN ISRAEL",
      image: "/countries/israel.jpg",
      description: "Agriculture, construction, and caregiving opportunities",
      jobCount: "60+ Jobs Available",
      href: "/jobs/israel",
    },
    {
      name: "JOBS IN SOUTH KOREA",
      image: "/countries/south-korea.jpg",
      description: "Manufacturing, technology, and service sector positions",
      jobCount: "90+ Jobs Available",
      href: "/jobs/south-korea",
    },
  ]

  // Combined news and blog items
  const newsAndBlogItems = [
    // News Items
    {
      id: 1,
      title: "New Partnership with Leading UAE Construction Company",
      summary:
        "Rising Youths Overseas has signed a strategic partnership with Al-Futtaim Construction, opening 200+ new positions for skilled workers in Dubai and Abu Dhabi.",
      image: "/placeholder.svg?height=300&width=400",
      date: "January 15, 2025",
      category: "Partnership",
      type: "news",
      author: "Rising Youths Team",
      readTime: "3 min read",
      slug: "uae-partnership-construction",
    },
    {
      id: 2,
      title: "Top 10 Tips for Successful Overseas Employment",
      summary:
        "Essential advice for professionals seeking international career opportunities and how to prepare for success abroad.",
      image: "/placeholder.svg?height=300&width=400",
      date: "January 12, 2025",
      category: "Career Advice",
      type: "blog",
      author: "Rajesh Sharma",
      readTime: "5 min read",
      slug: "tips-successful-overseas-employment",
    },
    {
      id: 3,
      title: "Qatar World Cup Legacy Projects Create New Opportunities",
      summary:
        "Post-World Cup infrastructure development in Qatar continues to offer excellent opportunities for construction workers, engineers, and hospitality professionals.",
      image: "/placeholder.svg?height=300&width=400",
      date: "January 10, 2025",
      category: "Opportunities",
      type: "news",
      author: "Rising Youths Team",
      readTime: "4 min read",
      slug: "qatar-opportunities-legacy",
    },
    {
      id: 4,
      title: "Understanding Work Visa Requirements for Gulf Countries",
      summary:
        "A comprehensive guide to visa requirements, documentation, and processes for working in UAE, Qatar, Saudi Arabia, and other Gulf nations.",
      image: "/placeholder.svg?height=300&width=400",
      date: "January 8, 2025",
      category: "Visa Guide",
      type: "blog",
      author: "Priya Thapa",
      readTime: "8 min read",
      slug: "gulf-visa-requirements-guide",
    },
    {
      id: 5,
      title: "Enhanced Pre-Departure Training Program Launched",
      summary:
        "Our new comprehensive training program includes advanced language courses, cultural orientation, and technical skills development to better prepare candidates.",
      image: "/placeholder.svg?height=300&width=400",
      date: "January 5, 2025",
      category: "Training",
      type: "news",
      author: "Rising Youths Team",
      readTime: "3 min read",
      slug: "enhanced-training-program",
    },
    {
      id: 6,
      title: "Cultural Adaptation: Thriving in International Workplaces",
      summary:
        "Learn how to adapt to different work cultures and build successful relationships with international colleagues.",
      image: "/placeholder.svg?height=300&width=400",
      date: "January 3, 2025",
      category: "Cultural Tips",
      type: "blog",
      author: "Amit Gurung",
      readTime: "6 min read",
      slug: "cultural-adaptation-international",
    },
    {
      id: 7,
      title: "Malaysia Plantation Sector Seeks 500+ Workers",
      summary:
        "Major palm oil companies in Malaysia are actively recruiting workers for plantation operations with competitive salaries and comprehensive benefits.",
      image: "/placeholder.svg?height=300&width=400",
      date: "January 1, 2025",
      category: "Jobs",
      type: "news",
      author: "Rising Youths Team",
      readTime: "4 min read",
      slug: "malaysia-plantation-opportunities",
    },
    {
      id: 8,
      title: "Skills in Demand: What International Employers Look For",
      summary:
        "Discover the most sought-after skills in the global job market and how to develop them for better opportunities.",
      image: "/placeholder.svg?height=300&width=400",
      date: "December 30, 2024",
      category: "Skills Development",
      type: "blog",
      author: "Sunita Rai",
      readTime: "7 min read",
      slug: "skills-demand-international-employers",
    },
    // Duplicate items for infinite scroll effect
    {
      id: 9,
      title: "New Partnership with Leading UAE Construction Company",
      summary:
        "Rising Youths Overseas has signed a strategic partnership with Al-Futtaim Construction, opening 200+ new positions for skilled workers in Dubai and Abu Dhabi.",
      image: "/placeholder.svg?height=300&width=400",
      date: "January 15, 2025",
      category: "Partnership",
      type: "news",
      author: "Rising Youths Team",
      readTime: "3 min read",
      slug: "uae-partnership-construction",
    },
    {
      id: 10,
      title: "Top 10 Tips for Successful Overseas Employment",
      summary:
        "Essential advice for professionals seeking international career opportunities and how to prepare for success abroad.",
      image: "/placeholder.svg?height=300&width=400",
      date: "January 12, 2025",
      category: "Career Advice",
      type: "blog",
      author: "Rajesh Sharma",
      readTime: "5 min read",
      slug: "tips-successful-overseas-employment",
    },
  ]

  const handleManualNavigation = (direction: "prev" | "next") => {
    const cardWidth = 400
    if (direction === "next") {
      setCurrentTranslate((prev) => prev - cardWidth)
    } else {
      setCurrentTranslate((prev) => prev + cardWidth)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-business.png"
            alt="Business professionals silhouette with city skyline"
            className="w-full h-full object-cover"
          />
          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-white/30"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Where Careers <span className="text-green-600">Blossom</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-black font-medium">
              Your trusted partner for overseas employment opportunities. We help talented individuals find their dream
              careers abroad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center shadow-lg"
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* What We Serve Section */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Title */}
            <div className="lg:sticky lg:top-32">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                What We
                <br />
                <span className="text-green-600">Serve</span>
              </h2>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Comprehensive solutions designed to elevate your international career journey with professional
                excellence.
              </p>
            </div>

            {/* Right Column - Service Cards */}
            <div className="space-y-6">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Link
                    key={index}
                    href={service.href}
                    className={`block bg-gray-900 text-white rounded-2xl p-8 hover:scale-105 transition-all duration-500 cursor-pointer group ${
                      isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-full"
                    }`}
                    style={{
                      animationDelay: isVisible ? service.delay : "0ms",
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-600 p-3 rounded-xl group-hover:bg-green-500 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{service.description}</p>
                        <div className="flex items-center mt-4 text-green-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                          <span>Learn More</span>
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Recent Jobs Section */}
      <section ref={jobsRef} className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              RECENT <span className="text-green-600">JOBS</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Recent job listing available in Rising Youths Overseas Resources.
            </p>
            <p className="text-lg text-gray-500">
              Please contact our offices for more information regarding job details and quotas. Phone: +977-9823270812
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#011D5B] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Countries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <Link
                key={index}
                href={country.href}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  jobsVisible ? "animate-slide-in-up" : "opacity-0 translate-y-8"
                }`}
                style={{
                  animationDelay: jobsVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                {/* Country Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                  <img
                    src={country.image || "/placeholder.svg"}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback to a solid color background if image fails to load
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                      const parent = target.parentElement
                      if (parent) {
                        parent.style.background = "linear-gradient(135deg, #3B82F6, #1E40AF)"
                      }
                    }}
                  />

                  {/* Apply Button - positioned at bottom of image */}
                  <div className="absolute bottom-4 right-4 z-30">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Apply Now
                    </button>
                  </div>

                  {/* Country Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-20 z-20">
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

      {/* News & Blog Section */}
      <section ref={newsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              NEWS & <span className="text-red-600">BLOG</span>
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest developments, opportunities, success stories, and expert insights from Rising
              Youths Overseas.
            </p>
          </div>

          {/* Infinite Carousel Container */}
          <div className="relative overflow-hidden">
            {/* Navigation Buttons */}
            <button
              onClick={() => handleManualNavigation("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleManualNavigation("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Track */}
            <div
              className="overflow-hidden"
              onMouseEnter={() => setIsNewsHovered(true)}
              onMouseLeave={() => setIsNewsHovered(false)}
            >
              <div
                ref={newsCarouselRef}
                className="flex space-x-6 transition-transform duration-75 ease-linear"
                style={{ width: `${newsAndBlogItems.length * 400}px` }}
              >
                {newsAndBlogItems.map((item, index) => (
                  <Link
                    key={`${item.id}-${index}`}
                    href={`/blog/${item.slug}`}
                    className={`group flex-shrink-0 w-96 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                      newsVisible ? "animate-slide-in-up" : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      animationDelay: newsVisible ? `${(index % 8) * 150}ms` : "0ms",
                    }}
                  >
                    {/* Item Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110 transition-transform duration-700"></div>

                      {/* Type & Category Badges */}
                      <div className="absolute top-4 left-4 z-20 flex space-x-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            item.type === "news" ? "bg-red-600 text-white" : "bg-blue-600 text-white"
                          }`}
                        >
                          {item.type === "news" ? "NEWS" : "BLOG"}
                        </span>
                        <span className="bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {item.category}
                        </span>
                      </div>

                      {/* External Link Icon */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Item Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            <span>{item.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{item.readTime}</span>
                          </div>
                        </div>
                      </div>

                      <h3
                        className={`text-xl font-bold mb-3 transition-colors duration-300 line-clamp-2 ${
                          item.type === "news"
                            ? "text-gray-900 group-hover:text-red-600"
                            : "text-gray-900 group-hover:text-blue-600"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4">{item.summary}</p>

                      <div
                        className={`flex items-center font-semibold group-hover:translate-x-2 transition-transform duration-300 ${
                          item.type === "news" ? "text-red-600" : "text-blue-600"
                        }`}
                      >
                        <span className="text-sm">Read More</span>
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div
                      className={`absolute inset-0 border-2 border-transparent rounded-2xl transition-colors duration-300 ${
                        item.type === "news" ? "group-hover:border-red-400" : "group-hover:border-blue-400"
                      }`}
                    ></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              View All News & Blog <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#011D5B] mb-6">Why Choose Rising Youths Overseas?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#011D5B]">Licensed & Certified</h3>
                    <p className="text-gray-600">Fully licensed manpower agency with all necessary certifications.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#011D5B]">Expert Team</h3>
                    <p className="text-gray-600">Experienced professionals dedicated to your success.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#011D5B]">Global Network</h3>
                    <p className="text-gray-600">Strong connections with employers worldwide.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#011D5B]">End-to-End Support</h3>
                    <p className="text-gray-600">Complete assistance from application to placement.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-red-50 p-8 rounded-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#011D5B] mb-2">1000+</div>
                <div className="text-gray-600 mb-6">Successful Placements</div>
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600 mb-6">Partner Companies</div>
                <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Contact us today and take the first step towards your international career.</p>
          <Link
            href="/contact"
            className="bg-white text-[#011D5B] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
          >
            Contact Us Now <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
