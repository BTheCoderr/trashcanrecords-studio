'use client';

import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function Home() {
  const studioFeatures = [
    {
      icon: '🎙️',
      title: 'Professional Podcast Microphones',
      description: 'High-quality podcast microphones like Shure SM7B with crystal-clear audio quality and zero background noise.',
    },
    {
      icon: '🎧',
      title: 'Real-Time Audio Monitoring',
      description: 'Professional headphones for hosts and guests with real-time audio monitoring for perfect podcast sound.',
    },
    {
      icon: '💻',
      title: 'Podcast Recording Software',
      description: 'Pre-installed podcast recording software with editing capabilities and easy export for your episodes.',
    },
    {
      icon: '🔇',
      title: 'Soundproof Podcast Room',
      description: 'Acoustically treated space ensures professional podcast quality without outside interference or echo.',
    },
    {
      icon: '📺',
      title: 'Video Podcast Capability',
      description: 'Multi-camera video setup for video podcasts, YouTube content, and live streaming.',
    },
    {
      icon: '☁️',
      title: 'Cloud Storage & Export',
      description: 'Automatic cloud backup and easy file sharing for seamless podcast post-production and distribution.',
    }
  ];

  const packages = [
    {
      title: 'Solo Podcaster',
      price: '$25/hour',
      features: [
        'Single podcast microphone setup',
        'Podcast recording software',
        'Audio monitoring headphones',
        'Cloud storage & export',
        'Technical setup assistance'
      ],
      popular: false
    },
    {
      title: 'Interview/Co-Host',
      price: '$40/hour',
      features: [
        'Two microphone setup',
        'Advanced podcast software',
        'Dual audio monitoring',
        'Video podcast option',
        'Cloud storage & export',
        'Technical support',
        'Basic editing assistance'
      ],
      popular: true
    },
    {
      title: 'Panel/Group Cast',
      price: '$60/hour',
      features: [
        'Up to 4 podcast microphones',
        'Professional podcast mixer',
        'Multi-camera video setup',
        'Live streaming capability',
        'Dedicated audio engineer',
        'Cloud storage & export',
        'Full production support'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-podcast-primary via-podcast-secondary to-podcast-primary relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-podcast-red rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-podcast-gold rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-podcast-accent rounded-full animate-bounce-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Recording Indicator */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-4 h-4 bg-podcast-red rounded-full animate-pulse-slow"></div>
              <span className="text-podcast-gold font-medium">NOW RECORDING</span>
              <div className="w-4 h-4 bg-podcast-red rounded-full animate-pulse-slow"></div>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-podcast-gold leading-none">
              PODCAST
              <br />
              <span className="text-podcast-accent">STUDIO</span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-podcast-red to-podcast-gold mx-auto rounded-full"></div>
            
                         <p className="text-xl md:text-2xl text-podcast-gold font-light max-w-2xl mx-auto leading-relaxed">
               Professional podcast studio where authentic voices meet crystal-clear sound in 
               <span className="text-podcast-accent font-medium"> Providence, RI</span>. 
               Where your story meets professional quality.
             </p>
            
            {/* Call to Action */}
            <div className="pt-8 space-y-4">
              <a 
                href="#booking" 
                className="inline-flex items-center px-8 py-4 bg-podcast-red text-white font-bold rounded-full hover:bg-podcast-red/90 hover:scale-105 transition-all duration-300 group text-lg"
              >
                Book Studio Now
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <p className="text-podcast-accent text-sm">Starting at $25/hour • No setup fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-4xl">🏢</span>
                             <h2 className="text-5xl font-bold text-podcast-primary">About Trashcan Records</h2>
             </div>
             <h3 className="text-3xl text-podcast-secondary font-medium mb-8">Underground Sound Meets Professional Excellence</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-podcast-red to-podcast-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
                         <p className="text-xl text-gray-700 leading-relaxed text-center">
               Located in <span className="text-podcast-primary font-semibold">Providence, RI</span>, 
               Trashcan Records Podcast Studio combines authentic storytelling with professional-grade equipment for crystal-clear podcast production.
             </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-podcast-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h4 className="text-xl font-semibold text-podcast-primary mb-2">Professional Quality</h4>
                <p className="text-gray-600">Industry-standard equipment and acoustically treated space.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-podcast-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                                 <h4 className="text-xl font-semibold text-podcast-primary mb-2">Creator Focused</h4>
                 <p className="text-gray-600">Supporting podcast creators and content producers.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-podcast-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h4 className="text-xl font-semibold text-podcast-primary mb-2">Always Ready</h4>
                <p className="text-gray-600">Pre-configured podcast setup means you can start recording immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Features */}
      <section className="py-20 bg-gradient-to-r from-podcast-gold/10 via-white to-podcast-accent/10" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-podcast-primary mb-6">Studio Features</h2>
            <h3 className="text-3xl text-podcast-secondary font-medium mb-8">Everything You Need for Professional Podcasting</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-podcast-red to-podcast-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {studioFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-podcast-primary mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Gallery Section */}
      <section className="py-20 bg-podcast-highlight" id="gallery">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-podcast-gold mb-6">Inside Our Studio</h2>
            <h3 className="text-3xl text-podcast-accent font-medium mb-8">Professional Setup & Equipment</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-podcast-red to-podcast-gold mx-auto rounded-full"></div>
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
            <h3 className="text-3xl text-podcast-accent font-medium mb-8">Choose Your Recording Experience</h3>
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
                             href="mailto:studio@trashcanrecords.com" 
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
            <h3 className="text-3xl text-podcast-secondary font-medium mb-8">Ready to Record Your Next Podcast Episode?</h3>
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
                     Trashcan Records Podcast Studio, 123 Podcast Ave, Providence, RI 02903
                   </p>
                   <p className="flex items-center">
                     <span className="text-podcast-red mr-3">📞</span>
                     (401) 555-CAST
                   </p>
                   <p className="flex items-center">
                     <span className="text-podcast-red mr-3">📧</span>
                     studio@trashcanrecords.com
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
                  <option>Solo Podcaster ($25/hr)</option>
                  <option>Interview/Co-Host ($40/hr)</option>
                  <option>Panel/Group Cast ($60/hr)</option>
                </select>
                <textarea 
                  placeholder="Tell us about your podcast project..." 
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
