import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[500px] md:min-h-[600px] h-[100svh] flex items-center justify-center pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2540]/80 via-[#0a2540]/50 to-[#0a2540]/90"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 flex flex-col justify-center h-full">
        <div className="max-w-3xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-md bg-white/10 border border-white/20 p-8 md:p-12 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md"
            >
              Your Family's Trusted <span className="text-accent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Healthcare</span> Partner
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl leading-relaxed drop-shadow"
            >
              Quality healthcare with compassionate doctors, modern facilities, and affordable treatment.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#appointment" 
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-3.5 rounded-full font-semibold hover:from-primary-dark hover:to-primary transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
              >
                <FaCalendarCheck />
                <span>Book Appointment</span>
              </a>
              <a 
                href="tel:+917796655655" 
                className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-white transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
              >
                <FaPhoneAlt />
                <span>Call Now</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
