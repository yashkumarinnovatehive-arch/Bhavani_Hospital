import React from 'react';
import { FaUserMd, FaStethoscope, FaBaby, FaLeaf, FaHandHoldingUsd, FaAmbulance } from 'react-icons/fa';
import { motion } from 'framer-motion';

const highlights = [
  { icon: FaUserMd, title: 'Experienced Doctors', color: 'from-primary to-blue-600', accent: 'text-primary', count: '5+' },
  { icon: FaStethoscope, title: 'General Physician', color: 'from-secondary to-blue-400', accent: 'text-secondary', count: '2' },
  { icon: FaBaby, title: 'Child Specialist', color: 'from-pink-500 to-rose-400', accent: 'text-pink-500', count: '1' },
  { icon: FaLeaf, title: 'Ayurveda Consultant', color: 'from-green-500 to-emerald-400', accent: 'text-green-500', count: '1' },
  { icon: FaHandHoldingUsd, title: 'Affordable Treatment', color: 'from-accent to-teal-400', accent: 'text-accent', count: '₹' },
  { icon: FaAmbulance, title: 'Emergency Support', color: 'from-red-500 to-orange-400', accent: 'text-red-500', count: '24/7' },
];

const Highlights = () => {
  return (
    <section className="relative z-20 mt-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative group bg-white/95 backdrop-blur-xl rounded-2xl p-5 pt-8 pb-6 flex flex-col items-center justify-center text-center shadow-lg shadow-primary/5 border border-white/80 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover-glow cursor-pointer overflow-hidden"
          >
            {/* Top gradient line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl`}></div>

            {/* Glow background */}
            <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}></div>

            {/* Rotating ring behind icon */}
            <div className="relative mb-4">
              <div className={`absolute inset-0 w-16 h-16 -m-1 rounded-full border-2 border-dashed ${item.accent} opacity-0 group-hover:opacity-30 group-hover:animate-spin-slow transition-opacity`} style={{ width: '4.5rem', height: '4.5rem', top: '-0.25rem', left: '-0.25rem' }}></div>
              <div className={`w-16 h-16 shrink-0 bg-gradient-to-br ${item.color} text-white rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rounded-xl group-hover:shadow-lg transition-all duration-300 relative z-10`}>
                <item.icon />
              </div>
            </div>

            {/* Count */}
            <div className={`text-xl font-extrabold ${item.accent} mb-1 group-hover:scale-110 transition-transform`}>
              {item.count}
            </div>

            <h3 className="font-bold text-gray-800 text-xs leading-snug group-hover:text-gray-900 transition-colors relative z-10">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
