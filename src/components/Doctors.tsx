import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Doctor {
  name: string;
  specialization: string;
  image: string;
  qualification?: string;
}

const doctorsList: Doctor[] = [
  {
    name: 'Dr. Omprakash Todakari',
    specialization: 'General Physician Doctors',
    image: '/dr_omprakash_todakari.jpeg', 
  },
  {
    name: 'Dr. Ashwini Todakari',
    specialization: 'Ayurvedic General Physician',
    image: '/dr_ashwini_todakari.jpeg', 
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

        <style>{`
          .doctors-slider .swiper-button-next,
          .doctors-slider .swiper-button-prev {
            background: transparent !important;
            color: #0ea5e9 !important; 
            box-shadow: none !important;
            width: 30px !important;
            height: 30px !important;
          }
          .doctors-slider .swiper-button-next::after,
          .doctors-slider .swiper-button-prev::after {
            font-size: 1.25rem !important;
            font-weight: 400 !important;
          }
          .doctors-slider .swiper-button-next:hover,
          .doctors-slider .swiper-button-prev:hover {
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
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          centerInsufficientSlides={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="doctors-slider pb-16 px-4"
        >
          {doctorsList.map((doctor, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-lg shadow-primary/5 border border-gray-50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 group cursor-pointer text-center h-full flex flex-col justify-center items-center my-4 mb-8"
              >
                <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-slate-100 shadow-inner group-hover:shadow-md transition-shadow">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=1e3a8a&color=fff&size=512`;
                    }}
                  />
                </div>

                <div className="text-center w-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{doctor.name}</h3>
                  {doctor.qualification && (
                    <p className="text-accent font-bold text-sm mb-2">{doctor.qualification}</p>
                  )}
                  <p className="text-gray-500 text-sm font-medium">{doctor.specialization}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Doctors;
