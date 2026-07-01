import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';

const OPD = () => {
  return (
    <section id="opd" className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Content */}
          <div className="w-full lg:w-1/2 text-white">
            <div className="text-accent font-semibold tracking-wider uppercase mb-2">Schedule</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">OPD Timings</h2>
            <p className="text-gray-200 mb-8 leading-relaxed max-w-lg">
              We are open every day to provide you with the best medical care. Book an appointment or visit us during our OPD hours. Emergency services are available 24/7.
            </p>
            
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm max-w-sm">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-200">Emergency Contact</div>
                <a href="tel:+917796655655" className="text-xl font-bold text-white hover:text-accent transition-colors">+91 7796 655 655</a>
              </div>
            </div>
          </div>
          
          {/* Timing Cards */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-2xl relative"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-white shadow-lg rotate-12">
                <div className="text-center">
                  <span className="block font-bold text-xl">24/7</span>
                  <span className="block text-xs font-semibold">Open</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
                <FaCalendarAlt className="text-primary text-2xl" />
                <h3 className="text-2xl font-bold text-gray-800">Monday - Sunday</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all">
                  <div className="w-14 h-14 bg-blue-100 text-primary rounded-xl flex items-center justify-center text-2xl shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg mb-1">Morning Session</h4>
                    <p className="text-primary font-semibold">10:00 AM – 2:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all">
                  <div className="w-14 h-14 bg-indigo-100 text-primary rounded-xl flex items-center justify-center text-2xl shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg mb-1">Evening Session</h4>
                    <p className="text-primary font-semibold">5:00 PM – 9:00 PM</p>
                  </div>
                </div>
              </div>
              
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OPD;
