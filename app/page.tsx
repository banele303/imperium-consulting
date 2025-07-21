"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Users, Award, Clock, Briefcase, FileText, ShieldCheck, Star, Target, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from 'next/image'
import Pricing from '@/components/Pricing'
import PricingPty from '@/components/PricingPty'

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

const services = [
    { title: "Business Registration", price: "R650", icon: Briefcase },
    { title: "Beneficial Ownership", price: "R500", icon: Users },
    { title: "COIDA Letter of Good Standing", price: "R3500", icon: FileText },
    { title: "Tax Clearance Certificate", price: "R450", icon: ShieldCheck },
    { title: "CSD Registration", price: "R400", icon: Briefcase },
    { title: "Annual Returns Filling", price: "R150", icon: FileText },
];

const whyChooseUs = [
    { title: "Tailored Solutions for Unique Challenges", description: "Our team takes the time to understand your specific business challenges and goals, providing customized strategies.", icon: Star },
    { title: "Proven Track Record of Success", description: "With years of experience across various industries, we’ve helped countless businesses achieve sustainable growth.", icon: Award },
    { title: "Expertise Across Multiple Disciplines", description: "Our team consists of experts in various areas of business consulting. This broad expertise ensures that we can tackle any challenge your company faces with precision and insight.", icon: Users },
    { title: "Results Driven Approach", description: "We focus on achieving measurable results, whether it’s boosting efficiency, increasing profitability, or accelerating growth.", icon: Target },
    { title: "Dedicated Partnership", description: "We’re more than just consultants—we’re committed to your long-term success and work closely with you at every stage of your growth journey.", icon: CheckCircle },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 pb-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-cyan-300 text-sm font-medium mb-6"
              >
                🚀 South Africa's Premier Business Solutions
              </motion.div>
              
              <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                Navigate
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mt-2 animate-gradient-x">
                  Compliance
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mt-2">
                  With Ease
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mt-8 leading-relaxed max-w-lg">
                Transform your business journey with lightning-fast registration, seamless compliance, and expert guidance. We turn complex paperwork into simple success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mt-12">
                <Button asChild size="lg" className="group relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold">
                  <Link href="/services">
                    <span className="relative z-10">Explore Services</span>
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold">
                  <Link href="/contact">
                    <span className="relative z-10">Get a Free Quote</span>
                    <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative z-10"
            >
              <div className="relative">
                {/* Floating cards with glassmorphism */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">Popular Services</h3>
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {services.slice(0, 3).map((service, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                        className="group flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <service.icon className="h-5 w-5 text-white" />
                          </div>
                          <span className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-300">{service.title}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-emerald-400 font-bold text-lg mr-2">{service.price}</span>
                          <ArrowRight className="h-4 w-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full mt-8 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-purple-600 text-white shadow-xl transform hover:scale-105 transition-all duration-300 py-3 text-lg font-semibold">
                    <Link href="/services">
                      View All Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                
                {/* Floating stats */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-2xl shadow-2xl border border-white/20"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">200+</div>
                    <div className="text-pink-200 text-sm">Happy Clients</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-2xl shadow-2xl border border-white/20"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-cyan-200 text-sm">Success Rate</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative h-96"
            >
                <Image src="/imperiam2.jpeg" alt="Modern office discussion" fill className="rounded-2xl shadow-2xl object-cover"/>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">About Imperial Consulting</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">At Imperial Consulting, we specialize in assisting entrepreneurs and businesses navigate South Africa's complex regulatory and compliance landscape with ease and confidence. Whether you're starting a new business or maintaining compliance, we provide fast, reliable, and affordable services to get you up and running and keep you there.</p>
            </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-25"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 text-sm font-semibold mb-4">
              ✨ Excellence in Every Service
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Why Choose
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
                Imperial?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your dedicated partners in achieving business success and compliance excellence.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer} 
            initial="initial" 
            whileInView="animate" 
            viewport={{ once: true }} 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChooseUs.slice(0, 3).map((item, i) => (
              <motion.div variants={fadeInUp} key={i}>
                <div className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-500 h-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-white/50 dark:border-gray-700/50 hover:border-white/80 dark:hover:border-gray-600/80">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm m-1 rounded-3xl p-8 h-full">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     

      {/* Pricing Section */}
      <Pricing />
      <PricingPty />

       {/* Mission and Vision Section */}
       <section className="py-24 relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="absolute inset-0 opacity-10 dark:opacity-5">
              <Image src="/impimage.jpeg" fill className="object-cover" alt="Abstract background" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative">
              <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20 dark:border-gray-700/20">
                      <Target className="h-12 w-12 text-green-500 mb-4" />
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                      <p className="mt-4 text-gray-700 dark:text-gray-300">To simplify business compliance and empower entrepreneurs by providing fast, reliable, and affordable registration and regulatory services that support growth, legal compliance, and long-term success.</p>
                  </div>
              </motion.div>
              <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{delay: 0.2}}>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20 dark:border-gray-700/20">
                      <Eye className="h-12 w-12 text-blue-500 mb-4" />
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                      <p className="mt-4 text-gray-700 dark:text-gray-300">To be South Africa's leading business support partner trusted by startups, SMEs, and contractors alike for seamless company registrations, compliance solutions, and professional service delivery.</p>
                  </div>
              </motion.div>
          </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Trusted by
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                South African Businesses
              </span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeInUp} 
              initial="initial" 
              whileInView="animate" 
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">200+</h3>
              <p className="text-cyan-200 text-lg font-medium">Happy Clients</p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp} 
              initial="initial" 
              whileInView="animate" 
              viewport={{ once: true }} 
              transition={{delay: 0.2}}
              className="text-center group"
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">100%</h3>
              <p className="text-purple-200 text-lg font-medium">Success Rate</p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp} 
              initial="initial" 
              whileInView="animate" 
              viewport={{ once: true }} 
              transition={{delay: 0.4}}
              className="text-center group"
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">2019</h3>
              <p className="text-emerald-200 text-lg font-medium">Established Since</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-white via-slate-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glassmorphism card */}
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/50 dark:border-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-500">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-full text-purple-700 dark:text-purple-300 text-sm font-semibold mb-8"
              >
                🚀 Ready to Transform Your Business?
              </motion.div>
              
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-8">
                Start Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 mt-2">
                  Success Story
                </span>
                <span className="block text-gray-900 dark:text-white mt-2">Today</span>
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of successful South African businesses. Let us handle the compliance complexities while you focus on what matters most - growing your empire.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button asChild size="lg" className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 px-10 py-4 text-lg font-semibold">
                  <Link href="/services">
                    <span className="relative z-10">View Our Packages</span>
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-red-700 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </Link>
                </Button>
                
                <Button asChild size="lg" variant="outline" className="group border-2 border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400 backdrop-blur-sm shadow-xl transform hover:scale-105 transition-all duration-300 px-10 py-4 text-lg font-semibold">
                  <Link href="/contact">
                    <span className="relative z-10">Get Free Quote</span>
                    <div className="absolute inset-0 bg-purple-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </Button>
              </div>
              
              {/* Trust indicators */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm font-medium">Fast Processing</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm font-medium">Expert Support</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm font-medium">100% Compliance</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm font-medium">Affordable Pricing</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  )
}
