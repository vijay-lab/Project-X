'use client'
import { motion } from 'framer-motion'
import { PhoneIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Call Option */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <PhoneIcon className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Call Us</h3>
            <p className="text-blue-100 mb-6">Speak directly with our support team</p>
            <a 
              href="tel:+1234567890" 
              className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            >
              Call Now
            </a>
          </div>

          {/* WhatsApp Option */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <Image 
              src="/whatsapp-icon.png" 
              alt="WhatsApp" 
              width={48} 
              height={48} 
              className="mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-4">WhatsApp Support</h3>
            <p className="text-blue-100 mb-6">Chat with us on WhatsApp</p>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank"
              className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
            >
              Open WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
