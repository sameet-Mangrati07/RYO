import PageLayout from "@/components/PageLayout"
import { CheckCircle, Clock, ArrowRight, AlertCircle } from "lucide-react"

export default function Procedures() {
  const steps = [
    {
      step: 1,
      title: "Initial Registration",
      description: "Register with Rising Youths Overseas and submit your basic information and documents.",
      duration: "1-2 Days",
      requirements: [
        "Completed application form",
        "Passport copy",
        "Educational certificates",
        "Experience certificates",
      ],
    },
    {
      step: 2,
      title: "Document Verification",
      description: "Our team verifies all submitted documents and conducts initial screening.",
      duration: "3-5 Days",
      requirements: [
        "Original documents for verification",
        "Police clearance certificate",
        "Medical reports",
        "Passport-size photographs",
      ],
    },
    {
      step: 3,
      title: "Skills Assessment",
      description: "Comprehensive evaluation of your skills and suitability for available positions.",
      duration: "1-2 Days",
      requirements: [
        "Technical skills test",
        "Interview session",
        "Language proficiency test",
        "Practical demonstration (if applicable)",
      ],
    },
    {
      step: 4,
      title: "Job Matching",
      description: "We match your profile with suitable job opportunities from our partner companies.",
      duration: "1-2 Weeks",
      requirements: ["Updated CV/Resume", "Preference form", "Salary expectations", "Location preferences"],
    },
    {
      step: 5,
      title: "Employer Interview",
      description: "Interview with potential employers (may be conducted online or in-person).",
      duration: "1-2 Weeks",
      requirements: ["Professional attire", "Updated portfolio", "Reference contacts", "Interview preparation"],
    },
    {
      step: 6,
      title: "Job Offer & Contract",
      description: "Upon successful interview, receive job offer and employment contract.",
      duration: "3-7 Days",
      requirements: ["Contract review", "Terms negotiation", "Salary confirmation", "Job description acceptance"],
    },
    {
      step: 7,
      title: "Pre-Departure Process",
      description: "Complete all pre-departure formalities including training and documentation.",
      duration: "2-4 Weeks",
      requirements: ["Visa application", "Medical examination", "Training completion", "Travel arrangements"],
    },
    {
      step: 8,
      title: "Departure & Arrival",
      description: "Travel to destination country with our complete support and assistance.",
      duration: "1-2 Days",
      requirements: ["Flight tickets", "Travel insurance", "Emergency contacts", "Arrival coordination"],
    },
  ]

  return (
    <PageLayout
      title="Procedures"
      description="Step-by-step guide to our overseas employment process from registration to successful placement."
    >
      <div className="max-w-4xl mx-auto">
        {/* Overview */}
        <div className="bg-gradient-to-r from-[#011D5B] to-[#0A2B6B] text-white p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Process Overview</h2>
          <p className="text-lg text-gray-200 mb-4">
            Our systematic approach ensures a smooth and transparent process from initial registration to successful
            overseas placement. Each step is designed to maximize your chances of success while maintaining the highest
            standards of service.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400">8</div>
              <div className="text-sm text-gray-200">Simple Steps</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">4-8</div>
              <div className="text-sm text-gray-200">Weeks Timeline</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">95%</div>
              <div className="text-sm text-gray-200">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-[#011D5B]">{step.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1 md:mt-0">
                      <Clock className="w-4 h-4 mr-1" />
                      {step.duration}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{step.description}</p>
                  <div>
                    <h4 className="font-semibold text-[#011D5B] mb-2">Requirements:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {step.requirements.map((req, reqIndex) => (
                        <div key={reqIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {req}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-6">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-[#011D5B] mb-3">Important Notes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• All documents must be original and properly attested</li>
                <li>• Processing times may vary depending on destination country requirements</li>
                <li>• Medical examinations must be conducted at approved medical centers</li>
                <li>• Visa processing times depend on embassy schedules and requirements</li>
                <li>• Training attendance is mandatory for all selected candidates</li>
                <li>• All fees must be paid as per the agreed payment schedule</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Required Documents Checklist */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#011D5B] mb-6">Document Checklist</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-[#011D5B] mb-4">Personal Documents</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Valid Passport (minimum 6 months validity)
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Citizenship Certificate
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Birth Certificate
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Marriage Certificate (if applicable)
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Police Clearance Certificate
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#011D5B] mb-4">Professional Documents</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Educational Certificates
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Technical Training Certificates
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Work Experience Certificates
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Skills Certificates
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Medical Reports
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-red-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-6">
            Begin your overseas employment process today. Our team is ready to guide you through each step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#011D5B] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Start Registration
            </a>
            <a
              href="tel:+977-9823270812"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#011D5B] transition-colors duration-300"
            >
              Call for Guidance
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
