"use client"

import { motion } from "framer-motion"
import { Target, Compass } from "lucide-react"

export default function VisionHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-quantum-hero">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,60,56,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,60,56,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse-red"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-quantum-red rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-float-slow opacity-40"></div>
        <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-quantum-red rounded-full animate-float-fast opacity-50"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full animate-bounce-slow opacity-30"></div>
        <div className="absolute bottom-40 right-20 w-2 h-2 bg-quantum-red rounded-full animate-float opacity-40"></div>
        
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-quantum-red/5 to-transparent animate-gradient-xy"></div>
        
        {/* Subtle Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-quantum-red/10 rounded-full blur-3xl animate-pulse-red"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-quantum-red/5 rounded-full blur-2xl animate-float-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-quantum-red/10 border border-quantum-red/20 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Compass className="w-4 h-4 text-quantum-red mr-2" />
            <span className="text-sm text-neutral-300">Guiding Digital Transformation</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Our</span>
            <span className="text-gradient"> Vision & Mission</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Driving innovation through ownership, data-driven decisions, and transformational leadership
          </p>
        </motion.div>

        {/* Mission Statement Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-quantum-card rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden hover-glow"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-quantum-red/5 via-transparent to-quantum-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <Target className="w-12 h-12 text-quantum-red" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Our Mission</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Drive IT Deliverables with Ownership and Data-Driven Decision Making
            </h3>
            <p className="text-lg text-neutral-300 leading-relaxed">
              QuantumEdgeX innovate in real time and can help your organization become more fearless and adaptive with new technologies. 
              We take a unified approach to business transformation, considering everything from company culture to customer experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}