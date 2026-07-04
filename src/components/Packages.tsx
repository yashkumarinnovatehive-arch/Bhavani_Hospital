import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaCalendarCheck } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const packages = [
  {
    id: 1,
    name: 'Basic Health Checkup',
    price: '₹1,499',
    description: 'Essential health screening for individuals looking for a routine checkup.',
    color: 'from-blue-400 to-blue-600',
    features: [
      'Complete Blood Count (CBC)',
      'Blood Sugar (Fasting)',
      'Lipid Profile',
      'Liver Function Test (SGPT)',
      'Kidney Function Test (Serum Creatinine)',
      'Urine Routine',
      'ECG',
      'Physician Consultation'
    ]
  },
  {
    id: 2,
    name: 'Comprehensive Checkup',
    price: '₹3,999',
    popular: true,
    description: 'A detailed health evaluation for a complete overview of your health status.',
    color: 'from-primary to-accent',
    features: [
      'Everything in Basic Checkup',
      'Thyroid Profile (T3, T4, TSH)',
      'Liver Function Test (Complete)',
      'Kidney Function Test (Complete)',
      'HbA1c (3 months average blood sugar)',
      'Chest X-Ray',
      'Ultrasound Whole Abdomen',
      'Dietitian Consultation'
    ]
  },
  {
    id: 3,
    name: 'Women\'s Wellness',
    price: '₹2,999',
    description: 'Specialized health checkup package designed specifically for women.',
    color: 'from-pink-400 to-pink-600',
    features: [
      'Complete Blood Count (CBC)',
      'Thyroid Profile (TSH)',
      'Blood Sugar (Fasting)',
      'Lipid Profile',
      'Pap Smear',
      'Breast Examination / Mammography (Optional)',
      'Ultrasound Pelvis',
      'Gynecologist Consultation'
    ]
  }
];

const Packages = () => {
  return (
    <section id="packages" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 font-bold text-sm tracking-widest uppercase mb-4"
          >
            Health Packages
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Preventive <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Health Checkups</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Regular health checkups are vital for early detection and prevention of diseases. Choose a package that suits your needs.
          </motion.p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.1}
          centeredSlides={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            480: { slidesPerView: 1.3 },
            768: { slidesPerView: 2.2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: false },
          }}
          className="pb-16 pt-8 px-4"
        >
          {packages.map((pkg, index) => (
            <SwiperSlide key={pkg.id} className="h-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full border-2 mt-6 ${pkg.popular ? 'border-primary md:-translate-y-2' : 'border-transparent'}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-500 text-sm h-10 mb-4">{pkg.description}</p>
                  <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r hover:scale-105 transition-transform duration-300 inline-block pb-1" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                    <span className={`bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                      {pkg.price}
                    </span>
                  </div>
                </div>

                <div className="flex-1 space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-opacity-10`} style={{ color: pkg.popular ? '#0ea5e9' : '#6b7280', backgroundColor: pkg.popular ? 'rgba(14, 165, 233, 0.1)' : 'rgba(107, 114, 128, 0.1)' }}>
                        <FaCheck size={10} className={pkg.popular ? 'text-primary' : 'text-gray-500'} />
                      </div>
                      <span className="text-gray-700 text-sm font-medium leading-tight pt-0.5">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <a 
                    href="#appointment"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg ${pkg.popular ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                  >
                    <FaCalendarCheck /> Book This Package
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Packages;
