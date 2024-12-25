'use client'
import { motion, useAnimation, PanInfo } from 'framer-motion'
import { StarIcon, BoltIcon, CurrencyRupeeIcon, WrenchIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
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
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
        )
      }, 3000)

      return () => clearInterval(timer)
    }
  }, [isPaused])

  const handleDragStart = () => {
    setIsDragging(true)
    setIsPaused(true)
  }

  const handleDragEnd = (event: MouseEvent, info: PanInfo) => {
    setIsDragging(false)
    setIsPaused(false)
    
    const swipeThreshold = 50
    if (info.offset.x < -swipeThreshold && currentIndex < testimonials.length - 3) {
      setCurrentIndex(prev => prev + 1)
    } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Customer Success Stories
          </h2>
          <p className="text-blue-100 text-xl">
            Join our growing family of satisfied customers
          </p>
        </motion.div>

        <div 
          className="relative overflow-hidden group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute inset-y-0 left-0 z-10 flex items-center">
            <button 
              onClick={() => currentIndex > 0 && setCurrentIndex(prev => prev - 1)}
              className="p-2 bg-white/20 rounded-full backdrop-blur-sm transition-opacity opacity-0 group-hover:opacity-100 ml-2"
            >
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 z-10 flex items-center">
            <button 
              onClick={() => currentIndex < testimonials.length - 3 && setCurrentIndex(prev => prev + 1)}
              className="p-2 bg-white/20 rounded-full backdrop-blur-sm transition-opacity opacity-0 group-hover:opacity-100 mr-2"
            >
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </button>
          </div>

          <motion.div 
            className={`flex transition-all ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            transition={{ type: "tween", duration: 0.5 }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="min-w-[33.33%] px-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 h-full border border-white/5 hover:border-white/20 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-white font-bold">{testimonial.name}</h3>
                      <p className="text-blue-200">{testimonial.role}</p>
                    </div>
                    {highlightIcons[testimonial.highlight]}
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-white">{testimonial.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.slice(0, testimonials.length - 2).map((_, index) => (
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
