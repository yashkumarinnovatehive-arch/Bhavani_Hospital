import React from 'react';
import { FaUserMd, FaStethoscope, FaBaby, FaLeaf, FaHandHoldingUsd, FaAmbulance } from 'react-icons/fa';
import { motion } from 'framer-motion';

const highlights = [
  { icon: FaUserMd, title: 'Experienced Doctors', color: 'text-primary', bg: 'bg-primary', glow: 'from-primary/20' },
  { icon: FaStethoscope, title: 'General Physician', color: 'text-secondary', bg: 'bg-secondary', glow: 'from-secondary/20' },
  { icon: FaBaby, title: 'Child Specialist', color: 'text-pink-500', bg: 'bg-pink-500', glow: 'from-pink-500/20' },
  { icon: FaLeaf, title: 'Ayurveda Consultant', color: 'text-green-500', bg: 'bg-green-500', glow: 'from-green-500/20' },
  { icon: FaHandHoldingUsd, title: 'Affordable Treatment', color: 'text-accent', bg: 'bg-accent', glow: 'from-accent/20' },
  { icon: FaAmbulance, title: 'Emergency Support', color: 'text-red-500', bg: 'bg-red-500', glow: 'from-red-500/20' },
];

const Highlights = () => {
  return (
    <section className="relative z-20 -mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
        {highlights.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group bg-white/95 backdrop-blur-xl rounded-t-[3rem] rounded-b-[1.5rem] p-5 pt-10 pb-8 flex flex-col items-center justify-center text-center shadow-xl shadow-primary/5 border border-white transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl cursor-pointer overflow-hidden"
          >
            {/* Background glowing gradient on hover */}
            <div className={`absolute inset-0 bg-gradient-to-b ${item.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
            
            {/* Top decorative line */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 ${item.bg} rounded-b-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-1 group-hover:translate-y-0`}></div>

            <div className={`w-16 h-16 shrink-0 bg-white ${item.color} rounded-full flex items-center justify-center text-3xl group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 shadow-md border border-gray-50 mb-5 relative z-10`}>
              <item.icon />
            </div>
            
            <h3 className="font-extrabold text-gray-800 text-sm leading-snug group-hover:text-primary transition-colors relative z-10">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
