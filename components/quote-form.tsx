"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { submitQuoteForm } from "@/lib/actions"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

type QuoteFormProps = {
  quoteType: string
}

export default function QuoteForm({ quoteType }: QuoteFormProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const formValues: Record<string, string> = {}

    // Convert FormData to a plain object
    formData.forEach((value, key) => {
      formValues[key] = value.toString()
    })

    // Add the quote type to the form data
    formValues.quoteType = quoteType

    try {
      const result = await submitQuoteForm(formValues, quoteType)

      if (result.success) {
        setFormSubmitted(true)
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
        description: "There was an error submitting your quote request. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (formSubmitted) {
    return (
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-green-600">Quote Request Received</CardTitle>
          <CardDescription className="text-center">Thank you for your interest in our services</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="h-16 w-16 text-green-600" />
          </div>
          <p className="mb-6">
            Your quote request has been successfully submitted. One of our logistics specialists will review your
            requirements and contact you within 24 hours with a customized quote.
          </p>
          <p className="font-medium">If you have any urgent questions, please don't hesitate to contact us directly.</p>
        </CardContent>
        <div className="flex justify-center gap-4 p-6">
          <Button asChild variant="outline">
            <Link href="/">Return to Home</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </Card>
    )
  }

  // Render the appropriate form based on the quote type
  if (quoteType === "Freight Services") {
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Service Information</h3>

          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="service-type">Service Type</Label>
              <Select name="serviceType" defaultValue="sea-freight">
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sea-freight">Sea Freight</SelectItem>
                  <SelectItem value="air-freight">Air Freight</SelectItem>
                  <SelectItem value="road-freight">Road Freight</SelectItem>
                  <SelectItem value="rail-freight">Rail Freight</SelectItem>
                  <SelectItem value="multimodal">Multimodal Transport</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="origin">Origin (City, Country)</Label>
                <Input id="origin" name="origin" placeholder="e.g., London, UK" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">Destination (City, Country)</Label>
                <Input id="destination" name="destination" placeholder="e.g., New York, USA" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Cargo Type</Label>
              <RadioGroup defaultValue="general" name="cargoType">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="general" id="general" />
                  <Label htmlFor="general">General Cargo</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hazardous" id="hazardous" />
                  <Label htmlFor="hazardous">Hazardous Materials</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="perishable" id="perishable" />
                  <Label htmlFor="perishable">Perishable Goods</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="oversized" id="oversized" />
                  <Label htmlFor="oversized">Oversized Cargo</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="weight">Total Weight (kg)</Label>
                <Input id="weight" name="weight" type="number" placeholder="e.g., 1000" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="volume">Volume (m³)</Label>
                <Input id="volume" name="volume" type="number" placeholder="e.g., 10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Container Type (if applicable)</Label>
              <Select name="containerType">
                <SelectTrigger>
                  <SelectValue placeholder="Select container type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="20ft">20ft Standard</SelectItem>
                  <SelectItem value="40ft">40ft Standard</SelectItem>
                  <SelectItem value="40ft-hc">40ft High Cube</SelectItem>
                  <SelectItem value="reefer">Refrigerated Container</SelectItem>
                  <SelectItem value="open-top">Open Top Container</SelectItem>
                  <SelectItem value="flat-rack">Flat Rack Container</SelectItem>
                  <SelectItem value="na">Not Applicable</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Additional Services</Label>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="customs-clearance" name="additionalServices" value="customs-clearance" />
                  <Label htmlFor="customs-clearance">Customs Clearance</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="insurance" name="additionalServices" value="insurance" />
                  <Label htmlFor="insurance">Cargo Insurance</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="warehousing" name="additionalServices" value="warehousing" />
                  <Label htmlFor="warehousing">Warehousing</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="door-to-door" name="additionalServices" value="door-to-door" />
                  <Label htmlFor="door-to-door">Door-to-Door Delivery</Label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Contact Information</h3>

          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" name="company" placeholder="Acme Inc." />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" placeholder="+1 (555) 123-4567" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Please provide any additional information about your shipment requirements"
                rows={4}
              />
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Quote Request"}
        </Button>
      </form>
    )
  }

  if (quoteType === "Clearing & Forwarding") {
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Service Information</h3>

          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="service-type">Service Type</Label>
              <Select name="serviceType" defaultValue="import">
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="import">Import Clearance</SelectItem>
                  <SelectItem value="export">Export Clearance</SelectItem>
                  <SelectItem value="transit">Transit Clearance</SelectItem>
                  <SelectItem value="documentation">Documentation Only</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="origin-country">Origin Country</Label>
                <Input id="origin-country" name="originCountry" placeholder="e.g., United Kingdom" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination-country">Destination Country</Label>
                <Input id="destination-country" name="destinationCountry" placeholder="e.g., United States" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="goods-description">Description of Goods</Label>
              <Textarea
                id="goods-description"
                name="goodsDescription"
                placeholder="Please provide a detailed description of the goods"
                rows={3}
                required
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="shipment-value">Shipment Value (USD)</Label>
                <Input id="shipment-value" name="shipmentValue" type="number" placeholder="e.g., 10000" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="incoterm">Incoterm</Label>
                <Select name="incoterm">
                  <SelectTrigger>
                    <SelectValue placeholder="Select Incoterm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="exw">EXW (Ex Works)</SelectItem>
                    <SelectItem value="fob">FOB (Free on Board)</SelectItem>
                    <SelectItem value="cif">CIF (Cost, Insurance & Freight)</SelectItem>
                    <SelectItem value="dap">DAP (Delivered at Place)</SelectItem>
                    <SelectItem value="ddp">DDP (Delivered Duty Paid)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Additional Services</Label>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="duty-payment" name="additionalServices" value="duty-payment" />
                  <Label htmlFor="duty-payment">Duty & Tax Payment</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="permit-application" name="additionalServices" value="permit-application" />
                  <Label htmlFor="permit-application">Permit Application</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="inspection" name="additionalServices" value="inspection" />
                  <Label htmlFor="inspection">Inspection Coordination</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="documentation-prep" name="additionalServices" value="documentation-prep" />
                  <Label htmlFor="documentation-prep">Documentation Preparation</Label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Contact Information</h3>

          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name-clearing">Full Name</Label>
                <Input id="name-clearing" name="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-clearing">Company Name</Label>
                <Input id="company-clearing" name="company" placeholder="Acme Inc." />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email-clearing">Email Address</Label>
                <Input id="email-clearing" name="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone-clearing">Phone Number</Label>
                <Input id="phone-clearing" name="phone" placeholder="+1 (555) 123-4567" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes-clearing">Additional Notes</Label>
              <Textarea
                id="notes-clearing"
                name="notes"
                placeholder="Please provide any additional information about your clearance requirements"
                rows={4}
              />
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Quote Request"}
        </Button>
      </form>
    )
  }

  if (quoteType === "Logistics Consultancy") {
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Service Information</h3>

          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="consultancy-type">Consultancy Type</Label>
              <Select name="consultancyType" defaultValue="supply-chain">
                <SelectTrigger>
                  <SelectValue placeholder="Select consultancy type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="supply-chain">Supply Chain Optimization</SelectItem>
                  <SelectItem value="network-design">Logistics Network Design</SelectItem>
                  <SelectItem value="cost-reduction">Cost Reduction Strategy</SelectItem>
                  <SelectItem value="technology">Technology Implementation</SelectItem>
                  <SelectItem value="compliance">Regulatory Compliance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="business-description">Business Description</Label>
              <Textarea
                id="business-description"
                name="businessDescription"
                placeholder="Please provide a brief description of your business and industry"
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="current-challenges">Current Logistics Challenges</Label>
              <Textarea
                id="current-challenges"
                name="currentChallenges"
                placeholder="Describe the logistics challenges your business is currently facing"
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="project-scope">Project Scope</Label>
              <Textarea
                id="project-scope"
                name="projectScope"
                placeholder="Outline the scope of the consultancy project you're looking for"
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Project Timeline</Label>
              <RadioGroup defaultValue="1-3months" name="projectTimeline">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="urgent" id="urgent" />
                  <Label htmlFor="urgent">Urgent (Less than 1 month)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1-3months" id="1-3months" />
                  <Label htmlFor="1-3months">1-3 months</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3-6months" id="3-6months" />
                  <Label htmlFor="3-6months">3-6 months</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="6months+" id="6months+" />
                  <Label htmlFor="6months+">More than 6 months</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Contact Information</h3>

          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name-consultancy">Full Name</Label>
                <Input id="name-consultancy" name="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position/Title</Label>
                <Input id="position" name="position" placeholder="Supply Chain Manager" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company-consultancy">Company Name</Label>
              <Input id="company-consultancy" name="company" placeholder="Acme Inc." required />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email-consultancy">Email Address</Label>
                <Input id="email-consultancy" name="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone-consultancy">Phone Number</Label>
                <Input id="phone-consultancy" name="phone" placeholder="+1 (555) 123-4567" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes-consultancy">Additional Information</Label>
              <Textarea
                id="notes-consultancy"
                name="notes"
                placeholder="Please provide any additional information that might help us understand your consultancy needs"
                rows={4}
              />
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Quote Request"}
        </Button>
      </form>
    )
  }

  return null
}
