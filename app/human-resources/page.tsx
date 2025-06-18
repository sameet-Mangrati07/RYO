import PageLayout from "@/components/PageLayout"
import { Users, Target, Award, Globe, CheckCircle, TrendingUp } from "lucide-react"

export default function HumanResources() {
  const services = [
    {
      title: "Talent Acquisition",
      description:
        "Comprehensive recruitment services to identify and attract the best candidates for international positions.",
      icon: Users,
      benefits: ["Skilled Workforce", "Quality Screening", "Fast Turnaround", "Global Reach"],
    },
    {
      title: "Skills Assessment",
      description:
        "Thorough evaluation of candidate skills, experience, and suitability for specific job requirements.",
      icon: Target,
      benefits: ["Technical Testing", "Behavioral Assessment", "Reference Checks", "Competency Mapping"],
    },
    {
      title: "Workforce Planning",
      description: "Strategic workforce planning to meet your organization's current and future staffing needs.",
      icon: TrendingUp,
      benefits: ["Demand Forecasting", "Resource Planning", "Succession Planning", "Cost Optimization"],
    },
    {
      title: "Compliance Management",
      description: "Ensuring all HR processes comply with local and international labor laws and regulations.",
      icon: Award,
      benefits: ["Legal Compliance", "Documentation", "Risk Management", "Audit Support"],
    },
  ]

  return (
    <PageLayout
      title="Human Resources"
      description="Professional HR services connecting talent with international opportunities and supporting organizational growth."
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#011D5B] to-[#0A2B6B] text-white p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Strategic Human Resources Solutions</h2>
          <p className="text-lg text-gray-200">
            Our HR services bridge the gap between talented professionals and international employers. We provide
            comprehensive human resource solutions that ensure the right fit for both candidates and organizations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
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
                    <h3 className="text-xl font-semibold text-[#011D5B] mb-3">{service.title}</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#011D5B] mb-2">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* For Employers Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-lg border border-green-200">
            <Globe className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold text-[#011D5B] mb-4">For Employers</h3>
            <p className="text-gray-700 mb-4">
              We help international employers find qualified, skilled professionals from Nepal who are ready to
              contribute to your organization's success.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Pre-screened candidates
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Skills verification
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Cultural orientation
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Ongoing support
              </li>
            </ul>
            <a
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-block"
            >
              Partner With Us
            </a>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-lg border border-red-200">
            <Users className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-2xl font-semibold text-[#011D5B] mb-4">For Job Seekers</h3>
            <p className="text-gray-700 mb-4">
              We connect talented professionals with international career opportunities that match their skills,
              experience, and career aspirations.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                Career counseling
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                Skills development
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                Interview preparation
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                Placement support
              </li>
            </ul>
            <a
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-block"
            >
              Find Opportunities
            </a>
          </div>
        </div>

        {/* Industry Expertise */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#011D5B] mb-6">Industry Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <Award className="w-12 h-12 text-blue-600 mx-auto" />
              </div>
              <h3 className="font-semibold text-[#011D5B] mb-2">Construction & Engineering</h3>
              <p className="text-gray-600 text-sm">
                Skilled workers, engineers, and project managers for construction projects worldwide.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <Users className="w-12 h-12 text-green-600 mx-auto" />
              </div>
              <h3 className="font-semibold text-[#011D5B] mb-2">Healthcare & Hospitality</h3>
              <p className="text-gray-600 text-sm">
                Healthcare professionals, hotel staff, and service industry workers.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-red-100 p-4 rounded-lg mb-4">
                <Globe className="w-12 h-12 text-red-600 mx-auto" />
              </div>
              <h3 className="font-semibold text-[#011D5B] mb-2">Manufacturing & Logistics</h3>
              <p className="text-gray-600 text-sm">
                Factory workers, quality controllers, and logistics professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-[#011D5B] to-[#0A2B6B] text-white p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Track Record</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">1000+</div>
              <div className="text-gray-200">Successful Placements</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-200">Partner Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-gray-200">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-200">Success Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-red-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Connect Talent with Opportunity?</h2>
          <p className="text-lg mb-6">
            Whether you're an employer looking for skilled workers or a professional seeking international
            opportunities, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#011D5B] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started
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
