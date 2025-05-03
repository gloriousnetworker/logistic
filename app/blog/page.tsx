import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User, Tag, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import NewsletterForm from "@/components/newsletter-form"

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Logistics",
    excerpt:
      "Discover how eco-friendly practices are transforming the logistics industry and reducing carbon footprints.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    date: "May 15, 2023",
    author: "Michael Anderson",
    category: "Industry Trends",
    image: "/placeholder.svg?height=400&width=800",
    slug: "sustainable-logistics",
  },
  {
    id: 2,
    title: "Navigating Global Supply Chain Disruptions",
    excerpt: "Learn strategies to mitigate risks and maintain operational continuity during supply chain challenges.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    date: "April 22, 2023",
    author: "Sarah Johnson",
    category: "Supply Chain",
    image: "/placeholder.svg?height=400&width=800",
    slug: "supply-chain-disruptions",
  },
  {
    id: 3,
    title: "Technology Trends Reshaping Freight Forwarding",
    excerpt: "Explore how AI, blockchain, and IoT are revolutionizing the freight forwarding and logistics landscape.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    date: "March 10, 2023",
    author: "David Chen",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=800",
    slug: "technology-trends",
  },
  {
    id: 4,
    title: "Customs Compliance: Navigating International Regulations",
    excerpt: "A comprehensive guide to understanding and complying with international customs regulations.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    date: "February 18, 2023",
    author: "Emma Rodriguez",
    category: "Compliance",
    image: "/placeholder.svg?height=400&width=800",
    slug: "customs-compliance",
  },
  {
    id: 5,
    title: "Optimizing Warehouse Operations for Efficiency",
    excerpt: "Best practices for streamlining warehouse operations and improving productivity.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    date: "January 25, 2023",
    author: "James Wilson",
    category: "Warehousing",
    image: "/placeholder.svg?height=400&width=800",
    slug: "warehouse-operations",
  },
  {
    id: 6,
    title: "The Impact of E-commerce on Logistics",
    excerpt: "How the growth of e-commerce is transforming logistics operations and customer expectations.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    date: "December 12, 2022",
    author: "Priya Patel",
    category: "E-commerce",
    image: "/placeholder.svg?height=400&width=800",
    slug: "ecommerce-impact",
  },
]

// Categories for filtering
const categories = ["All", "Industry Trends", "Supply Chain", "Technology", "Compliance", "Warehousing", "E-commerce"]

export default function BlogPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Logistics Insights & News</h1>
            <p className="text-xl opacity-90">
              Stay updated with the latest industry trends, company news, and expert insights
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Featured Post */}
              <div className="mb-12">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {blogPosts[0].date}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {blogPosts[0].author}
                      </div>
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-1" />
                        {blogPosts[0].category}
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                    <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                    <Link href={`/blog/${blogPosts[0].slug}`}>
                      <Button>
                        Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.slice(1).map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Tag className="h-3 w-3 mr-1" />
                          {post.category}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 font-medium inline-flex items-center group"
                      >
                        Read more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center gap-1">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="bg-blue-50">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              {/* Search */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-lg font-bold mb-4">Search</h3>
                <div className="flex">
                  <Input placeholder="Search articles..." className="rounded-r-none" />
                  <Button className="rounded-l-none">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/category/${category.toLowerCase().replace(" ", "-")}`}
                        className={`block py-2 px-3 rounded-md hover:bg-blue-50 ${
                          category === "All" ? "bg-blue-50 text-blue-600 font-medium" : ""
                        }`}
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <li key={post.id} className="flex gap-3">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2">
                          <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                            {post.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Stay updated with our latest news and insights delivered directly to your inbox.
                </p>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions About Our Services?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Our team of logistics experts is ready to help you find the right solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
