"use client"

import { motion } from "framer-motion"
import { CheckCircle, Clock, Shield, Users, ArrowRight, FileText, Award, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function CompanyRegistrationPage() {
  const registrationTypes = [
    {
      title: "Private Company (Pty Ltd)",
      price: "From R650",
      description: "Most common business structure for small to medium enterprises",
      features: [
        "Limited liability protection",
        "1-50 shareholders maximum",
        "Shares cannot be traded publicly",
        "Minimum 1 director required",
        "Annual compliance required",
      ],
      popular: true,
    },
    {
      title: "Non-Profit Company (NPC)",
      price: "From R650",
      description: "For organizations with social, charitable, or community purposes",
      features: [
        "No profit distribution to members",
        "Tax exemption opportunities",
        "Public benefit activities",
        "Minimum 3 directors required",
        "Annual compliance required",
      ],
      popular: false,
    },
  ]

  const process = [
    {
      step: "1",
      title: "Name Reservation",
      description: "We check and reserve your preferred company name with CIPC",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      step: "2",
      title: "Document Preparation",
      description: "Prepare all required registration documents and MOI",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      step: "3",
      title: "CIPC Submission",
      description: "Submit application to Companies and Intellectual Property Commission",
      icon: <Users className="h-6 w-6" />,
    },
    {
      step: "4",
      title: "Registration Complete",
      description: "Receive certificate of incorporation and company registration number",
      icon: <Award className="h-6 w-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">IC</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Imperial Consulting</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link href="/company-registration" className="text-green-600 font-medium">
                Company Registration
              </Link>
              <Link href="/packages" className="text-gray-700 hover:text-green-600 transition-colors">
                Packages
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-green-600 transition-colors">
                All Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                Private Company
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
                  {" "}
                  Registration
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Register your Private Company (Pty Ltd) with beneficial ownership compliance. Fast, reliable, and
                affordable registration services with expert support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                >
                  <Link href="/packages">
                    View Registration Packages <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-green-500 to-blue-600 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Why Register with Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-200" />
                    <span>Fast 3-5 day turnaround</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-green-200" />
                    <span>Expert guidance throughout</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-200" />
                    <span>100% compliance guaranteed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-green-200" />
                    <span>Beneficial ownership included</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-4">
              Company Registration Types
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right business structure for your needs
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {registrationTypes.map((type, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`h-full hover:shadow-lg transition-all duration-300 ${type.popular ? "ring-2 ring-green-500" : ""}`}
                >
                  {type.popular && (
                    <div className="bg-green-500 text-white text-center py-2 text-sm font-medium">
                      Most Popular Choice
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl">{type.title}</CardTitle>
                        <CardDescription className="mt-2">{type.description}</CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-lg font-bold">
                        {type.price}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant={type.popular ? "default" : "outline"}>
                      Register {type.title.split(" ")[0]} Company
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900 mb-4">
              Our Registration Process
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent, and efficient - we handle everything for you
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {process.map((step, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 text-green-600">{step.icon}</div>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Beneficial Ownership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Beneficial Ownership
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
                  {" "}
                  Compliance
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                All our registration packages include beneficial ownership declarations to ensure full compliance with
                South African company law requirements.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Complete BO Declaration</span>
                    <p className="text-gray-600">Full beneficial ownership disclosure and filing</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Legal Compliance</span>
                    <p className="text-gray-600">Ensure adherence to all regulatory requirements</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Expert Support</span>
                    <p className="text-gray-600">Professional guidance throughout the process</p>
                  </div>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-blue-600">
                <Link href="/packages">View BO Packages</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">What is Beneficial Ownership?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Beneficial ownership refers to the natural person(s) who ultimately own or control a company, either
                    directly or indirectly.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600">Key Requirements:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Identify all beneficial owners (25%+ ownership)</li>
                      <li>• Declare control mechanisms</li>
                      <li>• Annual updates required</li>
                      <li>• Penalties for non-compliance</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    Let us handle the complexity - we ensure full compliance from day one.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Register Your Company?</h2>
            <p className="text-xl text-green-100 mb-8">
              Get started today with our expert registration services. Fast, reliable, and fully compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/packages">Choose Your Package</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                <Link href="tel:0733256354">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 073 325 6354
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
