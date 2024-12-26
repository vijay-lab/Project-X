'use client'
import { motion } from 'framer-motion'
import { 
  BoltIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  DevicePhoneMobileIcon,
  WifiIcon,
  CurrencyDollarIcon,
  CloudIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

export default function Features() {
  const features = [
    {
      title: "Lightning-Fast Speeds",
      description: "Experience blazing-fast speeds up to 10 Gbps with our state-of-the-art fiber network",
      icon: BoltIcon,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Enterprise-Grade Security",
      description: "Advanced encryption and network protection to keep your data safe and secure",
      icon: ShieldCheckIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Zero Downtime Promise",
      description: "99.99% uptime guarantee with automatic failover and redundant systems",
      icon: ClockIcon,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Multi-Device Support",
      description: "Connect up to 50+ devices simultaneously without compromising speed",
      icon: DevicePhoneMobileIcon,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Smart Wi-Fi Technology",
      description: "AI-powered Wi-Fi optimization that adapts to your usage patterns",
      icon: WifiIcon,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees, no surprises. Pay only for what you need",
      icon: CurrencyDollarIcon,
      color: "from-teal-500 to-green-500"
    },
    {
      title: "Cloud Priority Access",
      description: "Optimized routes to major cloud services for faster access",
      icon: CloudIcon,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Community First",
      description: "Local support team that knows your neighborhood",
      icon: HeartIcon,
      color: "from-red-500 to-pink-500"
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Next-Generation Fiber Technology
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Experience the future of internet connectivity with features designed for modern digital life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden group hover:bg-white/20 transition-all duration-300"
            >
              <div className="p-6">
                <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-xl w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
