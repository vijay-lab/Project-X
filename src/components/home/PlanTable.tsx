'use client'
import { motion } from 'framer-motion'

export default function PlanTable() {
  const plans = [
    {
      name: "Basic",
      speed: "100 Mbps",
      price: "$39.99",
      features: ["Ideal for 4-6 devices", "HD Streaming", "Fast Downloads"],
      recommended: false
    },
    {
      name: "Premium",
      speed: "500 Mbps",
      price: "$59.99",
      features: ["Perfect for 8-10 devices", "4K Streaming", "Cloud Gaming"],
      recommended: true
    },
    {
      name: "Ultra",
      speed: "1 Gbps",
      price: "$79.99",
      features: ["12+ devices", "8K Streaming", "Professional Use"],
      recommended: false
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`
                rounded-2xl p-8
                ${plan.recommended 
                  ? 'bg-white text-blue-600 shadow-xl scale-105' 
                  : 'bg-white/10 backdrop-blur-md text-white'}
              `}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold mb-4">{plan.speed}</p>
                <p className="text-3xl mb-6">{plan.price}<span className="text-sm">/mo</span></p>
                <ul className="text-left space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    w-full py-3 rounded-full font-semibold
                    ${plan.recommended 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-blue-600'}
                  `}
                >
                  Select Plan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
