"use client"

import { motion } from "framer-motion"
import { Crown, Focus, Shield, TrendingUp } from "lucide-react"

const leadership = [
  {
    icon: Crown,
    title: "Advise C-suite and industry leaders",
    description: "Drive the CEO agenda on issues related to digital disruption, competitive agility, global operating models, and workforce of the future to identify new sources of value."
  },
  {
    icon: Focus,
    title: "Focus on business. Fueled by technology",
    description: "Challenge the status quo and develop innovative strategies that harness your full understanding of how technology will impact industry and business models."
  },
  {
    icon: Shield,
    title: "Build resilient operating model",
    description: "Building organizational agility and resiliency to respond to continuously changing markets and customer behaviors."
  },
  {
    icon: TrendingUp,
    title: "Lead with insight",
    description: "Use advanced analytics and human-centric design to co-create technology-enabled, disruptive strategies that win competitive advantage, unlock value and drive profitable growth for clients."
  }
]

export default function ThoughtLeadership() {
  return (
    <section className="py-20 bg-quantum-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">As a</span>
            <span className="text-gradient"> "Best-In-Class"</span>
            <span className="text-white"> Thought Leaders</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-quantum-red mb-4">
            Work We'll do
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadership.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 5,
                  z: 50
                }}
                className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 hover-glow group cursor-pointer relative overflow-hidden transform-gpu border border-quantum-red/10"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Enhanced Card Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-quantum-red/10 via-transparent to-quantum-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-2 -right-2 w-24 h-24 bg-quantum-red/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                
                <div className="flex items-start space-x-6 relative z-10">
                  <motion.div 
                    className="flex-shrink-0 p-4 bg-quantum-red/10 rounded-xl border border-quantum-red/20 group-hover:bg-quantum-red/20 group-hover:border-quantum-red/40 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <IconComponent className="w-8 h-8 text-quantum-red group-hover:animate-pulse" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-neutral-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Experienced Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-black/60 backdrop-blur-sm rounded-3xl p-12 border border-quantum-red/20 hover-glow">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
              Experienced Leadership
            </h2>
            <p className="text-xl text-white font-medium">
              Same consistency in delivering excellence across all our engagements
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}