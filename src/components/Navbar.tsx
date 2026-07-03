import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
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

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About Us', 
      dropdown: [
        { name: 'About Hospital', path: '#about' },
        { name: 'Gallery', path: '#gallery' },
        { name: 'Testimonials', path: '#testimonials' }
      ]
    },
    { 
      name: 'Patient Care', 
      dropdown: [
        { name: 'Services', path: '#services' },
        { name: 'Facilities', path: '#facilities' },
        { name: 'OPD Timing', path: '#opd' }
      ]
    },
    { name: 'Doctors', path: '#doctors' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2 lg:py-3' : 'bg-white/95 backdrop-blur-sm py-3 lg:py-4 border-b border-gray-100/50'}`}>
      {/* Top Banner (Optional for premium feel) */}
      {!isScrolled && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center gap-2">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 lg:gap-3 z-50 group shrink-0">
            <img src="/Logo_transparent.png" alt="Bhavani Hospital Logo" className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md" />
            <div className="flex flex-col justify-center">
              <h1 className="text-sm sm:text-lg lg:text-xl font-extrabold text-primary tracking-tight leading-tight whitespace-nowrap">
                Bhavani Hospital
              </h1>
              <p className="text-[8px] sm:text-[10px] lg:text-xs text-secondary font-semibold tracking-wider whitespace-nowrap">
                Best of care, close to home
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center justify-center flex-1 mx-2 lg:space-x-6 2xl:space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="flex items-center gap-1.5 text-gray-700 font-semibold hover:text-primary transition-colors text-[14px] 2xl:text-base whitespace-nowrap py-4 focus:outline-none">
                      {item.name}
                      <FaChevronDown size={10} className="text-gray-400 group-hover:text-primary transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-48 bg-white rounded-xl shadow-xl shadow-primary/5 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                      <div className="py-2">
                        {item.dropdown.map((sub, subIdx) => (
                          <a 
                            key={subIdx} 
                            href={sub.path}
                            className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-primary/5 hover:text-primary transition-colors"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a 
                    href={item.path}
                    className="text-gray-700 font-semibold hover:text-primary transition-colors text-[14px] 2xl:text-base whitespace-nowrap py-4"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2 lg:space-x-4 shrink-0">
            <a href="tel:+917796655655" className="flex items-center gap-1.5 lg:gap-2 text-primary border border-primary px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-medium hover:bg-primary/5 transition-colors text-xs lg:text-sm whitespace-nowrap">
              <FaPhoneAlt size={12} className="lg:w-3.5 lg:h-3.5" />
              <span>Call Now</span>
            </a>
            <a href="#appointment" className="bg-primary text-white px-4 py-1.5 lg:px-6 lg:py-2 rounded-full font-medium hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg text-xs lg:text-sm whitespace-nowrap">
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden text-gray-700 text-2xl focus:outline-none shrink-0 ml-2"
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
            <div className="flex flex-col px-4 sm:px-6 py-4 sm:py-6 space-y-2 sm:space-y-3 max-h-[80vh] overflow-y-auto">
              {navItems.map((item, index) => (
                <React.Fragment key={index}>
                  {item.dropdown ? (
                    <div className="flex flex-col space-y-1">
                      <div className="text-gray-400 font-bold text-[11px] uppercase tracking-wider px-4 pt-3 pb-1">
                        {item.name}
                      </div>
                      {item.dropdown.map((sub, subIdx) => (
                        <a 
                          key={subIdx} 
                          href={sub.path}
                          className="text-gray-700 font-medium hover:text-primary hover:bg-gray-50 px-4 py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ml-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a 
                      href={item.path}
                      className="text-gray-700 font-medium hover:text-primary hover:bg-gray-50 px-4 py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base mt-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </React.Fragment>
              ))}
              <div className="flex flex-col space-y-3 sm:space-y-4 pt-5 mt-3 border-t border-gray-100">
                <a href="tel:+917796655655" className="flex items-center justify-center gap-2 text-primary border-2 border-primary px-4 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-primary/5 transition-colors text-sm sm:text-base">
                  <FaPhoneAlt size={14} />
                  <span>Call Now</span>
                </a>
                <a href="#appointment" className="bg-primary text-white text-center px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow-md text-sm sm:text-base" onClick={() => setIsMobileMenuOpen(false)}>
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
