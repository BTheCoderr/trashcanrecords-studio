import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl flex items-center justify-center animate-pulse">
                <span className="text-white font-black text-xl">T</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">TRASHCAN RECORDS STUDIO</h3>
                <p className="text-gray-400 font-medium">Professional Podcast & Media Studio</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Located in Providence&apos;s Innovation District, we provide a professional podcast recording space perfect for 
              content creators, interviews, and media productions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <span className="text-white text-lg">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <span className="text-white text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <span className="text-white text-lg">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 uppercase text-sm">About Studio</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 uppercase text-sm">Features</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-pink-400 transition-colors duration-300 uppercase text-sm">Gallery</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-green-400 transition-colors duration-300 uppercase text-sm">Pricing</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 uppercase text-sm">Book Now</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="text-2xl">📞</span>
                <a href="tel:4012179799" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  (401) 217-9799
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-2xl">📧</span>
                <a href="mailto:trashcanrecords514@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 break-all">
                  trashcanrecords514@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-2xl">📍</span>
                <span className="text-gray-300 leading-relaxed">
                  CIC Building<br />
                  Providence Innovation District<br />
                  Providence, RI
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 <span className="text-purple-400 font-semibold">Trashcan Records Studio</span>. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a 
                href="https://www.peerspace.com/pages/listings/686424eddba671f73a7afbc9" 
                target="_blank"
                className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300 font-medium"
              >
                Book on Peerspace
              </a>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400 text-sm">$75/hour • <span className="text-cyan-400">2hr minimum</span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 