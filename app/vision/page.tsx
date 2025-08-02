"use client"

import Navbar from '@/components/navbar'
import VisionHero from '@/components/vision-hero'
import OurStory from '@/components/our-story'
import CoreValues from '@/components/core-values'
import ThoughtLeadership from '@/components/thought-leadership'
import Footer from '@/components/footer'

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <VisionHero />
      <OurStory />
      <CoreValues />
      <ThoughtLeadership />
      <Footer />
    </main>
  )
}