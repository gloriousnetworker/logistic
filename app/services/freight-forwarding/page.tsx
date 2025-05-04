import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Ship,
  Truck,
  CheckCircle2,
  MapPin,
} from "lucide-react"

export default function FreightForwardingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
            <Ship className="h-8 w-8 text-green-800" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Freight Forwarding Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
            Fast, reliable international freight solutions by sea, air, and land—all backed by over a decade of
            Customs‑licensed expertise.
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

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-green-800">About Arthur Great Services Ltd</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              Arthur Great Services Ltd is incorporated in Nigeria under the Companies and Allied Matters Act of
              1990 as a licensed Clearing & Forwarding Company, Logistics Consultancy and Freight Forwarder. Our
              corporate head office is in Apapa, Lagos State, with branch offices in Rivers State.
            </p>
            <p>
              We began international freight clearing and forwarding over a decade ago. Since then, stories of
              excellence have paved our rise into an internationally respected brand.
            </p>
            <p>
              As a registered shipping agency, we deal directly with port authorities to ensure rapid clearance of
              your goods—no extra demurrage charges, no middle‑men delays.
            </p>
          </div>
        </div>
      </section>

      {/* Ports Served */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-green-800 mb-4">Sea Ports We Serve</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {[
              "Lagos Port Complex, Apapa, Lagos State",
              "Tincan Island Port, Apapa, Lagos State",
              "KLT 1 & 2 Terminals, Lagos State",
              "Port Harcourt Port, Rivers State",
              "Federal Lighter Terminal Onne, Rivers State",
              "Federal Ocean Terminal Onne, Rivers State",
            ].map((port) => (
              <li key={port}>{port}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-green-800 mb-4">Our Freight Forwarding Services</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            {[
              "Clearing of cars, trucks and other goods",
              "Customs & tariff consultation",
              "Door-to-door delivery services",
              "Cargo insurance options",
              "Real-time shipment tracking",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h4 className="text-xl font-semibold mb-2">Why Do Business With Us?</h4>
          <ul className="space-y-3">
            {[
              "Leading customs‑licensed clearing agent: direct, swift port clearance without demurrage.",
              "Solid reputation with Nigeria Customs from daily collaboration.",
              "Strategically located close to the ports for zero transit delays.",
              "Up‑to‑date knowledge of customs regulations and best practices.",
              "Tailored, professional service from our dedicated team.",
            ].map((reason) => (
              <li key={reason} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/cargo.png?height=300&width=500"
                alt="Freight forwarding illustration"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-green-800">End-to-End Logistics</h3>
              <p className="text-gray-700">
                From your warehouse door straight to final destination, we manage every step: customs documentation,
                consolidation, inland trucking and final‑mile delivery.
              </p>
              <Link href="/quote">
                <Button className="bg-green-700 hover:bg-green-600 border-green-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Move Your Cargo?</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Experience hassle‑free global freight forwarding with Arthur Great Services Ltd.
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
