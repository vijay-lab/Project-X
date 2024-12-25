'use client'
import { motion } from 'framer-motion'
import { 
  ClipboardDocumentCheckIcon, 
  CalendarDaysIcon, 
  WrenchScrewdriverIcon, 
  SignalIcon 
} from '@heroicons/react/24/outline'

const steps = [
  {
    id: 1,
    title: "Submit Documents",
    description: "Complete your application with basic KYC documents",
    icon: <ClipboardDocumentCheckIcon className="h-8 w-8" />,
    requirements: ["Address Proof", "ID Proof", "Passport Size Photo"]
  },
  {
    id: 2,
    title: "Schedule Installation",
    description: "Pick a convenient time slot for installation",
    icon: <CalendarDaysIcon className="h-8 w-8" />,
    requirements: ["Choose Date", "Select Time Slot", "Location Confirmation"]
  },
  {
    id: 3,
    title: "Installation Process",
    description: "Our expert team sets up your connection",
    icon: <WrenchScrewdriverIcon className="h-8 w-8" />,
    requirements: ["ONU Setup", "Cable Installation", "Router Configuration"]
  },
  {
    id: 4,
    title: "Get Connected",
    description: "Start enjoying high-speed internet",
    icon: <SignalIcon className="h-8 w-8" />,
    requirements: ["Speed Test", "WiFi Setup", "Payment Setup"]
  }
]

export default function InstallationGuide() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Quick Installation Process
          </h2>
          <p className="text-blue-100 text-xl">
            Get connected in 4 simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-blue-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-500/30 w-1/2" />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all hover:transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-500/20 rounded-full p-4 text-blue-300">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2">
                  {step.title}
                </h3>
                <p className="text-blue-100 text-center mb-4">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.requirements.map((req, idx) => (
                    <li key={idx} className="text-blue-200 flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
