import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Users, Globe, Award, TrendingUp, Ship, Plane } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">About GlobalLogistics</h1>
            <p className="text-xl opacity-90 mb-8">Your trusted partner in global logistics solutions since 2008</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2008, GlobalLogistics began as a small freight forwarding company with a vision to simplify
                international shipping for businesses of all sizes. What started as a team of five passionate logistics
                professionals has grown into a global operation with offices in 15 countries and a network of partners
                spanning over 100 nations.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been defined by a commitment to innovation, reliability, and exceptional customer
                service. As the logistics landscape has evolved, we've continuously adapted our services and
                technologies to meet the changing needs of our clients.
              </p>
              <p className="text-gray-600">
                Today, GlobalLogistics is proud to be a leading provider of comprehensive logistics solutions, helping
                businesses optimize their supply chains, reduce costs, and expand their global reach.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="GlobalLogistics headquarters"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To provide innovative, reliable, and cost-effective logistics solutions that empower businesses to
                thrive in the global marketplace. We are committed to exceeding customer expectations through
                operational excellence, technological advancement, and personalized service.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Deliver exceptional service quality</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Optimize supply chains for efficiency</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Provide transparent and reliable solutions</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To be the most trusted and innovative logistics partner globally, known for transforming how businesses
                manage their supply chains. We envision a future where logistics is seamless, sustainable, and a
                strategic advantage for our clients.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Lead industry innovation and best practices</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Expand global reach while maintaining service excellence</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Promote sustainable logistics solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600">
              These principles guide everything we do at GlobalLogistics, from how we serve our clients to how we work
              together as a team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our operations, continuously raising the bar for quality and
                performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We conduct business with honesty, transparency, and ethical standards that build trust with our clients
                and partners.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and creative solutions to solve complex logistics challenges and drive
                industry progress.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and partnerships to deliver exceptional results for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600">Key milestones in our company's history that have shaped who we are today</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>

            <div className="space-y-12">
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">2008</h3>
                    <h4 className="text-blue-600 font-medium mb-2">Company Founded</h4>
                    <p className="text-gray-600">
                      GlobalLogistics was established with a small team of five logistics professionals in London.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden md:flex">
                  <div className="bg-blue-600 rounded-full h-6 w-6 border-4 border-white"></div>
                </div>
              </div>

              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block"></div>
                <div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">2012</h3>
                    <h4 className="text-blue-600 font-medium mb-2">International Expansion</h4>
                    <p className="text-gray-600">
                      Opened our first international offices in Singapore and Dubai, expanding our global reach.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden md:flex">
                  <div className="bg-blue-600 rounded-full h-6 w-6 border-4 border-white"></div>
                </div>
              </div>

              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">2015</h3>
                    <h4 className="text-blue-600 font-medium mb-2">Technology Innovation</h4>
                    <p className="text-gray-600">
                      Launched our proprietary tracking system, revolutionizing how clients monitor their shipments.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden md:flex">
                  <div className="bg-blue-600 rounded-full h-6 w-6 border-4 border-white"></div>
                </div>
              </div>

              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="hidden md:block"></div>
                <div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">2018</h3>
                    <h4 className="text-blue-600 font-medium mb-2">Service Expansion</h4>
                    <p className="text-gray-600">
                      Added comprehensive warehousing and logistics consultancy services to our portfolio.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden md:flex">
                  <div className="bg-blue-600 rounded-full h-6 w-6 border-4 border-white"></div>
                </div>
              </div>

              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">2023</h3>
                    <h4 className="text-blue-600 font-medium mb-2">Global Recognition</h4>
                    <p className="text-gray-600">
                      Recognized as one of the top 10 logistics providers globally, with operations in 15 countries.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden md:flex">
                  <div className="bg-blue-600 rounded-full h-6 w-6 border-4 border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Global Presence</h2>
            <p className="text-gray-600">
              With offices in 15 countries and a network of partners in over 100 nations, we provide truly global
              logistics solutions.
            </p>
          </div>

          <div className="mb-12">
            <img
              src="/placeholder.svg?height=500&width=1000"
              alt="Global map showing GlobalLogistics presence"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <Globe className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Regional Offices</h3>
              <ul className="space-y-2 text-gray-600">
                <li>London, UK (Headquarters)</li>
                <li>Singapore</li>
                <li>Dubai, UAE</li>
                <li>New York, USA</li>
                <li>Shanghai, China</li>
                <li>Mumbai, India</li>
                <li>Sydney, Australia</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <Ship className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Major Port Operations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Rotterdam, Netherlands</li>
                <li>Singapore</li>
                <li>Shanghai, China</li>
                <li>Los Angeles, USA</li>
                <li>Dubai, UAE</li>
                <li>Hamburg, Germany</li>
                <li>Sydney, Australia</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <Plane className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Air Freight Hubs</h3>
              <ul className="space-y-2 text-gray-600">
                <li>London Heathrow, UK</li>
                <li>Frankfurt, Germany</li>
                <li>Hong Kong International</li>
                <li>Dubai International</li>
                <li>JFK, New York</li>
                <li>Singapore Changi</li>
                <li>Shanghai Pudong</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600">
              Meet the experienced professionals who guide our company's vision and strategy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="CEO portrait"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Anderson</h3>
                <p className="text-blue-600 font-medium mb-3">Chief Executive Officer</p>
                <p className="text-gray-600 mb-4">
                  With over 25 years of experience in the logistics industry, Michael has led GlobalLogistics since its
                  founding in 2008.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="COO portrait"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-blue-600 font-medium mb-3">Chief Operations Officer</p>
                <p className="text-gray-600 mb-4">
                  Sarah oversees our global operations, ensuring service excellence and operational efficiency across
                  all regions.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="CTO portrait"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">David Chen</h3>
                <p className="text-blue-600 font-medium mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 mb-4">
                  David leads our technology initiatives, driving innovation in tracking systems and digital solutions.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="CFO portrait"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Emma Rodriguez</h3>
                <p className="text-blue-600 font-medium mb-3">Chief Financial Officer</p>
                <p className="text-gray-600 mb-4">
                  Emma manages our financial strategy, ensuring sustainable growth and value for our stakeholders.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Global Sales Director portrait"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">James Wilson</h3>
                <p className="text-blue-600 font-medium mb-3">Global Sales Director</p>
                <p className="text-gray-600 mb-4">
                  James leads our international sales teams, developing strategic partnerships with clients worldwide.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="HR Director portrait"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Priya Patel</h3>
                <p className="text-blue-600 font-medium mb-3">Human Resources Director</p>
                <p className="text-gray-600 mb-4">
                  Priya oversees our talent management and company culture, ensuring we attract and retain the best
                  professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            We're always looking for talented individuals to join our global team. Explore career opportunities with
            GlobalLogistics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/careers">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                View Open Positions
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
    </div>
  )
}
