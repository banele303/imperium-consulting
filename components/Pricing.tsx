"use client"

import { motion, Variants } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const packages = [
  {
    name: 'Founder BO',
    price: 'R1300',
    features: [
      'Business Registration',
      'SARS Income Tax No',
      'Business Certificate',
      'Share Certificate',
      'Beneficial Ownership Declaration',
    ],
    highlight: false,
    cta: 'Get Started',
  },
  {
    name: 'Runner BO',
    price: 'R1950',
    features: [
      'Business Registration',
      'SARS Income Tax No',
      'Business Certificate',
      'Share Certificate',
      'Beneficial Ownership Declaration',
      '2 Logo Templates',
      'B-BBEE Certificate',
    ],
    highlight: true,
    cta: 'Choose Plan',
  },
  {
    name: 'Empire BO',
    price: 'R2600',
    features: [
      'Business Registration',
      'SARS Income Tax No',
      'Business Certificate',
      'Share Certificate',
      'Beneficial Ownership Declaration',
      '2 Logo Templates',
      'B-BBEE Certificate',
      'CSD Report',
      'Tax Clearance',
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

export default function Pricing() {
  return (
    <section className="py-32 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-full text-emerald-700 text-sm font-semibold mb-6"
          >
            💼 Complete Business Solutions
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6"
          >
            Business Registration
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 mt-2">Packages with BO</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Choose the perfect plan to launch your business with confidence. All packages are for Private Company / PTY (LTD).
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
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
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-3xl opacity-100 blur-sm"></div>
                )}
                
                <div className={`relative ${pkg.highlight ? 'm-1 bg-white/90 backdrop-blur-sm rounded-3xl' : ''} flex flex-col h-full`}>
                  {/* Header */}
                  <div className={`relative p-8 ${pkg.highlight ? 'bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500' : 'bg-gradient-to-r from-slate-800 to-gray-900'} rounded-t-3xl`}>
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
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${pkg.highlight ? 'bg-gradient-to-r from-emerald-500 to-cyan-500' : 'bg-gradient-to-r from-gray-600 to-gray-700'}`}>
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
                          ? 'bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 hover:from-emerald-700 hover:via-cyan-700 hover:to-blue-700 text-white' 
                          : 'bg-gradient-to-r from-slate-700 to-gray-800 hover:from-slate-800 hover:to-gray-900 text-white'
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

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 relative"
        >
          {/* Glassmorphism CTA card */}
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/50 text-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl"></div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full text-orange-700 text-sm font-semibold mb-6"
              >
                🎉 Special Offer
              </motion.div>
              
              <h4 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">
                Ready to
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600">Start Today?</span>
              </h4>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                🏦 <strong>FREE Optional Business Bank Account</strong> with every package! Get everything you need to launch your business successfully.
              </p>
              
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 hover:from-emerald-700 hover:via-cyan-700 hover:to-blue-700 text-white font-bold text-lg px-10 py-4 shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">Get Started Now</span>
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-cyan-700 to-blue-700 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
