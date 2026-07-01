import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUserMd, FaHeartbeat, FaHospital } from 'react-icons/fa';

const features = [
  { icon: FaHeartbeat, title: 'Patient First' },
  { icon: FaCheckCircle, title: 'Affordable Care' },
  { icon: FaHospital, title: 'Clean Environment' },
  { icon: FaUserMd, title: 'Experienced Staff' },
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/Building.png" 
                alt="Bhavani Hospital Interior" 
                className="w-full h-auto object-contain bg-slate-50"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-2">4+ Years</h3>
                  <p className="text-lg">Of Medical Excellence</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-medical-pattern rounded-2xl border-4 border-white -z-10 opacity-50"></div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-2 text-accent font-semibold tracking-wider uppercase">About Our Hospital</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Committed To Providing High-Quality Healthcare
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Bhavani Hospital, a leading and trusted healthcare provider, stands proudly at the MIT Corner, near Bharat Petroleum, on the Pune-Solapur Highway in Loni Kalbhor, Maharashtra. Established on the 7th of March 2021, it has quickly become the preferred destination for quality medical services. As a dedicated healthcare institution, Bhavani Hospital ensures that every patient receives holistic and compassionate care, making it the preferred destination for those seeking quality healthcare in the region.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-primary">
                <h4 className="font-semibold text-gray-800 mb-2">Our Mission</h4>
                <p className="text-sm text-gray-600">To provide accessible, affordable, and quality healthcare to our community.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-secondary">
                <h4 className="font-semibold text-gray-800 mb-2">Our Vision</h4>
                <p className="text-sm text-gray-600">To be the most trusted and preferred healthcare partner for every family.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0">
                    <feature.icon size={14} />
                  </div>
                  <span className="font-medium text-gray-700 text-sm">{feature.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
