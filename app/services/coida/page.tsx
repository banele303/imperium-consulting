"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import ServiceRequirements from "@/components/ServiceRequirements"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function CoidaPage() {
  const features = [
    "Registration with the Compensation Fund (CF)",
    "Submission of Return of Earnings (ROE)",
    "Calculation and advice on assessment fees",
    "Application and retrieval of the Letter of Good Standing",
    "Annual renewal reminders to ensure continuous compliance",
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight">
            COIDA Letter of Good Standing
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-purple-100 max-w-3xl mx-auto"
          >
            Secure your Letter of Good Standing to prove your compliance with the Compensation for Occupational Injuries and Diseases Act.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
          {/* Left Column - Features */}
          <motion.div variants={fadeInUp} className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is COIDA Compliance?</h2>
            <p className="text-lg text-gray-600 mb-8">
              The COIDA Act protects employees against loss of income due to work-related injuries or diseases. A Letter of Good Standing is official proof that you have met all your obligations to the Compensation Fund and is often required for tenders and contracts.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Pricing */}
          <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
            <Card className="bg-white rounded-xl shadow-xl sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Service Fee</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                  <div className='p-4 rounded-lg border border-green-500 bg-green-50'>
                    <h4 className="font-bold text-lg text-gray-800">Letter of Good Standing</h4>
                    <p className="text-3xl font-bold text-green-600 my-2">R3,500</p>
                    <p className="text-sm text-gray-600">Includes registration and first-year assessment fee.</p>
                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                      Apply Now
                    </Button>
                  </div>
                <div className="text-center">
                  <Link href="/contact" className="text-sm text-green-600 hover:underline">
                    Need Assistance? <ArrowRight className="inline h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Requirements Section */}
      <ServiceRequirements serviceKey="coida" />
    </div>
  );
}
