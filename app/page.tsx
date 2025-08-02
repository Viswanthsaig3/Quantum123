"use client"

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Vision from '@/components/vision'
import Services from '@/components/services'
import About from '@/components/about'
import Testimonials from '@/components/testimonials'
import Stats from '@/components/stats'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Stats />
      <Vision />
      <Contact />
      <Footer />
    </main>
  )
}