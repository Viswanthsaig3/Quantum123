"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gradient">QuantumEdgeX</h3>
            <p className="text-neutral-300 leading-relaxed">
              Accelerating digital transformation through innovative technology solutions, 
              expert consulting, and cutting-edge engineering services.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-neutral-800 rounded-lg hover:bg-quantum-red hover:scale-110 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-neutral-800 rounded-lg hover:bg-quantum-red hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-neutral-800 rounded-lg hover:bg-quantum-red hover:scale-110 transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-neutral-800 rounded-lg hover:bg-quantum-red hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              {[
                'Cloud Services',
                'DevOps Engineering',
                'Data Analytics',
                'Full Stack Development',
                'Digital Consulting',
                'Technology Modernization'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-neutral-400 hover:text-quantum-red transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              {[
                'About Us',
                'Our Team',
                'Careers',
                'Case Studies',
                'Blog',
                'News & Events'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#about"
                    className="text-neutral-400 hover:text-quantum-red transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-2 text-neutral-400">
              <p>123 Innovation Drive</p>
              <p>Tech District, CA 94025</p>
              <p>United States</p>
              <p className="mt-4">
                <a
                  href="tel:+15551234567"
                  className="hover:text-quantum-red transition-colors duration-200"
                >
                  +1 (555) 123-4567
                </a>
              </p>
              <p>
                <a
                  href="mailto:contact@quantumedgex.com"
                  className="hover:text-quantum-red transition-colors duration-200"
                >
                  contact@quantumedgex.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-neutral-400 text-sm"
            >
              <p>&copy; 2024 QuantumEdgeX. All rights reserved.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm text-neutral-400"
            >
              <a href="#" className="hover:text-quantum-red transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-quantum-red transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-quantum-red transition-colors duration-200">
                Cookie Policy
              </a>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onClick={scrollToTop}
              className="p-2 bg-neutral-800 rounded-lg hover:bg-quantum-red hover:scale-110 transition-all duration-300 group"
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}