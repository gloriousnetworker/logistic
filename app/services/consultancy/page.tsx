import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Truck,
  Ship,
  Plane,
  Package,
  FileText,
  MapPin,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Globe,
  Shield,
} from "lucide-react"

const services = [
  {
    id: "freight-forwarding",
    title: "Freight Forwarding",
    description:
      "International shipping solutions by sea, air, and land with real-time tracking and customs clearance.",
    icon: Ship,
    features: [
      "Door‑to‑door delivery",
      "Customs documentation & clearance",
      "Cargo insurance options",
      "Real‑time shipment tracking",
      "Consolidation services",
    ],
    image: "/cargo.png?height=300&width=500",
  },
  {
    id: "haulage",
    title: "Haulage Services",
    description:
      "Reliable transportation with our modern fleet for local and long‑distance deliveries.",
    icon: Truck,
    features: [
      "Full truckload (FTL) & LTL options",
      "Temperature‑controlled transport",
      "Oversized cargo equipment",
      "GPS tracking on all vehicles",
      "Dedicated account managers",
    ],
    image: "/cargo.png?height=300&width=500",
  },
  {
    id: "clearing-forwarding",
    title: "Clearing & Forwarding",
    description:
      "Expert handling of customs docs to ensure smooth clearance of your goods.",
    icon: Package,
    features: [
      "Import/export customs clearance",
      "Tariff classification & duty calculation",
      "Regulatory compliance management",
      "Customs bond processing",
      "Documentation verification",
    ],
    image: "/cargo.png?height=300&width=500",
  },
  {
    id: "consultancy",
    title: "Logistics Consultancy",
    description:
      "Strategic advice on optimizing your supply chain, reducing costs, and improving efficiency.",
    icon: FileText,
    features: [
      "Supply chain optimization",
      "Network design & benchmarking",
      "Cost reduction strategies",
      "Performance analytics",
      "Technology implementation",
    ],
    image: "/cargo.png?height=300&width=500",
  },
  {
    id: "air-freight",
    title: "Air Freight",
    description:
      "Fast, reliable air freight for time‑sensitive shipments worldwide.",
    icon: Plane,
    features: [
      "Express & charter solutions",
      "Dangerous goods handling",
      "Temperature‑controlled flights",
      "Airport‑to‑door service",
      "Customs liaison support",
    ],
    image: "/cargo.png?height=300&width=500",
  },
  {
    id: "warehousing",
    title: "Warehousing",
    description:
      "Secure storage with inventory management and distribution services.",
    icon: MapPin,
    features: [
      "Short & long‑term storage",
      "Inventory management systems",
      "Pick & pack services",
      "Cross‑docking capabilities",
      "Fulfillment & distribution",
    ],
    image: "/cargo.png?height=300&width=500",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
            <Ship className="h-8 w-8 text-green-800" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Logistics Solutions
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
            From Freight Forwarding to Warehousing, our end‑to‑end services keep your supply chain moving.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quote">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Request a Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-green-700"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600">
              We deliver tailored logistics solutions—reliable, efficient, and cost‑effective—for businesses of any size.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((svc, idx) => (
              <div
                key={svc.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text & Features */}
                <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                  <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-lg text-green-600 mb-4">
                    {React.createElement(svc.icon, { className: "h-8 w-8" })}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{svc.title}</h3>
                  <p className="text-gray-600 mb-6">{svc.description}</p>

                  <div className="space-y-3 mb-8">
                    {svc.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/services/${svc.id}`}>
                    <Button className="bg-green-700 hover:bg-green-600 border-green-700">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                {/* Image */}
                <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Services</h2>
            <p className="text-gray-600">
              With over a decade of industry expertise, we’re the partner you can trust for seamless logistics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Global Network", desc: "Partners in 100+ countries for smooth cross‑border moves." },
              { icon: Shield, title: "Reliability & Security", desc: "Advanced tracking & secure handling at every step." },
              { icon: BarChart3, title: "Cost Efficiency", desc: "Optimized routes and consolidation to lower spend." },
              { icon: Truck, title: "Modern Fleet", desc: "State‑of‑the‑art vehicles for on‑time deliveries." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                {React.createElement(icon, { className: "h-10 w-10 text-green-600 mb-4 mx-auto" })}
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Streamline Your Supply Chain?</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Get in touch today and let Arthur Great Services Ltd handle the heavy lifting.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quote">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Request a Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-green-800"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
