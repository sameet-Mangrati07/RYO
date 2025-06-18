import PageLayout from "@/components/PageLayout"
import { Plane, FileText, Shield, Clock, CheckCircle, MapPin } from "lucide-react"

export default function Travel() {
  const services = [
    {
      title: "Visa Processing",
      description: "Complete visa application assistance including document preparation and embassy coordination.",
      icon: FileText,
      features: ["Document Review", "Application Submission", "Embassy Liaison", "Status Tracking"],
    },
    {
      title: "Flight Booking",
      description: "Best fare flight bookings with flexible options and travel insurance coverage.",
      icon: Plane,
      features: ["Competitive Rates", "Flexible Booking", "Travel Insurance", "24/7 Support"],
    },
    {
      title: "Travel Insurance",
      description: "Comprehensive travel and health insurance coverage for peace of mind during your journey.",
      icon: Shield,
      features: ["Health Coverage", "Travel Protection", "Emergency Support", "Global Coverage"],
    },
    {
      title: "Airport Assistance",
      description: "Complete airport assistance from departure to arrival at your destination.",
      icon: MapPin,
      features: ["Check-in Support", "Immigration Help", "Baggage Assistance", "Arrival Coordination"],
    },
  ]

  return (
    <PageLayout
      title="Travel Management"
      description="Complete travel arrangements and documentation support for your overseas journey."
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#011D5B] to-[#0A2B6B] text-white p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Comprehensive Travel Solutions</h2>
          <p className="text-lg text-gray-200">
            We handle all aspects of your travel arrangements, from visa processing to airport assistance. Our
            experienced team ensures a smooth and hassle-free journey to your destination country.
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
                  <h4 className="font-semibold text-[#011D5B] mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process Timeline */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#011D5B] mb-6">Travel Process Timeline</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-[#011D5B] mb-2">Document Collection (Week 1-2)</h3>
                <p className="text-gray-700">
                  Gather all required documents including passport, certificates, and medical reports.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-[#011D5B] mb-2">Visa Application (Week 2-4)</h3>
                <p className="text-gray-700">
                  Submit visa application with complete documentation to the respective embassy.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-[#011D5B] mb-2">Medical & Insurance (Week 3-4)</h3>
                <p className="text-gray-700">
                  Complete medical examinations and arrange comprehensive travel insurance.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                4
              </div>
              <div>
                <h3 className="font-semibold text-[#011D5B] mb-2">Flight Booking (Week 4-5)</h3>
                <p className="text-gray-700">
                  Book flights and arrange airport assistance for smooth travel experience.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                5
              </div>
              <div>
                <h3 className="font-semibold text-[#011D5B] mb-2">Pre-Departure (Week 5-6)</h3>
                <p className="text-gray-700">Final briefing, document verification, and travel preparation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-semibold text-[#011D5B] mb-4">Required Documents</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Valid Passport (min. 6 months validity)
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Educational Certificates
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Experience Certificates
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Medical Reports
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Police Clearance Certificate
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Passport Size Photos
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border border-red-200">
            <h3 className="text-xl font-semibold text-[#011D5B] mb-4">Travel Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <Clock className="w-4 h-4 text-red-500 mr-2" />
                Apply for visa 4-6 weeks in advance
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 text-red-500 mr-2" />
                Keep multiple copies of documents
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 text-red-500 mr-2" />
                Carry emergency contact information
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 text-red-500 mr-2" />
                Pack essential medicines
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 text-red-500 mr-2" />
                Inform bank about travel plans
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 text-red-500 mr-2" />
                Download offline maps and translation apps
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-red-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Begin Your Travel Journey?</h2>
          <p className="text-lg mb-6">
            Let us handle all your travel arrangements while you focus on preparing for your new career opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#011D5B] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Start Travel Process
            </a>
            <a
              href="tel:+977-9823270812"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#011D5B] transition-colors duration-300"
            >
              Call for Assistance
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
