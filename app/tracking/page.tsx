"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Package, Truck, Ship, Plane, CheckCircle2, Clock, MapPin, AlertCircle, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { submitTrackingForm } from "@/lib/actions"
import { useToast } from "@/hooks/use-toast"

// Mock shipment data
const mockShipments = {
  GL123456789: {
    status: "in-transit",
    origin: "Shanghai, China",
    destination: "Los Angeles, USA",
    estimatedDelivery: "May 15, 2023",
    customer: "Tech Solutions Inc.",
    shipmentType: "Sea Freight",
    weight: "2,500 kg",
    trackingHistory: [
      {
        date: "April 10, 2023",
        time: "09:30 AM",
        location: "Shanghai Port, China",
        status: "Shipment picked up",
        icon: Package,
      },
      {
        date: "April 12, 2023",
        time: "02:15 PM",
        location: "Shanghai Port, China",
        status: "Customs clearance completed",
        icon: CheckCircle2,
      },
      {
        date: "April 14, 2023",
        time: "10:45 AM",
        location: "Shanghai Port, China",
        status: "Loaded on vessel",
        icon: Ship,
      },
      {
        date: "April 30, 2023",
        time: "03:20 PM",
        location: "Pacific Ocean",
        status: "In transit to destination",
        icon: Ship,
      },
      {
        date: "May 10, 2023",
        time: "08:00 AM",
        location: "Los Angeles Port, USA",
        status: "Arrived at port of destination",
        icon: MapPin,
        current: true,
      },
    ],
  },
  GL987654321: {
    status: "delivered",
    origin: "Frankfurt, Germany",
    destination: "New York, USA",
    estimatedDelivery: "April 28, 2023",
    actualDelivery: "April 27, 2023",
    customer: "Global Retail Corp.",
    shipmentType: "Air Freight",
    weight: "750 kg",
    trackingHistory: [
      {
        date: "April 20, 2023",
        time: "11:30 AM",
        location: "Frankfurt Airport, Germany",
        status: "Shipment picked up",
        icon: Package,
      },
      {
        date: "April 21, 2023",
        time: "09:15 AM",
        location: "Frankfurt Airport, Germany",
        status: "Customs clearance completed",
        icon: CheckCircle2,
      },
      {
        date: "April 22, 2023",
        time: "02:45 PM",
        location: "Frankfurt Airport, Germany",
        status: "Departed from origin",
        icon: Plane,
      },
      {
        date: "April 23, 2023",
        time: "06:20 AM",
        location: "New York JFK Airport, USA",
        status: "Arrived at destination",
        icon: Plane,
      },
      {
        date: "April 24, 2023",
        time: "10:30 AM",
        location: "New York JFK Airport, USA",
        status: "Customs clearance in progress",
        icon: Clock,
      },
      {
        date: "April 25, 2023",
        time: "03:45 PM",
        location: "New York JFK Airport, USA",
        status: "Customs clearance completed",
        icon: CheckCircle2,
      },
      {
        date: "April 26, 2023",
        time: "09:00 AM",
        location: "New York Distribution Center, USA",
        status: "Out for delivery",
        icon: Truck,
      },
      {
        date: "April 27, 2023",
        time: "02:15 PM",
        location: "New York, USA",
        status: "Delivered",
        icon: CheckCircle2,
        current: true,
      },
    ],
  },
  GL456789123: {
    status: "processing",
    origin: "London, UK",
    destination: "Sydney, Australia",
    estimatedDelivery: "June 5, 2023",
    customer: "Australian Imports Ltd.",
    shipmentType: "Sea Freight",
    weight: "3,200 kg",
    trackingHistory: [
      {
        date: "May 1, 2023",
        time: "10:30 AM",
        location: "London Warehouse, UK",
        status: "Shipment received",
        icon: Package,
        current: true,
      },
    ],
  },
}

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [shipment, setShipment] = useState<any>(null)
  const [error, setError] = useState("")
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault()

    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number")
      setShipment(null)
      return
    }

    // Check if tracking number exists in mock data
    if (mockShipments[trackingNumber as keyof typeof mockShipments]) {
      setShipment(mockShipments[trackingNumber as keyof typeof mockShipments])
      setError("")
    } else {
      setError("Tracking number not found. Please check and try again.")
      setShipment(null)
    }
  }

  const handleAssistanceRequest = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formElement = e.target as HTMLFormElement
    const formData = new FormData(formElement)
    const formValues: Record<string, string> = {}

    // Convert FormData to a plain object
    formData.forEach((value, key) => {
      formValues[key] = value.toString()
    })

    try {
      const result = await submitTrackingForm(formValues)

      if (result.success) {
        toast({
          title: "Request Sent",
          description: "Your assistance request has been sent successfully. Our team will contact you shortly.",
          variant: "default",
        })
        formElement.reset()
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your request. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Helper function to get status color - Updated to use green tones
  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "text-green-600"
      case "in-transit":
        return "text-green-500"
      case "processing":
        return "text-green-400"
      default:
        return "text-green-300"
    }
  }

  // Helper function to get status icon - Updated icon colors to green
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle2 className="h-6 w-6 text-green-600" />
      case "in-transit":
        return <Truck className="h-6 w-6 text-green-500" />
      case "processing":
        return <Clock className="h-6 w-6 text-green-400" />
      default:
        return <AlertCircle className="h-6 w-6 text-green-300" />
    }
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2 text-green-700">Track Your Shipment</h1>
          <p className="text-green-600">Enter your tracking number to get real-time updates on your shipment</p>
        </div>

        <Card className="mb-8">
          <CardHeader className="border-b border-green-100">
            <CardTitle className="text-green-700">Shipment Tracking</CardTitle>
            <CardDescription className="text-green-500">
              Enter your tracking number to get detailed information about your shipment
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleTracking} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Enter tracking number (e.g., GL123456789)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="w-full border-green-200 focus:border-green-400 focus:ring-green-400"
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>
              <Button type="submit" className="whitespace-nowrap bg-green-600 hover:bg-green-700">
                <Search className="mr-2 h-4 w-4" /> Track Shipment
              </Button>
            </form>

            <div className="mt-4">
              <p className="text-sm text-green-500">
                Example tracking numbers for demo: GL123456789, GL987654321, GL456789123
              </p>
            </div>
          </CardContent>
        </Card>

        {shipment && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-green-700">Shipment {trackingNumber}</CardTitle>
                    <CardDescription className="text-green-500">
                      {shipment.origin} to {shipment.destination}
                    </CardDescription>
                  </div>
                  <div className="flex items-center">
                    {getStatusIcon(shipment.status)}
                    <span className={`ml-2 font-medium ${getStatusColor(shipment.status)}`}>
                      {shipment.status === "delivered"
                        ? "Delivered"
                        : shipment.status === "in-transit"
                          ? "In Transit"
                          : "Processing"}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="details">
                  <TabsList className="grid w-full grid-cols-2 bg-green-50">
                    <TabsTrigger value="details" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700">Shipment Details</TabsTrigger>
                    <TabsTrigger value="history" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700">Tracking History</TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="pt-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-green-500">Origin</h3>
                          <p className="font-medium text-green-700">{shipment.origin}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-green-500">Destination</h3>
                          <p className="font-medium text-green-700">{shipment.destination}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-green-500">Customer</h3>
                          <p className="font-medium text-green-700">{shipment.customer}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-green-500">Shipment Type</h3>
                          <p className="font-medium text-green-700">{shipment.shipmentType}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-green-500">Status</h3>
                          <p className={`font-medium ${getStatusColor(shipment.status)}`}>
                            {shipment.status === "delivered"
                              ? "Delivered"
                              : shipment.status === "in-transit"
                                ? "In Transit"
                                : "Processing"}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-green-500">
                            {shipment.status === "delivered" ? "Delivery Date" : "Estimated Delivery"}
                          </h3>
                          <p className="font-medium text-green-700">
                            {shipment.status === "delivered" ? shipment.actualDelivery : shipment.estimatedDelivery}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-green-500">Weight</h3>
                          <p className="font-medium text-green-700">{shipment.weight}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-green-500">Tracking Number</h3>
                          <p className="font-medium text-green-700">{trackingNumber}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="history" className="pt-4">
                    <div className="relative">
                      <div className="absolute left-4 top-0 h-full w-0.5 bg-green-200"></div>
                      <div className="space-y-6">
                        {shipment.trackingHistory.map((event: any, index: number) => (
                          <div key={index} className="relative pl-10">
                            <div
                              className={`absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border ${
                                event.current ? "border-green-600 bg-green-50" : "border-green-200 bg-white"
                              }`}
                            >
                              {React.createElement(event.icon, {
                                className: `h-4 w-4 ${event.current ? "text-green-600" : "text-green-400"}`,
                              })}
                            </div>
                            <div className={`${event.current ? "font-medium" : ""}`}>
                              <p className="text-sm text-green-500">
                                {event.date} • {event.time}
                              </p>
                              <p className="font-medium text-green-700">{event.status}</p>
                              <p className="text-sm text-green-600">{event.location}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-green-100 pt-6">
                <Button variant="outline" asChild className="border-green-500 text-green-600 hover:bg-green-50">
                  <Link href="/contact">Need Help?</Link>
                </Button>
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href={`/tracking/details/${trackingNumber}`}>View Detailed Report</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Related Services */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4 text-green-700">Related Services</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Card className="border-green-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-green-700">Need Assistance?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-green-600">
                      Our customer service team is available 24/7 to help with your shipment.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full border-green-500 text-green-600 hover:bg-green-50">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-green-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-green-700">Schedule a Pickup</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-green-600">
                      Need to ship something? Schedule a pickup from your location.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full border-green-500 text-green-600 hover:bg-green-50">
                      <Link href="/services">Our Services</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-green-100">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-green-700">Get a Quote</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-green-600">Request a customized quote for your shipping needs.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full border-green-500 text-green-600 hover:bg-green-50">
                      <Link href="/quote">Request Quote</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Need Assistance Form */}
        {!shipment && !error && (
          <Card className="mt-12 border-green-100">
            <CardHeader>
              <CardTitle className="text-green-700">Need Assistance with Tracking?</CardTitle>
              <CardDescription className="text-green-500">
                If you're having trouble tracking your shipment, fill out the form below and our team will assist you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAssistanceRequest} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-green-600">
                      Full Name
                    </label>
                    <Input id="name" name="name" placeholder="John Doe" required className="border-green-200 focus:border-green-400 focus:ring-green-400" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-green-600">
                      Email Address
                    </label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required className="border-green-200 focus:border-green-400 focus:ring-green-400" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-green-600">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" placeholder="+1 (555) 123-4567" required className="border-green-200 focus:border-green-400 focus:ring-green-400" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="trackingNumber" className="text-sm font-medium text-green-600">
                      Tracking Number (if available)
                    </label>
                    <Input id="trackingNumber" name="trackingNumber" placeholder="e.g., GL123456789" className="border-green-200 focus:border-green-400 focus:ring-green-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-green-600">
                    How can we help you?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md border-green-200 focus:border-green-400 focus:ring-green-400 focus:outline-none"
                    placeholder="Please describe the issue you're experiencing with tracking your shipment..."
                    required
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* FAQ Section */}
        {!shipment && !error && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-green-700">Frequently Asked Questions</h2>
            <div className="grid gap-4">
              <Card className="border-green-100">
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">How do I track my shipment?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-600">
                    Enter your tracking number in the field above. Your tracking number was provided in your shipping
                    confirmation email or receipt.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-100">
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">What if I lost my tracking number?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-600">
                    If you've lost your tracking number, please contact our customer service team with your order
                    details, and they'll help you locate your shipment.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-100">
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">How often is tracking information updated?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-600">
                    Tracking information is typically updated within 24 hours of a shipment milestone. For international
                    shipments, updates may take longer depending on customs processing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-100">
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">What do the different shipment statuses mean?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-600">
                    <span className="font-medium text-green-700">Processing:</span> Your shipment has been received and is being
                    prepared for transit.
                    <br />
                    <span className="font-medium text-green-700">In Transit:</span> Your shipment is on its way to the destination.
                    <br />
                    <span className="font-medium text-green-700">Delivered:</span> Your shipment has been delivered to the recipient.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}