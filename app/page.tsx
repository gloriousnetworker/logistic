import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Truck,
  Ship,
  Plane,
  Package,
  FileText,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Users,
  Globe,
  Clock,
} from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import NewsSection from "@/components/news-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation is now in a separate component */}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Your Trusted Partner in Global Logistics Solutions
              </h1>
              <p className="text-lg opacity-90 max-w-md">
                Providing comprehensive clearing, forwarding, and logistics services to businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Request a Quote
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Logistics operations"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Quick Tracking Form in Hero */}
          <div className="container mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
              <h3 className="text-blue-600 font-bold text-lg mb-4">Track Your Shipment</h3>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Enter tracking number"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
                <Link href="/tracking">
                  <Button className="whitespace-nowrap">Track Now</Button>
                </Link>
              </form>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="container space-y-12">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold">Our Comprehensive Services</h2>
              <p className="text-gray-600">
                We offer end-to-end logistics solutions tailored to your specific business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Ship className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Freight Forwarding</h3>
                <p className="text-gray-600 mb-4">
                  International shipping solutions by sea, air, and land with real-time tracking and customs clearance.
                </p>
                <Link
                  href="/services/freight-forwarding"
                  className="text-blue-600 font-medium inline-flex items-center group"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Truck className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Haulage Services</h3>
                <p className="text-gray-600 mb-4">
                  Reliable transportation of goods with our modern fleet of vehicles for local and long-distance
                  deliveries.
                </p>
                <Link href="/services/haulage" className="text-blue-600 font-medium inline-flex items-center group">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Package className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Clearing & Forwarding</h3>
                <p className="text-gray-600 mb-4">
                  Expert handling of customs documentation and procedures to ensure smooth clearance of your goods.
                </p>
                <Link
                  href="/services/clearing-forwarding"
                  className="text-blue-600 font-medium inline-flex items-center group"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Service 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <FileText className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Logistics Consultancy</h3>
                <p className="text-gray-600 mb-4">
                  Strategic advice on optimizing your supply chain, reducing costs, and improving efficiency.
                </p>
                <Link href="/services/consultancy" className="text-blue-600 font-medium inline-flex items-center group">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Service 5 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Plane className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Air Freight</h3>
                <p className="text-gray-600 mb-4">
                  Fast and reliable air freight services for time-sensitive shipments to destinations worldwide.
                </p>
                <Link href="/services/air-freight" className="text-blue-600 font-medium inline-flex items-center group">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Service 6 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <MapPin className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Warehousing</h3>
                <p className="text-gray-600 mb-4">
                  Secure storage solutions with inventory management systems and distribution services.
                </p>
                <Link href="/services/warehousing" className="text-blue-600 font-medium inline-flex items-center group">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="text-center">
              <Link href="/services">
                <Button size="lg" className="mt-8">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-blue-600 flex justify-center">
                  <Globe className="h-10 w-10" />
                </div>
                <div className="text-4xl font-bold">100+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div className="space-y-2">
                <div className="text-blue-600 flex justify-center">
                  <Truck className="h-10 w-10" />
                </div>
                <div className="text-4xl font-bold">5,000+</div>
                <div className="text-gray-600">Shipments Monthly</div>
              </div>
              <div className="space-y-2">
                <div className="text-blue-600 flex justify-center">
                  <Users className="h-10 w-10" />
                </div>
                <div className="text-4xl font-bold">500+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>
              <div className="space-y-2">
                <div className="text-blue-600 flex justify-center">
                  <Clock className="h-10 w-10" />
                </div>
                <div className="text-4xl font-bold">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/cargo.svg?height=400&width=500"
                  alt="Logistics team"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Why Choose GlobalLogistics?</h2>
                <p className="text-gray-600">
                  With over 15 years of experience in the logistics industry, we've built a reputation for reliability,
                  efficiency, and exceptional customer service.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Global Network</h3>
                      <p className="text-gray-600">Extensive network of partners in over 100 countries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Experienced Team</h3>
                      <p className="text-gray-600">Highly trained professionals with industry expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Custom Solutions</h3>
                      <p className="text-gray-600">Tailored logistics strategies for your specific needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Advanced Technology</h3>
                      <p className="text-gray-600">Real-time tracking and monitoring of your shipments</p>
                    </div>
                  </div>
                </div>
                <Link href="/about">
                  <Button className="mt-4">Learn More About Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialCarousel />

        {/* News Section */}
        <NewsSection />

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Optimize Your Logistics?</h2>
            <p className="max-w-2xl mx-auto text-lg opacity-90">
              Contact our team today to discuss how we can help streamline your supply chain and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/quote">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Request a Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <p className="text-gray-600">Have questions about our services? Our team is ready to assist you.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>123 Logistics Way, Business District, City</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>info@globallogistics.com</span>
                  </div>
                </div>

                <div className="pt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3526145645607!2d3.3751832!3d6.5951815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cf6d29c2d5d%3A0x76c3e96a1f1b2e48!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-md"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <input id="name" className="w-full px-3 py-2 border rounded-md" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name
                    </label>
                    <input
                      id="company"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service Interested In
                    </label>
                    <select id="service" className="w-full px-3 py-2 border rounded-md">
                      <option value="">Select a service</option>
                      <option value="freight">Freight Forwarding</option>
                      <option value="haulage">Haulage Services</option>
                      <option value="clearing">Clearing & Forwarding</option>
                      <option value="consultancy">Logistics Consultancy</option>
                      <option value="air">Air Freight</option>
                      <option value="warehousing">Warehousing</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Tell us about your logistics needs..."
                    ></textarea>
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer is now in a separate component */}
    </div>
  )
}
