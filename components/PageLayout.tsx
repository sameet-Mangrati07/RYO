import type React from "react"
import Header from "./Header"

interface PageLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
}

const PageLayout = ({ children, title, description }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-[#011D5B] mb-4">{title}</h1>
          {description && <p className="text-lg text-gray-600 mb-8">{description}</p>}
          {children}
        </div>
      </main>
    </div>
  )
}

export default PageLayout
