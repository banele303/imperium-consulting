"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function CompanyNameChangePage() {
  const features = [
    "A comprehensive name search to ensure availability.",
    "Reservation of the new company name with CIPC.",
    "Preparation and filing of name change amendment documents.",
    "Issuing of the amended registration certificate (COR14.3).",
    "Notification to SARS of the name change.",
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight">
            Company Name Change
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto"
          >
            Rebrand or rename your business with our seamless company name change service.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
          {/* Left Column - Features */}
          <motion.div variants={fadeInUp} className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A New Identity for Your Business</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you&apos;re rebranding or simply need a new name, we handle the entire legal process of changing your company&apos;s registered name with CIPC, ensuring a smooth transition.
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
                    <h4 className="font-bold text-lg text-gray-800">Name Change Service</h4>
                    <p className="text-3xl font-bold text-green-600 my-2">R600</p>
                    <p className="text-sm text-gray-600">Includes all CIPC fees.</p>
                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                      Change Company Name
                    </Button>
                  </div>
                <div className="text-center">
                  <Link href="/contact" className="text-sm text-green-600 hover:underline">
                    Questions? Contact Us <ArrowRight className="inline h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
