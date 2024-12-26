'use client'

import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const steps = [
  {
    title: 'Submit Request',
    description: 'Fill out our simple online form',
    icon: CheckCircleIcon,
    color: 'bg-blue-500'
  },
  {
    title: 'Site Survey',
    description: 'Our team visits your location',
    icon: CheckCircleIcon,
    color: 'bg-purple-500'
  },
  {
    title: 'Installation',
    description: 'Professional fiber setup',
    icon: CheckCircleIcon,
    color: 'bg-green-500'
  },
  {
    title: 'Activation',
    description: 'Your connection goes live',
    icon: CheckCircleIcon,
    color: 'bg-yellow-500'
  }
]

export default function InstallationGuide() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-white text-center mb-12"
      >
        Simple Installation Process
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl h-full">
              <div className={`${step.color} w-12 h-12 rounded-lg mb-4 flex items-center justify-center`}>
                <step.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-white/80">{step.description}</p>
            </div>
            
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/20" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
