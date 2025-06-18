import PageLayout from "@/components/PageLayout"
import { BookOpen, Users, Globe, Award, Clock, CheckCircle } from "lucide-react"

export default function Training() {
  const programs = [
    {
      title: "Pre-Departure Orientation",
      duration: "3-5 Days",
      description:
        "Comprehensive orientation covering cultural adaptation, workplace etiquette, and basic language skills.",
      icon: Globe,
      topics: ["Cultural Awareness", "Workplace Ethics", "Basic Language", "Legal Rights"],
    },
    {
      title: "Technical Skills Training",
      duration: "2-4 Weeks",
      description: "Industry-specific technical training to enhance job-relevant skills and certifications.",
      icon: Award,
      topics: ["Industry Standards", "Safety Protocols", "Equipment Handling", "Quality Control"],
    },
    {
      title: "Language Training",
      duration: "4-8 Weeks",
      description: "Intensive language courses for better communication in the destination country.",
      icon: BookOpen,
      topics: ["Conversational Skills", "Professional Vocabulary", "Written Communication", "Cultural Context"],
    },
    {
      title: "Soft Skills Development",
      duration: "1-2 Weeks",
      description: "Essential soft skills training for professional success in international environments.",
      icon: Users,
      topics: ["Communication", "Teamwork", "Problem Solving", "Leadership"],
    },
  ]

  return (
    <PageLayout
      title="Training & Orientation"
      description="Comprehensive training programs to prepare you for success in international work environments."
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#011D5B] to-[#0A2B6B] text-white p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Professional Training Programs</h2>
          <p className="text-lg text-gray-200">
            Our comprehensive training and orientation programs are designed to prepare you for success in international
            work environments. We provide both technical and soft skills training to ensure you're fully prepared for
            your overseas career.
          </p>
        </div>

        {/* Training Programs */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => {
            const IconComponent = program.icon
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-lg">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-[#011D5B]">{program.title}</h3>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {program.duration}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{program.description}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#011D5B] mb-2">Key Topics:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Training Facilities */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#011D5B] mb-6">Our Training Facilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <BookOpen className="w-12 h-12 text-green-600 mx-auto" />
              </div>
              <h3 className="font-semibold text-[#011D5B] mb-2">Modern Classrooms</h3>
              <p className="text-gray-600 text-sm">
                Well-equipped classrooms with audio-visual facilities for effective learning.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 p-4 rounded-lg mb-4">
                <Users className="w-12 h-12 text-red-600 mx-auto" />
              </div>
              <h3 className="font-semibold text-[#011D5B] mb-2">Expert Trainers</h3>
              <p className="text-gray-600 text-sm">
                Experienced trainers with international work experience and expertise.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <Award className="w-12 h-12 text-blue-600 mx-auto" />
              </div>
              <h3 className="font-semibold text-[#011D5B] mb-2">Certification</h3>
              <p className="text-gray-600 text-sm">
                Recognized certificates upon successful completion of training programs.
              </p>
            </div>
          </div>
        </div>

        {/* Training Schedule */}
        <div className="bg-gradient-to-r from-green-50 to-red-50 p-8 rounded-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold text-[#011D5B] mb-6">Training Schedule & Enrollment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-[#011D5B] mb-4">Upcoming Batches</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-[#011D5B]">Pre-Departure Orientation</span>
                    <span className="text-sm text-green-600">Starting Jan 15</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-[#011D5B]">Language Training (English)</span>
                    <span className="text-sm text-green-600">Starting Jan 20</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-[#011D5B]">Technical Skills (Construction)</span>
                    <span className="text-sm text-green-600">Starting Feb 1</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[#011D5B] mb-4">Enrollment Information</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Training Hours:</strong> Monday to Friday, 9:00 AM - 4:00 PM
                </p>
                <p>
                  <strong>Location:</strong> Rising Youths Training Center, Kathmandu
                </p>
                <p>
                  <strong>Requirements:</strong> Valid passport and job offer letter
                </p>
                <p>
                  <strong>Materials:</strong> All training materials provided
                </p>
                <p>
                  <strong>Certification:</strong> Certificate issued upon completion
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#011D5B] to-[#0A2B6B] text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Enroll in Our Training Programs</h2>
          <p className="text-lg mb-6">
            Prepare yourself for international success with our comprehensive training programs. Contact us to learn
            more about enrollment and schedules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Enroll Now
            </a>
            <a
              href="tel:+977-9823270812"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Call for Info
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
