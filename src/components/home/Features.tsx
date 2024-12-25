'use client'
import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      title: "Ultra-Fast Speed",
      description: "Download speeds up to 1 Gbps",
      icon: "⚡"
    },
    {
      title: "Reliable Connection",
      description: "99.9% uptime guarantee",
      icon: "🔒"
    },
    {
      title: "24/7 Support",
      description: "Expert help whenever you need",
      icon: "🎯"
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
