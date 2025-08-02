"use client"

import { motion } from "framer-motion"
import { Cloud, Settings, BarChart3, Code, ArrowRight, Users, Lightbulb, Target, TrendingUp, Bot, Brain, Zap } from "lucide-react"
import { Button } from "./ui/button"

const services = [
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Wherever you are in your cloud journey, we have the experience and expertise to deliver the most advanced, integrated full life cycle of cloud solutions.",
    features: ["Infrastructure Modernization", "Application Transformation", "Cloud Migration", "Multi-Cloud Strategy"]
  },
  {
    icon: Settings,
    title: "DevOps Engineering",
    description: "Most professionals embracing DevOps culture combine tools and practices with years of enterprise IT experience to gain the holistic view needed.",
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Security Integration"]
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Our full lifecycle of analytics solutions empowers your organization to not just visualize your data, but maximize its value for business growth.",
    features: ["Data Visualization", "Predictive Analytics", "Business Intelligence", "Real-time Insights"]
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Full stack development becomes more popular with powerful libraries that make the development process easy, faster, and more efficient.",
    features: ["Web Applications", "Mobile Development", "API Integration", "Database Design"]
  },
  {
    icon: Bot,
    title: "AI Chatbots & RAG Applications",
    description: "We create intelligent, customized chatbots and RAG (Retrieval-Augmented Generation) applications tailored to your company's specific data and business processes.",
    features: ["Custom Chatbot Development", "Company-Specific RAG Systems", "Knowledge Base Integration", "Document Intelligence"]
  },
  {
    icon: Brain,
    title: "Agentic AI & Automation",
    description: "Develop autonomous AI agents and intelligent automation systems that can perform complex tasks, make decisions, and streamline your business operations.",
    features: ["Autonomous AI Agents", "Process Automation", "Multi-System Integration", "Decision-Making AI"]
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-white">Let Your Digital Transformation</span>
            <br />
            <span className="text-gradient">Drive Your Business Ahead</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Our modern Engineering and Interoperability principles help companies modernize technology, 
            reimagine processes and transform experiences so they stay ahead in a fast-changing world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
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
                className="bg-quantum-card rounded-2xl p-6 md:p-8 hover-glow group cursor-pointer relative overflow-hidden transform-gpu perspective-1000"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Enhanced Card Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-quantum-red/5 via-transparent to-quantum-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-quantum-red/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 relative z-10">
                  <div className="flex-shrink-0 self-center sm:self-start">
                    <motion.div 
                      className="p-2.5 md:p-3 bg-quantum-red/10 rounded-xl border border-quantum-red/20 group-hover:bg-quantum-red/20 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-quantum-red group-hover:animate-pulse" />
                    </motion.div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-neutral-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs md:text-sm text-neutral-400 justify-center sm:justify-start">
                          <div className="w-1.5 h-1.5 bg-quantum-red rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-center sm:justify-start">
                      <Button 
                        variant="ghost" 
                        className="p-0 h-auto text-quantum-red hover:text-white group/btn min-h-[44px]"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center px-4"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">ACCELERATE YOUR SHIFT TO DIGITAL</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Collaborative Solutions",
                description: "Collaborate with senior executives and subject matter experts to help you identify solutions catered to your business needs."
              },
              {
                icon: Lightbulb,
                title: "Innovative Opportunities", 
                description: "Experience world-class innovative technology to uncover opportunities for your business growth and transformation."
              },
              {
                icon: Target,
                title: "Customized Outcomes",
                description: "Customized and targeted experiences, providing live demos to deep dive into service offerings tailored to your business."
              },
              {
                icon: TrendingUp,
                title: "Targeted Growth",
                description: "Build a strong partnership that will result in a clear path to a future where your business growth is enabled by digital technology."
              }
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div 
                  className="w-12 h-12 md:w-16 md:h-16 bg-quantum-red/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-quantum-red/20 group-hover:bg-quantum-red/20 group-hover:border-quantum-red/40 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-quantum-red group-hover:animate-pulse" />
                </motion.div>
                <h4 className="text-base md:text-lg font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">{item.title}</h4>
                <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}