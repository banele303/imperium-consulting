"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import ServiceRequirements from "@/components/ServiceRequirements"
import Pricing from '@/components/Pricing'
import PricingPty from '@/components/PricingPty'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function BusinessRegistrationPage() {
  const features = [
    "Company Name Reservation",
    "CIPC Registration (COR14.3)",
    "Income Tax Number",
    "Share Certificates for all Directors",
    "Free BEE Affidavit",
    "Business Bank Account (Optional)",
  ]

  const packages = [
    {
      name: "Standard Package",
      price: "R650",
      features: [
        "Full Company Registration",
        "Tax Number Included",
        "Share Certificates",
      ],
      isPopular: true,
    },
    {
      name: "Compliance Bundle",
      price: "R1200",
      features: [
        "Standard Package Items",
        "Tax Clearance Certificate",
        "B-BBEE Certificate",
      ],
      isPopular: false,
    },
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-green-500 to-blue-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight">
            Business Registration Services
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-green-100 max-w-3xl mx-auto"
          >
            Launch your business with confidence. We handle the entire CIPC registration process for you quickly and efficiently.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      
      {/* Pricing Packages */}
      <Pricing />
      <PricingPty />
      
      {/* Requirements Section */}
      <ServiceRequirements serviceKey="business-registration" />
    </div>
  );
}
