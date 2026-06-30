import React from 'react';
import { motion } from 'framer-motion';
import { FaStethoscope, FaBaby, FaLeaf, FaSyringe, FaHeartbeat, FaVial, FaShieldAlt, FaAmbulance, FaArrowRight } from 'react-icons/fa';

const services = [
  { icon: FaStethoscope, title: 'General Consultation', desc: 'Comprehensive medical checkups and primary care for all age groups.' },
  { icon: FaBaby, title: 'Child Care', desc: 'Specialized pediatric care, from routine checkups to specialized treatments.' },
  { icon: FaLeaf, title: 'Ayurvedic Treatment', desc: 'Traditional holistic healing approaches and Panchakarma therapies.' },
  { icon: FaSyringe, title: 'General Surgery', desc: 'Advanced surgical procedures performed by experienced surgeons.' },
  { icon: FaHeartbeat, title: 'Health Checkup', desc: 'Preventive health screening packages tailored for your specific needs.' },
  { icon: FaVial, title: 'Vaccination', desc: 'Complete immunization schedules for children and adults.' },
  { icon: FaShieldAlt, title: 'Preventive Care', desc: 'Proactive healthcare management to prevent future medical issues.' },
  { icon: FaAmbulance, title: 'Emergency Care', desc: '24/7 emergency medical services with immediate response.' },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-accent font-semibold tracking-wider uppercase mb-2">Our Services</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Comprehensive Healthcare Solutions</h2>
          <p className="text-gray-600">We offer a wide range of medical services to ensure that you and your loved ones receive the best possible care under one roof.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.desc}</p>
              <div className="flex items-center text-primary font-medium text-sm gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                <span>Read More</span>
                <FaArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
