import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaArrowUp, FaPhoneAlt, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="relative bg-primary-dark text-gray-300 pt-20 pb-10 overflow-hidden">
      {/* Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-[1px]">
        <svg className="relative block w-full h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,30L60,28C120,26,240,22,360,25C480,28,600,38,720,40C840,42,960,36,1080,30C1200,24,1320,18,1380,15L1440,12L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[100px] opacity-20 mix-blend-screen -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full blur-[80px] opacity-10 mix-blend-screen translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="lg:pr-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-white p-3 rounded-2xl shadow-lg border border-white/10">
                <img src="/Logo_transparent.png" alt="Bhavani Hospital Logo" className="h-20 object-contain" />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-lg">Bhavani Hospital</h3>
                <p className="text-xs text-accent-light font-semibold">Best of care, close to home</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm">
              Your trusted healthcare partner providing comprehensive medical services with modern facilities and compassionate care in Pune.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/Bhavanihospitalpune/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:text-white hover:-translate-y-1 transition-all duration-300 border border-white/10 hover:border-transparent hover:shadow-lg hover:shadow-blue-500/20">
                <FaFacebookF size={16} />
              </a>
              <a href="https://x.com/bhavanihospital" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white hover:-translate-y-1 transition-all duration-300 border border-white/10 hover:border-transparent hover:shadow-lg hover:shadow-cyan-500/20">
                <FaTwitter size={16} />
              </a>
              <a href="https://www.linkedin.com/company/bhavani-hospitals/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#0077b5] hover:text-white hover:-translate-y-1 transition-all duration-300 border border-white/10 hover:border-transparent hover:shadow-lg hover:shadow-blue-500/20">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links & Services */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 lg:col-span-2">
            <div className="lg:pl-8">
              <h4 className="text-white font-extrabold text-lg mb-8 relative inline-block">
                Quick Links
                <span className="absolute -bottom-3 left-0 w-10 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></span>
              </h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#about" className="hover:text-accent-light hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300 text-[15px]"><span className="w-1 h-1 rounded-full bg-accent/50"></span>About Hospital</a></li>
                <li><a href="#doctors" className="hover:text-accent-light hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300 text-[15px]"><span className="w-1 h-1 rounded-full bg-accent/50"></span>Our Doctors</a></li>
                <li><a href="#facilities" className="hover:text-accent-light hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300 text-[15px]"><span className="w-1 h-1 rounded-full bg-accent/50"></span>Facilities</a></li>
                <li><a href="#gallery" className="hover:text-accent-light hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300 text-[15px]"><span className="w-1 h-1 rounded-full bg-accent/50"></span>Gallery</a></li>
                <li><a href="/patient-rights" className="hover:text-accent-light hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300 text-[15px]"><span className="w-1 h-1 rounded-full bg-accent/50"></span>Patients Rights and Responsibilities</a></li>
                <li><a href="#contact" className="hover:text-accent-light hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300 text-[15px]"><span className="w-1 h-1 rounded-full bg-accent/50"></span>Contact Us</a></li>
              </ul>
            </div>

            <div className="lg:pl-8">
              <h4 className="text-white font-extrabold text-lg mb-8 relative inline-block">
                Services
                <span className="absolute -bottom-3 left-0 w-10 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></span>
              </h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#services" className="hover:text-accent-light hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300 text-[15px]"><span className="w-1 h-1 rounded-full bg-accent/50"></span>General Consultation</a></li>
                <li><a href="#services" className="hover:text-accent-light hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300 text-[15px]"><span className="w-1 h-1 rounded-full bg-accent/50"></span>Pediatrics</a></li>
                <li><a href="#services" className="hover:text-accent-light hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300 text-[15px]"><span className="w-1 h-1 rounded-full bg-accent/50"></span>Ayurvedic Treatment</a></li>
                <li><a href="#services" className="hover:text-accent-light hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300 text-[15px]"><span className="w-1 h-1 rounded-full bg-accent/50"></span>Emergency Care</a></li>
              </ul>
            </div>
          </div>

          {/* Locations & Contact */}
          <div>
            <h4 className="text-white font-extrabold text-lg mb-8 relative inline-block">
              Locations
              <span className="absolute -bottom-3 left-0 w-10 h-1 bg-gradient-to-r from-red-500 to-orange-400 rounded-full"></span>
            </h4>
            
            <div className="space-y-5 mb-8">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <h5 className="text-white font-bold text-[15px] mb-1">Hospital Address</h5>
                <p className="text-sm text-gray-300 leading-relaxed">Bhavani Hospital, Near Bharat Petroleum, MIT Corner, Pune Solapur Highway, Loni Kalbhor</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <h5 className="text-white font-bold text-[15px] mb-1">Clinic Address</h5>
                <p className="text-sm text-gray-300 leading-relaxed">Bhavani Clinic, Pandavdand Road, Kadamwak Wasti, Pune 412201</p>
              </div>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/5 mb-4 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
              <span className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider flex items-center gap-2">
                <FaPhoneAlt size={10} />
                Reception
              </span>
              <a href="tel:+917796655655" className="text-xl font-bold text-white group-hover:text-accent-light transition-colors">+91 7796-655-655</a>
            </div>
            
            <div className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
              <span className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider flex items-center gap-2">
                <FaEnvelope size={10} />
                Email
              </span>
              <a href="mailto:bhavanihospital.lk@gmail.com" className="text-[15px] font-medium text-white break-all group-hover:text-accent-light transition-colors">bhavanihospital.lk@gmail.com</a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center justify-center gap-4 text-[15px] text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} <span className="font-semibold text-white">Bhavani Hospital Pune</span>. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1 font-medium">
            Designed & Developed by <a href="https://innovatehive.in/" target="_blank" rel="noopener noreferrer" className="text-white ml-1 font-bold hover:text-accent-light transition-colors">InnovateHive</a>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
