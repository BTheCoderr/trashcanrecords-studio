'use client';

import React from 'react';
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white pt-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-8 backdrop-blur-sm">
              <span className="text-sm font-medium text-purple-200">🎙️ Available Now</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full ml-3 animate-ping"></div>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              TRASHCAN<br />
              <span className="text-5xl lg:text-7xl">RECORDS</span><br />
              <span className="text-4xl lg:text-6xl font-light">STUDIO</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Professional podcast & media studio in Providence&#39;s Innovation District.<br />
              <span className="text-purple-300">Where creativity meets cutting-edge technology.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#booking" 
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="relative z-10">🎙️ BOOK STUDIO NOW →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a 
                href="https://www.peerspace.com/pages/listings/686424eddba671f73a7afbc9" 
                target="_blank"
                className="inline-flex items-center px-8 py-4 bg-black/50 hover:bg-black/70 text-white font-semibold rounded-2xl transition-all duration-300 border border-cyan-500/50 hover:border-cyan-400 backdrop-blur-sm hover:shadow-cyan-500/25 hover:shadow-lg"
              >
                View on Peerspace ↗
              </a>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-gradient-to-r from-transparent via-purple-500/50 to-transparent">
              <div className="text-center group">
                <div className="text-4xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform">$75</div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">Per Hour</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform">2hrs</div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">Minimum</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-black text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform">15</div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">Max Guests</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text mb-8">
              PROFESSIONAL PODCAST STUDIO
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Located in Providence&#39;s Innovation District within the CIC building, <span className="text-purple-400 font-semibold">Trashcan Records Studio</span> 
              provides a professional podcast recording space perfect for content creators, interviews, 
              and media productions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Quality</h3>
              <p className="text-gray-300 leading-relaxed">
                Industry-standard equipment and acoustically treated space for perfect results.
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Creator Focused</h3>
              <p className="text-gray-300 leading-relaxed">
                Supporting content creators and entrepreneurs with flexible, professional space.
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-500 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse">
                <span className="text-3xl">⏰</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Always Ready</h3>
              <p className="text-gray-300 leading-relaxed">
                Pre-configured setup means you can start creating immediately upon arrival.
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text mb-6">STUDIO FEATURES</h2>
            <p className="text-xl text-gray-300">Everything You Need for Professional Podcast Production</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl group-hover:animate-bounce">📶</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">High-Speed WiFi</h3>
                <p className="text-gray-300 leading-relaxed">
                  Reliable, fast internet connection perfect for streaming, video calls, and content creation needs.
                </p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl group-hover:animate-bounce">🪑</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Flexible Furniture Setup</h3>
                <p className="text-gray-300 leading-relaxed">
                  Tables and chairs available upon request to configure the space exactly for your event or production.
                </p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl group-hover:animate-bounce">✨</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Professional Cleaning</h3>
                <p className="text-gray-300 leading-relaxed">
                  Professionally cleaned twice daily (morning and evening) with sanitizer and disinfecting supplies provided.
                </p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl group-hover:animate-bounce">🤫</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Quiet Professional Space</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ideal environment for podcasts, recordings, meetings, and focused creative work.
                </p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl group-hover:animate-bounce">🏢</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Easy Access</h3>
                <p className="text-gray-300 leading-relaxed">
                  Centrally located in Providence Innovation District with elevator access and on-site host assistance.
                </p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl group-hover:animate-bounce">👥</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">On-Site Support</h3>
                <p className="text-gray-300 leading-relaxed">
                  Host available to greet you upon arrival and provide assistance throughout your session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Studio Gallery</h2>
            <p className="text-xl text-gray-600">Take a look inside our professional creative space</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="/images/studiopic1.png"
                alt="Professional podcast setup with microphones and acoustic treatment"
                width={400}
                height={256}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold">Professional Setup</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="/images/studiopic2.jpg"
                alt="Studio recording space with professional audio equipment"
                width={400}
                height={256}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold">Audio Equipment</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="/images/studiopic3.jpg"
                alt="Creative workspace with modern lighting and comfortable seating"
                width={400}
                height={256}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold">Creative Space</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="/images/studiopic4.png"
                alt="Modern studio environment with professional recording capabilities"
                width={400}
                height={256}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold">Modern Environment</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="/images/studiopic5.png"
                alt="Flexible studio space ready for various types of content creation"
                width={400}
                height={256}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold">Flexible Setup</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl">
              <video
                className="w-full h-64 object-cover"
                controls
                poster="/images/studiopic1.png"
              >
                <source src="/images/studiovideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text mb-6">STUDIO RENTAL</h2>
            <p className="text-xl text-gray-300">Simple, Transparent Pricing</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30 text-center group hover:border-purple-400/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-black text-white mb-6">STUDIO RENTAL</h3>
                <div className="text-7xl font-black text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-4">$75<span className="text-3xl font-normal text-gray-300">/hour</span></div>
                <div className="text-xl text-purple-300 mb-8 font-semibold">2-hour minimum booking</div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30">
                    <h4 className="font-bold text-white mb-4 text-lg">PERFECT FOR:</h4>
                    <ul className="text-left space-y-3 text-gray-300">
                      <li className="flex items-center space-x-2"><span className="text-purple-400">•</span><span>Podcast recordings</span></li>
                      <li className="flex items-center space-x-2"><span className="text-cyan-400">•</span><span>Video content creation</span></li>
                      <li className="flex items-center space-x-2"><span className="text-pink-400">•</span><span>Professional meetings</span></li>
                      <li className="flex items-center space-x-2"><span className="text-green-400">•</span><span>Intimate events</span></li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 border border-cyan-500/30">
                    <h4 className="font-bold text-white mb-4 text-lg">INCLUDES:</h4>
                    <ul className="text-left space-y-3 text-gray-300">
                      <li className="flex items-center space-x-2"><span className="text-purple-400">•</span><span>Up to 15 guests</span></li>
                      <li className="flex items-center space-x-2"><span className="text-cyan-400">•</span><span>Professional equipment</span></li>
                      <li className="flex items-center space-x-2"><span className="text-pink-400">•</span><span>High-speed WiFi</span></li>
                      <li className="flex items-center space-x-2"><span className="text-green-400">•</span><span>On-site support</span></li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.peerspace.com/pages/listings/686424eddba671f73a7afbc9"
                    target="_blank"
                    className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  >
                    🎙️ BOOK ON PEERSPACE ↗
                  </a>
                  <a
                    href="tel:4012179799"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-semibold rounded-2xl transition-all duration-300 border border-gray-600 hover:border-gray-500"
                  >
                    📞 CALL (401) 217-9799
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="booking" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text mb-6">GET IN TOUCH</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ready to book your session? Contact us directly or book through <span className="text-purple-400 font-semibold">Peerspace</span>.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Phone</h3>
                    <p className="text-gray-300 text-lg">(401) 217-9799</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Email</h3>
                    <p className="text-gray-300 text-lg break-all">trashcanrecords514@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Location</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">CIC Building<br />Providence Innovation District, RI</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-6">QUICK CONTACT</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-300 resize-none"
                      placeholder="Tell us about your podcast project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
                  >
                    🚀 SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
