import React from 'react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/20">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl flex items-center justify-center animate-pulse">
              <span className="text-white font-black text-xl">T</span>
            </div>
            <div>
              <h1 className="text-xl font-black text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">TRASHCAN RECORDS</h1>
              <p className="text-sm text-gray-400 -mt-1 font-medium">STUDIO</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#about" 
              className="text-gray-300 hover:text-purple-400 font-medium transition-colors uppercase tracking-wider text-sm"
            >
              About
            </a>
            <a 
              href="#features" 
              className="text-gray-300 hover:text-cyan-400 font-medium transition-colors uppercase tracking-wider text-sm"
            >
              Features  
            </a>
            <a 
              href="#gallery" 
              className="text-gray-300 hover:text-pink-400 font-medium transition-colors uppercase tracking-wider text-sm"
            >
              Gallery
            </a>
            <a 
              href="#pricing" 
              className="text-gray-300 hover:text-green-400 font-medium transition-colors uppercase tracking-wider text-sm"
            >
              Pricing
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:4012179799"
              className="hidden sm:inline-flex items-center px-4 py-2 text-gray-300 hover:text-cyan-400 font-medium transition-colors"
            >
              📞 (401) 217-9799
            </a>
            <a
              href="#booking"
              className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              🎙️ BOOK NOW
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-50"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-purple-500/20 transition-colors">
            <span className="text-2xl text-purple-400">☰</span>
          </button>
        </div>
      </nav>
    </header>
  )
} 