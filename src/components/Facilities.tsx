import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const facilitiesList = [
  { name: 'Reception', desc: 'Modern, welcoming front desk', image: 'https://img.magnific.com/free-photo/no-people-empty-waiting-area-clinical-center-with-reception-desk-waiting-room-with-seats-start-checkup-visit-appointment-medical-examination-with-doctor-hospital-lobby_482257-46239.jpg?semt=ais_hybrid&w=740&q=80' },
  { name: 'Consultation Room', desc: 'Private and comfortable consultations', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Waiting Area', desc: 'Spacious and well-ventilated', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Patient Beds', desc: 'Clean and comfortable patient rooms', image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Pharmacy', desc: 'In-house fully-stocked pharmacy', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Laboratory', desc: 'Advanced diagnostic testing', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
];

const Facilities = () => {
  return (
    <section id="facilities" className="pt-8 pb-8 bg-white relative overflow-hidden wave-divider wave-divider-slate-bottom">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-light/20 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-slate-100 text-accent font-bold text-sm tracking-widest uppercase mb-4"
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
            State-of-the-art <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent heading-underline">Facilities</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <style>{`
            .custom-slider .swiper-pagination-bullet-active {
              background: #1e3a8a !important;
            }
          `}</style>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="custom-slider pb-16 px-2"
          >
            {facilitiesList.map((facility, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[400px] md:h-[480px] w-full rounded-2xl overflow-hidden shadow-lg group hover-glow transition-all duration-300">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>

                  {/* Animated gradient top line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  {/* Title block */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{facility.name}</h3>
                        <p className="text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{facility.desc}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-45">
                        <span className="text-lg">→</span>
                      </div>
                    </div>
                    <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full mt-3"></div>
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
