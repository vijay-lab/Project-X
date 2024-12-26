'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
export default function Footer() {
  return (
    <footer className="bg-blue-900/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">XFiber</h3>
            <p className="text-white/80">
              Delivering lightning-fast internet solutions for homes and businesses.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-white/80 hover:text-white">
                <FaFacebook size={24} />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <FaInstagram size={24} />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-white/80 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-white/80 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#plans" className="text-white/80 hover:text-white">
                  Plans
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/80 hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white">
                  Network Status
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/80">
                123 Fiber Street
                <br />
                Tech City, TC 12345
              </li>
              <li className="text-white/80">
                Phone: +1 234 567 890
              </li>
              <li className="text-white/80">
                Email: contact@xfiber.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80">
              © 2024 XFiber. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-white/80 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
