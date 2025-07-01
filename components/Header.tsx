import React from 'react';

export const Header = () => {
  return (
    <nav className="bg-podcast-primary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-podcast-red rounded-full animate-pulse-slow"></div>
              <span className="text-podcast-gold font-bold text-xl">Trashcan Records</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-podcast-gold hover:text-podcast-accent transition-colors">About</a>
            <a href="#features" className="text-podcast-gold hover:text-podcast-accent transition-colors">Features</a>
            <a href="#booking" className="text-podcast-gold hover:text-podcast-accent transition-colors">Book Studio</a>
            <a href="#contact" className="text-podcast-gold hover:text-podcast-accent transition-colors">Contact</a>
          </div>
          
          <div className="md:hidden">
            <button className="text-podcast-gold hover:text-podcast-accent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}; 