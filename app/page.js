'use client'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/landing/Hero'
import Features from '../components/landing/Features'
import HowItWorks from '../components/landing/HowItWorks'

export default function Home() {
  return (
    <main>
      <Header variant="landing" />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}
