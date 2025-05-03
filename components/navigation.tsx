"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Truck, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold hidden sm:inline-block">GlobalLogistics</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive("/") ? "text-blue-600" : "text-gray-600"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive("/about") ? "text-blue-600" : "text-gray-600"}`}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive("/services") ? "text-blue-600" : "text-gray-600"}`}
          >
            Services
          </Link>
          <Link
            href="/tracking"
            className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive("/tracking") ? "text-blue-600" : "text-gray-600"}`}
          >
            Tracking
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive("/blog") ? "text-blue-600" : "text-gray-600"}`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive("/contact") ? "text-blue-600" : "text-gray-600"}`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/quote">
            <Button>Get a Quote</Button>
          </Link>
          <Link href="/tracking" className="text-sm font-medium text-blue-600 hover:underline">
            Track Shipment
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <Link href="/" className="flex items-center gap-2">
                  <Truck className="h-6 w-6 text-blue-600" />
                  <span className="text-xl font-bold">GlobalLogistics</span>
                </Link>
              </div>

              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className={`text-lg font-medium py-2 transition-colors hover:text-blue-600 ${isActive("/") ? "text-blue-600" : "text-gray-600"}`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`text-lg font-medium py-2 transition-colors hover:text-blue-600 ${isActive("/about") ? "text-blue-600" : "text-gray-600"}`}
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className={`text-lg font-medium py-2 transition-colors hover:text-blue-600 ${isActive("/services") ? "text-blue-600" : "text-gray-600"}`}
                >
                  Services
                </Link>
                <Link
                  href="/tracking"
                  className={`text-lg font-medium py-2 transition-colors hover:text-blue-600 ${isActive("/tracking") ? "text-blue-600" : "text-gray-600"}`}
                >
                  Tracking
                </Link>
                <Link
                  href="/blog"
                  className={`text-lg font-medium py-2 transition-colors hover:text-blue-600 ${isActive("/blog") ? "text-blue-600" : "text-gray-600"}`}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className={`text-lg font-medium py-2 transition-colors hover:text-blue-600 ${isActive("/contact") ? "text-blue-600" : "text-gray-600"}`}
                >
                  Contact
                </Link>
              </nav>

              <div className="mt-auto space-y-4 pt-6">
                <Link href="/quote" className="w-full">
                  <Button className="w-full">Get a Quote</Button>
                </Link>
                <Link href="/tracking" className="w-full">
                  <Button variant="outline" className="w-full">
                    Track Shipment
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
