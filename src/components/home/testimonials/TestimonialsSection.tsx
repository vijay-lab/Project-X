'use client'
import { motion } from 'framer-motion'
import { StarIcon, BoltIcon, CurrencyRupeeIcon, WrenchIcon } from '@heroicons/react/24/solid'
import { useState, useEffect, ReactElement } from 'react'

type HighlightType = 'speed' | 'cost' | 'service'

interface Testimonial {
  id: number
  name: string
  role: string
  rating: number
  highlight: HighlightType
  content: string
}

const highlightIcons: Record<HighlightType, ReactElement> = {
  speed: <BoltIcon className="h-6 w-6 text-yellow-400" />,
  cost: <CurrencyRupeeIcon className="h-6 w-6 text-green-400" />,
  service: <WrenchIcon className="h-6 w-6 text-blue-400" />
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Business Owner",
    rating: 5,
    highlight: "speed",
    content: "Downloads that used to take hours now complete in minutes. Running my entire office operations smoothly!"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Work from Home Professional",
    rating: 5,
    highlight: "service",
    content: "Technical team responded within 30 minutes when I needed help. Excellent service support!"
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Gaming Enthusiast",
    rating: 4,
    highlight: "speed",
    content: "Zero lag gaming experience! The low latency makes online gaming perfect."
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "Homemaker",
    rating: 5,
    highlight: "cost",
    content: "Best value for money! Getting unlimited data at such affordable rates is amazing."
  },
  {
    id: 5,
    name: "Vikram Mehta",
    role: "Small Business Owner",
    rating: 4,
    highlight: "service",
    content: "Quick installation and professional team. They guided me through the entire setup."
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      setCurrentIndex(prev => Math.min(prev + 1, testimonials.length - 1))
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      setCurrentIndex(prev => Math.max(prev - 1, 0))
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      )
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Customer Success Stories
          </h2>
          <p className="text-blue-100 text-lg md:text-xl">
            Join our growing family of satisfied customers
          </p>
        </motion.div>

        <div 
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex transition-all duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] px-4"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 h-full border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-white font-bold">{testimonial.name}</h3>
                      <p className="text-blue-200 text-sm">{testimonial.role}</p>
                    </div>
                    {highlightIcons[testimonial.highlight]}
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white text-sm md:text-base">{testimonial.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
