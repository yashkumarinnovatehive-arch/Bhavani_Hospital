import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaCalendarCheck, FaHeartbeat } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] pt-32 pb-32 lg:pb-40 flex items-center bg-hero-gradient overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent-light/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-64 h-64 bg-teal-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-accent/10 mb-6"
            >
              <FaHeartbeat className="text-accent animate-pulse" />
              <span className="text-sm font-semibold text-primary">Caring for Pune since 2005</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900 mb-6 tracking-tight"
            >
              Your Family's Trusted <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Healthcare</span> Partner
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Experience world-class healthcare with compassionate doctors, state-of-the-art facilities, and treatment you can trust—right here in Pune.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#appointment" 
                className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1"
              >
                <FaCalendarCheck />
                <span>Book Appointment</span>
              </a>
              <a 
                href="tel:+917796655655" 
                className="flex items-center justify-center gap-2 bg-white text-primary border border-primary/20 px-8 py-4 rounded-full font-semibold hover:bg-primary/5 transition-all shadow-sm hover:shadow transform hover:-translate-y-1"
              >
                <FaPhoneAlt />
                <span>Call Now</span>
              </a>
            </motion.div>
          </div>

          {/* Right Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Modern Hospital Facility" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute top-1/2 -left-12 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 z-20"
            >
              <div className="w-14 h-14 rounded-full bg-accent-light flex items-center justify-center text-accent text-2xl font-bold">
                24/7
              </div>
              <div>
                <p className="text-gray-900 font-bold text-lg">Emergency Care</p>
                <p className="text-gray-500 text-sm">Always here for you</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
