"use client"

import { motion } from "framer-motion"
import { Star, Quote, TrendingUp, Award, Users, CheckCircle } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    company: "1st Velocity",
    logo: "https://static.wixstatic.com/media/c837a6_affc426fdd1a4284b30463713e36b567~mv2.png/v1/fill/w_98,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%2017.png",
    text: "QuantumEdgeX transformed our cloud infrastructure, reducing operational costs by 45% while tripling deployment speed. Their AI solutions revolutionized our customer support operations.",
    metric: "45% cost reduction",
    rating: 5
  },
  {
    company: "Garmoosh",
    logo: "https://static.wixstatic.com/media/c837a6_02aaf8e59c6647aaac518fec8d5dd3d3~mv2.png/v1/fill/w_152,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%2020.png",
    text: "Their agentic AI systems handle 80% of our data processing autonomously. We scaled from weekly to daily releases with zero downtime using their DevOps solutions.",
    metric: "80% automation",
    rating: 5
  },
  {
    company: "Pomegranate",
    logo: "https://static.wixstatic.com/media/c837a6_c30ebf8c66f24efaaa20d000079f76c7~mv2.png/v1/fill/w_101,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%2028.png",
    text: "Customer engagement increased 300% with their RAG-powered chatbot. Response times dropped from hours to seconds, with ROI visible in the first quarter.",
    metric: "300% engagement boost",
    rating: 5
  },
  {
    company: "Mikron",
    logo: "https://static.wixstatic.com/media/c837a6_def52106c3644d81827598294297c6b6~mv2.png/v1/fill/w_136,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%2016.png",
    text: "Predictive analytics gave us 6-month market advantage over competitors. Their multi-cloud strategy reduced infrastructure costs by 40% while improving performance.",
    metric: "6-month advantage",
    rating: 5
  }
]


export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-neutral-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,60,56,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,60,56,0.01)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-quantum-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-quantum-red/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Trusted by Industry</span>
            <br />
            <span className="text-gradient">Leaders Worldwide</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Real companies, real results. See how we transform businesses with measurable outcomes.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { icon: Award, value: "50+", label: "Projects" },
            { icon: Users, value: "95%", label: "Satisfaction" },
            { icon: TrendingUp, value: "$10M+", label: "Saved" },
            { icon: CheckCircle, value: "24/7", label: "Support" }
          ].map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-quantum-red/10 border border-quantum-red/20 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <IconComponent className="w-6 h-6 text-quantum-red" />
                </motion.div>
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-400">{stat.label}</div>
              </div>
            )
          })}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-quantum-card rounded-2xl p-6 border border-neutral-800 hover:border-quantum-red/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-quantum-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-quantum-red/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Company Logo at Top */}
                <div className="flex items-center justify-between mb-4">
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.company}
                    width={60}
                    height={30}
                    className="filter brightness-75 hover:brightness-100 transition-all duration-300"
                  />
                  <Quote className="w-8 h-8 text-quantum-red/50" />
                </div>
                
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={`${testimonial.company}-star-${i}`} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-neutral-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Metric Badge */}
                <div className="flex justify-end">
                  <div className="px-3 py-1 bg-quantum-red/10 border border-quantum-red/20 rounded-full">
                    <span className="text-xs text-quantum-red font-medium">{testimonial.metric}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}