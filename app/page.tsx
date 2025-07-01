'use client';

import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function Home() {
  const studioFeatures = [
    {
      icon: '🎙️',
      title: 'Professional Microphones',
      description: 'Industry-standard podcast microphones with crystal-clear audio quality and zero background noise.',
    },
    {
      icon: '🎧',
      title: 'Audio Monitoring',
      description: 'Real-time audio monitoring with professional headphones for perfect sound control.',
    },
    {
      icon: '💻',
      title: 'Recording Software',
      description: 'Pre-installed recording software with editing capabilities and easy export options.',
    },
    {
      icon: '🔇',
      title: 'Soundproof Room',
      description: 'Acoustically treated space ensures professional-quality recordings without outside interference.',
    },
    {
      icon: '📺',
      title: 'Video Capability',
      description: 'Optional video recording setup for video podcasts and live streaming.',
    },
    {
      icon: '☁️',
      title: 'Cloud Storage',
      description: 'Automatic cloud backup and easy file sharing for seamless post-production.',
    }
  ];

  const packages = [
    {
      title: 'Solo Creator',
      price: '$25/hour',
      features: [
        'Single microphone setup',
        'Basic recording software',
        'Audio monitoring',
        'Cloud storage access',
        'Technical support'
      ],
      popular: false
    },
    {
      title: 'Duo/Interview',
      price: '$40/hour',
      features: [
        'Two microphone setup',
        'Advanced recording software',
        'Audio monitoring for both',
        'Video recording option',
        'Cloud storage access',
        'Technical support',
        'Post-production assistance'
      ],
      popular: true
    },
    {
      title: 'Group Recording',
      price: '$60/hour',
      features: [
        'Up to 4 microphones',
        'Professional mixing board',
        'Video recording setup',
        'Live streaming capability',
        'Dedicated engineer',
        'Cloud storage access',
        'Full post-production'
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
               Underground recording studio where raw talent meets professional sound in 
               <span className="text-podcast-accent font-medium"> Providence, RI</span>. 
               Where creativity meets quality.
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
               Located in the underground scene of <span className="text-podcast-primary font-semibold">Providence, RI</span>, 
               Trashcan Records Studio combines raw authenticity with professional-grade equipment for that perfect sound.
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
                                 <h4 className="text-xl font-semibold text-podcast-primary mb-2">Artist Focused</h4>
                 <p className="text-gray-600">Supporting the underground music and podcast scene.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-podcast-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h4 className="text-xl font-semibold text-podcast-primary mb-2">Always Ready</h4>
                <p className="text-gray-600">Pre-configured setup means you can start recording immediately.</p>
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
            <h3 className="text-3xl text-podcast-secondary font-medium mb-8">Ready to Record Your Next Episode?</h3>
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
                     Trashcan Records Studio, 123 Underground Ave, Providence, RI 02903
                   </p>
                   <p className="flex items-center">
                     <span className="text-podcast-red mr-3">📞</span>
                     (401) 555-ROCK
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
                  <option>Solo Creator ($25/hr)</option>
                  <option>Duo/Interview ($40/hr)</option>
                  <option>Group Recording ($60/hr)</option>
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
