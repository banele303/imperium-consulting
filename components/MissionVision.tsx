"use client"

import { motion, type Variants } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

const cardVariants: Variants = {
  initial: { opacity: 0, y: 50, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
}

const MissionVision = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-blue-500 mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              To empower entrepreneurs and businesses by simplifying compliance and providing strategic guidance for
              sustainable growth in South Africa.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-10 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              To be the leading and most trusted consulting partner for businesses of all sizes, fostering a thriving
              and compliant entrepreneurial ecosystem in South Africa.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
