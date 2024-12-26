'use client'
import { motion } from 'framer-motion'

export default function DataFlow() {
  return (
    <div className="relative h-[600px] w-[600px]">
      {/* Data Streams */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-0 h-1 rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-transparent"
          style={{
            top: `${i * 12}%`,
            width: '100%',
          }}
          animate={{
            x: [-100, 600],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear"
          }}
        />
      ))}

      {/* Digital Nodes */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-4 h-4 bg-blue-400 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  )
}
