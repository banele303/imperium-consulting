'use client';

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.jpeg" alt="Imperial Consulting Logo" width={64} height={64} className="rounded-full" />
            </Link>
            <p className="text-gray-400 text-sm">Your partner in business success.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-200 tracking-wider uppercase">Services</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="/company-registration" className="text-gray-400 hover:text-green-400 transition-colors">Company Registration</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-green-400 transition-colors">All Services</a></li>
              <li><a href="/packages" className="text-gray-400 hover:text-green-400 transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-200 tracking-wider uppercase">About</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-green-400 transition-colors">Our Story</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-green-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-200 tracking-wider uppercase">Connect</h4>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors"><Linkedin className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        {/* Partners/Logos Section */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <h4 className="text-lg font-semibold text-gray-200 tracking-wider uppercase text-center mb-6">Our Partners</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <div className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-shadow">


              <Image
                src="/logos/Cipc logo.png"
                alt="CIPC Logo"
                width={120}
                height={90}
                className="object-contain max-h-20"
              />




            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-shadow">
              <Image
                src="/logos/CIDB_LogoCMYK-1.png"
                alt="CIDB Logo"
                width={120}
                height={90}
                className="object-contain max-h-20"
              />



            </div>

            <div className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-shadow">
              <Image
                src="/logos/CSD Logo.png"
                alt="CSD Logo"
                width={120}
                height={90}
                className="object-contain max-h-20"
              />
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-shadow">
              <Image
                src="/logos/labour logo.png"
                alt="Labour Logo"
                width={120}
                height={90}
                className="object-contain max-h-20"
              />
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-shadow">
              <Image
                src="/logos/fnb.jpeg"
                alt="Company Logo"
                width={120}
                height={90}
                className="object-contain max-h-20"
              />
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-shadow">
              <Image
                src="/logos/sarslogo.png"
                alt="SARS Logo"
                width={120}
                height={90}
                className="object-contain max-h-20"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Imperial Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
