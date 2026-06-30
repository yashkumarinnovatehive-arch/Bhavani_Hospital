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
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <div className="text-accent font-semibold tracking-wider uppercase mb-2">Why Choose Us</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Your Health Is Our Top Priority</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We understand that choosing a healthcare provider is a critical decision. At Bhavani Hospital, we combine medical expertise with compassionate care to ensure you get the best possible treatment in a safe and comfortable environment.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <reason.icon size={16} />
                  </div>
                  <span className="font-semibold text-gray-700 text-sm">{reason.title}</span>
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
              <div className="absolute inset-0 bg-primary rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1551076805-e18690c5e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Medical Team" 
                className="relative z-10 rounded-3xl shadow-xl w-full h-auto object-cover"
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
