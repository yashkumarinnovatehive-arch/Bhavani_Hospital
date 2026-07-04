import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUserMd, FaHeartbeat, FaHospital, FaArrowRight } from 'react-icons/fa';

const features = [
  { icon: FaHeartbeat, title: 'Patient First Approach' },
  { icon: FaCheckCircle, title: 'Affordable Care' },
  { icon: FaHospital, title: 'Clean & Safe Environment' },
  { icon: FaUserMd, title: 'Experienced Medical Staff' },
];

const milestones = [
  { year: '2021', event: 'Hospital Founded' },
  { year: '2022', event: '5000+ Patients Treated' },
  { year: '2023', event: 'New Departments Added' },
  { year: '2024', event: '10k+ Patients Milestone' },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden wave-divider wave-divider-slate-bottom">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-light/30 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-light/40 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-50 animate-glow-pulse">
              <img
                src="/Building.png"
                alt="Bhavani Hospital Interior"
                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex items-end p-10">
                <div className="text-white">
                  <h3 className="text-4xl font-extrabold mb-2 tracking-tight">4+ Years</h3>
                  <p className="text-lg font-medium text-white/90">Of Medical Excellence in Pune</p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 md:right-auto md:-left-6 bg-glass p-5 rounded-2xl shadow-xl border border-white/60 hidden sm:flex items-center gap-4 animate-bounce-slow"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary text-white flex items-center justify-center text-2xl shadow-lg">
                <FaHeartbeat />
              </div>
              <div>
                <div className="text-gray-900 font-bold">Trusted Care</div>
                <div className="text-gray-500 text-sm">Since 2021</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-5 py-2 rounded-full bg-accent-light text-accent font-bold text-sm tracking-widest uppercase mb-4"
            >
              About Our Hospital
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-[1.1]">
              Committed To Providing <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-shift heading-underline">High-Quality Healthcare</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Bhavani Hospital, a leading and trusted healthcare provider, stands proudly at the MIT Corner on the Pune-Solapur Highway. Established in March 2021, it has quickly become the preferred destination for holistic and compassionate care in the region.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-glass-card p-6 rounded-2xl hover-glow hover:border-primary/30 transition-all duration-300 card-3d">
                <h4 className="font-bold text-primary text-lg mb-2">Our Mission</h4>
                <p className="text-gray-600 leading-relaxed text-sm">To provide accessible, affordable, and high-quality healthcare to our entire community.</p>
              </div>
              <div className="bg-glass-card p-6 rounded-2xl hover-glow hover:border-accent/30 transition-all duration-300 card-3d">
                <h4 className="font-bold text-accent text-lg mb-2">Our Vision</h4>
                <p className="text-gray-600 leading-relaxed text-sm">To be the most trusted and preferred healthcare partner for every family we serve.</p>
              </div>
            </div>

            {/* Timeline Milestones */}
            <div className="mb-8">
              <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wider mb-4">Our Journey</h4>
              <div className="relative pl-6 border-l-2 border-primary/20 space-y-4">
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[1.85rem] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-white shadow-sm"></div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-extrabold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{m.year}</span>
                      <span className="text-sm font-semibold text-gray-700">{m.event}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 border border-gray-100 text-primary flex items-center justify-center shrink-0 group-hover:from-primary group-hover:to-accent group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
                    <feature.icon size={16} />
                  </div>
                  <span className="font-bold text-gray-700 group-hover:text-primary transition-colors">{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
