'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import SectionWrapper from '@/components/layout/SectionWrapper'
import Footer from '@/components/layout/Footer'

// Lazy load components for better performance
const Features = dynamic(() => import('@/components/home/Features'))
const PlanSelector = dynamic(() => import('@/components/plans/PlanSelector'))
const InstallationGuide = dynamic(() => import('@/components/home/installation/InstallationGuide'))
const TestimonialsSection = dynamic(() => import('@/components/home/testimonials/TestimonialsSection'))

const sections = [
  { id: 'home', label: 'Home', component: Hero },
  { id: 'features', label: 'Features', component: Features },
  { id: 'plans', label: 'Plans', component: PlanSelector },
  { id: 'installation', label: 'Installation', component: InstallationGuide },
  { id: 'testimonials', label: 'Testimonials', component: TestimonialsSection }
]

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800">
      <Navbar sections={sections} />
      
      
      <SectionWrapper id="home">
        <Hero />
      </SectionWrapper>

      <SectionWrapper id="features">
        <Features />
      </SectionWrapper>

      <SectionWrapper id="plans">
        <PlanSelector />
      </SectionWrapper>

      <SectionWrapper id="installation">
        <InstallationGuide />
      </SectionWrapper>

      <SectionWrapper id="testimonials">
        <TestimonialsSection />
      </SectionWrapper>

      <Footer/>
    </main>
  )
}
