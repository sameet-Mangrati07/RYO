import PageLayout from "@/components/PageLayout"
import { Calendar, User, ArrowRight, Tag } from "lucide-react"
import Link from "next/link"

export default function Blog() {
  const allPosts = [
    // News Items
    {
      id: 1,
      title: "New Partnership with Leading UAE Construction Company",
      excerpt:
        "Rising Youths Overseas has signed a strategic partnership with Al-Futtaim Construction, opening 200+ new positions for skilled workers in Dubai and Abu Dhabi.",
      author: "Rising Youths Team",
      date: "January 15, 2025",
      category: "Partnership",
      type: "news",
      readTime: "3 min read",
      featured: true,
      slug: "uae-partnership-construction",
    },
    {
      id: 2,
      title: "Qatar World Cup Legacy Projects Create New Opportunities",
      excerpt:
        "Post-World Cup infrastructure development in Qatar continues to offer excellent opportunities for construction workers, engineers, and hospitality professionals.",
      author: "Rising Youths Team",
      date: "January 12, 2025",
      category: "Opportunities",
      type: "news",
      readTime: "4 min read",
      featured: true,
      slug: "qatar-opportunities-legacy",
    },
    {
      id: 3,
      title: "Enhanced Pre-Departure Training Program Launched",
      excerpt:
        "Our new comprehensive training program includes advanced language courses, cultural orientation, and technical skills development to better prepare candidates.",
      author: "Rising Youths Team",
      date: "January 10, 2025",
      category: "Training",
      type: "news",
      readTime: "3 min read",
      featured: false,
      slug: "enhanced-training-program",
    },
    {
      id: 4,
      title: "Malaysia Plantation Sector Seeks 500+ Workers",
      excerpt:
        "Major palm oil companies in Malaysia are actively recruiting workers for plantation operations with competitive salaries and comprehensive benefits.",
      author: "Rising Youths Team",
      date: "January 8, 2025",
      category: "Jobs",
      type: "news",
      readTime: "4 min read",
      featured: false,
      slug: "malaysia-plantation-opportunities",
    },
    {
      id: 5,
      title: "Success Story: 100% Visa Approval Rate for December Batch",
      excerpt:
        "Our December batch of 150 candidates achieved a remarkable 100% visa approval rate, demonstrating our commitment to quality documentation and preparation.",
      author: "Rising Youths Team",
      date: "January 5, 2025",
      category: "Success",
      type: "news",
      readTime: "3 min read",
      featured: false,
      slug: "visa-success-december",
    },
    {
      id: 6,
      title: "New European Work Permit Programs Available",
      excerpt:
        "Exciting new opportunities in Germany, Poland, and Czech Republic for skilled workers in manufacturing, healthcare, and agriculture sectors.",
      author: "Rising Youths Team",
      date: "January 3, 2025",
      category: "Europe",
      type: "news",
      readTime: "4 min read",
      featured: false,
      slug: "europe-work-permits",
    },
    // Blog Articles
    {
      id: 7,
      title: "Top 10 Tips for Successful Overseas Employment",
      excerpt:
        "Essential advice for professionals seeking international career opportunities and how to prepare for success abroad.",
      author: "Rajesh Sharma",
      date: "January 10, 2025",
      category: "Career Advice",
      type: "blog",
      readTime: "5 min read",
      featured: true,
      slug: "tips-successful-overseas-employment",
    },
    {
      id: 8,
      title: "Understanding Work Visa Requirements for Gulf Countries",
      excerpt:
        "A comprehensive guide to visa requirements, documentation, and processes for working in UAE, Qatar, Saudi Arabia, and other Gulf nations.",
      author: "Priya Thapa",
      date: "January 8, 2025",
      category: "Visa Guide",
      type: "blog",
      readTime: "8 min read",
      featured: true,
      slug: "gulf-visa-requirements-guide",
    },
    {
      id: 9,
      title: "Cultural Adaptation: Thriving in International Workplaces",
      excerpt:
        "Learn how to adapt to different work cultures and build successful relationships with international colleagues.",
      author: "Amit Gurung",
      date: "January 5, 2025",
      category: "Cultural Tips",
      type: "blog",
      readTime: "6 min read",
      featured: false,
      slug: "cultural-adaptation-international",
    },
    {
      id: 10,
      title: "Skills in Demand: What International Employers Look For",
      excerpt:
        "Discover the most sought-after skills in the global job market and how to develop them for better opportunities.",
      author: "Sunita Rai",
      date: "January 3, 2025",
      category: "Skills Development",
      type: "blog",
      readTime: "7 min read",
      featured: false,
      slug: "skills-demand-international-employers",
    },
    {
      id: 11,
      title: "Financial Planning for Overseas Workers",
      excerpt: "Smart financial strategies for managing money, savings, and investments while working abroad.",
      author: "Rajesh Sharma",
      date: "December 28, 2024",
      category: "Finance",
      type: "blog",
      readTime: "9 min read",
      featured: false,
      slug: "financial-planning-overseas-workers",
    },
    {
      id: 12,
      title: "Success Story: From Nepal to Dubai - A Construction Worker's Journey",
      excerpt:
        "Read about Ram Bahadur's inspiring journey from a small village in Nepal to becoming a successful construction supervisor in Dubai.",
      author: "Rising Youths Team",
      date: "December 25, 2024",
      category: "Success Stories",
      type: "blog",
      readTime: "4 min read",
      featured: false,
      slug: "nepal-dubai-success-story",
    },
  ]

  const categories = [
    "All",
    "News",
    "Blog",
    "Career Advice",
    "Visa Guide",
    "Cultural Tips",
    "Skills Development",
    "Finance",
    "Success Stories",
    "Partnership",
    "Opportunities",
    "Training",
    "Jobs",
  ]

  const featuredPosts = allPosts.filter((post) => post.featured)
  const regularPosts = allPosts.filter((post) => !post.featured)

  return (
    <PageLayout
      title="News & Blog"
      description="Stay updated with the latest insights, news, tips, and success stories in overseas employment and career development."
    >
      <div className="max-w-6xl mx-auto">
        {/* Featured Posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#011D5B] mb-6">Featured Articles</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  post.type === "news"
                    ? "bg-gradient-to-br from-red-600 to-red-700"
                    : "bg-gradient-to-br from-blue-600 to-blue-700"
                } text-white`}
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        post.type === "news" ? "bg-red-800 text-red-100" : "bg-blue-800 text-blue-100"
                      }`}
                    >
                      {post.type.toUpperCase()}
                    </span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-200 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-200 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-200">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-white hover:text-gray-200 font-medium flex items-center space-x-1 transition-colors duration-300"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#011D5B] mb-4">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#011D5B] mb-6">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${
                        post.type === "news" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {post.type.toUpperCase()}
                    </span>
                    <Tag className="w-4 h-4 text-gray-400" />
                    <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#011D5B] mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className={`font-medium flex items-center space-x-1 transition-colors duration-300 ${
                      post.type === "news" ? "text-red-600 hover:text-red-700" : "text-blue-600 hover:text-blue-700"
                    }`}
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-lg mb-6">
            Subscribe to our newsletter for the latest insights, news, tips, and opportunities in overseas employment.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-[#011D5B] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
