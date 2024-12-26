'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface NavbarProps {
  sections: {
    id: string
    label: string
    component: React.ComponentType
  }[]
}

export default function Navbar({ sections }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-blue-900/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="XFiber Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {sections.map(({ id, label }) => (
                <Link
                  key={id}
                  href={isHomePage ? `#${id}` : `/#${id}`}
                  className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/support"
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Support
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors">
                Get Started
              </button>
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {sections.map(({ id, label }) => (
                <Link
                  key={id}
                  href={isHomePage ? `#${id}` : `/#${id}`}
                  className="block px-3 py-2 text-white hover:bg-white/10 rounded-md text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/support"
                className="block px-3 py-2 text-white hover:bg-white/10 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white hover:bg-white/10 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 bg-white text-blue-600 hover:bg-blue-50 rounded-md text-base font-medium mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
