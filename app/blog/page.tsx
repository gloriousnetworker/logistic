import Link from "next/link"
import Image from "next/image"
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
    date: "May 15, 2023",
    author: "Michael Anderson",
    category: "Industry Trends",
    image: "/cargo.png",
    slug: "sustainable-logistics",
  },
  // ...other posts
]

const categories = ["All", "Industry Trends", "Supply Chain", "Technology", "Compliance", "Warehousing", "E-commerce"]

export default function BlogPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white py-16 md:py-24 px-4 lg:px-8">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Logistics Insights & News</h1>
          <p className="text-xl opacity-90">
            Stay updated with the latest industry trends, company news, and expert insights
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Featured Post */}
            <div className="mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="w-full h-80 relative">
                  <Image src={blogPosts[0].image} alt={blogPosts[0].title} fill className="object-cover" />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" /> {blogPosts[0].author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" /> {blogPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-green-700">{blogPosts[0].title}</h2>
                  <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                  <Link href={`/blog/${blogPosts[0].slug}`}>                  
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
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
                  <div className="w-full h-48 relative">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag className="w-3 h-3" /> {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-green-700">{post.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="text-green-600 font-medium inline-flex items-center group">
                      Read more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12 gap-2">
              {[1, 2, 3].map((page) => (
                <Button
                  key={page}
                  variant="outline"
                  size="sm"
                  className={page === 1 ? "bg-green-50 text-green-700" : "text-green-700 border-green-700"}
                >
                  {page}
                </Button>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-8">
            {/* Search */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4 text-green-700">Search</h3>
              <div className="flex">
                <Input placeholder="Search articles..." className="rounded-r-none" />
                <Button className="rounded-l-none bg-green-600 hover:bg-green-700 text-white">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4 text-green-700">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, i) => (
                  <li key={i}>
                    <Link
                      href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                      className={`block py-2 px-3 rounded-md ${
                        category === "All"
                          ? "bg-green-50 text-green-700 font-medium"
                          : "text-green-700 hover:bg-green-100"
                      }`}
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-4 text-green-700">Recent Posts</h3>
              <ul className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <li key={post.id} className="flex gap-3">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={60}
                      height={60}
                      className="rounded object-cover"
                    />
                    <div>
                      <Link href={`/blog/${post.slug}`} className="font-medium text-sm text-green-700 hover:underline">
                        {post.title}
                      </Link>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2 text-green-700">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-gray-600 mb-4">
                Stay updated with our latest news and insights delivered directly to your inbox.
              </p>
              <NewsletterForm />
            </div>
          </aside>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-white-600 via-white-700 to-white-800 text-green-700 py-16 md:py-24 px-4 lg:px-8">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Have Questions About Our Services?</h2>
          <p className="text-xl opacity-90 mb-8">
            Our team of logistics experts is ready to help you find the right solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-green text-black hover:bg-green-700">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
