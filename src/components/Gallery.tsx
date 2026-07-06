import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const galleryImages = [
  { id: 1, category: 'Hospital Exterior', src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Hospital Exterior' },
  { id: 2, category: 'Reception', src: 'https://img.magnific.com/free-photo/no-people-empty-waiting-area-clinical-center-with-reception-desk-waiting-room-with-seats-start-checkup-visit-appointment-medical-examination-with-doctor-hospital-lobby_482257-46239.jpg?semt=ais_hybrid&w=740&q=80', alt: 'Reception Area' },
  { id: 3, category: 'Doctor Cabin', src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Doctor Cabin' },
  { id: 4, category: 'OPD', src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'OPD Section' },
  { id: 5, category: 'Medical Equipment', src: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Advanced Equipment' },
  { id: 6, category: 'Beds', src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Patient Beds' },
  { id: 7, category: 'Clinic Interior', src: '/Clicknik.png', alt: 'Clinic Interior' },
  { id: 8, category: 'Facilities', src: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Laboratory' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="pt-8 md:pt-10 pb-4 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-accent font-semibold tracking-wider uppercase mb-2">Our Gallery</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">A Glimpse Inside Bhavani Hospital</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <style>{`
            .gallery-slider .swiper-button-next,
            .gallery-slider .swiper-button-prev {
              background: transparent !important;
              color: #0ea5e9 !important; 
              box-shadow: none !important;
              width: 30px !important;
              height: 30px !important;
            }
            .gallery-slider .swiper-button-next::after,
            .gallery-slider .swiper-button-prev::after {
              font-size: 1.25rem !important;
              font-weight: 400 !important;
            }
            .gallery-slider .swiper-button-next:hover,
            .gallery-slider .swiper-button-prev:hover {
              background: transparent !important;
              color: #1e3a8a !important;
              transform: scale(1.1);
            }
            .gallery-slider .swiper-pagination-bullet {
              background: #000;
              opacity: 0.4;
            }
            .gallery-slider .swiper-pagination-bullet-active {
              background: #0ea5e9 !important;
              opacity: 1;
            }
          `}</style>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            speed={700}
            grabCursor={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="gallery-slider pb-16 px-2"
          >
            {galleryImages.map((img, index) => (
              <SwiperSlide key={img.id}>
                <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-lg group">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                  
                  {/* Title block */}
                  <div className="absolute bottom-12 left-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{img.category}</h3>
                    <div className="w-10 h-1 bg-accent"></div>
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

export default Gallery;
