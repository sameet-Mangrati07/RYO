"use client"

import { useState } from "react"
import { Linkedin, Twitter, Mail, Phone } from "lucide-react"

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
    name: "Prasamsha Shrestha",
    role: "Chairman & Founder",
    company: "Rising Youths Overseas",
    bio: "Visionary leader with 15+ years of experience in international recruitment and manpower services. Dedicated to connecting talented professionals with global opportunities.",
    image: "/placeholder.svg?height=600&width=500",
    social: {
      linkedin: "https://linkedin.com/in/prasamsha",
      twitter: "https://twitter.com/prasamsha",
      email: "prasamsha@risingyouths.com.np",
      phone: "+977-9823270812",
    },
  },
  {
    id: "prabin",
    name: "Prabin",
    role: "Project Manager",
    company: "Rising Youths Overseas",
    bio: "Experienced project manager with 12+ years in coordinating international placement projects. Expert in managing complex recruitment processes and ensuring successful outcomes.",
    image: "/placeholder.svg?height=600&width=500",
    social: {
      linkedin: "https://linkedin.com/in/prabin",
      email: "prabin@risingyouths.com.np",
      phone: "+977-9823270813",
    },
  },
  {
    id: "priya",
    name: "Priya Thapa",
    role: "HR Manager",
    company: "Rising Youths Overseas",
    bio: "Human resources specialist with 10+ years of experience in talent acquisition and employee relations. Passionate about matching the right talent with the right opportunities.",
    image: "/placeholder.svg?height=600&width=500",
    social: {
      linkedin: "https://linkedin.com/in/priyathapa",
      email: "priya@risingyouths.com.np",
      phone: "+977-9823270814",
    },
  },
  {
    id: "amit",
    name: "Amit Gurung",
    role: "Operations Manager",
    company: "Rising Youths Overseas",
    bio: "Operations expert with 8+ years in streamlining processes and ensuring efficient service delivery. Focused on operational excellence and client satisfaction.",
    image: "/placeholder.svg?height=600&width=500",
    social: {
      linkedin: "https://linkedin.com/in/amitgurung",
      email: "amit@risingyouths.com.np",
      phone: "+977-9823270815",
    },
  },
  {
    id: "sunita",
    name: "Sunita Rai",
    role: "Training Coordinator",
    company: "Rising Youths Overseas",
    bio: "Training and development specialist with 12+ years of experience in preparing candidates for international employment. Expert in cultural orientation and skills development.",
    image: "/placeholder.svg?height=600&width=500",
    social: {
      linkedin: "https://linkedin.com/in/sunitarai",
      email: "sunita@risingyouths.com.np",
      phone: "+977-9823270816",
    },
  },
]

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(teamMembers[0])
  const [hoveredMember, setHoveredMember] = useState<string | null>(null)

  const handleMemberSelect = (member: TeamMember) => {
    setSelectedMember(member)
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who make Rising Youths Overseas a trusted partner in international
              recruitment.
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Left Side - Team Names */}
            <div className="lg:col-span-2 bg-gray-50 p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 uppercase tracking-wide">Team Members</h3>
              <div className="space-y-1">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className={`group cursor-pointer transition-all duration-300 ${
                      selectedMember?.id === member.id ? "bg-white shadow-md" : "hover:bg-white hover:shadow-sm"
                    }`}
                    onMouseEnter={() => {
                      setHoveredMember(member.id)
                      handleMemberSelect(member)
                    }}
                    onMouseLeave={() => setHoveredMember(null)}
                    onClick={() => handleMemberSelect(member)}
                  >
                    <div className="p-4 border-l-4 border-transparent group-hover:border-green-500 transition-colors duration-300">
                      <div
                        className={`font-bold text-lg transition-colors duration-300 ${
                          selectedMember?.id === member.id
                            ? "text-green-600"
                            : "text-gray-900 group-hover:text-green-600"
                        }`}
                      >
                        {member.name}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Photo and Info */}
            <div className="lg:col-span-3 p-8 flex items-center">
              {selectedMember && (
                <div className="w-full">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Photo */}
                    <div className="relative">
                      <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-lg">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100"></div>
                        <div className="absolute inset-4 bg-gray-300 rounded-xl flex items-center justify-center">
                          <div className="text-6xl font-bold text-gray-600">
                            {selectedMember.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedMember.name}</h3>
                        <p className="text-lg text-green-600 font-semibold mb-1">{selectedMember.role}</p>
                        <p className="text-gray-600">{selectedMember.company}</p>
                      </div>

                      <p className="text-gray-700 leading-relaxed">{selectedMember.bio}</p>

                      {/* Social Links */}
                      <div className="flex space-x-4">
                        {selectedMember.social.linkedin && (
                          <a
                            href={selectedMember.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors duration-300 group"
                          >
                            <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
                          </a>
                        )}
                        {selectedMember.social.twitter && (
                          <a
                            href={selectedMember.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors duration-300 group"
                          >
                            <Twitter className="w-5 h-5 text-gray-600 group-hover:text-blue-400" />
                          </a>
                        )}
                        {selectedMember.social.email && (
                          <a
                            href={`mailto:${selectedMember.social.email}`}
                            className="p-2 bg-gray-100 hover:bg-green-100 rounded-lg transition-colors duration-300 group"
                          >
                            <Mail className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
                          </a>
                        )}
                        {selectedMember.social.phone && (
                          <a
                            href={`tel:${selectedMember.social.phone}`}
                            className="p-2 bg-gray-100 hover:bg-green-100 rounded-lg transition-colors duration-300 group"
                          >
                            <Phone className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Mobile Dropdown */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
              <div className="p-4 bg-gray-50 border-b">
                <label htmlFor="team-select" className="block text-sm font-semibold text-gray-900 mb-2">
                  Select Team Member
                </label>
                <select
                  id="team-select"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={selectedMember?.id || ""}
                  onChange={(e) => {
                    const member = teamMembers.find((m) => m.id === e.target.value)
                    if (member) handleMemberSelect(member)
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

            {/* Mobile Team Member Card */}
            {selectedMember && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                      <div className="text-3xl font-bold text-gray-600">
                        {selectedMember.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedMember.name}</h3>
                    <p className="text-lg text-green-600 font-semibold mb-1">{selectedMember.role}</p>
                    <p className="text-gray-600">{selectedMember.company}</p>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 text-center">{selectedMember.bio}</p>

                  {/* Mobile Social Links */}
                  <div className="flex justify-center space-x-4">
                    {selectedMember.social.linkedin && (
                      <a
                        href={selectedMember.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors duration-300 group"
                      >
                        <Linkedin className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                      </a>
                    )}
                    {selectedMember.social.twitter && (
                      <a
                        href={selectedMember.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors duration-300 group"
                      >
                        <Twitter className="w-6 h-6 text-gray-600 group-hover:text-blue-400" />
                      </a>
                    )}
                    {selectedMember.social.email && (
                      <a
                        href={`mailto:${selectedMember.social.email}`}
                        className="p-3 bg-gray-100 hover:bg-green-100 rounded-lg transition-colors duration-300 group"
                      >
                        <Mail className="w-6 h-6 text-gray-600 group-hover:text-green-600" />
                      </a>
                    )}
                    {selectedMember.social.phone && (
                      <a
                        href={`tel:${selectedMember.social.phone}`}
                        className="p-3 bg-gray-100 hover:bg-green-100 rounded-lg transition-colors duration-300 group"
                      >
                        <Phone className="w-6 h-6 text-gray-600 group-hover:text-green-600" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
