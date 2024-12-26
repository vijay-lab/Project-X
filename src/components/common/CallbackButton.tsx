'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const speeds = ['10', '30', '50', '100']
const durations = ['30', '90', '180', '365']

export default function CallbackButton() {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    phone: '',
    speed: '',
    duration: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Callback Request',
          email: 'callback@request.com',
          message: `
New callback request:
-------------------
Phone: ${formData.phone}
Preferred Speed: ${formData.speed} Mbps
Preferred Duration: ${formData.duration} Days
          `
        })
      })

      const responseText = await response.text()
      console.log('Server Response:', responseText)
      
      if (response.ok) {
        setStatus('We will call you back shortly!')
        setTimeout(() => {
          setShowForm(false)
          setStatus('')
          setFormData({ phone: '', speed: '', duration: '' })
        }, 3000)
      } else {
        setStatus(`Error: ${responseText}`)
      }
    } catch (error) {
      setStatus(`Network Error: ${error}`)
      console.log('Full error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white rounded-full p-4 shadow-lg z-50"
      >
        Request Callback
      </motion.button>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 max-w-md w-full text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Request a Callback</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="Your phone number"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Preferred Speed</label>
                  <select
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.speed}
                    onChange={(e) => setFormData({...formData, speed: e.target.value})}
                  >
                    <option value="">Select Speed</option>
                    {speeds.map(speed => (
                      <option key={speed} value={speed}>{speed} Mbps</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Preferred Duration</label>
                  <select
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  >
                    <option value="">Select Duration</option>
                    {durations.map(duration => (
                      <option key={duration} value={duration}>{duration} Days</option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-end gap-4 mt-6">
                  <motion.button
                    type="button"
                    onClick={() => setShowForm(false)}
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
                    {isSubmitting ? 'Submitting...' : 'Request'}
                  </motion.button>
                </div>
                
                {status && (
                  <p className={`text-center mt-4 ${status.includes('call you back') ? 'text-green-400' : 'text-red-400'}`}>
                    {status}
                  </p>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
