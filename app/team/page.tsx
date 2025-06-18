"use client"

import { useState } from "react"
import { Linkedin, Twitter, Mail, Phone } from "lucide-react"
import Header from "@/components/Header"

interface TeamMember {
  id: string
  name: string
  role: string
  company: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
    email?: string
    phone?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    id: "prasamsha",
    name: "PRASAMSHA SHRESTHA",
    role: "Chairman & Founder",
    company: "Rising Youths Overseas",
    bio: "Visionary leader with 15+ years of experience in international recruitment and manpower services. Dedicated to connecting talented professionals with global opportunities and fostering career growth on an international scale.",
    image: "/team-photos/prasamsha.png",
    social: {
      linkedin: "https://linkedin.com/in/prasamsha",
      twitter: "https://twitter.com/prasamsha",
      email: "prasamsha@risingyouths.com.np",
      phone: "+977-9823270812",
    },
  },
  {
    id: "prabin",
    name: "PRABIN",
    role: "Project Manager",
    company: "Rising Youths Overseas",
    bio: "Experienced project manager with 12+ years in coordinating international placement projects. Expert in managing complex recruitment processes and ensuring successful outcomes for both candidates and employers.",
    image: "/team-photos/prabin.png",
    social: {
      linkedin: "https://linkedin.com/in/prabin",
      email: "prabin@risingyouths.com.np",
      phone: "+977-9823270813",
    },
  },
  {
    id: "priya",
    name: "PRIYA THAPA",
    role: "HR Manager",
    company: "Rising Youths Overseas",
    bio: "Human resources specialist with 10+ years of experience in talent acquisition and employee relations. Passionate about matching the right talent with the right opportunities and building lasting professional relationships.",
    image: "/team-photos/priya.png",
    social: {
      linkedin: "https://linkedin.com/in/priyathapa",
      twitter: "https://twitter.com/priyathapa",
      email: "priya@risingyouths.com.np",
      phone: "+977-9823270814",
    },
  },
  {
    id: "amit",
    name: "AMIT GURUNG",
    role: "Operations Manager",
    company: "Rising Youths Overseas",
    bio: "Operations expert with 8+ years in streamlining processes and ensuring efficient service delivery. Focused on operational excellence, client satisfaction, and continuous improvement of our service standards.",
    image: "/team-photos/amit.png",
    social: {
      linkedin: "https://linkedin.com/in/amitgurung",
      email: "amit@risingyouths.com.np",
      phone: "+977-9823270815",
    },
  },
  {
    id: "sunita",
    name: "SUNITA RAI",
    role: "Training Coordinator",
    company: "Rising Youths Overseas",
    bio: "Training and development specialist with 12+ years of experience in preparing candidates for international employment. Expert in cultural orientation, skills development, and pre-departure training programs.",
    image: "/team-photos/sunita.png",
    social: {
      linkedin: "https://linkedin.com/in/sunitarai",
      twitter: "https://twitter.com/sunitarai",
      email: "sunita@risingyouths.com.np",
      phone: "+977-9823270816",
    },
  },
]

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(teamMembers[0])
  const [hoveredMember, setHoveredMember] = useState<string | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleMemberHover = (member: TeamMember) => {
    if (selectedMember.id === member.id) return

    setIsTransitioning(true)
    setHoveredMember(member.id)

    setTimeout(() => {
      setSelectedMember(member)
      setIsTransitioning(false)
    }, 200)
  }

  const handleMemberLeave = () => {
    setHoveredMember(null)
  }

  const handleMobileSelect = (member: TeamMember) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setSelectedMember(member)
      setIsTransitioning(false)
    }, 200)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-6 animate-fade-in-up">
              OUR <span className="text-green-600 font-normal">TEAM</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed">
              Meet the dedicated professionals who make Rising Youths Overseas a trusted partner in international
              recruitment and career development.
            </p>
          </div>
        </div>
      </section>
      {/* Main Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Mobile Dropdown */}
          <div className="lg:hidden mb-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <select
                className="w-full p-4 text-gray-900 font-medium bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                value={selectedMember.id}
                onChange={(e) => {
                  const member = teamMembers.find((m) => m.id === e.target.value)
                  if (member) handleMobileSelect(member)
                }}
              >
                {teamMembers.map((member) => (
                  <option key={member.id} value={member.id}>
                    {member.name} - {member.role}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-5 h-[650px]">
                {/* Left Side - Team Names */}
                <div className="col-span-2 bg-gray-50 border-r border-gray-200">
                  <div className="h-full">
                    {teamMembers.map((member, index) => (
                      <div
                        key={member.id}
                        className={`relative border-b border-gray-200 last:border-b-0 transition-all duration-300 cursor-pointer group ${
                          selectedMember.id === member.id
                            ? "bg-white shadow-lg transform scale-[1.02] z-10"
                            : "hover:bg-white hover:shadow-md"
                        }`}
                        style={{ height: `${100 / teamMembers.length}%` }}
                        onMouseEnter={() => handleMemberHover(member)}
                        onMouseLeave={handleMemberLeave}
                      >
                        {/* Hover Indicator Line */}
                        <div
                          className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-blue-500 transform transition-all duration-300 ${
                            selectedMember.id === member.id
                              ? "scale-y-100 opacity-100"
                              : hoveredMember === member.id
                                ? "scale-y-75 opacity-75"
                                : "scale-y-0 opacity-0"
                          }`}
                        ></div>

                        <div className="px-8 py-6 h-full flex flex-col justify-center relative">
                          {/* Member Name */}
                          <div
                            className={`text-lg font-bold tracking-wide transition-all duration-300 transform ${
                              selectedMember.id === member.id
                                ? "text-gray-900 scale-105"
                                : hoveredMember === member.id
                                  ? "text-gray-800 scale-102"
                                  : "text-gray-600 group-hover:text-gray-800"
                            }`}
                          >
                            {member.name}
                          </div>

                          {/* Role and Social Icons - Show for selected member */}
                          {selectedMember.id === member.id && (
                            <div className="mt-4 animate-slide-in-left">
                              <div className="text-sm text-gray-700 font-medium mb-1">{member.role}</div>
                              <div className="text-xs text-gray-500 mb-4">{member.company}</div>
                              <div className="flex space-x-2">
                                {member.social.linkedin && (
                                  <a
                                    href={member.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-100 hover:bg-blue-100 rounded-lg transition-all duration-300 group/icon hover:scale-110 hover:shadow-md"
                                  >
                                    <Linkedin className="w-4 h-4 text-gray-600 group-hover/icon:text-blue-600" />
                                  </a>
                                )}
                                {member.social.twitter && (
                                  <a
                                    href={member.social.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-100 hover:bg-blue-100 rounded-lg transition-all duration-300 group/icon hover:scale-110 hover:shadow-md"
                                  >
                                    <Twitter className="w-4 h-4 text-gray-600 group-hover/icon:text-blue-500" />
                                  </a>
                                )}
                                {member.social.email && (
                                  <a
                                    href={`mailto:${member.social.email}`}
                                    className="p-2 bg-gray-100 hover:bg-green-100 rounded-lg transition-all duration-300 group/icon hover:scale-110 hover:shadow-md"
                                  >
                                    <Mail className="w-4 h-4 text-gray-600 group-hover/icon:text-green-600" />
                                  </a>
                                )}
                                {member.social.phone && (
                                  <a
                                    href={`tel:${member.social.phone}`}
                                    className="p-2 bg-gray-100 hover:bg-green-100 rounded-lg transition-all duration-300 group/icon hover:scale-110 hover:shadow-md"
                                  >
                                    <Phone className="w-4 h-4 text-gray-600 group-hover/icon:text-green-600" />
                                  </a>
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Animated Background Gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-0 transition-opacity duration-300 ${
                            hoveredMember === member.id ? "opacity-30" : ""
                          }`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Photo and Bio */}
                <div className="col-span-3 bg-white relative overflow-hidden">
                  <div className="h-full flex items-center justify-center p-8 relative z-10">
                    <div
                      className={`w-full max-w-lg transition-all duration-500 transform ${
                        isTransitioning ? "opacity-0 scale-95 translate-y-4" : "opacity-100 scale-100 translate-y-0"
                      }`}
                    >
                      {/* Photo Container - Rectangular with full coverage */}
                      <div className="relative mb-8 group">
                        <div className="relative w-full h-80 overflow-hidden shadow-2xl border-2 border-gray-200 rounded-lg">
                          <img
                            src={selectedMember.image || "/placeholder.svg"}
                            alt={selectedMember.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </div>

                      {/* Member Information */}
                      <div className="text-center space-y-4">
                        <h3 className="text-3xl font-bold text-gray-900 animate-fade-in tracking-tight">
                          {selectedMember.name}
                        </h3>
                        <div className="animate-fade-in-delayed">
                          <p className="text-lg text-green-600 font-semibold">{selectedMember.role}</p>
                          <p className="text-sm text-gray-500 font-medium">{selectedMember.company}</p>
                        </div>
                        <p className="text-gray-600 leading-relaxed animate-fade-in-delayed-2 text-sm">
                          {selectedMember.bio}
                        </p>

                        {/* Social Links */}
                        <div className="flex justify-center space-x-4 pt-4 animate-fade-in-delayed-3">
                          {selectedMember.social.linkedin && (
                            <a
                              href={selectedMember.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-gray-100 hover:bg-blue-100 rounded-xl transition-all duration-300 group/social hover:scale-110 hover:shadow-lg"
                            >
                              <Linkedin className="w-5 h-5 text-gray-600 group-hover/social:text-blue-600" />
                            </a>
                          )}
                          {selectedMember.social.twitter && (
                            <a
                              href={selectedMember.social.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-gray-100 hover:bg-blue-100 rounded-xl transition-all duration-300 group/social hover:scale-110 hover:shadow-lg"
                            >
                              <Twitter className="w-5 h-5 text-gray-600 group-hover/social:text-blue-500" />
                            </a>
                          )}
                          {selectedMember.social.email && (
                            <a
                              href={`mailto:${selectedMember.social.email}`}
                              className="p-3 bg-gray-100 hover:bg-green-100 rounded-xl transition-all duration-300 group/social hover:scale-110 hover:shadow-lg"
                            >
                              <Mail className="w-5 h-5 text-gray-600 group-hover/social:text-green-600" />
                            </a>
                          )}
                          {selectedMember.social.phone && (
                            <a
                              href={`tel:${selectedMember.social.phone}`}
                              className="p-3 bg-gray-100 hover:bg-green-100 rounded-xl transition-all duration-300 group/social hover:scale-110 hover:shadow-lg"
                            >
                              <Phone className="w-5 h-5 text-gray-600 group-hover/social:text-green-600" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div
              className={`bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-500 ${
                isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              {/* Mobile Photo - Rectangular */}
              <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden border-2 border-gray-200">
                <img
                  src={selectedMember.image || "/placeholder.svg"}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Mobile Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedMember.name}</h3>
                <p className="text-lg text-green-600 font-semibold mb-1">{selectedMember.role}</p>
                <p className="text-sm text-gray-500 font-medium mb-4">{selectedMember.company}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{selectedMember.bio}</p>

                {/* Mobile Social Links */}
                <div className="flex justify-center space-x-4">
                  {selectedMember.social.linkedin && (
                    <a
                      href={selectedMember.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 hover:bg-blue-100 rounded-xl transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-600" />
                    </a>
                  )}
                  {selectedMember.social.twitter && (
                    <a
                      href={selectedMember.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 hover:bg-blue-100 rounded-xl transition-all duration-300 hover:scale-110"
                    >
                      <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-500" />
                    </a>
                  )}
                  {selectedMember.social.email && (
                    <a
                      href={`mailto:${selectedMember.social.email}`}
                      className="p-3 bg-gray-100 hover:bg-green-100 rounded-xl transition-all duration-300 hover:scale-110"
                    >
                      <Mail className="w-6 h-6 text-gray-600 hover:text-green-600" />
                    </a>
                  )}
                  {selectedMember.social.phone && (
                    <a
                      href={`tel:${selectedMember.social.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 hover:bg-green-100 rounded-xl transition-all duration-300 hover:scale-110"
                    >
                      <Phone className="w-6 h-6 text-gray-600 hover:text-green-600" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Team Statistics */}
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years Experience", color: "text-green-600", delay: "0ms" },
              { number: "1000+", label: "Successful Placements", color: "text-blue-600", delay: "100ms" },
              { number: "50+", label: "Partner Companies", color: "text-purple-600", delay: "200ms" },
              { number: "15+", label: "Countries", color: "text-red-600", delay: "300ms" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: stat.delay }}
              >
                <div className={`text-3xl font-bold ${stat.color} mb-2 animate-count-up`}>{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
