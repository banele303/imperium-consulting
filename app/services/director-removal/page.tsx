"use client"

import { motion } from 'framer-motion'
import { UserMinus, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const service = {
  title: "Director Removal",
  price: "R450",
  description: "Officially process the removal of a director from your company records with CIPC, ensuring your company's information is up to date.",
  features: [
    "Proper filing of all necessary CIPC forms",
    "Ensures compliance with the Companies Act",
    "Updates your company's director records accurately",
    "Prevents future disputes or liability issues",
    "Confidential and professional service"
  ]
}

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export default function DirectorRemovalPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-red-600 to-yellow-600 text-white py-20"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ duration: 0.6, ease: 'easeOut' }}>
            <UserMinus className="h-16 w-16 mx-auto mb-4 text-white" />
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
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-gray-900 mb-6">Service Highlights</motion.h2>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <motion.li key={index} variants={fadeInUp} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div variants={fadeInUp} className="bg-gray-100 rounded-xl p-8 text-center">
                <p className="text-gray-600 text-lg">Service fee</p>
                <p className="text-5xl font-bold text-red-600 my-2">{service.price}</p>
                <p className="text-gray-500 mb-6">Per director removal</p>
                <Button asChild size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Link href="/contact">Start the Process <ArrowRight className="ml-2" /></Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
