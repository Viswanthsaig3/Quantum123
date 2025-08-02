"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

const stats = [
  { number: 15, suffix: "+", label: "Years of Experience", description: "Delivering excellence since 2009" },
  { number: 10, suffix: "K+", label: "Business Partners", description: "Trusted by enterprises worldwide" },
  { number: 250, suffix: "+", label: "Projects Delivered", description: "Successfully completed projects" },
  { number: 22, suffix: "", label: "Countries Worldwide", description: "Global presence and impact" },
  { number: 5, suffix: "", label: "Industry Awards", description: "Recognition for excellence" }
]

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

function Counter({ end, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, isInView])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsInView(true)}
      className="text-5xl md:text-6xl font-bold text-gradient"
    >
      {count}{suffix}
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Proven Results That</span>
            <br />
            <span className="text-gradient">Speak for Themselves</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            These numbers represent our commitment to excellence and the trust our clients place in us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center group cursor-pointer relative"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-quantum-red/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
              <div className="mb-4">
                <Counter 
                  end={stat.number} 
                  suffix={stat.suffix}
                  duration={2000 + (index * 200)}
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-quantum-red transition-colors duration-300">
                {stat.label}
              </h3>
              <p className="text-sm text-neutral-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Our Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Partner Logos */}
            <div className="hover:opacity-80 transition-opacity duration-300">
              <Image
                src="https://static.wixstatic.com/media/c837a6_affc426fdd1a4284b30463713e36b567~mv2.png/v1/fill/w_98,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%2017.png"
                alt="Partner Logo"
                width={98}
                height={44}
                className="filter brightness-75 hover:brightness-100 transition-all duration-300"
              />
            </div>
            <div className="hover:opacity-80 transition-opacity duration-300">
              <Image
                src="https://static.wixstatic.com/media/c837a6_02aaf8e59c6647aaac518fec8d5dd3d3~mv2.png/v1/fill/w_152,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%2020.png"
                alt="Partner Logo"
                width={152}
                height={33}
                className="filter brightness-75 hover:brightness-100 transition-all duration-300"
              />
            </div>
            <div className="hover:opacity-80 transition-opacity duration-300">
              <Image
                src="https://static.wixstatic.com/media/c837a6_c30ebf8c66f24efaaa20d000079f76c7~mv2.png/v1/fill/w_101,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%2028.png"
                alt="Partner Logo"
                width={101}
                height={64}
                className="filter brightness-75 hover:brightness-100 transition-all duration-300"
              />
            </div>
            <div className="hover:opacity-80 transition-opacity duration-300">
              <Image
                src="https://static.wixstatic.com/media/c837a6_def52106c3644d81827598294297c6b6~mv2.png/v1/fill/w_136,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%2016.png"
                alt="Partner Logo"
                width={136}
                height={40}
                className="filter brightness-75 hover:brightness-100 transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}