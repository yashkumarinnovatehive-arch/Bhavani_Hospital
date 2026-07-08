import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaMoneyBillWave, FaHospital, FaMicroscope, FaSmile, FaCalendarCheck, FaUsers, FaBroom, FaPlay } from 'react-icons/fa';

const reasons = [
  { icon: FaUserMd, title: 'Experienced Doctors', gradient: 'from-primary to-blue-500' },
  { icon: FaMoneyBillWave, title: 'Affordable Care', gradient: 'from-green-500 to-emerald-400' },
  { icon: FaHospital, title: 'Modern Facilities', gradient: 'from-purple-500 to-indigo-400' },
  { icon: FaMicroscope, title: 'Quick Diagnosis', gradient: 'from-secondary to-cyan-400' },
  { icon: FaSmile, title: 'Patient Focus', gradient: 'from-pink-500 to-rose-400' },
  { icon: FaCalendarCheck, title: 'Easy Booking', gradient: 'from-accent to-teal-400' },
  { icon: FaUsers, title: 'Friendly Staff', gradient: 'from-orange-500 to-amber-400' },
  { icon: FaBroom, title: 'Clean Hygiene', gradient: 'from-emerald-500 to-green-400' },
];

const WhyChooseUs = () => {
  return (
    <section className="pt-8 pb-8 bg-white relative overflow-hidden wave-divider wave-divider-slate-bottom">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary-light/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-accent-light/30 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-5 py-2 rounded-full bg-accent-light text-accent font-bold text-sm tracking-widest uppercase mb-4"
            >
              Why Choose Us
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Your Health Is Our <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent heading-underline">Top Priority</span></h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We understand that choosing a healthcare provider is a critical decision. At Bhavani Hospital, we combine medical expertise with compassionate care to ensure you get the best possible treatment in a safe and comfortable environment.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mt-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="card-3d flex flex-col items-center justify-center text-center p-5 bg-white border border-gray-100 rounded-2xl hover:border-transparent hover-glow transition-all duration-300 group cursor-pointer relative overflow-hidden"
                >
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300`}></div>

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 mb-4 relative z-10`}>
                    <reason.icon size={22} />
                  </div>

                  <h3 className="font-bold text-gray-800 text-sm leading-tight group-hover:text-primary transition-colors z-10 relative">
                    {reason.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Image with play button overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary rounded-[2.5rem] transform rotate-3 scale-[1.03] opacity-10"></div>
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Medical Team"
                className="relative z-10 rounded-[2.5rem] shadow-2xl w-full h-auto object-cover border-4 border-white animate-glow-pulse"
                loading="lazy"
              />

              {/* Video play button overlay */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="relative group cursor-pointer">
                  <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse-ring"></div>
                  <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <FaPlay className="text-primary text-xl ml-1" />
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-6 -left-6 bg-glass p-5 rounded-2xl shadow-xl z-30 flex items-center gap-4 border border-white/60 animate-bounce-slow">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-2xl shadow-lg">
                  <FaUsers />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-gray-900 tracking-tight">15k+</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">Happy Patients</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
