import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const facilitiesList = [
  { name: 'Reception', image: 'https://img.magnific.com/free-photo/no-people-empty-waiting-area-clinical-center-with-reception-desk-waiting-room-with-seats-start-checkup-visit-appointment-medical-examination-with-doctor-hospital-lobby_482257-46239.jpg?semt=ais_hybrid&w=740&q=80' },
  { name: 'Consultation Room', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Waiting Area', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Patient Beds', image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Pharmacy', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Laboratory', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
];

const Facilities = () => {
  return (
    <section id="facilities" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-accent font-bold text-sm tracking-widest uppercase mb-4"
          >
            Infrastructure
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            State-of-the-art <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Facilities</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {facilitiesList.map((facility, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-[2rem] overflow-hidden shadow-lg h-72 lg:h-80 group border-4 border-white">
                  <img 
                    src={facility.image} 
                    alt={facility.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{facility.name}</h3>
                    <div className="w-12 h-1 bg-accent rounded-full transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;
