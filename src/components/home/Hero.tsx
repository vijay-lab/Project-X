'use client'
import { motion } from 'framer-motion'


export default function Hero() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-4 md:px-0">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-4 md:mb-6"
        >
          <span className="text-blue-400">X</span>Fiber
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto"
        >
          Experience the Future of Internet
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button className="w-full sm:w-auto bg-blue-500 text-white px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold hover:bg-blue-600 transition-all">
            Get Started
          </button>
          <button className="w-full sm:w-auto border border-white/30 text-white px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold hover:bg-white/10 transition-all">
            View Plans
          </button>
        </motion.div>
      </div>
    </div>
  )
}
