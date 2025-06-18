import PageLayout from "@/components/PageLayout"
import { User, Users, Building, Globe } from "lucide-react"

export default function OrganizationalChart() {
  return (
    <PageLayout
      title="Organizational Chart"
      description="Our organizational structure and hierarchy at Rising Youths Overseas Pvt. Ltd."
    >
      <div className="max-w-6xl mx-auto">
        {/* Board Level */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-[#011D5B] to-[#0A2B6B] text-white p-6 rounded-lg shadow-lg">
            <Building className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Board of Directors</h3>
            <p className="text-sm text-gray-200">Strategic Oversight</p>
          </div>
        </div>

        {/* Executive Level */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-lg shadow-lg">
            <User className="w-12 h-12 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Managing Director</h3>
            <p className="text-sm text-gray-200">Executive Leadership</p>
          </div>
        </div>

        {/* Department Level */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white border-2 border-red-200 p-6 rounded-lg shadow-md text-center">
            <Users className="w-10 h-10 text-red-600 mx-auto mb-3" />
            <h4 className="font-semibold text-[#011D5B] mb-2">HR Department</h4>
            <p className="text-sm text-gray-600">Recruitment & Placement</p>
          </div>
          <div className="bg-white border-2 border-green-200 p-6 rounded-lg shadow-md text-center">
            <Globe className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h4 className="font-semibold text-[#011D5B] mb-2">Operations</h4>
            <p className="text-sm text-gray-600">Process Management</p>
          </div>
          <div className="bg-white border-2 border-blue-200 p-6 rounded-lg shadow-md text-center">
            <Building className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-[#011D5B] mb-2">Training</h4>
            <p className="text-sm text-gray-600">Skill Development</p>
          </div>
          <div className="bg-white border-2 border-purple-200 p-6 rounded-lg shadow-md text-center">
            <User className="w-10 h-10 text-purple-600 mx-auto mb-3" />
            <h4 className="font-semibold text-[#011D5B] mb-2">Administration</h4>
            <p className="text-sm text-gray-600">Support Services</p>
          </div>
        </div>

        {/* Team Level */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-center">
            <h5 className="font-medium text-[#011D5B] mb-1">HR Manager</h5>
            <p className="text-xs text-gray-600">Team Lead</p>
          </div>
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-center">
            <h5 className="font-medium text-[#011D5B] mb-1">Recruitment Officers</h5>
            <p className="text-xs text-gray-600">3 Members</p>
          </div>
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-center">
            <h5 className="font-medium text-[#011D5B] mb-1">Operations Manager</h5>
            <p className="text-xs text-gray-600">Team Lead</p>
          </div>
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-center">
            <h5 className="font-medium text-[#011D5B] mb-1">Process Coordinators</h5>
            <p className="text-xs text-gray-600">2 Members</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center">
            <h5 className="font-medium text-[#011D5B] mb-1">Training Coordinator</h5>
            <p className="text-xs text-gray-600">Team Lead</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center">
            <h5 className="font-medium text-[#011D5B] mb-1">Training Officers</h5>
            <p className="text-xs text-gray-600">2 Members</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg text-center">
            <h5 className="font-medium text-[#011D5B] mb-1">Admin Manager</h5>
            <p className="text-xs text-gray-600">Team Lead</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg text-center">
            <h5 className="font-medium text-[#011D5B] mb-1">Support Staff</h5>
            <p className="text-xs text-gray-600">4 Members</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-gray-50 to-white p-8 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#011D5B] mb-4">Our Structure</h2>
          <p className="text-gray-700 mb-4">
            Rising Youths Overseas maintains a lean but effective organizational structure designed to provide efficient
            service delivery while maintaining quality standards. Our structure ensures clear lines of communication and
            accountability.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-[#011D5B] mb-2">Key Principles</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Clear hierarchy and reporting structure</li>
                <li>• Specialized departments for focused expertise</li>
                <li>• Cross-functional collaboration</li>
                <li>• Regular performance monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#011D5B] mb-2">Team Strength</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Total Team Members: 15+</li>
                <li>• Department Heads: 4</li>
                <li>• Specialized Officers: 7</li>
                <li>• Support Staff: 4</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
