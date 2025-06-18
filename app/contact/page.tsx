import PageLayout from "@/components/PageLayout"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function Contact() {
  return (
    <PageLayout
      title="Contact Us"
      description="Get in touch with Rising Youths Overseas for all your overseas employment needs. We're here to help you succeed."
    >
      <div className="max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg text-center">
            <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-[#011D5B] mb-2">Visit Our Office</h3>
            <p className="text-gray-700">
              Putali Sadak 12
              <br />
              Kathmandu, Nepal
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-100 to-red-200 p-6 rounded-lg text-center">
            <Phone className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-[#011D5B] mb-2">Call Us</h3>
            <p className="text-gray-700">
              +977-9823270812
              <br />
              Available 24/7
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg text-center">
            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-[#011D5B] mb-2">Email Us</h3>
            <p className="text-gray-700">
              info@manpowername.com.np
              <br />
              Quick Response Guaranteed
            </p>
          </div>
        </div>

        {/* Contact Form and Map */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-[#011D5B] mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
                  placeholder="+977-XXXXXXXXXX"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="job-inquiry">Job Inquiry</option>
                  <option value="consultation">Consultation Request</option>
                  <option value="training">Training Information</option>
                  <option value="travel">Travel Services</option>
                  <option value="general">General Question</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
                  placeholder="Tell us about your requirements or questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Office Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#011D5B] to-[#0A2B6B] text-white p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Office Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-200">
                      Putali Sadak 12
                      <br />
                      Kathmandu, Nepal
                      <br />
                      Postal Code: 44600
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-200">+977-9823270812</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-200">info@manpowername.com.np</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Office Hours</h3>
                    <p className="text-gray-200">
                      Sunday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-[#011D5B] mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <a
                  href="tel:+977-9823270812"
                  className="flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Call Now</span>
                </a>
                <a
                  href="mailto:info@manpowername.com.np"
                  className="flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-[#011D5B] mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-[#011D5B] mb-2">What documents do I need?</h3>
              <p className="text-gray-600 text-sm">
                You'll need a valid passport, educational certificates, experience letters, and medical reports.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#011D5B] mb-2">How long does the process take?</h3>
              <p className="text-gray-600 text-sm">
                The complete process typically takes 4-8 weeks depending on the destination country.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#011D5B] mb-2">Do you provide training?</h3>
              <p className="text-gray-600 text-sm">
                Yes, we provide comprehensive pre-departure training and orientation programs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#011D5B] mb-2">What are your service charges?</h3>
              <p className="text-gray-600 text-sm">
                Our charges vary by destination and service type. Contact us for detailed information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
