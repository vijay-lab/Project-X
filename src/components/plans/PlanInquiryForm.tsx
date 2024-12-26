'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface PlanInquiryFormProps {
  selectedPlan: {
    name: string
    speed: string
    data: string
    price: number
    duration: string
  }
  onClose: () => void
}

export default function PlanInquiryForm({ selectedPlan, onClose }: PlanInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    landmark: '',
    pincode: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formattedMessage = `
Plan Details:
------------
Plan: ${selectedPlan.name}
Speed: ${selectedPlan.speed} Mbps
Data: ${selectedPlan.data}
Price: ₹${selectedPlan.price}/month
Duration: ${selectedPlan.duration} Days

Customer Details:
---------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
Landmark: ${formData.landmark}
Pincode: ${formData.pincode}
    `
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formattedMessage
        })
      })

      const responseText = await response.text()
      const data = responseText ? JSON.parse(responseText) : {}

      if (response.ok) {
        setStatus('Thank you for your interest! We will contact you shortly.')
        setTimeout(onClose, 3000)
      } else {
        setStatus(`Server Error: ${data.error || responseText || response.statusText}`)
        console.log('Response:', {
          status: response.status,
          text: responseText,
          data
        })
      }
    } catch (err) {
      const error = err as Error
      setStatus(`Error Details: ${error.message}`)
      console.log('Full error:', error)
    } finally {
      setIsSubmitting(false)
    }  }

  // Rest of your component remains the same
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 max-w-md w-full text-white"
      >
        <h2 className="text-2xl font-bold mb-4">Get Started with {selectedPlan.name}</h2>
        <p className="text-blue-100 mb-6">
          {selectedPlan.speed}Mbps | {selectedPlan.data} | ₹{selectedPlan.price}/mo | {selectedPlan.duration} Days
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Landmark</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.landmark}
              onChange={(e) => setFormData({...formData, landmark: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Pincode</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.pincode}
              onChange={(e) => setFormData({...formData, pincode: e.target.value})}
            />
          </div>
          
          <div className="flex justify-end space-x-3 mt-6">
            <motion.button
              type="button"
              onClick={onClose}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 rounded-xl"
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-xl disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </motion.button>
          </div>
          
          {status && (
            <p className={`text-center mt-4 ${status.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
              {status}
            </p>
          )}
        </form>
      </motion.div>
    </motion.div>
  )
}