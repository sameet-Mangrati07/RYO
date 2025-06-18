import PageLayout from "@/components/PageLayout"
import { Target, Eye, Heart, Users } from "lucide-react"

export default function About() {
  return (
    <PageLayout
      title="About Us"
      description="Learn more about Rising Youths Overseas and our commitment to connecting talent with global opportunities."
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg border-l-4 border-green-500">
            <Target className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-[#011D5B] mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To provide comprehensive manpower services that connect skilled professionals with international
              employment opportunities, ensuring mutual success for candidates and employers.
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border-l-4 border-red-500">
            <Eye className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-[#011D5B] mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be the leading manpower agency in Nepal, recognized for our integrity, professionalism, and commitment
              to helping careers blossom globally.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#011D5B] mb-6 flex items-center">
            <Heart className="w-8 h-8 text-red-500 mr-3" />
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-[#011D5B] mb-2">Integrity</h4>
              <p className="text-gray-700 text-sm">
                We maintain the highest ethical standards in all our operations and dealings.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#011D5B] mb-2">Excellence</h4>
              <p className="text-gray-700 text-sm">
                We strive for excellence in every service we provide to our clients.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#011D5B] mb-2">Transparency</h4>
              <p className="text-gray-700 text-sm">We believe in clear, honest communication throughout the process.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#011D5B] mb-2">Support</h4>
              <p className="text-gray-700 text-sm">
                We provide comprehensive support from application to successful placement.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-[#011D5B] mb-4 flex items-center">
            <Users className="w-8 h-8 text-green-500 mr-3" />
            About Rising Youths Overseas
          </h2>
          <p className="text-gray-700 mb-4">
            Established in 2025, Rising Youths Overseas Pvt. Ltd. is a licensed manpower agency based in Kathmandu,
            Nepal. We specialize in connecting skilled professionals with international employment opportunities across
            various industries and sectors.
          </p>
          <p className="text-gray-700 mb-4">
            Our comprehensive services include recruitment, training, orientation, travel management, and ongoing
            support for both candidates and employers. We have built strong relationships with reputable companies
            worldwide, ensuring quality placements that benefit all parties involved.
          </p>
          <p className="text-gray-700 mb-4">
            With our experienced team and commitment to excellence, we have successfully placed hundreds of
            professionals in various countries, helping them achieve their career goals while meeting the staffing needs
            of our international partners.
          </p>
          <p className="text-gray-700">
            At Rising Youths Overseas, we don't just find jobs – we build careers and create opportunities for
            professional growth on a global scale.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
