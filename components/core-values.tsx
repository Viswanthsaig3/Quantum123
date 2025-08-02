"use client"

import { motion } from "framer-motion"
import { Users, Lightbulb, Award, BookOpen } from "lucide-react"

const values = [
  {
    icon: Users,
    title: "Client Driven",
    description: "We are committed to helping our clients lead their markets, with our strategic solutions."
  },
  {
    icon: Lightbulb,
    title: "Solution-Oriented Mindset",
    description: "We always choose to focus on what can be done to make things right rather than just having theories."
  },
  {
    icon: Award,
    title: "Operational Excellence", 
    description: "We are disciplined in everything we do, always strive to build and maintain the best, most efficient systems and operations."
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "We constantly strive to anticipate the rapidly changing needs of our clients and to develop new skills to meet those needs."
  }
]

export default function CoreValues() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Our</span>
            <span className="text-gradient"> Core Values</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Our leadership team combines strategic vision, business insights and technology expertise that span service lines, geographies and industries to ensure the success of our clients' transformation journeys.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  z: 50
                }}
                className="bg-quantum-card rounded-2xl p-8 hover-glow group cursor-pointer relative overflow-hidden transform-gpu"
              >
                {/* Enhanced Card Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-quantum-red/5 via-transparent to-quantum-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-quantum-red/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                
                <div className="relative z-10 text-center">
                  <motion.div 
                    className="w-16 h-16 bg-quantum-red/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-quantum-red/20 group-hover:bg-quantum-red/20 group-hover:border-quantum-red/40 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <IconComponent className="w-8 h-8 text-quantum-red group-hover:animate-pulse" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-neutral-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}