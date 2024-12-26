'use client'
import { motion } from 'framer-motion'
import { PhoneIcon, ChatBubbleLeftIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const faqs = [
  {
    question: "What speeds can I expect?",
    answer: "Our fiber plans offer speeds ranging from 100Mbps to 1Gbps, with consistent performance throughout the day."
  },
  {
    question: "How long does installation take?",
    answer: "Standard installation typically takes 2-4 hours, and we'll schedule it at your convenience."
  },
  {
    question: "Is there a long-term contract?",
    answer: "We offer flexible plans with both monthly and annual options to suit your needs."
  },
  {
    question: "What areas do you cover?",
    answer: "We currently service major metropolitan areas and are rapidly expanding. Check availability using our coverage checker."
  }
]

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const sections = [
    { id: 'home', label: 'Home', component: () => null },
    { id: 'features', label: 'Features', component: () => null },
    { id: 'plans', label: 'Plans', component: () => null },
    { id: 'installation', label: 'Installation', component: () => null },
    { id: 'testimonials', label: 'Testimonials', component: () => null }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800">
      <Navbar sections={sections} />
      
      <div className="pt-20 max-w-6xl mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          How Can We Help You?
        </motion.h1>

        {/* Contact Options */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Call Option */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all">
            <PhoneIcon className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Call Us</h3>
            <p className="text-blue-100 mb-6">Available 24/7 for your support needs</p>
            <a 
              href="tel:+1234567890" 
              className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Call Now
            </a>
          </div>

          {/* WhatsApp Option */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all">
            <Image 
              src="/whatsapp-icon.png" 
              alt="WhatsApp" 
              width={48} 
              height={48} 
              className="mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-4">WhatsApp Support</h3>
            <p className="text-blue-100 mb-6">Quick responses through WhatsApp</p>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank"
              className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:bg-white/20 transition-all"
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
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
