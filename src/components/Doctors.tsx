import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const doctorsList = [
  {
    name: 'Dr. Omprakash Todakari',
    specialization: 'General Physician Doctors',
    image: '/dr_omprakash_todakari.jpeg', 
  },
  {
    name: 'Dr. Ashwini Todakari',
    specialization: 'Ayurvedic General Physician',
    image: '/dr_ashwini_todakari.jpeg', 
  },
  {
    name: 'Dr. Gajanan Cheke',
    qualification: '(MD Pediatrics)',
    specialization: 'Child Specialist',
    image: '/dr_cheke_dummy.png',
  },
  {
    name: 'Dr. Madhuri Todkari',
    qualification: '(MD Ayu)',
    specialization: 'Ayurvedic Consultant & Panchkarma',
    image: '/dr_todkari_dummy.png',
  }
];

const Doctors = () => {
  return (
    <section id="doctors" className="py-24 bg-slate-50 relative">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-light/30 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white shadow-sm border border-gray-100 text-accent font-bold text-sm tracking-widest uppercase mb-4"
          >
            Medical Experts
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Doctors in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Bhavani Hospital</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctorsList.map((doctor, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-4 shadow-lg shadow-primary/5 border border-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-slate-100">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=1e3a8a&color=fff&size=512`;
                  }}
                />
                
                {/* Removed Hover Overlay as requested */}
              </div>

              <div className="text-center px-2 pb-2">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{doctor.name}</h3>
                {doctor.qualification && (
                  <p className="text-accent font-bold text-sm mb-1">{doctor.qualification}</p>
                )}
                <p className="text-gray-500 text-sm font-medium">{doctor.specialization}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
