"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X, Plus } from 'lucide-react'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'

const FloatingActionButtons = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  // Contact details
  const phoneNumber = "0733256354" // Formatted for tel: links
  const whatsappNumber = "27733256354" // International format for WhatsApp
  const displayPhone = "073 325 6354"

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, '_self')
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your business registration services. Can you help me?")
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Background overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Action buttons */}
      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <>
              {/* WhatsApp Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                onClick={handleWhatsApp}
                className="absolute bottom-20 right-0 group"
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  
                  {/* Button */}
                  <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-white/20 backdrop-blur-sm">
                    <WhatsAppIcon className="h-6 w-6" />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    WhatsApp Us
                    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-black/80 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                </div>
              </motion.button>

              {/* Call Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                onClick={handleCall}
                className="absolute bottom-36 right-0 group"
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  
                  {/* Button */}
                  <div className="relative bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-white/20 backdrop-blur-sm">
                    <Phone className="h-6 w-6" />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Call {displayPhone}
                    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-black/80 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                </div>
              </motion.button>
            </>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          onClick={toggleMenu}
          className="group relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
          
          {/* Main button */}
          <div className="relative bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white p-4 rounded-full shadow-2xl transition-all duration-300 border-2 border-white/20 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Pulse animation when closed */}
          {!isOpen && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.button>

        {/* Contact info badge (mobile only) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 20, y: 10 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="absolute bottom-0 right-20 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/50 md:hidden min-w-[200px]"
            >
              <div className="text-center">
                <h3 className="font-bold text-gray-900 text-sm mb-2">Contact Us</h3>
                <p className="text-xs text-gray-600 mb-3">Available 24/7 for urgent matters</p>
                <div className="space-y-2">
                  <div className="text-xs text-gray-700">
                    <strong>Phone:</strong> {displayPhone}
                  </div>
                  <div className="text-xs text-gray-700">
                    <strong>WhatsApp:</strong> Available
                  </div>
                </div>
              </div>
              
              {/* Arrow pointing to main button */}
              <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-white/90 border-t-4 border-b-4 border-t-transparent border-b-transparent"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default FloatingActionButtons
