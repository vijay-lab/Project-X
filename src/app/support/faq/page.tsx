'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const faqs = [
  {
    question: "What speeds can I expect?",
    answer: "Our fiber plans offer speeds ranging from 100Mbps to 1Gbps, with consistent performance throughout the day."
  },
  {
    question: "How long does installation take?",
    answer: "Standard installation typically takes 2-4 hours, and we'll schedule it at your convenience."
  },
  // Add more FAQs
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center text-white"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <ChevronDownIcon 
                  className={`h-5 w-5 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-blue-100">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
