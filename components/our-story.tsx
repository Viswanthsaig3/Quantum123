"use client"

import { motion } from "framer-motion"
import { BookOpen, Globe2, Layers } from "lucide-react"

export default function OurStory() {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="w-12 h-12 text-quantum-red" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Our Story</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-neutral-300 leading-relaxed">
              QuantumEdgeX is a <span className="text-quantum-red font-semibold">global leader in consulting, technology services, digital transformation</span> and always at the forefront of innovation to address the entire breadth of clients' opportunities in the evolving world of cloud, digital and platforms.
            </p>
            
            <p className="text-lg text-neutral-300 leading-relaxed">
              QuantumEdgeX combines engineering and unique set of strengths with broad industry knowledge and cutting-edge technologies and help customers achieve their business objectives.
            </p>
            
            <p className="text-lg text-neutral-300 leading-relaxed">
              We function as a <span className="text-quantum-red font-semibold">full stakeholder to business</span>, offering a consulting-led approach with an integrated portfolio of technology led solutions that encompass the entire Enterprise value chain.
            </p>
            
            <div className="bg-quantum-card rounded-2xl p-6 border-l-4 border-quantum-red">
              <p className="text-lg text-white font-medium">
                Our Customer-centric Engagement Model defines how we do engage with you, offering specialized services and solutions that meet the distinct needs of your business.
              </p>
            </div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-quantum-card rounded-2xl p-6 text-center hover-glow"
              >
                <Globe2 className="w-12 h-12 text-quantum-red mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Global Reach</h4>
                <p className="text-sm text-neutral-400">Worldwide presence with local expertise</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                className="bg-quantum-card rounded-2xl p-6 text-center hover-glow mt-8"
              >
                <Layers className="w-12 h-12 text-quantum-red mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Integrated Solutions</h4>
                <p className="text-sm text-neutral-400">End-to-end technology portfolio</p>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-quantum-red/10 rounded-full blur-xl animate-pulse-red"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-quantum-red/5 rounded-full blur-2xl animate-float"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}