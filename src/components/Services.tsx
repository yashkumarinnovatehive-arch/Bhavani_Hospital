import React from 'react';
import { motion } from 'framer-motion';
import { FaStethoscope, FaBaby, FaLeaf, FaSyringe, FaHeartbeat, FaVial, FaShieldAlt, FaAmbulance, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  { icon: FaStethoscope, title: 'General Consultation', desc: 'Comprehensive medical checkups and primary care for all age groups.', gradient: 'from-primary to-blue-500' },
  { icon: FaBaby, title: 'Child Care', desc: 'Specialized pediatric care, from routine checkups to specialized treatments.', gradient: 'from-pink-500 to-rose-400' },
  { icon: FaLeaf, title: 'Ayurvedic Treatment', desc: 'Traditional holistic healing approaches and Panchakarma therapies.', gradient: 'from-green-500 to-emerald-400' },
  { icon: FaSyringe, title: 'General Surgery', desc: 'Advanced surgical procedures performed by experienced surgeons.', gradient: 'from-purple-500 to-indigo-400' },
  { icon: FaHeartbeat, title: 'Health Checkup', desc: 'Preventive health screening packages tailored for your specific needs.', gradient: 'from-red-500 to-orange-400' },
  { icon: FaVial, title: 'Vaccination', desc: 'Complete immunization schedules for children and adults.', gradient: 'from-secondary to-cyan-400' },
  { icon: FaShieldAlt, title: 'Preventive Care', desc: 'Proactive healthcare management to prevent future medical issues.', gradient: 'from-accent to-teal-400' },
  { icon: FaAmbulance, title: 'Emergency Care', desc: '24/7 emergency medical services with immediate response.', gradient: 'from-red-600 to-red-400' },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden wave-divider wave-divider-top wave-divider-bottom">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-light/40 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-light/30 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-accent font-bold text-sm tracking-widest uppercase mb-4"
          >
            Our Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Comprehensive Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent heading-underline">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            We offer a wide range of medical services to ensure that you and your loved ones receive the best possible care under one roof.
          </motion.p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="services-slider pb-16 px-4"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative bg-white/95 backdrop-blur-md rounded-2xl p-7 border border-white/80 shadow-lg shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-3 transition-all duration-300 group cursor-pointer overflow-hidden h-full flex flex-col my-4 mb-8"
              >
                {/* Large faded number */}
                <span className="absolute top-3 right-5 text-7xl font-extrabold text-gray-100 group-hover:text-primary/[0.06] transition-colors select-none pointer-events-none">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Gradient corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-bl-[3rem] opacity-[0.07] group-hover:opacity-[0.15] group-hover:scale-125 transition-all duration-500`}></div>

                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white text-2xl mb-5 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                  <service.icon />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors relative z-10">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow relative z-10">{service.desc}</p>

                <div className="flex items-center text-primary font-bold text-sm gap-2 mt-auto relative z-10">
                  <span className="relative overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">Read More</span>
                    <span className="absolute top-0 left-0 text-accent block transition-transform duration-300 translate-y-full group-hover:translate-y-0">Learn More</span>
                  </span>
                  <FaArrowRight size={12} className="text-accent transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
