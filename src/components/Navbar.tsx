import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Hospital', path: '#about' },
    { name: 'Doctors', path: '#doctors' },
    { name: 'Services', path: '#services' },
    { name: 'Facilities', path: '#facilities' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'OPD Timing', path: '#opd' },
    { name: 'Testimonials', path: '#testimonials' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100/50'}`}>
      {/* Top Banner (Optional for premium feel) */}
      {!isScrolled && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
      )}
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <img src="/Logo_transparent.png" alt="Bhavani Hospital Logo" className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.path}
                className="text-gray-700 font-medium hover:text-primary transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-primary border border-primary px-4 py-2 rounded-full font-medium hover:bg-primary/5 transition-colors">
              <FaPhoneAlt size={14} />
              <span>Call Now</span>
            </a>
            <a href="#appointment" className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg">
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden text-gray-700 text-2xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.path}
                  className="text-gray-700 font-medium hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col space-y-4 pt-4 mt-2 border-t border-gray-100">
                <a href="tel:+919876543210" className="flex items-center justify-center gap-2 text-primary border-2 border-primary px-4 py-3 rounded-full font-semibold hover:bg-primary/5 transition-colors">
                  <FaPhoneAlt size={14} />
                  <span>Call Now</span>
                </a>
                <a href="#appointment" className="bg-primary text-white text-center px-6 py-3 rounded-full font-semibold shadow-md" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
