'use client'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export default function SpeedComparison() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      scaleX: [0, 1],
      transition: { duration: 2, ease: "easeOut" }
    })
  }, [controls])

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Experience the Speed Difference</h2>
        
        <div className="space-y-12">
          {/* Xfiber Speed */}
          <div className="relative">
            <div className="flex items-center mb-2">
              <span className="text-white font-bold">XFIBER</span>
              <span className="ml-auto text-white">1 Gbps</span>
            </div>
            <motion.div 
              className="h-4 bg-blue-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={controls}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Traditional Internet */}
          <div className="relative">
            <div className="flex items-center mb-2">
              <span className="text-white font-bold">Traditional</span>
              <span className="ml-auto text-white">100 Mbps</span>
            </div>
            <motion.div 
              className="h-4 bg-gray-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 0.1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
