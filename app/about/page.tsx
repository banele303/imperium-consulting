"use client"

import { motion } from "framer-motion"
import { Target, Eye, Users, Award, Clock, Shield, Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import MissionVision from "@/components/MissionVision"

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

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Tailored Solutions",
      description:
        "We take the time to understand your specific business challenges and goals, providing customized strategies that work for you.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Proven Track Record",
      description:
        "With years of experience across various industries, we&apos;ve helped countless businesses achieve sustainable growth.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Multi-Disciplinary Expertise",
      description:
        "Our team consists of experts in various areas of business consulting, ensuring comprehensive solutions.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Results Driven Approach",
      description:
        "We focus on achieving measurable results, whether it&apos;s boosting efficiency, increasing profitability, or accelerating growth.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Dedicated Partnership",
      description:
        "We&apos;re more than just consultants—we&apos;re committed to your long-term success and work closely with you at every stage.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">


      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                About
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
                  {" "}
                  Imperial Consulting
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Imperial Consulting, we specialize in assisting entrepreneurs and businesses navigate South Africa&apos;s
                complex regulatory and compliance landscape with ease and confidence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">200+</div>
                  <div className="text-gray-600">Clients Assisted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2019</div>
                  <div className="text-gray-600">Established</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">100%</div>
                  <div className="text-gray-600">Quality Focused</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </motion.div>

            {/* Hero Image Section */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image 
                  src="/imperiam2.jpeg" 
                  alt="Imperial Consulting Team" 
                  width={600} 
                  height={500} 
                  className="object-cover w-full h-[500px] transform hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="text-sm font-semibold text-gray-900">🏆 Trusted Since 2019</span>
                  </div>
                </div>
                
                {/* Bottom Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-1">Your Success Partner</h3>
                    <p className="text-sm text-gray-600">Empowering South African businesses to thrive</p>
                  </div>
                </div>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute -z-10 top-8 right-8 w-64 h-64 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To simplify business compliance and empower entrepreneurs by providing fast, reliable, and
                    affordable registration and regulatory services that support growth, legal compliance, and long-term
                    success.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To be South Africa&apos;s leading business support partner trusted by startups, SMEs, and contractors
                    alike for seamless company registrations, compliance solutions, and professional service delivery.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Imperial Consulting?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values drive everything we do
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg text-white w-fit mb-4">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you&apos;re a startup, contractor, or established company, we&apos;re here to ensure you meet all legal and
              regulatory requirements correctly, on time, and without hassle.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <CardTitle className="text-2xl">For Startups</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Get your business off the ground with our comprehensive startup packages. We handle all the
                    paperwork so you can focus on your business idea.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <CardTitle className="text-2xl">For Contractors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Ensure compliance with all contractor requirements including COIDA, tax clearances, and CSD
                    registration for government contracts.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <CardTitle className="text-2xl">For Established Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Maintain ongoing compliance with annual returns, beneficial ownership updates, and other regulatory
                    requirements to keep your business in good standing.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-green-100 mb-12">Let us handle the paperwork, so you can handle the business.</p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-4 text-green-200" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-green-100">073 325 6354</p>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 mx-auto mb-4 text-green-200" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-green-100">info@imperialconsulting.co.za</p>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto mb-4 text-green-200" />
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-green-100">157 Van Riebeeck Ave, Edenvale, Johannesburg, 1609</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                <Link href="/packages">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <MissionVision />
    </div>
  )
}
