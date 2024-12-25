'use client'
import { JSX, useState } from 'react'
import { motion } from 'framer-motion'
import { StarIcon, BoltIcon, FireIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'

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

export default function PlanSelector() {
  const [selectedDuration, setSelectedDuration] = useState<Duration>('30')

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Select Duration</h2>
          <div className="flex gap-4">
            {['30', '90', '180', '365'].map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration as Duration)}
                className={`px-6 py-2 rounded-full ${
                  selectedDuration === duration 
                    ? 'bg-white text-blue-600' 
                    : 'bg-white/10 text-white'
                }`}
              >
                {duration} Days
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {(Object.entries(plans) as [PlanName, PlanDetails][]).map(([name, plan], index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${
                name === "Orange" 
                  ? 'bg-gradient-to-b from-orange-500 to-orange-600 scale-105 shadow-xl' 
                  : 'bg-white/10 backdrop-blur-md'
              } rounded-2xl p-6 text-white`}
            >
              {name === "Orange" && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-300 text-orange-800 px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {planIcons[name]}
                </div>
                <h3 className="text-2xl font-bold mb-4">{name}</h3>
                <div className="text-4xl font-bold mb-2">
                  {plan.speed} Mbps
                </div>
                <div className="text-lg mb-4">{plan.data}</div>
                <div className="text-3xl font-bold mb-2">
                  ₹{plan.prices[selectedDuration].withoutGST}
                  <span className="text-sm align-top">+GST</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full ${
                    name === "Orange"
                      ? 'bg-orange-300 text-orange-800'
                      : 'bg-white text-blue-600'
                  } py-2 rounded-full font-semibold mt-4`}
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
