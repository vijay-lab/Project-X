'use client'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxContainer({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 300])
  
  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  )
}
