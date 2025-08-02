"use client"

import { motion } from "framer-motion"
import { Users, Zap, Briefcase, Globe, Rocket, Heart } from "lucide-react"
import { Button } from "./ui/button"

const values = [
  {
    icon: Users,
    title: "We build strong relationships",
    description: "Your success is our success, now and into the future. We're invested in your goals, ambitions and performance like they're our own."
  },
  {
    icon: Zap,
    title: "We power performance",
    description: "When it comes to the Cloud ecosystem, we're not an add-on but a must-have. We help you change the way you work, harnessing technology's power."
  },
  {
    icon: Briefcase,
    title: "We put our experience to work",
    description: "We've done it. And if it hasn't been done before, we have the expertise, experience and determination to figure it out."
  },
  {
    icon: Globe,
    title: "We come from every background",
    description: "But we're united by our shared values and drive to transform the world with technology. Together, we achieve the extraordinary."
  },
  {
    icon: Rocket,
    title: "We drive purposeful impact",
    description: "We move technology forward. We tackle ambiguity head on, thinking on our feet with agility and determination."
  },
  {
    icon: Heart,
    title: "We do the right thing",
    description: "We lead with courage, taking the high road and making tough calls. We foster trust through transparency and open communication."
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-white">Climb every mountain, Clear every hurdle,</span>
            <br />
            <span className="text-gradient">Turn the impossible into possible</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl font-semibold text-white mb-4">
              YOUR CHALLENGES ARE OURS. WE'RE READY.
            </p>
            <p className="text-xl text-neutral-300 leading-relaxed">
              We partner with you to iterate and build digital solutions that bring you faster 
              speed-to-market capabilities and stronger, more compelling experiences for your consumers.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
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
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-quantum-card rounded-3xl p-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Are You Ready to <span className="text-gradient">Accelerate Your Business?</span>
          </h3>
          <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
            We'll help you harness the immense power of technology to solve your business challenge 
            and transform the way you work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}