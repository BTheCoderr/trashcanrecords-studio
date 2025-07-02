'use client';

import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function Home() {
  const studioFeatures = [
    {
      icon: '📶',
      title: 'High-Speed WiFi',
      description: 'Reliable, fast internet connection perfect for streaming, video calls, and content creation needs.',
    },
    {
      icon: '🪑',
      title: 'Flexible Furniture Setup',
      description: 'Tables and chairs available upon request to configure the space exactly for your event or production.',
    },
    {
      icon: '🧼',
      title: 'Professional Cleaning',
      description: 'Professionally cleaned twice daily (morning and evening) with sanitizer and disinfecting supplies provided.',
    },
    {
      icon: '🤫',
      title: 'Quiet Professional Space',
      description: 'Ideal environment for podcasts, recordings, meetings, and focused creative work.',
    },
    {
      icon: '🛗',
      title: 'Easy Access',
      description: 'Centrally located in Providence Innovation District with elevator access and on-site host assistance.',
    },
    {
      icon: '👨‍💼',
      title: 'On-Site Support',
      description: 'Host available to greet you upon arrival and provide assistance throughout your session.',
    }
  ];

  const packages = [
    {
      title: 'Content Creation',
      price: '$75/hour',
      features: [
        '4-hour minimum booking',
        'High-speed WiFi included',
        'Tables & chairs setup',
        'Professional daily cleaning',
        'On-site host assistance',
        'Full restroom access'
      ],
      popular: false
    },
    {
      title: 'Media Production',
      price: '$75/hour',
      features: [
        '4-hour minimum booking',
        'Flexible space configuration',
        'Quiet recording environment',
        'Elevator access included',
        'Professional cleaning',
        'Host support throughout',
        'Perfect for film/photo shoots'
      ],
      popular: true
    },
    {
      title: 'Events & Meetings',
      price: '$75/hour',
      features: [
        '4-hour minimum booking',
        'Up to 250 guest capacity',
        'Central Providence location',
        'Tables & chairs provided',
        'High-speed internet',
        'Professional venue support',
        'Ideal for networking events'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-studio-primary via-studio-secondary to-studio-primary overflow-hidden">
        {/* Modern Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-studio-accent/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-studio-orange/10 rounded-full blur-3xl animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-studio-purple/10 rounded-full blur-3xl animate-float delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-12 max-w-6xl mx-auto animate-fade-in">
            {/* Status Indicator */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2 bg-studio-light/10 backdrop-blur-sm rounded-full px-6 py-3 border border-studio-light/20">
                <div className="w-3 h-3 bg-studio-green rounded-full animate-pulse"></div>
                <span className="text-studio-light font-medium text-sm tracking-wide">AVAILABLE NOW</span>
                <div className="w-3 h-3 bg-studio-green rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-studio-light leading-none tracking-tight">
                CREATIVE
                <br />
                <span className="bg-gradient-to-r from-studio-accent to-studio-purple bg-clip-text text-transparent">STUDIO</span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-studio-accent to-studio-orange mx-auto rounded-full"></div>
              
              <p className="text-xl md:text-2xl text-studio-light/90 font-light max-w-3xl mx-auto leading-relaxed">
                Professional media & event space in 
                <span className="text-studio-accent font-semibold"> Providence's Innovation District</span>. 
                <br className="hidden md:block" />
                Where creativity meets cutting-edge technology.
              </p>
            </div>
            
            {/* Modern Call to Action */}
            <div className="pt-12 space-y-8">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="#booking" 
                  className="group relative overflow-hidden bg-gradient-to-r from-studio-accent to-studio-purple text-white font-semibold px-10 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-modern"
                >
                  <span className="relative z-10 flex items-center">
                    Book Studio Now
                    <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-studio-purple to-studio-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <a 
                  href="https://www.peerspace.com/pages/listings/686424eddba671f73a7afbc9?utm_medium=email&utm_source=transactional&utm_campaign=prod-notifications" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-studio-light text-studio-primary font-semibold px-10 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-modern"
                >
                  <span className="relative z-10 flex items-center">
                    Book on Peerspace
                    <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-studio-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-studio-light/80 text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-studio-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>$75/hour</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-studio-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>4-hour minimum</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-studio-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Up to 250 guests</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modern scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-studio-light/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-studio-light" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-studio-accent to-studio-purple rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-studio-primary">Providence Creative Studio</h2>
            </div>
            <h3 className="text-2xl md:text-3xl text-studio-gray font-light mb-8">Professional Media & Event Space</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-studio-accent to-studio-orange mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-16">
            <p className="text-xl md:text-2xl text-studio-gray leading-relaxed text-center">
              Located in <span className="text-studio-accent font-semibold">Providence's Innovation District</span> within the CIC building, 
              our creative studio provides a stylish, flexible space perfect for media productions, content creation, meetings, and intimate events.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              <div className="group text-center p-8 bg-white rounded-3xl shadow-card hover:shadow-modern transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-studio-accent to-studio-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h4 className="text-xl font-semibold text-studio-primary mb-3">Professional Quality</h4>
                <p className="text-studio-gray leading-relaxed">Industry-standard equipment and acoustically treated space for perfect results.</p>
              </div>
              
              <div className="group text-center p-8 bg-white rounded-3xl shadow-card hover:shadow-modern transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-studio-green to-studio-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h4 className="text-xl font-semibold text-studio-primary mb-3">Creator Focused</h4>
                <p className="text-studio-gray leading-relaxed">Supporting content creators and entrepreneurs with flexible, professional space.</p>
              </div>
              
              <div className="group text-center p-8 bg-white rounded-3xl shadow-card hover:shadow-modern transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-studio-orange to-studio-purple rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h4 className="text-xl font-semibold text-studio-primary mb-3">Always Ready</h4>
                <p className="text-studio-gray leading-relaxed">Pre-configured setup means you can start creating immediately upon arrival.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Features */}
      <section className="py-24 bg-gradient-to-br from-studio-light via-white to-studio-accent/5" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-studio-primary mb-6">Studio Features</h2>
            <h3 className="text-2xl md:text-3xl text-studio-gray font-light mb-8">Everything You Need for Professional Media & Events</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-studio-accent to-studio-orange mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {studioFeatures.map((feature, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-card hover:shadow-modern transition-all duration-500 hover:-translate-y-3 border border-studio-light/50">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h4 className="text-xl font-bold text-studio-primary mb-4 group-hover:text-studio-accent transition-colors duration-300">{feature.title}</h4>
                <p className="text-studio-gray leading-relaxed">{feature.description}</p>
                <div className="mt-6 w-full h-1 bg-gradient-to-r from-studio-accent/20 to-studio-purple/20 rounded-full group-hover:from-studio-accent group-hover:to-studio-purple transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Gallery Section */}
      <section className="py-24 bg-gradient-to-br from-studio-primary via-studio-secondary to-studio-primary" id="gallery">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-studio-light mb-6">Inside Our Studio</h2>
            <h3 className="text-2xl md:text-3xl text-studio-light/80 font-light mb-8">Professional Setup & Equipment</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-studio-accent to-studio-orange mx-auto rounded-full"></div>
          </div>
          
          {/* Main Studio Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            <div className="relative group rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/studiopic1.png" 
                alt="Professional podcast recording setup with acoustic treatment"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-podcast-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                 <div className="absolute bottom-4 left-4">
                   <h4 className="text-podcast-gold font-semibold text-lg">Podcast Recording Room</h4>
                   <p className="text-podcast-accent text-sm">Acoustically treated for podcast quality</p>
                 </div>
              </div>
            </div>
            
            <div className="relative group rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/studiopic2.jpg" 
                alt="Professional microphones and recording equipment"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-podcast-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                 <div className="absolute bottom-4 left-4">
                   <h4 className="text-podcast-gold font-semibold text-lg">Podcast Equipment</h4>
                   <p className="text-podcast-accent text-sm">Professional podcast microphones</p>
                 </div>
              </div>
            </div>
            
            <div className="relative group rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/studiopic3.jpg" 
                alt="Studio control room and mixing setup"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-podcast-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-podcast-gold font-semibold text-lg">Control Room</h4>
                  <p className="text-podcast-accent text-sm">Professional mixing board</p>
                </div>
              </div>
            </div>
            
            <div className="relative group rounded-2xl overflow-hidden shadow-lg md:col-span-2">
              <img 
                src="/images/studiopic4.png" 
                alt="Full studio view with multiple recording stations"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-podcast-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-podcast-gold font-semibold text-lg">Full Studio View</h4>
                  <p className="text-podcast-accent text-sm">Multiple recording stations available</p>
                </div>
              </div>
            </div>
            
            <div className="relative group rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/studiopic5.png" 
                alt="Additional studio equipment and setup"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-podcast-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-podcast-gold font-semibold text-lg">Studio Details</h4>
                  <p className="text-podcast-accent text-sm">Professional setup</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Studio Video */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-podcast-primary rounded-2xl p-8">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-podcast-gold mb-2">Studio Walkthrough</h4>
                <p className="text-podcast-accent">Take a virtual tour of our professional recording space</p>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <video 
                  controls 
                  className="w-full h-auto"
                  poster="/images/studiopic1.png"
                >
                  <source src="/images/studiovideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-podcast-accent text-lg mb-4">Ready to experience our professional studio?</p>
            <a 
              href="#booking" 
              className="inline-flex items-center px-8 py-4 bg-podcast-red text-white font-bold rounded-full hover:bg-podcast-red/90 hover:scale-105 transition-all duration-300 group text-lg"
            >
              Book Your Session Now
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing/Booking Section */}
      <section className="py-20 bg-podcast-primary" id="booking">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-podcast-gold mb-6">Studio Packages</h2>
            <h3 className="text-3xl text-podcast-accent font-medium mb-8">Choose Your Creative Experience</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-podcast-red to-podcast-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`rounded-2xl p-8 ${pkg.popular ? 'bg-podcast-red scale-105 border-4 border-podcast-gold' : 'bg-podcast-secondary'} relative`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-podcast-gold text-podcast-primary px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-podcast-gold mb-2">{pkg.title}</h4>
                  <div className="text-4xl font-bold text-white">{pkg.price}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-podcast-gold">
                      <svg className="w-5 h-5 mr-3 text-podcast-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${pkg.popular ? 'bg-podcast-gold text-podcast-primary hover:bg-podcast-gold/90' : 'bg-podcast-accent text-white hover:bg-podcast-accent/90'}`}>
                  Book This Package
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-podcast-accent text-lg mb-4">Ready to get started?</p>
            <a 
                             href="mailto:trashcanrecords514@gmail.com" 
              className="inline-flex items-center px-8 py-4 bg-podcast-gold text-podcast-primary font-bold rounded-full hover:bg-podcast-gold/90 hover:scale-105 transition-all duration-300"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-podcast-primary mb-6">Get In Touch</h2>
            <h3 className="text-3xl text-podcast-secondary font-medium mb-8">Ready to Book Your Creative Space?</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-podcast-red to-podcast-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold text-podcast-primary mb-4">Studio Location</h4>
                <div className="space-y-2 text-gray-600">
                                     <p className="flex items-center">
                     <span className="text-podcast-red mr-3">📍</span>
                     Providence Creative Studio, CIC Building, Providence Innovation District, RI
                   </p>
                   <p className="flex items-center">
                     <span className="text-podcast-red mr-3">📞</span>
                     (401) 217-9799
                   </p>
                   <p className="flex items-center">
                     <span className="text-podcast-red mr-3">📧</span>
                     trashcanrecords514@gmail.com
                   </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-semibold text-podcast-primary mb-4">Studio Hours</h4>
                <div className="space-y-1 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: 12:00 PM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            {/* Quick Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-2xl font-semibold text-podcast-primary mb-6">Quick Booking Inquiry</h4>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-podcast-accent"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-podcast-accent"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-podcast-accent"
                />
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-podcast-accent">
                  <option>Select Package</option>
                  <option>Content Creation ($75/hr)</option>
                  <option>Media Production ($75/hr)</option>
                  <option>Events & Meetings ($75/hr)</option>
                </select>
                <textarea 
                  placeholder="Tell us about your media project or event..." 
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-podcast-accent"
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full bg-podcast-red text-white py-3 rounded-lg font-semibold hover:bg-podcast-red/90 transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
