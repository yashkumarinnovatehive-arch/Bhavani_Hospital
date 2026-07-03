import React from 'react';
import { motion } from 'framer-motion';
import { FaStethoscope, FaBaby, FaLeaf, FaSyringe, FaHeartbeat, FaVial, FaShieldAlt, FaAmbulance, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden bg-medical-pattern">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-light/40 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white shadow-sm border border-gray-100 text-accent font-bold text-sm tracking-widest uppercase mb-4"
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
            Comprehensive Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Solutions</span>
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

        <style>{`
          .services-slider .swiper-button-next,
          .services-slider .swiper-button-prev {
            background: transparent !important;
            color: #0ea5e9 !important; 
            box-shadow: none !important;
            width: 30px !important;
            height: 30px !important;
          }
          .services-slider .swiper-button-next::after,
          .services-slider .swiper-button-prev::after {
            font-size: 1.25rem !important;
            font-weight: 400 !important;
          }
          .services-slider .swiper-button-next:hover,
          .services-slider .swiper-button-prev:hover {
            background: transparent !important;
            color: #1e3a8a !important;
            transform: scale(1.1);
          }
        `}</style>

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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-md rounded-[2rem] p-8 border border-white shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 group cursor-pointer relative overflow-hidden h-full flex flex-col my-4 mb-8"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-light to-accent-light rounded-bl-full -z-10 opacity-50 group-hover:scale-125 transition-transform duration-500"></div>
                
                <div className="w-16 h-16 bg-white shadow-sm rounded-2xl border border-gray-50 flex items-center justify-center text-3xl text-accent mb-6 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                  <service.icon />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed flex-grow">{service.desc}</p>
                
                <div className="flex items-center text-primary font-bold text-sm gap-2 mt-auto">
                  <span className="relative overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">Read More</span>
                    <span className="absolute top-0 left-0 text-accent block transition-transform duration-300 translate-y-full group-hover:translate-y-0">Learn More</span>
                  </span>
                  <FaArrowRight size={14} className="text-accent transform group-hover:translate-x-1 transition-transform" />
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
