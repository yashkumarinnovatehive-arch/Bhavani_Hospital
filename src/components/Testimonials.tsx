import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
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
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-accent font-semibold tracking-wider uppercase mb-2">Testimonials</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm relative mt-8 h-full pt-12">
                  {/* Replaced image with an initial circle */}
                  <div className="absolute -top-8 left-8 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-md">
                    {testimonial.name.charAt(0)}
                  </div>
                  
                  <FaQuoteLeft className="absolute top-6 right-8 text-primary/10 text-4xl" />
                  
                  <div>
                    <div className="flex text-yellow-400 mb-4 text-sm gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed italic">"{testimonial.review}"</p>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <span className="text-xs text-gray-500">Patient</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
