import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaMoneyBillWave, FaHospital, FaMicroscope, FaSmile, FaCalendarCheck, FaUsers, FaBroom } from 'react-icons/fa';

const reasons = [
  { icon: FaUserMd, title: 'Experienced Doctors' },
  { icon: FaMoneyBillWave, title: 'Affordable Consultation' },
  { icon: FaHospital, title: 'Modern Facilities' },
  { icon: FaMicroscope, title: 'Quick Diagnosis' },
  { icon: FaSmile, title: 'Patient Satisfaction' },
  { icon: FaCalendarCheck, title: 'Easy Appointment' },
  { icon: FaUsers, title: 'Friendly Staff' },
  { icon: FaBroom, title: 'Clean Environment' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <div className="text-accent font-semibold tracking-wider uppercase mb-2">Why Choose Us</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Your Health Is Our Top Priority</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We understand that choosing a healthcare provider is a critical decision. At Bhavani Hospital, we combine medical expertise with compassionate care to ensure you get the best possible treatment in a safe and comfortable environment.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-blue-50 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-inner">
                      <reason.icon size={24} />
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg group-hover:text-primary transition-colors">{reason.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Medical Team" 
                className="relative z-10 rounded-3xl shadow-2xl w-full h-auto object-cover ring-4 ring-white/50"
                loading="lazy"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-primary">10k+</div>
                  <div className="text-sm font-semibold text-gray-600">Happy<br/>Patients</div>
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
