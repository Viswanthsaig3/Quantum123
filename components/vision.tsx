"use client"

import { motion } from "framer-motion"
import { Target, Compass, Eye, Rocket } from "lucide-react"

export default function Vision() {
  return (
    <section id="vision" className="py-16 bg-neutral-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,60,56,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-quantum-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-quantum-red/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-quantum-red/10 border border-quantum-red/20 mb-6">
            <Compass className="w-4 h-4 text-quantum-red mr-2" />
            <span className="text-sm text-neutral-300">Our Vision & Mission</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Driving Innovation Through</span>
            <br />
            <span className="text-gradient">Purpose & Excellence</span>
          </h2>
          
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
            We transform businesses with cutting-edge technology solutions, data-driven strategies, and unwavering commitment to digital excellence.
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-quantum-card rounded-2xl p-8 border border-neutral-800 hover:border-quantum-red/30 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Hover Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-quantum-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-quantum-red/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-quantum-red/10 border border-quantum-red/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-quantum-red" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gradient transition-colors duration-300">
                Our Vision
              </h3>
              
              <p className="text-neutral-300 leading-relaxed mb-6">
                To be the leading catalyst in digital transformation, empowering organizations worldwide to harness the full potential of AI, cloud technologies, and data-driven innovation.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-neutral-400">
                  <div className="w-1.5 h-1.5 bg-quantum-red rounded-full mr-3"></div>
                  Global Technology Leadership
                </div>
                <div className="flex items-center text-sm text-neutral-400">
                  <div className="w-1.5 h-1.5 bg-quantum-red rounded-full mr-3"></div>
                  Innovation-First Approach
                </div>
                <div className="flex items-center text-sm text-neutral-400">
                  <div className="w-1.5 h-1.5 bg-quantum-red rounded-full mr-3"></div>
                  Sustainable Digital Future
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-quantum-card rounded-2xl p-8 border border-neutral-800 hover:border-quantum-red/30 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Hover Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-quantum-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -top-2 -left-2 w-16 h-16 bg-quantum-red/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-quantum-red/10 border border-quantum-red/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-quantum-red" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gradient transition-colors duration-300">
                Our Mission
              </h3>
              
              <p className="text-neutral-300 leading-relaxed mb-6">
                Drive IT deliverables with ownership and data-driven decision making. We take a unified approach to business transformation, considering everything from company culture to customer experience.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-neutral-400">
                  <div className="w-1.5 h-1.5 bg-quantum-red rounded-full mr-3"></div>
                  Ownership & Accountability
                </div>
                <div className="flex items-center text-sm text-neutral-400">
                  <div className="w-1.5 h-1.5 bg-quantum-red rounded-full mr-3"></div>
                  Data-Driven Solutions
                </div>
                <div className="flex items-center text-sm text-neutral-400">
                  <div className="w-1.5 h-1.5 bg-quantum-red rounded-full mr-3"></div>
                  Transformational Leadership
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-quantum-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-quantum-red/3 via-transparent to-quantum-red/5"></div>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-quantum-red/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-quantum-red/10 border border-quantum-red/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-quantum-red" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              What Drives Us Forward
            </h3>
            
            <p className="text-lg text-neutral-300 mb-8 max-w-3xl mx-auto">
              We innovate in real time and help organizations become more fearless and adaptive with new technologies. 
              Our approach combines technical excellence with strategic thinking to deliver transformational results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Innovation Excellence",
                  description: "Cutting-edge solutions that push boundaries"
                },
                {
                  title: "Client Partnership",
                  description: "Your success is our unwavering commitment"
                },
                {
                  title: "Future-Ready",
                  description: "Building tomorrow's technology today"
                }
              ].map((value, index) => (
                <div key={value.title} className="text-center">
                  <h4 className="font-semibold text-white mb-2">{value.title}</h4>
                  <p className="text-sm text-neutral-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}