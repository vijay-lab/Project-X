'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1 
          className="text-6xl font-bold text-white mb-6"
          whileHover={{ scale: 1.05 }}
        >
          Choose Your Perfect Speed
        </motion.h1>
        <motion.p 
          className="text-xl text-blue-100 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          High-speed internet plans starting from $39.99
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg"
        >
          View Plans →
        </motion.button>
      </motion.div>
    </div>
  )
}
