import PageLayout from "@/components/PageLayout"
import { CheckCircle, Users, Globe, Award, ArrowRight } from "lucide-react"

export default function Consulting() {
  const services = [
    {
      title: "Career Assessment",
      description:
        "Comprehensive evaluation of skills, experience, and career goals to identify the best international opportunities.",
      icon: Users,
    },
    {
      title: "Market Analysis",
      description:
        "Detailed analysis of job markets in target countries, including salary expectations and growth prospects.",
      icon: Globe,
    },
    {
      title: "Documentation Guidance",
      description: "Expert assistance with preparing and organizing all necessary documents for overseas employment.",
      icon: Award,
    },
    {
      title: "Interview Preparation",
      description: "Comprehensive training and mock interviews to prepare candidates for employer interviews.",
      icon: CheckCircle,
    },
  ]

  return (
    <PageLayout
      title="Consulting Services"
      description="Expert guidance and consultation for your overseas career journey."
    >
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#011D5B] to-[#0A2B6B] text-white p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Professional Career Consulting</h2>
          <p className="text-lg text-gray-200">
            Our experienced consultants provide personalized guidance to help you navigate the complex process of
            securing overseas employment. We offer comprehensive consultation services tailored to your specific career
            goals and target destinations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-lg">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#011D5B] mb-3">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#011D5B] mb-6">Our Consulting Process</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-[#011D5B] mb-2">Initial Consultation</h3>
                <p className="text-gray-700">
                  Free initial consultation to understand your career goals, skills, and preferences.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-[#011D5B] mb-2">Skills Assessment</h3>
                <p className="text-gray-700">Comprehensive evaluation of your qualifications and experience.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-[#011D5B] mb-2">Opportunity Matching</h3>
                <p className="text-gray-700">Identification of suitable job opportunities based on your profile.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                4
              </div>
              <div>
                <h3 className="font-semibold text-[#011D5B] mb-2">Application Support</h3>
                <p className="text-gray-700">Assistance with application preparation and submission.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                5
              </div>
              <div>
                <h3 className="font-semibold text-[#011D5B] mb-2">Ongoing Support</h3>
                <p className="text-gray-700">Continuous guidance throughout the recruitment and placement process.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-red-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Consultation?</h2>
          <p className="text-lg mb-6">
            Book a free consultation session with our expert consultants and take the first step towards your
            international career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#011D5B] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Book Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+977-9823270812"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#011D5B] transition-colors duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
