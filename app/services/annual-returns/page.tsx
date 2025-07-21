"use client"

import { motion } from 'framer-motion'
import { FileText, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const service = {
  title: "Annual Returns Filing",
  price: "R150",
  description: "Ensure your company remains compliant by filing your annual returns with CIPC accurately and on time.",
  features: [
    "Avoids penalties for late submission",
    "Maintains your company’s active status",
    "Fulfillment of legal obligations with CIPC",
    "Peace of mind with professional handling",
    "Quick and hassle-free process"
  ]
}

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export default function AnnualReturnsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.6, ease: 'easeOut' }}>
            <FileText className="h-16 w-16 mx-auto mb-4 text-white" />
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
                      <CheckCircle className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div variants={fadeInUp} className="bg-gray-100 rounded-xl p-8 text-center">
                <p className="text-gray-600 text-lg">Starting from</p>
                <p className="text-5xl font-bold text-blue-600 my-2">{service.price}</p>
                <p className="text-gray-500 mb-6">Per submission</p>
                <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Link href="/contact">File Your Returns <ArrowRight className="ml-2" /></Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
