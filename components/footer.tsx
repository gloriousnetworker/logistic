import Link from "next/link"
import { Truck, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Truck className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold text-white">Arthur Great Logistics</span>
            </div>
            <p className="text-sm mb-4">
            Your Premier Freight forwarding partner For the freight forwarding
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/freight-forwarding" className="hover:text-blue-400 transition-colors">
                  Freight Forwarding
                </Link>
              </li>
              <li>
                <Link href="/services/haulage" className="hover:text-blue-400 transition-colors">
                  Haulage Services
                </Link>
              </li>
              <li>
                <Link href="/services/clearing-forwarding" className="hover:text-blue-400 transition-colors">
                  Clearing & Forwarding
                </Link>
              </li>
              <li>
                <Link href="/services/consultancy" className="hover:text-blue-400 transition-colors">
                  Logistics Consultancy
                </Link>
              </li>
              <li>
                <Link href="/services/air-freight" className="hover:text-blue-400 transition-colors">
                  Air Freight
                </Link>
              </li>
              <li>
                <Link href="/services/warehousing" className="hover:text-blue-400 transition-colors">
                  Warehousing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/tracking" className="hover:text-blue-400 transition-colors">
                  Track Shipment
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-blue-400 transition-colors">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>24, Hospital Road, Olodi-Apapa, Lagos - Nigeria.</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+234 906 036 0506</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>admin@arthurgreatservices.com.ng</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium text-white mb-2">Business Hours</h4>
              <p className="text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-sm">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Arthur Great Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
