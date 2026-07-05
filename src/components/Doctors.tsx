import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaTimes, FaCalendarCheck, FaClock, FaBriefcase, FaGraduationCap, FaUserMd } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Doctor {
  name: string;
  specialization: string;
  image: string;
  qualification?: string;
  degree?: string;
  designation?: string;
  timing?: string;
  about?: string;
  experience?: string;
}

const doctorsList: Doctor[] = [
  {
    name: 'Dr. Omprakash Todakari',
    specialization: 'General Physician',
    image: '/dr_omprakash_todakari.jpeg',
    degree: 'MBBS',
    designation: 'General Physician',
    timing: '10:00 AM - 02:00 PM | 05:00 PM - 10:00 PM (All 7 Days)',
    about: 'Dr. Omprakash Todakari is a dedicated and compassionate General Physician with a strong commitment to providing high-quality healthcare. With a patient-first approach and sound clinical knowledge, he focuses on accurate diagnosis, effective treatment, and preventive care for people of all age groups.',
    experience: '11 years',
    qualification: 'BAMS'
  },
  {
    name: 'Dr. Ashwini Todakari',
    specialization: 'Ayurvedic General Physician',
    image: '/dr_ashwini_todakari.jpeg',
    degree: 'BAMS',
    designation: 'General Physician',
    timing: '10:00 AM - 01:00 PM | 05:00 PM - 10:00 PM',
    about: 'Dr. Ashwini Todakari is a dedicated Ayurvedic Physician with a passion for promoting natural healing and holistic wellness. She believes in treating the root cause of illness through Ayurveda, proper diet, lifestyle management, and herbal therapies.',
    qualification: 'BAMS'
  }
];

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section id="doctors" className="py-24 bg-slate-50 relative overflow-hidden wave-divider wave-divider-top wave-divider-bottom">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-light/30 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary-light/30 rounded-full blur-3xl -z-10 translate-x-1/3"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-20 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-accent font-bold text-sm tracking-widest uppercase mb-4"
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
            Doctors in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent heading-underline">Bhavani Hospital</span>
          </motion.h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          speed={600}
          grabCursor={true}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          centerInsufficientSlides={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="equal-height-slider doctors-slider pb-16 px-4"
        >
          {doctorsList.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white rounded-2xl p-6 shadow-lg shadow-primary/5 border border-gray-50 hover-glow hover:-translate-y-2 transition-all duration-300 text-center items-center relative overflow-hidden group will-change-transform"
              >
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                {/* Doctor Image with gradient ring */}
                <div
                  className="relative w-full max-w-[200px] mb-5 cursor-pointer mx-auto"
                  onClick={() => { setSelectedDoctor(doctor); setActiveTab('about'); }}
                >
                  {/* Animated gradient ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-[3px] animate-gradient-shift" style={{ borderRadius: '50%' }}>
                    <div className="w-full h-full rounded-full bg-white"></div>
                  </div>

                  <div className="relative aspect-square rounded-full overflow-hidden m-[6px]">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=1e3a8a&color=fff&size=512`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                      <span className="text-white font-bold text-sm bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/30">View Profile</span>
                    </div>
                  </div>
                </div>

                <div className="text-center w-full flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{doctor.name}</h3>
                  {doctor.degree && (
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-bold text-sm mb-0.5">{doctor.degree}</p>
                  )}
                  {doctor.designation && (
                    <p className="text-gray-500 font-medium text-sm mb-4">{doctor.designation}</p>
                  )}

                  <div className="mt-auto pt-3 w-full">
                    <a
                      href="#appointment"
                      className="btn-shimmer inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white w-full py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-sm"
                    >
                      <FaCalendarCheck /> Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ── Doctor Profile Modal ── */}
      <AnimatePresence>
        {selectedDoctor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedDoctor(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm"
              >
                <FaTimes size={18} />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Left panel */}
                <div className="w-full md:w-2/5 bg-gradient-to-br from-primary/5 to-accent/5 p-8 flex flex-col items-center justify-center border-r border-gray-100">
                  <div className="relative">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-[3px] animate-gradient-shift">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mt-5">{selectedDoctor.name}</h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-bold mt-1">{selectedDoctor.degree}</p>
                  <p className="text-gray-500 font-medium text-sm mt-1">{selectedDoctor.designation}</p>

                  <a href="#appointment" onClick={() => setSelectedDoctor(null)} className="btn-shimmer mt-6 w-full bg-gradient-to-r from-primary to-primary-dark text-white py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2">
                    <FaCalendarCheck /> Book Appointment
                  </a>
                </div>

                {/* Right panel with tabs */}
                <div className="w-full md:w-3/5 p-8 flex flex-col">
                  {/* Tabs */}
                  <div className="flex gap-1 mb-6 bg-gray-100 p-1 rounded-xl">
                    {[
                      { id: 'about', label: 'About', icon: FaUserMd },
                      { id: 'timings', label: 'Timings', icon: FaClock },
                      { id: 'qualifications', label: 'Credentials', icon: FaGraduationCap },
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${activeTab === tab.id ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                      >
                        <tab.icon size={13} />
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="flex-1">
                    {activeTab === 'about' && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                        <h4 className="text-base font-bold text-gray-900">About Doctor</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{selectedDoctor.about}</p>
                      </motion.div>
                    )}
                    {activeTab === 'timings' && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                        <h4 className="text-base font-bold text-gray-900">Consultation Timings</h4>
                        {selectedDoctor.timing && (
                          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-5 rounded-xl border border-primary/10">
                            <div className="flex items-center gap-2 mb-3">
                              <FaClock className="text-primary" />
                              <span className="font-bold text-primary text-sm">Schedule</span>
                            </div>
                            <p className="text-gray-800 font-medium">{selectedDoctor.timing}</p>
                          </div>
                        )}
                      </motion.div>
                    )}
                    {activeTab === 'qualifications' && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                        <h4 className="text-base font-bold text-gray-900">Qualifications & Experience</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedDoctor.qualification && (
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                              <div className="flex items-center gap-2 mb-1">
                                <FaGraduationCap className="text-primary text-sm" />
                                <span className="text-xs font-bold text-primary uppercase">Qualification</span>
                              </div>
                              <p className="text-sm text-gray-800 font-medium">{selectedDoctor.qualification}</p>
                            </div>
                          )}
                          {selectedDoctor.experience && (
                            <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                              <div className="flex items-center gap-2 mb-1">
                                <FaBriefcase className="text-green-600 text-sm" />
                                <span className="text-xs font-bold text-green-600 uppercase">Experience</span>
                              </div>
                              <p className="text-sm text-gray-800 font-medium">{selectedDoctor.experience}</p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Doctors;
