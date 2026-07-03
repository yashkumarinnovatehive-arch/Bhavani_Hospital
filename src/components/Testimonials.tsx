import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Rahul Sharma',
    review: 'Excellent facilities and very supportive staff. Dr. Omprakash Todakari is very knowledgeable and patient. My surgery went smoothly and recovery was fast.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    review: 'We visit Dr. Gajanan Cheke for my son. He is brilliant with kids. The hospital environment is very clean and child-friendly. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Amit Deshmukh',
    review: 'Took Ayurvedic treatment from Dr. Madhuri. I can see significant improvement in my health. The holistic approach and Panchakarma therapies are genuine.',
    rating: 5,
  },
  {
    name: 'Sneha Joshi',
    review: 'Emergency services are very prompt. The staff is well-trained and polite. Affordable billing unlike other corporate hospitals.',
    rating: 4,
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden bg-medical-pattern">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-light/40 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white shadow-sm border border-gray-100 text-accent font-bold text-sm tracking-widest uppercase mb-4"
          >
            Testimonials
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
          >
            What Our Patients <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Say</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-20"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-white shadow-xl shadow-primary/5 mt-10 h-full pt-14 relative group hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col">
                  
                  {/* Avatar */}
                  <div className="absolute -top-10 left-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-3xl font-bold border-4 border-white shadow-xl transform group-hover:rotate-6 transition-transform duration-300">
                    {testimonial.name.charAt(0)}
                  </div>
                  
                  <FaQuoteLeft className="absolute top-10 right-10 text-primary/5 text-6xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                  
                  <div className="flex-grow flex flex-col relative z-10">
                    <div className="flex text-yellow-400 mb-6 text-sm gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-200"} />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-8 text-base leading-relaxed italic flex-grow relative z-10">"{testimonial.review}"</p>
                    
                    <div>
                      <h4 className="font-extrabold text-gray-900 text-lg">{testimonial.name}</h4>
                      <span className="text-sm text-accent font-semibold tracking-wide">Patient</span>
                    </div>
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

export default Testimonials;
