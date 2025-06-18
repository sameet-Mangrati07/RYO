import PageLayout from "@/components/PageLayout"
import { Camera, Users, Award, Globe } from "lucide-react"

export default function Gallery() {
  const galleryItems = [
    {
      category: "Training Sessions",
      images: [
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Pre-departure orientation session",
          title: "Pre-Departure Orientation",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Technical skills training",
          title: "Technical Skills Training",
        },
        { src: "/placeholder.svg?height=300&width=400", alt: "Language training class", title: "Language Training" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Soft skills workshop", title: "Soft Skills Workshop" },
      ],
    },
    {
      category: "Success Stories",
      images: [
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Successful candidate departure",
          title: "Departure Ceremony",
        },
        { src: "/placeholder.svg?height=300&width=400", alt: "Award ceremony", title: "Excellence Awards" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Client testimonial", title: "Client Testimonials" },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Achievement celebration",
          title: "Achievement Celebration",
        },
      ],
    },
    {
      category: "Office & Facilities",
      images: [
        { src: "/placeholder.svg?height=300&width=400", alt: "Modern office space", title: "Office Reception" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Training facility", title: "Training Center" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Meeting room", title: "Conference Room" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Consultation area", title: "Consultation Area" },
      ],
    },
    {
      category: "Events & Partnerships",
      images: [
        { src: "/placeholder.svg?height=300&width=400", alt: "Partnership signing", title: "Partnership Agreement" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Industry conference", title: "Industry Conference" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Job fair participation", title: "Job Fair 2024" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Team building event", title: "Team Building" },
      ],
    },
  ]

  return (
    <PageLayout
      title="Gallery"
      description="Explore our journey through images - from training sessions to success stories and memorable moments."
    >
      <div className="max-w-6xl mx-auto">
        {/* Gallery Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg text-center">
            <Camera className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-[#011D5B]">500+</div>
            <div className="text-sm text-gray-600">Photos</div>
          </div>
          <div className="bg-gradient-to-br from-red-100 to-red-200 p-6 rounded-lg text-center">
            <Users className="w-12 h-12 text-red-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-[#011D5B]">1000+</div>
            <div className="text-sm text-gray-600">Success Stories</div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg text-center">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-[#011D5B]">50+</div>
            <div className="text-sm text-gray-600">Events</div>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-lg text-center">
            <Globe className="w-12 h-12 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-[#011D5B]">15+</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
        </div>

        {/* Gallery Sections */}
        {galleryItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h2 className="text-2xl font-semibold text-[#011D5B] mb-6 text-center">{section.category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <Camera className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#011D5B] text-sm">{image.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Video Section */}
        <div className="bg-gradient-to-r from-[#011D5B] to-[#0A2B6B] text-white p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Video Gallery</h2>
          <p className="text-center text-gray-200 mb-6">
            Watch our video testimonials, training sessions, and success stories.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Company Overview</h3>
              <p className="text-sm text-gray-200">Learn about our mission and services</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Success Stories</h3>
              <p className="text-sm text-gray-200">Hear from our successful candidates</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Training Programs</h3>
              <p className="text-sm text-gray-200">See our training facilities in action</p>
            </div>
          </div>
        </div>

        {/* Recent Updates */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-[#011D5B] mb-6">Recent Updates</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-[#011D5B]">New Training Batch - January 2025</h3>
                <p className="text-gray-600 text-sm">
                  Pre-departure orientation for 50 candidates heading to UAE and Qatar.
                </p>
                <p className="text-xs text-gray-500 mt-1">Added 2 days ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-[#011D5B]">Partnership Signing Ceremony</h3>
                <p className="text-gray-600 text-sm">
                  Signed new partnership agreement with leading construction company in Malaysia.
                </p>
                <p className="text-xs text-gray-500 mt-1">Added 1 week ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-[#011D5B]">Office Expansion</h3>
                <p className="text-gray-600 text-sm">
                  Expanded our training facilities to accommodate more candidates.
                </p>
                <p className="text-xs text-gray-500 mt-1">Added 2 weeks ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
