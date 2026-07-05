import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaShieldAlt, FaHeart, FaUsers } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const values = [
  { 
    icon: FaUserMd, 
    title: 'Patient First',
    description: 'Every decision we make is guided by what is best for our patients and their families.',
    gradient: 'from-primary to-blue-500'
  },
  { 
    icon: FaShieldAlt, 
    title: 'Quality & Safety',
    description: 'We maintain the highest standards of clinical excellence and patient safety.',
    gradient: 'from-secondary to-cyan-400'
  },
  { 
    icon: FaHeart, 
    title: 'Compassion',
    description: 'We treat every patient with kindness, empathy, dignity, and respect.',
    gradient: 'from-pink-500 to-rose-400'
  },
  { 
    icon: FaUsers, 
    title: 'Community Care',
    description: 'We are committed to improving community health through care, education and awareness.',
    gradient: 'from-accent to-teal-400'
  }
];

const ManagementMessage = () => {
  return (
    <section id="management-message" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
              A Message from the Management
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Welcome to Bhavani Hospital.
            </h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                At Bhavani Hospital, our mission is to provide healthcare that combines clinical excellence with compassion, integrity, and respect. We understand that every patient who walks through our doors places their trust in us, and we are committed to honoring that trust by delivering safe, ethical, and personalized medical care.
              </p>
              <p>
                Our dedicated team of doctors, nurses, and healthcare professionals works tirelessly to ensure that every patient receives the highest standard of treatment in a caring and comfortable environment.
              </p>
              <p>
                We continually invest in modern medical technology, skilled professionals, and quality improvement initiatives to meet the evolving healthcare needs of our community.
              </p>
              <p>
                Healthcare is more than treating illnesses—it's about promoting wellness, supporting families, and building healthier communities. At Bhavani Hospital, we strive to be your trusted healthcare partner through every stage of life.
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative h-[400px] md:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Hospital Reception" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/20 p-8 text-center">
                <img src="/Logo_transparent.png" alt="Bhavani Hospital Logo" className="h-24 md:h-32 drop-shadow-xl bg-white/90 p-4 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Core Values - Swiper for Mobile */}
        <div className="block lg:hidden mb-16">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              480: { slidesPerView: 1.5 },
              640: { slidesPerView: 2.2, centeredSlides: false },
            }}
            className="equal-height-slider pb-14"
          >
            {values.map((value, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover-glow transition-all duration-300 items-center group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} text-white rounded-2xl flex flex-shrink-0 items-center justify-center text-2xl mb-6 shadow-md group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 mx-auto`}>
                    <value.icon />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{value.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Core Values - Grid for Desktop */}
        <div className="hidden lg:grid grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover-glow hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-center group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} text-white rounded-2xl flex flex-shrink-0 items-center justify-center text-2xl mb-6 shadow-md group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                <value.icon />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer/Sign-off */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
          
          <p className="text-lg md:text-xl text-gray-800 font-medium mb-2 max-w-3xl mx-auto">
            We sincerely thank our patients and the community for their continued confidence in us.
          </p>
          <p className="text-lg md:text-xl text-gray-800 font-medium mb-8 max-w-3xl mx-auto">
            We remain committed to our promise of delivering <span className="text-primary font-bold">"Best of Care, Close to Home."</span>
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gray-200 flex-1 max-w-[100px]"></div>
            <FaHeart className="text-primary" />
            <div className="h-px bg-gray-200 flex-1 max-w-[100px]"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-left">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
              alt="Management Team" 
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div>
              <p className="text-gray-600 mb-1">Warm Regards,</p>
              <h4 className="text-xl font-bold text-primary">Management Team</h4>
              <p className="text-gray-800 font-medium">Bhavani Hospital</p>
              <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                 <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                 MIT Corner, Loni Kalbhor, Pune
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ManagementMessage;
