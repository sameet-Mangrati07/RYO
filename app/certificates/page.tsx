import PageLayout from "@/components/PageLayout"
import { Award, Shield, CheckCircle, FileText } from "lucide-react"

export default function Certificates() {
  const certificates = [
    {
      title: "Department of Foreign Employment License",
      number: "License No: 1234/2025",
      issuer: "Government of Nepal",
      validUntil: "2028",
      icon: Shield,
    },
    {
      title: "ISO 9001:2015 Certification",
      number: "Certificate No: ISO-9001-2025",
      issuer: "International Organization for Standardization",
      validUntil: "2027",
      icon: Award,
    },
    {
      title: "Nepal Association of Foreign Employment Agencies",
      number: "Member No: NAFEA-2025-001",
      issuer: "NAFEA",
      validUntil: "Active Member",
      icon: CheckCircle,
    },
    {
      title: "Business Registration Certificate",
      number: "Registration No: 12345-2025",
      issuer: "Office of Company Registrar",
      validUntil: "Permanent",
      icon: FileText,
    },
  ]

  return (
    <PageLayout
      title="License & Certificates"
      description="Our official licenses and certifications that demonstrate our commitment to legal and ethical practices."
    >
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {certificates.map((cert, index) => {
          const IconComponent = cert.icon
          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-lg">
                  <IconComponent className="w-8 h-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#011D5B] mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{cert.number}</p>
                  <p className="text-sm text-gray-600 mb-1">Issued by: {cert.issuer}</p>
                  <p className="text-sm text-green-600 font-medium">Valid until: {cert.validUntil}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-gradient-to-r from-green-50 to-red-50 p-8 rounded-lg border border-gray-200">
        <h2 className="text-2xl font-semibold text-[#011D5B] mb-4">Our Commitment to Compliance</h2>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            Rising Youths Overseas Pvt. Ltd. is fully licensed and certified to operate as a manpower agency in Nepal.
            We maintain all necessary licenses and certifications to ensure that our operations are legal, ethical, and
            in compliance with both Nepali and international regulations.
          </p>
          <p className="text-gray-700 mb-4">Our certifications include:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Valid license from the Department of Foreign Employment, Government of Nepal</li>
            <li>ISO 9001:2015 certification for quality management systems</li>
            <li>Active membership in the Nepal Association of Foreign Employment Agencies (NAFEA)</li>
            <li>Proper business registration and tax compliance</li>
            <li>Insurance coverage for our operations and client protection</li>
          </ul>
          <p className="text-gray-700">
            We regularly renew our licenses and certifications to ensure continuous compliance with evolving regulations
            and industry standards. This commitment to legal and ethical practices is fundamental to our mission of
            providing trustworthy manpower services.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-[#011D5B] text-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Verification</h3>
        <p className="mb-4">
          You can verify our licenses and certifications through the respective issuing authorities. We encourage all
          clients to verify our credentials for their peace of mind.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://dofe.gov.np"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300 text-center"
          >
            Verify DOFE License
          </a>
          <a
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300 text-center"
          >
            Contact for Details
          </a>
        </div>
      </div>
    </PageLayout>
  )
}
