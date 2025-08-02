"use client"

import { motion } from "framer-motion"
import { Typewriter } from 'react-simple-typewriter'
import { Button } from "./ui/button"
import { ChevronRight, Zap } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Professional Enhanced Background */}
      <div className="absolute inset-0">
        {/* Subtle Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px] opacity-60"></div>
        
        {/* Geometric Accent Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-quantum-red/10 rotate-45 rounded-lg"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 border border-quantum-red/8 rotate-12 rounded-lg"></div>
        <div className="absolute top-1/2 right-16 w-2 h-16 bg-gradient-to-b from-quantum-red/20 to-transparent"></div>
        <div className="absolute top-1/3 left-20 w-16 h-2 bg-gradient-to-r from-quantum-red/15 to-transparent"></div>
        
        {/* Subtle Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-quantum-red/5 via-quantum-red/2 to-transparent opacity-50"></div>
        
        {/* Professional Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-quantum-red/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-quantum-red/10 border border-quantum-red/20 mb-8">
            <Zap className="w-4 h-4 text-quantum-red mr-2" />
            <span className="text-sm text-neutral-300">Accelerating Digital Innovation</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight px-2">
            <span className="text-white">Transform Your Business with</span>
            <br />
            <span className="text-gradient">
              <Typewriter
                words={['AI-Powered Solutions', 'Cloud Architecture', 'Smart Automation', 'Data Intelligence', 'Digital Innovation']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={60}
                deleteSpeed={30}
                delaySpeed={1200}
              />
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Cut operational costs by 40% and accelerate time-to-market with our proven AI and cloud solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
          <Button 
            size="lg" 
            className="group w-full sm:w-auto min-h-[54px] text-lg font-semibold bg-quantum-red hover:bg-quantum-red-hover shadow-lg shadow-quantum-red/25 hover:shadow-xl hover:shadow-quantum-red/35 transition-all duration-300 px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Free Consultation
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="group border border-neutral-600 text-neutral-300 hover:bg-neutral-800 hover:border-neutral-500 w-full sm:w-auto min-h-[54px] text-base transition-all px-6"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Solutions
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 px-4"
        >
          <p className="text-lg md:text-xl text-neutral-300 mb-8 font-medium">Trusted by industry leaders</p>
          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center items-center gap-6 md:gap-8 opacity-70">
            <div className="hover:opacity-80 transition-opacity duration-300 flex justify-center">
              <Image
                src="https://static.wixstatic.com/media/c837a6_affc426fdd1a4284b30463713e36b567~mv2.png/v1/fill/w_98,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%2017.png"
                alt="Partner Logo"
                width={80}
                height={36}
                className="filter brightness-60 hover:brightness-90 transition-all duration-300 md:w-[100px] md:h-[45px]"
                loading="lazy"
                quality={75}
              />
            </div>
            <div className="hover:opacity-80 transition-opacity duration-300 flex justify-center">
              <Image
                src="https://static.wixstatic.com/media/c837a6_02aaf8e59c6647aaac518fec8d5dd3d3~mv2.png/v1/fill/w_152,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%2020.png"
                alt="Partner Logo"
                width={100}
                height={22}
                className="filter brightness-60 hover:brightness-90 transition-all duration-300 md:w-[120px] md:h-[27px]"
                loading="lazy"
                quality={75}
              />
            </div>
            <div className="hover:opacity-80 transition-opacity duration-300 flex justify-center">
              <Image
                src="https://static.wixstatic.com/media/c837a6_c30ebf8c66f24efaaa20d000079f76c7~mv2.png/v1/fill/w_101,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%2028.png"
                alt="Partner Logo"
                width={70}
                height={44}
                className="filter brightness-60 hover:brightness-90 transition-all duration-300 md:w-[85px] md:h-[53px]"
                loading="lazy"
                quality={75}
              />
            </div>
            <div className="hover:opacity-80 transition-opacity duration-300 flex justify-center">
              <Image
                src="https://static.wixstatic.com/media/c837a6_def52106c3644d81827598294297c6b6~mv2.png/v1/fill/w_136,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%2016.png"
                alt="Partner Logo"
                width={90}
                height={26}
                className="filter brightness-60 hover:brightness-90 transition-all duration-300 md:w-[110px] md:h-[32px]"
                loading="lazy"
                quality={75}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-quantum-red rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}