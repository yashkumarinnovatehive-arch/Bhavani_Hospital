import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Your Family's Trusted <span className="text-accent">Healthcare</span> Partner
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
          >
            Quality healthcare with compassionate doctors, modern facilities, and affordable treatment.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#appointment" 
              className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FaCalendarCheck />
              <span>Book Appointment</span>
            </a>
            <a 
              href="tel:+919876543210" 
              className="flex items-center justify-center gap-2 bg-white text-primary px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FaPhoneAlt />
              <span>Call Now</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
