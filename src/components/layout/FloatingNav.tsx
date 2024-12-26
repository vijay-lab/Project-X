'use client'
import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

interface Section {
  id: string
  label: string
}

const sections: Section[] = [
  { id: 'home', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'plans', label: 'Plans' },
  { id: 'installation', label: 'Installation' },
  { id: 'testimonials', label: 'Testimonials' }
]

export default function FloatingNav() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState('home')
  const { scrollY } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }))

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToNextSection = () => {
    const currentIndex = sections.findIndex(section => section.id === activeSection)
    const nextSection = sections[currentIndex + 1]
    if (nextSection) {
      document.getElementById(nextSection.id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50"
      >
        <ul className="space-y-4">
          {sections.map(section => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="group flex items-center"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300 mr-2
                    ${activeSection === section.id
                      ? 'bg-white w-4'
                      : 'bg-white/50 group-hover:bg-white'
                    }`}
                />
                <span
                  className={`text-sm transition-all duration-300
                    ${activeSection === section.id
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                    } text-white`}
                >
                  {section.label}
                </span>
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => router.push('/contact')}
              className="group flex items-center"
            >
              <span className="w-2 h-2 rounded-full transition-all duration-300 mr-2 bg-white/50 group-hover:bg-white" />
              <span className="text-sm transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-white">
                Contact
              </span>
            </button>
          </li>
        </ul>
      </motion.nav>

      {activeSection !== sections[sections.length - 1].id && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={scrollToNextSection}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-colors"
        >
          <ChevronDownIcon className="h-6 w-6 text-white animate-bounce" />
        </motion.button>
      )}
    </>
  )
}
