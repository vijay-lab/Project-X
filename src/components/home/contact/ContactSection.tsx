'use client'
import { motion } from 'framer-motion'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon 
} from '@heroicons/react/24/outline'

const contactInfo = {
  phone: "+91 1234567890",
  email: "support@xfiber.com",
  address: "123 Tech Park, Sector 1, Mumbai, India",
  hours: "Mon-Sat: 9:00 AM - 8:00 PM"
}

const socialLinks = [
  { name: 'Facebook', url: '#', icon: '/icons/facebook.svg' },
  { name: 'Twitter', url: '#', icon: '/icons/twitter.svg' },
  { name: 'Instagram', url: '#', icon: '/icons/instagram.svg' },
  { name: 'LinkedIn', url: '#', icon: '/icons/linkedin.svg' }
]

export default function ContactSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-blue-100 text-xl">
            We're here to help you get connected
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-6 w-6 text-blue-400" />
                <div>
                  <p className="text-sm text-blue-200">Call Us</p>
                  <p className="text-white font-semibold">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <EnvelopeIcon className="h-6 w-6 text-blue-400" />
                <div>
                  <p className="text-sm text-blue-200">Email Us</p>
                  <p className="text-white font-semibold">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPinIcon className="h-6 w-6 text-blue-400" />
                <div>
                  <p className="text-sm text-blue-200">Visit Us</p>
                  <p className="text-white font-semibold">{contactInfo.address}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <ClockIcon className="h-6 w-6 text-blue-400" />
                <div>
                  <p className="text-sm text-blue-200">Business Hours</p>
                  <p className="text-white font-semibold">{contactInfo.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-blue-200 mb-4">Follow Us</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <img 
                      src={social.icon} 
                      alt={social.name} 
                      className="h-6 w-6"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map Integration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1529310665146!2d76.31845897637675!3d26.89864117665567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d8d4a0f9ca56b%3A0xa2ea1a46d3446a85!2sKmmc%20Technologies%20LLP!5e0!3m2!1sen!2sin!4v1735119162534!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
