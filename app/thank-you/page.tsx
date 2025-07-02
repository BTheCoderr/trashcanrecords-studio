import React from 'react';
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Thank You Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white pt-24 pb-20 overflow-hidden min-h-screen flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8 backdrop-blur-sm">
            <span className="text-sm font-medium text-green-200">✅ Message Sent</span>
            <div className="w-2 h-2 bg-green-400 rounded-full ml-3 animate-ping"></div>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent">
            THANK YOU!
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Your message has been received! We&#39;ll get back to you within <span className="text-green-400 font-semibold">24 hours</span> to discuss your podcast project and studio booking.
          </p>
          
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-green-500/30 mb-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">What happens next?</h2>
            <div className="text-left space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">1</div>
                <p>We&#39;ll review your message and preferred booking details</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">2</div>
                <p>Check studio availability for your preferred date and time</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">3</div>
                <p>Send you booking confirmation and any additional details</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10">← BACK TO HOME</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            <a 
              href="https://www.peerspace.com/pages/listings/686424eddba671f73a7afbc9" 
              target="_blank"
              className="inline-flex items-center px-8 py-4 bg-black/50 hover:bg-black/70 text-white font-semibold rounded-2xl transition-all duration-300 border border-cyan-500/50 hover:border-cyan-400 backdrop-blur-sm hover:shadow-cyan-500/25 hover:shadow-lg"
            >
              Book on Peerspace ↗
            </a>
          </div>
          
          {/* Contact Info Reminder */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <p className="text-gray-400 mb-4">Need immediate assistance?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:4012179799" 
                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
              >
                📞 (401) 217-9799
              </a>
              <span className="hidden sm:block text-gray-600">•</span>
              <a 
                href="mailto:trashcanrecords514@gmail.com" 
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors break-all"
              >
                📧 trashcanrecords514@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 