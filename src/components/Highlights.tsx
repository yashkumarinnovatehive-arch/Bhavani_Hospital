import React from 'react';
import { FaUserMd, FaStethoscope, FaBaby, FaLeaf, FaHandHoldingUsd, FaAmbulance } from 'react-icons/fa';
import { motion } from 'framer-motion';

const highlights = [
  { icon: FaUserMd, title: 'Experienced Doctors', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: FaStethoscope, title: 'General Physician', color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { icon: FaBaby, title: 'Child Specialist', color: 'text-pink-500', bg: 'bg-pink-50' },
  { icon: FaLeaf, title: 'Ayurveda Consultant', color: 'text-green-500', bg: 'bg-green-50' },
  { icon: FaHandHoldingUsd, title: 'Affordable Treatment', color: 'text-teal-500', bg: 'bg-teal-50' },
  { icon: FaAmbulance, title: 'Emergency Support', color: 'text-red-500', bg: 'bg-red-50' },
];

const Highlights = () => {
  return (
    <section className="relative z-20 -mt-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center transform transition-transform hover:-translate-y-2 hover:shadow-xl border border-gray-100"
            >
              <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-full flex items-center justify-center text-2xl mb-4`}>
                <item.icon />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
