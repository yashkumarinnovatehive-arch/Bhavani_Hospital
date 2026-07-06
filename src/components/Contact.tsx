import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp, FaDirections } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="pt-8 pb-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-light/30 rounded-full blur-3xl -z-10 -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-light/20 rounded-full blur-3xl -z-10 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full bg-accent-light text-accent font-bold text-sm tracking-widest uppercase mb-4"
          >
            Contact Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent heading-underline">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            We are here to help you. Reach out to us for appointments, emergencies, or any queries.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 flex flex-col gap-5"
          >

            <div className="bg-glass-card rounded-2xl p-6 flex gap-4 hover-glow hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-500 text-white rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Hospital Address</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Bhavani Hospital, Near Bharat Petroleum, MIT Corner Pune Solapur Highway, Loni Kalbhor, Pune - 412201</p>
                <a href="https://maps.google.com/?q=18.4891575,74.0237846" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-xs font-bold text-primary hover:text-accent transition-colors">
                  <FaDirections size={12} /> Get Directions
                </a>
              </div>
            </div>

            <div className="bg-glass-card rounded-2xl p-6 flex gap-4 hover-glow hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-cyan-400 text-white rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <FaPhoneAlt size={18} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Phone Number</h4>
                <p className="text-sm text-gray-600">Reception: <a href="tel:+917796655655" className="font-semibold text-gray-800 hover:text-primary transition-colors">+91 7796 655 655</a></p>
                <p className="text-sm text-red-500 font-semibold mt-1 flex items-center gap-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  Emergency: 1066
                </p>
              </div>
            </div>

            <div className="bg-glass-card rounded-2xl p-6 hover-glow hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-teal-400 text-white rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <FaClock size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">OPD Timings</h4>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Monday – Sunday</p>
                </div>
              </div>
              <div className="space-y-3 pl-2">
                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl">
                  <div className="w-8 h-8 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0">
                    <FaClock size={12} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-700">Morning Session</p>
                    <p className="text-sm font-bold text-primary">10:00 AM – 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl">
                  <div className="w-8 h-8 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center shrink-0">
                    <FaClock size={12} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-700">Evening Session</p>
                    <p className="text-sm font-bold text-primary">5:00 PM – 9:00 PM</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-green-600 font-semibold mt-3 flex items-center gap-1 pl-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Emergency: 24/7 Open
              </p>
            </div>

            <div className="flex gap-3">
              <a href="tel:+917796655655" className="flex-1 btn-shimmer bg-gradient-to-r from-primary to-primary-dark text-white py-3.5 rounded-xl flex items-center justify-center gap-2 font-bold hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300">
                <FaPhoneAlt size={14} /> Call
              </a>
              <a href="https://wa.me/917796655655" className="flex-1 btn-shimmer bg-gradient-to-r from-green-500 to-green-600 text-white py-3.5 rounded-xl flex items-center justify-center gap-2 font-bold hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 transition-all duration-300">
                <FaWhatsapp size={18} /> WhatsApp
              </a>
            </div>

          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/3 h-96 lg:h-auto rounded-2xl overflow-hidden shadow-xl relative"
          >
            {/* Gradient border around the map */}
            <div className="absolute inset-0 rounded-2xl p-[3px] bg-gradient-to-br from-primary via-secondary to-accent -z-10" style={{ margin: '-3px' }}></div>
            <iframe
              src="https://maps.google.com/maps?q=18.4891575,74.0237846&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
