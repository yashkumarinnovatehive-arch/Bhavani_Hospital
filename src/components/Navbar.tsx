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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-1 lg:py-2' : 'bg-transparent py-1 lg:py-2'}`}>
      {/* Top Banner (Optional for premium feel) */}
      {!isScrolled && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center gap-2">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 lg:gap-3 z-50 group shrink-0">
            <img src="/Logo_transparent.png" alt="Bhavani Hospital Logo" className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md" />
            <div className="flex flex-col justify-center">
              <h1 className="text-lg sm:text-xl lg:text-[24px] font-extrabold text-[#1e3a8a] tracking-tight leading-tight whitespace-nowrap">
                Bhavani Hospital
              </h1>
              <p className="text-xs sm:text-sm lg:text-[14px] text-[#0ea5e9] font-bold tracking-wider whitespace-nowrap mt-0.5">
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
                    <button className="flex items-center gap-1.5 text-[#334155] font-semibold hover:text-primary transition-colors text-[14px] lg:text-[15px] 2xl:text-base whitespace-nowrap py-4 focus:outline-none">
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
                    className="text-[#334155] font-semibold hover:text-primary transition-colors text-[14px] lg:text-[15px] 2xl:text-base whitespace-nowrap py-4"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-2 lg:space-x-4 shrink-0">
            <a href="#packages" className="bg-orange-500 text-white px-3 py-1.5 lg:px-5 lg:py-2 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg text-xs lg:text-sm whitespace-nowrap">
              Health Packages
            </a>
            <a href="#appointment" className="bg-primary text-white px-3 py-1.5 lg:px-5 lg:py-2 rounded-full font-medium hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg text-xs lg:text-sm whitespace-nowrap">
              Book Appointment
            </a>
            <a href="tel:+917796655655" className="flex items-center gap-1.5 lg:gap-2 text-primary border border-primary px-3 py-1.5 lg:px-5 lg:py-2 rounded-full font-medium hover:bg-primary/5 transition-colors text-xs lg:text-sm whitespace-nowrap">
              <FaPhoneAlt size={12} className="lg:w-3.5 lg:h-3.5" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-gray-700 text-2xl focus:outline-none shrink-0 ml-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0.5 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="xl:hidden fixed top-0 right-0 h-[100dvh] w-[85%] max-w-[320px] bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="font-extrabold text-xl text-primary">Menu</span>
              <button
                className="text-gray-400 hover:text-primary transition-colors focus:outline-none p-2 -mr-2 rounded-full hover:bg-primary/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaTimes size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
              {navItems.map((item, index) => (
                <React.Fragment key={index}>
                  {item.dropdown ? (
                    <div className="flex flex-col space-y-1 mb-2">
                      <div className="text-gray-400 font-bold text-xs uppercase tracking-widest pt-2 pb-2 border-b border-gray-50 mb-1">
                        {item.name}
                      </div>
                      {item.dropdown.map((sub, subIdx) => (
                        <a
                          key={subIdx}
                          href={sub.path}
                          className="text-gray-700 font-semibold hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-xl transition-all text-base"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={item.path}
                      className="block text-gray-800 font-bold hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-xl transition-all text-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50/50 space-y-3">
              <a href="tel:+917796655655" className="flex items-center justify-center gap-2 text-primary border-2 border-primary/20 bg-white px-4 py-3.5 rounded-xl font-bold hover:bg-primary/5 transition-colors text-base shadow-sm">
                <FaPhoneAlt size={16} />
                <span>Call Now</span>
              </a>
              <a href="#appointment" className="flex justify-center bg-gradient-to-r from-primary to-accent text-white px-4 py-3.5 rounded-xl font-bold shadow-md hover:shadow-lg text-base transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
