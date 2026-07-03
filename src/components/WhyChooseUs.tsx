import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaMoneyBillWave, FaHospital, FaMicroscope, FaSmile, FaCalendarCheck, FaUsers, FaBroom } from 'react-icons/fa';

const reasons = [
  { icon: FaUserMd, title: 'Experienced Doctors' },
  { icon: FaMoneyBillWave, title: 'Affordable Care' },
  { icon: FaHospital, title: 'Modern Facilities' },
  { icon: FaMicroscope, title: 'Quick Diagnosis' },
  { icon: FaSmile, title: 'Patient Focus' },
  { icon: FaCalendarCheck, title: 'Easy Booking' },
  { icon: FaUsers, title: 'Friendly Staff' },
  { icon: FaBroom, title: 'Clean Hygiene' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-accent-light text-accent font-bold text-sm tracking-widest uppercase mb-4"
            >
              Why Choose Us
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Your Health Is Our <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Top Priority</span></h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We understand that choosing a healthcare provider is a critical decision. At Bhavani Hospital, we combine medical expertise with compassionate care to ensure you get the best possible treatment in a safe and comfortable environment.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex flex-col items-center justify-center text-center p-6 bg-slate-50 border border-gray-100 rounded-[2rem] hover:bg-white hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 pointer-events-none"></div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-white text-primary flex items-center justify-center shadow-sm group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300 transform group-hover:-rotate-6 group-hover:scale-110 mb-5 z-10 relative border border-gray-100 group-hover:border-transparent">
                    <reason.icon size={26} />
                  </div>
                  
                  <h3 className="font-extrabold text-gray-800 text-sm md:text-base leading-tight group-hover:text-primary transition-colors z-10 relative">
                    {reason.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary rounded-[2.5rem] transform rotate-3 scale-[1.03] opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Medical Team" 
                className="relative z-10 rounded-[2.5rem] shadow-2xl w-full h-auto object-cover border-8 border-white"
                loading="lazy"
              />
              
              {/* Badge */}
              <div className="absolute -bottom-8 -left-8 bg-glass p-6 rounded-3xl shadow-xl z-20 flex items-center gap-5 border border-white/60">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-2xl">
                  <FaUsers />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-gray-900 tracking-tight">10k+</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">Happy Patients</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
