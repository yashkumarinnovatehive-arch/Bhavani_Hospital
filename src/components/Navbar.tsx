import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-4'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/Logo_transparent.png" alt="Bhavani Hospital Logo" className="h-14 md:h-16 w-auto object-contain" />
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
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.path}
                className="text-gray-700 font-medium hover:text-primary border-b border-gray-50 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col space-y-3 pt-2">
              <a href="tel:+919876543210" className="flex items-center justify-center gap-2 text-primary border border-primary px-4 py-2 rounded-full font-medium">
                <FaPhoneAlt size={14} />
                <span>Call Now</span>
              </a>
              <a href="#appointment" className="bg-primary text-white text-center px-6 py-2 rounded-full font-medium">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
