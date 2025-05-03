"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "@/lib/actions"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const formValues: Record<string, string> = {}

    // Convert FormData to a plain object
    formData.forEach((value, key) => {
      formValues[key] = value.toString()
    })

    try {
      const result = await submitContactForm(formValues)

      if (result.success) {
        toast({
          title: "Message Sent",
          description: "Your message has been sent successfully!",
          variant: "default",
        })
        // Reset the form
        event.currentTarget.reset()
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
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form 
  target="_blank" 
  action="https://formsubmit.co/admin@arthurgreatservices.com.ng" 
  method="POST" 
  className="space-y-6"
>
<input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_autoresponse" value="Thank you for your quote request!" />
<input type="hidden" name="_template" value="table" />
<input type="hidden" name="_next" value="https://arthurgreatserviceslogistics.vercel.app/" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name
          </label>
          <Input id="name" name="name" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <Input id="email" name="email" type="email" placeholder="john@example.com" required />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium">
          Company Name
        </label>
        <Input id="company" name="company" placeholder="Your Company Ltd." />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <Input id="subject" name="subject" placeholder="How can we help you?" required />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Please provide details about your inquiry..."
          required
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
