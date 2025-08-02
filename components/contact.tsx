"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "./ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitted(true)
      setFormData({ name: '', email: '', company: '', message: '' })
      setErrors({})
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Let's Build the <span className="text-gradient">Future Together</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our experts and let's discuss how we can help you achieve your digital transformation goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-quantum-card rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Send us a message</h3>
            
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg mb-6"
              >
                <p className="text-green-400 text-sm font-medium">✓ Message sent successfully! We'll get back to you within 24 hours.</p>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-1 transition-colors min-h-[48px] ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-neutral-700 focus:border-quantum-red focus:ring-quantum-red'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-1 transition-colors min-h-[48px] ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-neutral-700 focus:border-quantum-red focus:ring-quantum-red'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-quantum-red focus:ring-1 focus:ring-quantum-red transition-colors min-h-[48px]"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-neutral-800 border rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-1 transition-colors resize-none min-h-[120px] ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'border-neutral-700 focus:border-quantum-red focus:ring-quantum-red'
                  }`}
                  placeholder="Tell us about your project and requirements..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full group min-h-[48px] text-base" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message & Get Quote
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Get in touch</h3>
              <p className="text-sm md:text-base text-neutral-300 mb-8 leading-relaxed">
                We're here to help you navigate your digital transformation journey. 
                Reach out to us through any of the channels below, and let's start building something amazing together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2.5 md:p-3 bg-quantum-red/10 rounded-lg border border-quantum-red/20 flex-shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-quantum-red" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-white mb-1">Email Us</h4>
                  <p className="text-sm md:text-base text-neutral-300">hr@quantumedgex.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 md:p-3 bg-quantum-red/10 rounded-lg border border-quantum-red/20 flex-shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-quantum-red" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-white mb-1">Call Us</h4>
                  <p className="text-sm md:text-base text-neutral-300">636-439-6328</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 md:p-3 bg-quantum-red/10 rounded-lg border border-quantum-red/20 flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-quantum-red" />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-white mb-1">Visit Us</h4>
                  <p className="text-sm md:text-base text-neutral-300">
                    400 Chesterfield Center<br />
                    Suite 400<br />
                    Chesterfield, MO 63017
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-quantum-card rounded-2xl p-4 md:p-6 mt-8">
              <h4 className="text-base md:text-lg font-semibold text-white mb-3">Business Hours</h4>
              <div className="space-y-2 text-xs md:text-sm text-neutral-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}