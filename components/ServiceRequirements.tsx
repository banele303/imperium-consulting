"use client"

import { motion } from "framer-motion"
import { FileText, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const serviceRequirements = {
  "business-registration": {
    title: "Company Registration",
    requirements: [
      "ID Copy Front & Back (Smart ID)",
      "4 Business Names",
      "Number Phone",
      "Email",
      "Physical Address",
      "Postal Address"
    ]
  },
  "csd-registration": {
    title: "CSD Registration Report",
    requirements: [
      "Business Certificate",
      "B-BBEE Certificate",
      "Proof of Address",
      "Bank Confirmation Letter (If Applicable)",
      "Commodities"
    ]
  },
  "cidb": {
    title: "CIDB Registration",
    requirements: [
      "CSD Report",
      "SARS Tax Returns must be compliant (Mandatory)",
      "Class Grade which must be registered"
    ]
  },
  "coida": {
    title: "COIDA Letter of Good standing",
    requirements: [
      "Business Certificate",
      "Tax Clearance Certificate",
      "Bank Confirmation Letter",
      "Nature of Business",
      "Employer Payroll Report"
    ]
  },
  "tax-pin": {
    title: "Tax Pin",
    requirements: [
      "Business Certificate"
    ]
  },
  "beneficial-ownership": {
    title: "Beneficial Ownership Declaration",
    requirements: [
      "Business Certificate",
      "Director ID Copy",
      "Company Share Certificate"
    ]
  },
  "share-certificate": {
    title: "Share Certificate",
    requirements: [
      "Business Certificate",
      "Director ID Copy"
    ]
  },
  "director-removal": {
    title: "Director Removal",
    requirements: [
      "Business Certificate",
      "Director ID Copy",
      "OTP"
    ]
  },
  "adding-director": {
    title: "New Director Appointment",
    requirements: [
      "Business Certificate",
      "Director's ID Copy",
      "Director's Physical & Postal Address",
      "Director's Email",
      "Director's Number Phone",
      "OTP"
    ]
  },
  "company-name-change": {
    title: "Company Name Change",
    requirements: [
      "Business Certificate",
      "4 Business Names",
      "OTP"
    ]
  },
  "company-reinstatement": {
    title: "Company Re-instatement",
    requirements: [
      "Business Certificate",
      "Director's ID Copy Certified (Mandatory)"
    ]
  },
  "b-bbee-certificate": {
    title: "B-BBEE Certificate",
    requirements: [
      "Business Certificate",
      "CIPC Customer Code & Password"
    ]
  }
}

interface ServiceRequirementsProps {
  serviceKey?: string
  showAll?: boolean
  className?: string
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function ServiceRequirements({ serviceKey, showAll = false, className = "" }: ServiceRequirementsProps) {
  const servicesToShow = showAll 
    ? Object.entries(serviceRequirements)
    : serviceKey && serviceRequirements[serviceKey as keyof typeof serviceRequirements]
      ? [[serviceKey, serviceRequirements[serviceKey as keyof typeof serviceRequirements]]]
      : []

  if (!showAll && !serviceKey) return null

  return (
    <section className={`py-16 bg-gradient-to-br from-green-50 to-blue-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-semibold mb-4">
            <FileText className="h-4 w-4" />
            Requirements
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {showAll ? "Requirements for All Our Services" : "Required Documents"}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {showAll 
              ? "Please ensure you have the following documents ready for your chosen service to expedite the process."
              : "Please prepare the following documents before starting your application to ensure a smooth process."
            }
          </p>
        </motion.div>

        <div className={`grid gap-6 ${showAll ? 'md:grid-cols-2 lg:grid-cols-3' : 'max-w-2xl mx-auto'}`}>
          {servicesToShow.map(([key, service], index) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border border-green-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg font-bold text-gray-900">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.requirements.map((requirement, reqIndex) => (
                      <motion.li
                        key={reqIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (reqIndex * 0.05) }}
                        className="flex items-start gap-3 text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className={requirement.includes("Mandatory") ? "font-semibold text-red-600" : ""}>
                          {requirement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Card className="max-w-2xl mx-auto bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-blue-900">Important Note</h3>
                </div>
                <p className="text-blue-800 text-sm leading-relaxed">
                  All documents must be clear, legible copies. Certified copies may be required for certain services. 
                  Our team will guide you through the specific requirements for your chosen service during the application process.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  )
}
