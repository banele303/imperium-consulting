"use client"

import { useState } from 'react'
import { motion } from "framer-motion"
import { Briefcase, FileText, Award, ShieldCheck, Users, RefreshCw, Search, DollarSign, Building, CreditCard } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ServiceRequirements from "@/components/ServiceRequirements"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const allServices = [
  { icon: Briefcase, title: "Business Registration", price: "R650", description: "Complete private company registration with CIPC.", category: "Registration", href: "/services/business-registration" },
  { icon: Users, title: "Beneficial Ownership", price: "R500", description: "BO declaration filing and compliance.", category: "Compliance", href: "/services/beneficial-ownership" },
  { icon: Award, title: "COIDA Letter of Good Standing", price: "R3500", description: "Compensation for Occupational Injuries and Diseases Act compliance.", category: "Compliance", href: "/services/coida" },
  { icon: ShieldCheck, title: "Tax Clearance Certificate", price: "R450", description: "SARS tax clearance certificate application.", category: "Tax Services", href: "/services/tax-clearance" },
  { icon: CreditCard, title: "CSD Registration", price: "R400", description: "Central Supplier Database registration for government tenders.", category: "Registration", href: "/services/csd-registration" },
  { icon: RefreshCw, title: "Company Reinstatement", price: "R800", description: "Restore deregistered company status.", category: "Corporate", href: "/services/company-reinstatement" },
  { icon: Building, title: "NPC Registration", price: "R650", description: "Non-Profit Company registration.", category: "Registration", href: "/services/npc-registration" },
  { icon: FileText, title: "Share Certificate", price: "R350", description: "Official share certificate issuance.", category: "Corporate", href: "/services/share-certificate" },
  { icon: Search, title: "Company Name Change", price: "R600", description: "Change registered company name.", category: "Corporate", href: "/services/company-name-change" },
  { icon: FileText, title: "Retrieve Company Docs", price: "R240", description: "Obtain copies of company documents.", category: "Corporate", href: "/services/retrieve-docs" },
  { icon: Award, title: "B-BBEE Certificate", price: "R300", description: "Broad-Based Black Economic Empowerment certificate.", category: "Compliance", href: "/services/b-bbee-certificate" },
  { icon: DollarSign, title: "Annual Returns Filing", price: "R150", description: "Annual return submission to CIPC.", category: "Compliance", href: "/services/annual-returns" },
  { icon: Building, title: "Company Address Change", price: "R250", description: "Update registered company address.", category: "Corporate", href: "/services/company-address-change" },
  { icon: Users, title: "Director Removal", price: "R450", description: "Remove director from company records.", category: "Corporate", href: "/services/director-removal" },
  { icon: Users, title: "Adding Director", price: "R450", description: "Add new director to company.", category: "Corporate", href: "/services/adding-director" },
]

const categories = ["All", "Registration", "Compliance", "Corporate", "Tax Services"]

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredServices = allServices.filter((service) => {
    if (selectedCategory === "All") return true
    return service.category === selectedCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-r from-green-500 to-blue-600"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Our Services
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto"
          >
            Comprehensive, reliable, and efficient solutions designed to ensure your business thrives in a competitive landscape.
          </motion.p>
        </div>
      </motion.section>

      {/* Services List & Filters */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" viewport={{ once: true }}>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "primary" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full px-6 py-2 text-sm md:text-base font-semibold transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </motion.div>

            <motion.div 
              key={selectedCategory} // Re-trigger animation on category change
              variants={staggerContainer} 
              initial="initial" 
              animate="animate" 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center text-green-600 group-hover:text-blue-600 transition-colors duration-300">
                          <service.icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-lg font-bold text-gray-800">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                      <p className="text-gray-600 text-sm mb-6">{service.description}</p>
                      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                        <span className="text-xl font-bold text-green-600">{service.price}</span>
                        <Button asChild size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold">
                          <Link href={service.href}>View Details</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <ServiceRequirements showAll={true} />

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking for a Custom Solution?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We can create tailored packages to meet your specific business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/packages">View Packages</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}