"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function CsdRegistrationPage() {
  const features = [
    "Full registration on the National Treasury's Central Supplier Database (CSD).",
    "Verification of company and director information.",
    "Linkage of your bank account and tax details.",
    "Assistance with industry classification codes.",
    "Generation of your CSD registration report and MAAA number.",
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-orange-500 to-amber-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight">
            CSD Registration
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-orange-100 max-w-3xl mx-auto"
          >
            Get your business registered on the Central Supplier Database to become eligible for government tenders and contracts.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
          {/* Left Column - Features */}
          <motion.div variants={fadeInUp} className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Unlock Government Opportunities</h2>
            <p className="text-lg text-gray-600 mb-8">
              CSD registration is a mandatory requirement for any business wanting to provide goods or services to the South African government. We simplify the entire registration process for you.
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
                <CardTitle className="text-2xl text-center">Registration Fee</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                  <div className='p-4 rounded-lg border border-green-500 bg-green-50'>
                    <h4 className="font-bold text-lg text-gray-800">CSD Registration Service</h4>
                    <p className="text-3xl font-bold text-green-600 my-2">R400</p>
                    <p className="text-sm text-gray-600">One-time fee for a complete and verified registration.</p>
                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                      Register Now
                    </Button>
                  </div>
                <div className="text-center">
                  <Link href="/contact" className="text-sm text-green-600 hover:underline">
                    Need Help? <ArrowRight className="inline h-4 w-4" />
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
