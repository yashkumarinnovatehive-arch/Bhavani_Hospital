import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-gray-300 pt-20 pb-10 border-t-8 border-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-[100px] opacity-20 mix-blend-screen -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:pr-6">
            <div className="flex items-center mb-8">
              <div className="bg-white p-3 rounded-2xl shadow-lg border border-white/10">
                <img src="/Logo_transparent.png" alt="Bhavani Hospital Logo" className="h-16 object-contain" />
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              Your trusted healthcare partner providing comprehensive medical services with modern facilities and compassionate care in Pune.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/bhavani_hospitals" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white hover:-translate-y-1 transition-all duration-300 border border-white/10"><FaInstagram size={16} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white hover:-translate-y-1 transition-all duration-300 border border-white/10"><FaFacebookF size={16} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white hover:-translate-y-1 transition-all duration-300 border border-white/10"><FaTwitter size={16} /></a>
            </div>
          </div>

          {/* Quick Links & Services Container for Mobile */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 lg:col-span-2">
            {/* Quick Links */}
            <div className="lg:pl-8">
              <h4 className="text-white font-extrabold text-lg mb-8 relative inline-block">
                Quick Links
                <span className="absolute -bottom-3 left-0 w-8 h-1 bg-accent rounded-full"></span>
              </h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#about" className="hover:text-accent-light hover:translate-x-2 inline-block transition-all duration-300">About Hospital</a></li>
                <li><a href="#doctors" className="hover:text-accent-light hover:translate-x-2 inline-block transition-all duration-300">Our Doctors</a></li>
                <li><a href="#facilities" className="hover:text-accent-light hover:translate-x-2 inline-block transition-all duration-300">Facilities</a></li>
                <li><a href="#gallery" className="hover:text-accent-light hover:translate-x-2 inline-block transition-all duration-300">Gallery</a></li>
                <li><a href="#contact" className="hover:text-accent-light hover:translate-x-2 inline-block transition-all duration-300">Contact Us</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="lg:pl-8">
              <h4 className="text-white font-extrabold text-lg mb-8 relative inline-block">
                Services
                <span className="absolute -bottom-3 left-0 w-8 h-1 bg-accent rounded-full"></span>
              </h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#services" className="hover:text-accent-light hover:translate-x-2 inline-block transition-all duration-300">General Consultation</a></li>
                <li><a href="#services" className="hover:text-accent-light hover:translate-x-2 inline-block transition-all duration-300">Pediatrics</a></li>
                <li><a href="#services" className="hover:text-accent-light hover:translate-x-2 inline-block transition-all duration-300">Ayurvedic Treatment</a></li>
                <li><a href="#services" className="hover:text-accent-light hover:translate-x-2 inline-block transition-all duration-300">General Surgery</a></li>
                <li><a href="#services" className="hover:text-accent-light hover:translate-x-2 inline-block transition-all duration-300">Emergency Care</a></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-extrabold text-lg mb-8 relative inline-block">
              Emergency
              <span className="absolute -bottom-3 left-0 w-8 h-1 bg-accent rounded-full"></span>
            </h4>
            <div className="bg-white/5 p-5 rounded-2xl border border-white/5 mb-4 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
              <span className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">Ambulance</span>
              <a href="tel:1066" className="text-2xl font-extrabold text-accent-light group-hover:text-accent transition-colors">1066</a>
            </div>
            <div className="bg-white/5 p-5 rounded-2xl border border-white/5 mb-4 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
              <span className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">Reception</span>
              <a href="tel:+917796655655" className="text-xl font-bold text-white group-hover:text-accent-light transition-colors">+91 7796 655 655</a>
            </div>
            <div className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
              <span className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">Email</span>
              <a href="mailto:bhavanihospital.lk@gmail.com" className="text-sm font-medium text-white break-all group-hover:text-accent-light transition-colors">bhavanihospital.lk@gmail.com</a>
            </div>
          </div>
          
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} <span className="font-semibold text-white">Bhavani Hospital Pune</span>. All rights reserved.</p>
          <p className="flex items-center gap-1 font-medium">
            Designed & Developed by <a href="https://innovatehive.in/" target="_blank" rel="noopener noreferrer" className="text-white ml-1 font-bold hover:text-accent-light transition-colors">InnovateHive</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
