'use client';

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

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
              <a href="https://www.facebook.com/people/Imperial-Consulting/100070590741118/?rdid=EVSM6Y2OxzCTxinB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CSj1qGqjq%2F" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="https://www.instagram.com/imperial_consulting_sa/profilecard/?igsh=Z3k1NXo4MjJ3Y3hx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="https://www.tiktok.com/@imperial_consulting_?_t=ZM-8yJxY4pEckA&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                {/* TikTok Icon (custom SVG) */}
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298-.002.596.027.89.09V9.4a6.33 6.33 0 00-1-.08 6.34 6.34 0 00-5.65 9.15A6.34 6.34 0 0016.59 14h.03V9.41a8.16 8.16 0 004.65 1.47V7.43a4.83 4.83 0 01-1.68-.74z" />
                </svg>
              </a>
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
