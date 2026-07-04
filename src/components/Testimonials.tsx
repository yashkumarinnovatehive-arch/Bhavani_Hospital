import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaQuoteLeft, FaStar, FaGoogle } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Rahul Sharma',
    review: 'Excellent facilities and very supportive staff. Dr. Omprakash Todakari is very knowledgeable and patient. My surgery went smoothly and recovery was fast.',
    rating: 5,
    initials: 'RS',
    color: 'from-primary to-blue-500',
  },
  {
    name: 'Priya Patel',
    review: 'We visit Dr. Gajanan Cheke for my son. He is brilliant with kids. The hospital environment is very clean and child-friendly. Highly recommended.',
    rating: 5,
    initials: 'PP',
    color: 'from-pink-500 to-rose-400',
  },
  {
    name: 'Amit Deshmukh',
    review: 'Took Ayurvedic treatment from Dr. Madhuri. I can see significant improvement in my health. The holistic approach and Panchakarma therapies are genuine.',
    rating: 5,
    initials: 'AD',
    color: 'from-green-500 to-emerald-400',
  },
  {
    name: 'Sneha Joshi',
    review: 'Emergency services are very prompt. The staff is well-trained and polite. Affordable billing unlike other corporate hospitals.',
    rating: 4,
    initials: 'SJ',
    color: 'from-accent to-teal-400',
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden wave-divider wave-divider-top">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-light/40 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent-light/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-20 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-accent font-bold text-sm tracking-widest uppercase mb-4"
          >
            <FaGoogle className="text-red-500" />
            Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
          >
            What Our Patients <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent heading-underline">Say</span>
          </motion.h2>

          {/* Google Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 mt-4 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100"
          >
            <FaGoogle className="text-lg" style={{ color: '#4285F4' }} />
            <div className="flex text-yellow-400 text-sm gap-0.5">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <span className="text-sm font-bold text-gray-800">4.8 / 5.0</span>
            <span className="text-xs text-gray-500">(50+ reviews)</span>
          </motion.div>
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
                <div className="relative bg-white/90 backdrop-blur-md p-8 md:p-9 rounded-2xl border border-white/80 shadow-lg shadow-primary/5 mt-10 h-full pt-14 group hover:-translate-y-2 hover-glow transition-all duration-300 flex flex-col">

                  {/* Gradient top border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

                  {/* Avatar */}
                  <div className={`absolute -top-8 left-8 w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white text-xl font-bold border-4 border-white shadow-xl transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}>
                    {testimonial.initials}
                  </div>

                  {/* Quote icon */}
                  <FaQuoteLeft className="absolute top-10 right-8 text-primary/[0.04] text-7xl transform -rotate-12 group-hover:rotate-0 group-hover:text-primary/[0.08] transition-all duration-500" />

                  <div className="flex-grow flex flex-col relative z-10">
                    <div className="flex text-yellow-400 mb-5 text-sm gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={`${i < testimonial.rating ? "text-yellow-400" : "text-gray-200"} ${i < testimonial.rating ? 'animate-pulse' : ''}`} style={{ animationDelay: `${i * 0.1}s`, animationDuration: '3s' }} />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-8 text-sm leading-relaxed italic flex-grow relative z-10">"{testimonial.review}"</p>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-extrabold text-gray-900 text-base">{testimonial.name}</h4>
                        <span className="text-xs text-accent font-semibold tracking-wide">Verified Patient</span>
                      </div>
                      <FaGoogle className="text-gray-300 text-lg" />
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
