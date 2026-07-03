import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';

const OPD = () => {
  return (
    <section id="opd" className="py-24 bg-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:30px_30px]"></div>
      
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[100px] opacity-60 mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-[100px] opacity-40 mix-blend-screen"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content */}
          <div className="w-full lg:w-1/2 text-white">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent-light font-bold text-sm tracking-widest uppercase mb-6 backdrop-blur-sm"
            >
              Schedule
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-[1.1]"
            >
              OPD Timings & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent-light">Appointments</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg mb-10 leading-relaxed max-w-lg"
            >
              We are open every day to provide you with the best medical care. Book an appointment or visit us during our OPD hours. Emergency services are available 24/7.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-5 bg-white/10 p-5 rounded-2xl border border-white/20 backdrop-blur-md shadow-2xl max-w-sm group hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaPhoneAlt size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-300 font-medium tracking-wide uppercase">Emergency Contact</div>
                <a href="tel:+917796655655" className="text-2xl font-bold text-white group-hover:text-accent-light transition-colors">+91 7796 655 655</a>
              </div>
            </motion.div>
          </div>
          
          {/* Timing Cards */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative border-8 border-white/10 bg-clip-padding"
            >

              
              <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-6">
                <div className="w-12 h-12 rounded-full bg-primary-light text-primary flex items-center justify-center">
                  <FaCalendarAlt className="text-2xl" />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">Monday - Sunday</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-white shadow-sm text-accent rounded-2xl flex items-center justify-center text-3xl shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-1 group-hover:text-primary transition-colors">Morning Session</h4>
                    <p className="text-primary font-bold text-lg">10:00 AM – 2:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-white shadow-sm text-secondary rounded-2xl flex items-center justify-center text-3xl shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl mb-1 group-hover:text-primary transition-colors">Evening Session</h4>
                    <p className="text-primary font-bold text-lg">5:00 PM – 9:00 PM</p>
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
