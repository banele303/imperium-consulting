"use client"

import { motion } from 'framer-motion'
import { Award, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const service = {
  title: "B-BBEE Certificate",
  price: "R300",
  description: "Obtain your Broad-Based Black Economic Empowerment (B-BBEE) certificate to enhance your business's credibility and access new opportunities.",
  features: [
    "Affidavit for Exempted Micro Enterprises (EMEs)",
    "Compliance with B-BBEE codes of good practice",
    "Boosts your company's procurement recognition",
    "Required for many tenders and contracts",
    "Fast and efficient processing"
  ]
}

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export default function BBBECertificatePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.6, ease: 'easeOut' }}>
            <Award className="h-16 w-16 mx-auto mb-4 text-white" />
            <h1 className="text-4xl md:text-5xl font-extrabold">{service.title}</h1>
            <p className="text-xl mt-4 max-w-2xl mx-auto opacity-90">{service.description}</p>
          </motion.div>
        </div>
      </motion.div>

      <div className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-gray-900 mb-6">Key Features</motion.h2>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <motion.li key={index} variants={fadeInUp} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div variants={fadeInUp} className="bg-gray-100 rounded-xl p-8 text-center">
                <p className="text-gray-600 text-lg">Starting from</p>
                <p className="text-5xl font-bold text-green-600 my-2">{service.price}</p>
                <p className="text-gray-500 mb-6">One-time fee</p>
                <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Link href="/contact">Get Started Now <ArrowRight className="ml-2" /></Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
