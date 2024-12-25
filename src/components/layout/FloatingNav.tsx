'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'plans', label: 'Plans' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'installation', label: 'Installation' },
  { id: 'contact', label: 'Contact' }
]

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-full p-2">
        {navItems.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`block w-3 h-3 my-2 rounded-full transition-all ${
              activeSection === id 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          >
            <span className="sr-only">{label}</span>
          </button>
        ))}
      </div>
    </motion.div>
  )
}
