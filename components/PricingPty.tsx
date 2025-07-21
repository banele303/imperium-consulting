"use client"

import { motion, Variants } from 'framer-motion'
import { Check, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ptyPackages = [
  {
    name: 'FOUNDER',
    price: 'R650',
    features: [
      'Business Registration',
      'SARS Income Tax No',
      'Business Certificate',
    ],
    highlight: false,
    cta: 'Get Started',
  },
  {
    name: 'RUNNER',
    price: 'R1300',
    features: [
      'Business Registration',
      'SARS Income Tax No',
      'Business Certificate',
      '2 Business Logo Templates',
      'B-BBEE Certificate',
    ],
    highlight: true,
    cta: 'Choose Plan',
  },
  {
    name: 'EMPIRE',
    price: 'R1950',
    features: [
      'Business Registration',
      'SARS Income Tax No',
      'Business Certificate',
      '2 Business Logos Templates',
      'B-BBEE Certificate',
      'Tax Clearance Certificate',
      'CSD Report',
    ],
    highlight: false,
    cta: 'Get Started',
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

const PricingPty = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-green-50 via-green-50 to-green-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-300 to-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-300 to-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-green-100 to-green-100 rounded-full text-green-700 text-sm font-semibold mb-6"
          >
            🏢 Private Company Solutions
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6"
          >
            Private Company
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-600 to-green-700 mt-2">Registration Packages</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Straightforward, fast, and reliable registration for your new Private Company (Pty) Ltd.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ptyPackages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className={`group relative ${pkg.highlight ? 'transform scale-105' : ''}`}
            >
              {/* Glassmorphism card */}
              <div className="relative bg-white/70 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/50 hover:bg-white/80 transition-all duration-500 flex flex-col h-full">
                {/* Gradient border effect for highlighted package */}
                {pkg.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-500 to-green-600 rounded-3xl opacity-100 blur-sm"></div>
                )}
                
                <div className={`relative ${pkg.highlight ? 'm-1 bg-white/90 backdrop-blur-sm rounded-3xl' : ''} flex flex-col h-full`}>
                  {/* Header */}
                  <div className={`relative p-8 ${pkg.highlight ? 'bg-gradient-to-r from-green-500 via-green-500 to-green-600' : 'bg-gradient-to-r from-slate-800 to-green-900'} rounded-t-3xl`}>
                    {pkg.highlight && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        ⭐ MOST POPULAR
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white text-center mb-2">{pkg.name}</h3>
                    <div className="text-center text-white">
                      <span className="text-5xl font-black">{pkg.price}</span>
                      <span className="text-lg opacity-80 block mt-1">once off</span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="p-8 flex-grow">
                    <ul className="space-y-4">
                      {pkg.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * idx, duration: 0.4 }}
                          className="flex items-start group-hover:translate-x-1 transition-transform duration-300"
                        >
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${pkg.highlight ? 'bg-gradient-to-r from-green-500 to-green-500' : 'bg-gradient-to-r from-green-600 to-green-700'}`}>
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="p-8 mt-auto">
                    <Button 
                      size="lg" 
                      className={`w-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-xl ${
                        pkg.highlight 
                          ? 'bg-gradient-to-r from-green-600 via-green-600 to-green-700 hover:from-green-700 hover:via-green-700 hover:to-green-800 text-white' 
                          : 'bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white'
                      }`}
                    >
                      <span className="relative z-10">{pkg.cta}</span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingPty
