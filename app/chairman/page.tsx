import PageLayout from "@/components/PageLayout"
import Image from "next/image"
import { Quote, Target, Users, Heart } from "lucide-react"

export default function Chairman() {
  return (
    <PageLayout
      title="Message from Chairman"
      description="A personal message from our leadership about our vision and commitment to excellence"
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Chairman Photo */}
              <div className="lg:col-span-2">
                <div className="relative">
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-rose-400/20 rounded-3xl transform rotate-3"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-blue-400/20 to-purple-400/20 rounded-3xl transform -rotate-3"></div>

                  {/* Main photo container */}
                  <div className="relative bg-white rounded-3xl shadow-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
                    <div className="relative">
                      {/* Glowing border effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 rounded-2xl blur-sm opacity-75"></div>
                      <div className="relative w-64 h-80 mx-auto rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                        <Image
                          src="/chairman.png"
                          alt="Chairman - Rising Youths Overseas"
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
                        Ms. Prasamsha Shrestha
                      </h3>
                      <p className="text-emerald-600 font-semibold text-lg">Chairman & Founder</p>
                      <p className="text-sm text-gray-500 mt-2 font-medium">Rising Youths Overseas Pvt. Ltd.</p>

                      {/* Achievement badges */}
                      <div className="flex justify-center space-x-2 mt-4">
                        <div className="bg-gradient-to-r from-emerald-100 to-emerald-200 px-3 py-1 rounded-full">
                          <span className="text-xs font-semibold text-emerald-700">Visionary Leader</span>
                        </div>
                        <div className="bg-gradient-to-r from-blue-100 to-blue-200 px-3 py-1 rounded-full">
                          <span className="text-xs font-semibold text-blue-700">Industry Expert</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-3 space-y-8">
                {/* Quote Section */}
                <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-br-3xl opacity-10"></div>
                  <Quote className="w-12 h-12 text-emerald-500 mb-6 relative z-10" />

                  <blockquote className="text-lg leading-relaxed text-gray-700 mb-6 relative z-10">
                    "At Rising Youths Overseas, we believe that every individual deserves the opportunity to pursue
                    their dreams on a global stage. Our commitment goes beyond just placement – we nurture careers,
                    build futures, and create lasting partnerships that benefit both our candidates and our
                    international partners."
                  </blockquote>

                  <div className="text-right relative z-10">
                    <div className="font-semibold text-emerald-600 text-lg">- Ms. Prasamsha Shrestha</div>
                    <div className="text-sm text-gray-500">Chairman & Founder</div>
                  </div>
                </div>

                {/* Vision Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow duration-300">
                    <Target className="w-8 h-8 text-emerald-600 mb-4" />
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Vision</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To create pathways for our youth to flourish on the global stage while maintaining their cultural
                      values and professional integrity.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
                    <Heart className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Commitment</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Maintaining the highest standards of service, ensuring transparency, and providing comprehensive
                      support throughout the employment journey.
                    </p>
                  </div>
                </div>

                {/* Detailed Message */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                    <Users className="w-8 h-8 text-emerald-500 mr-3" />A Message from Leadership
                  </h3>

                  <div className="prose prose-lg max-w-none space-y-4 text-gray-700">
                    <p>
                      Since our establishment in 2025, Rising Youths Overseas has been dedicated to bridging the gap
                      between talented Nepalese youth and international employment opportunities. We envision a world
                      where geographical boundaries do not limit career aspirations.
                    </p>

                    <p>
                      Our comprehensive approach includes skill development, cultural orientation, and ongoing support
                      to ensure our candidates not only secure employment but excel in their chosen fields. We are proud
                      of our team's dedication and the trust our clients place in us.
                    </p>

                    <p>
                      As we continue to grow and expand our services, our mission remains unchanged: to be the most
                      trusted partner in your journey toward international career success. We are here to support you
                      every step of the way, because your success is our success.
                    </p>
                  </div>
                </div>

                {/* Achievement Highlights */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-8 text-white">
                  <h3 className="text-xl font-semibold mb-6 text-center">Our Achievements Under Leadership</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-emerald-400 mb-2">500+</div>
                      <div className="text-gray-300">Successful Placements</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                      <div className="text-gray-300">Partner Countries</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                      <div className="text-gray-300">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
