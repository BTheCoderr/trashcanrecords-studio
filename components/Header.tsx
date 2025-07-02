import React from 'react';

export const Header = () => {
  return (
    <nav className="bg-studio-primary/95 backdrop-blur-sm shadow-modern sticky top-0 z-50 border-b border-studio-light/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-studio-accent to-studio-purple rounded-2xl flex items-center justify-center">
                <div className="w-3 h-3 bg-studio-light rounded-full animate-pulse"></div>
              </div>
              <span className="text-studio-light font-bold text-xl tracking-tight">Providence Creative Studio</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-studio-light/80 hover:text-studio-accent transition-colors duration-300 font-medium">About</a>
            <a href="#features" className="text-studio-light/80 hover:text-studio-accent transition-colors duration-300 font-medium">Features</a>
            <a href="#gallery" className="text-studio-light/80 hover:text-studio-accent transition-colors duration-300 font-medium">Gallery</a>
            <a href="#booking" className="bg-gradient-to-r from-studio-accent to-studio-purple text-white px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 font-medium shadow-card">Book Studio</a>
            <a href="#contact" className="text-studio-light/80 hover:text-studio-accent transition-colors duration-300 font-medium">Contact</a>
          </div>
          
          <div className="md:hidden">
            <button className="text-studio-light hover:text-studio-accent transition-colors duration-300">
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