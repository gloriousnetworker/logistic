"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Truck, CheckCircle2, Globe } from "lucide-react"
import QuoteForm from "@/components/quote-form"

export default function QuotePage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Request a Quote</h1>
          <p className="text-gray-600">
            Fill out the form below to receive a customized quote for your logistics needs
          </p>
        </div>

        <Tabs defaultValue="freight">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="freight">Freight Services</TabsTrigger>
            <TabsTrigger value="clearing">Clearing & Forwarding</TabsTrigger>
            <TabsTrigger value="consultancy">Logistics Consultancy</TabsTrigger>
          </TabsList>

          <TabsContent value="freight" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Freight Services Quote</CardTitle>
                <CardDescription>
                  Request a quote for our freight forwarding, air freight, or haulage services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <QuoteForm quoteType="Freight Services" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clearing" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Clearing & Forwarding Quote</CardTitle>
                <CardDescription>Request a quote for customs clearance and forwarding services</CardDescription>
              </CardHeader>
              <CardContent>
                <QuoteForm quoteType="Clearing & Forwarding" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="consultancy" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Logistics Consultancy Quote</CardTitle>
                <CardDescription>Request a quote for our logistics consultancy services</CardDescription>
              </CardHeader>
              <CardContent>
                <QuoteForm quoteType="Logistics Consultancy" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Why Choose Us */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose GlobalLogistics</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Network</h3>
              <p className="text-gray-600">
                Our extensive network of partners in over 100 countries ensures seamless logistics operations worldwide.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customized Solutions</h3>
              <p className="text-gray-600">
                We tailor our services to meet your specific logistics needs, ensuring optimal efficiency and
                cost-effectiveness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reliability</h3>
              <p className="text-gray-600">
                With over 15 years of experience, we've built a reputation for reliable service and on-time delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
