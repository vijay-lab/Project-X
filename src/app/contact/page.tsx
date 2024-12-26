'use client'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { useState } from 'react'

const sections = [
    { id: 'home', label: 'Home', component: () => null },
    { id: 'features', label: 'Features', component: () => null },
    { id: 'plans', label: 'Plans', component: () => null },
    { id: 'installation', label: 'Installation', component: () => null },
    { id: 'testimonials', label: 'Testimonials', component: () => null }
  ]
  

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800">
      <Navbar sections={sections} />
      <div className="pt-20 max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's Connect</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {status && (
                  <div className={`text-center p-2 rounded ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                    {status}
                  </div>
                )}
              </form>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <EnvelopeIcon className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-lg">Email Us</h3>
                  <p className="text-white/80">support@xfiber.com</p>
                  <p className="text-white/80">sales@xfiber.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <PhoneIcon className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-lg">Call Us</h3>
                  <p className="text-white/80">Support: +1 (555) 123-4567</p>
                  <p className="text-white/80">Sales: +1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPinIcon className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-lg">Visit Us</h3>
                  <p className="text-white/80">123 Fiber Street</p>
                  <p className="text-white/80">Tech City, TC 12345</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 mt-8">
                <h3 className="text-white font-bold text-lg mb-4">Business Hours</h3>
                <div className="space-y-2 text-white/80">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
