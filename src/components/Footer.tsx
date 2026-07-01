import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a2540] text-gray-300 pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Brand */}
          <div className="lg:pr-4">
            <div className="flex items-center mb-6 group">
              <img src="/Logo_transparent.png" alt="Bhavani Hospital Logo" className="h-16 md:h-20 w-auto object-contain bg-white/90 p-2 rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Your trusted healthcare partner providing comprehensive medical services with modern facilities and compassionate care.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/bhavani_hospitals" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><FaInstagram size={14} /></a>
            </div>
          </div>

          {/* Quick Links & Services Container for Mobile */}
          <div className="grid grid-cols-2 gap-4 md:col-span-2 lg:col-span-2">
            {/* Quick Links */}
            <div className="lg:pl-4">
              <h4 className="text-white font-bold mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-accent"></span>
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#about" className="hover:text-accent transition-colors block">About Hospital</a></li>
                <li><a href="#doctors" className="hover:text-accent transition-colors block">Our Doctors</a></li>
                <li><a href="#facilities" className="hover:text-accent transition-colors block">Facilities</a></li>
                <li><a href="#gallery" className="hover:text-accent transition-colors block">Gallery</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors block">Contact Us</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="lg:pl-8">
              <h4 className="text-white font-bold mb-6 relative inline-block">
                Services
                <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-accent"></span>
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#services" className="hover:text-accent transition-colors block">General Consultation</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors block">Pediatrics</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors block">Ayurvedic Treatment</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors block">General Surgery</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors block">Emergency Care</a></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 relative inline-block">
              Emergency
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-accent"></span>
            </h4>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-4 transition-colors hover:bg-white/10">
              <span className="block text-xs text-gray-400 mb-1">Ambulance / Emergency</span>
              <a href="tel:1066" className="text-2xl font-bold text-accent">1066</a>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-4 transition-colors hover:bg-white/10">
              <span className="block text-xs text-gray-400 mb-1">Reception</span>
              <a href="tel:+917796655655" className="text-lg font-bold text-white">+91 7796 655 655</a>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 transition-colors hover:bg-white/10">
              <span className="block text-xs text-gray-400 mb-1">Email</span>
              <a href="mailto:bhavanihospital.lk@gmail.com" className="text-sm font-bold text-white break-all">bhavanihospital.lk@gmail.com</a>
            </div>
          </div>
          
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bhavani Hospital Pune. All rights reserved.</p>
          <p className="flex items-center gap-1 font-medium">
            Designed & Developed by <a href="https://innovatehive.in/" target="_blank" rel="noopener noreferrer" className="text-white ml-1 font-bold hover:text-accent transition-colors">InnovateHive</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
