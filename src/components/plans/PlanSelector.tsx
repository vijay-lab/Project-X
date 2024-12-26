'use client'
import { JSX, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StarIcon, BoltIcon, FireIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'
import PlanInquiryForm from './PlanInquiryForm'

type Duration = '30' | '90' | '180' | '365'
type Speed = '10' | '30' | '50' | '100'
type PlanName = 'Blue Smart' | 'Blue' | 'Orange' | 'Red'

interface PlanDetails {
  speed: Speed
  data: string
  prices: {
    [key in Duration]: { withoutGST: number }
  }
}

type Plans = {
  [key in PlanName]: PlanDetails
}

const plans: Plans = {
  "Blue Smart": {
    speed: "10",
    data: "500 GB",
    prices: {
      "30": { withoutGST: 250 },
      "90": { withoutGST: 750 },
      "180": { withoutGST: 1500 },
      "365": { withoutGST: 2711 }
    }
  },
  "Blue": {
    speed: "30",
    data: "Unlimited",
    prices: {
      "30": { withoutGST: 338 },
      "90": { withoutGST: 1014 },
      "180": { withoutGST: 1927 },
      "365": { withoutGST: 3650 }
    }
  },
  "Orange": {
    speed: "50",
    data: "Unlimited",
    prices: {
      "30": { withoutGST: 423 },
      "90": { withoutGST: 1269 },
      "180": { withoutGST: 2411 },
      "365": { withoutGST: 4568 }
    }
  },
  "Red": {
    speed: "100",
    data: "Unlimited",
    prices: {
      "30": { withoutGST: 592 },
      "90": { withoutGST: 1776 },
      "180": { withoutGST: 3374 },
      "365": { withoutGST: 6394 }
    }
  }
}

const planIcons: Record<PlanName, JSX.Element> = {
  'Blue Smart': <BoltIcon className="h-8 w-8 text-blue-300" />,
  'Blue': <RocketLaunchIcon className="h-8 w-8 text-blue-400" />,
  'Orange': <FireIcon className="h-8 w-8 text-orange-400" />,
  'Red': <StarIcon className="h-8 w-8 text-red-400" />
}

const planFeatures = {
  'Blue Smart': [
    'Perfect for light users',
    'HD streaming',
    'Basic gaming',
    'Video calls'
  ],
  'Blue': [
    'Ideal for small families',
    '4K streaming',
    'Fast gaming',
    'Multiple devices'
  ],
  'Orange': [
    'Best for power users',
    '8K streaming',
    'Pro gaming',
    'Smart home ready',
    'Priority support'
  ],
  'Red': [
    'Ultimate experience',
    'Multiple 8K streams',
    'Competitive gaming',
    'Future-proof',
    'Premium support',
    'Static IP included'
  ]
}

export default function PlanSelector() {
  const [selectedDuration, setSelectedDuration] = useState<Duration>('30')
  const [hoveredPlan, setHoveredPlan] = useState<PlanName | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<{name: PlanName; details: PlanDetails} | null>(null)
  const [showInquiryForm, setShowInquiryForm] = useState(false)
  const calculateSavings = (duration: Duration) => {
    switch (duration) {
      case '365': return '20%'
      case '180': return '15%'
      case '90': return '10%'
      default: return '0%'
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your Perfect Plan</h2>
          <p className="text-xl text-blue-100">Select a duration and find the speed that matches your needs</p>
        </motion.div>

        <motion.div 
          className="bg-white/5 backdrop-blur-lg p-4 rounded-2xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {['30', '90', '180', '365'].map((duration) => (
              <motion.button
                key={duration}
                onClick={() => setSelectedDuration(duration as Duration)}
                className={`px-8 py-3 rounded-xl transition-all ${
                  selectedDuration === duration
                    ? 'bg-blue-500 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                whileHover={{ scale: selectedDuration === duration ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {duration} Days
                <div className="text-sm opacity-70">
                  Save {calculateSavings(duration as Duration)}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(Object.entries(plans) as [PlanName, PlanDetails][]).map(([name, plan], index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredPlan(name)}
              onHoverEnd={() => setHoveredPlan(null)}
              className={`relative overflow-hidden ${
                name === "Orange"
                  ? 'bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-500'
                  : 'bg-gradient-to-br from-white/10 to-white/5'
              } rounded-2xl p-6 backdrop-blur-lg ${
                name === "Orange" ? 'lg:scale-105' : ''
              }`}
            >
              <AnimatePresence>
                {hoveredPlan === name && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"
                  />
                )}
              </AnimatePresence>

              <div className="relative z-10">
                {name === "Orange" && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                  >
                    <div className="bg-white text-orange-500 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </motion.div>
                )}

                <div className="text-center text-white">
                  <div className="flex justify-center mb-4">
                    {planIcons[name]}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{name}</h3>
                  <div className="text-5xl font-bold mb-2">
                    {plan.speed}
                    <span className="text-lg"> Mbps</span>
                  </div>
                  <div className="text-lg mb-6 opacity-80">{plan.data}</div>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    {planFeatures[name].map((feature, i) => (
                      <div key={i} className="flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-current" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-3xl font-bold mb-4">
                    ₹{plan.prices[selectedDuration].withoutGST}
                    <span className="text-sm opacity-70">
                      {selectedDuration === '30' ? '/mo' : ` for ${selectedDuration} days`} +GST
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedPlan({ name, details: plan })
                      setShowInquiryForm(true)
                    }}
                    className={`w-full ${
                      name === "Orange"
                        ? 'bg-white text-orange-500'
                        : 'bg-blue-500 text-white'
                    } py-3 rounded-xl font-semibold shadow-lg`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {showInquiryForm && selectedPlan && (
        <PlanInquiryForm 
          selectedPlan={{
            name: selectedPlan.name,
            speed: selectedPlan.details.speed,
            data: selectedPlan.details.data,
            price: selectedPlan.details.prices[selectedDuration].withoutGST,
            duration: selectedDuration
          }}
          onClose={() => setShowInquiryForm(false)}
        />
      )}
    </section>
  )
}
