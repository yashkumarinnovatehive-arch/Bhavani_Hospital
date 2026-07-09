import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaPhoneAlt, FaBars, FaTimes, FaChevronDown, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Facilities', path: '/services#facilities' },
    { name: 'Our Doctors', path: '/#doctors' },
    {
      name: 'Patient Guide',
      dropdown: [
        { name: 'Gallery', path: '/#gallery' },
        { name: 'Testimonials', path: '/#testimonials' },
        { name: 'Rights & Responsibilities', path: '/patient-rights' }
      ]
    },
    { name: 'Contact Us', path: '/#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      
      {/* Top Tier: Logo & Actions */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center py-3 lg:py-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50 group shrink-0">
            <img 
              src="/Logo_transparent.png" 
              alt="Bhavani Hospital Logo" 
              className="h-16 sm:h-20 lg:h-[96px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm" 
            />
          </Link>

          {/* Desktop Actions */}
          <div className="hidden lg:flex flex-col items-end gap-1.5">
            <div className="flex items-center gap-4">
              <HashLink 
                smooth
                to="/packages" 
                className="bg-[#c24f2b] text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-[#a64223] transition-colors shadow-sm"
              >
                Health Packages
              </HashLink>
              <HashLink 
                smooth
                to="/#appointment" 
                className="bg-[#0b2466] text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-[#071644] transition-colors shadow-sm"
              >
                Book an Appointment
              </HashLink>
              <a 
                href="mailto:bhavanihospital.lk@gmail.com" 
                className="flex items-center gap-2 text-gray-700 hover:text-[#0b2466] px-2 py-2 rounded text-sm font-bold transition-colors"
              >
                <FaEnvelope size={12} />
                <span>bhavanihospital.lk@gmail.com</span>
              </a>
              <a 
                href="tel:+917796655655" 
                className="flex items-center gap-2 text-[#0b2466] border-[1.5px] border-[#0b2466] px-5 py-2 rounded text-sm font-bold hover:bg-[#0b2466]/5 transition-colors"
              >
                <FaPhoneAlt size={12} />
                <span>+91 7796-655-655</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-700 text-2xl focus:outline-none shrink-0"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Bottom Tier: Navigation Links (Desktop) */}
      <div className="hidden lg:block border-t border-[#e5e5e5] bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-center gap-10">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="flex items-center gap-1.5 text-gray-600 font-bold hover:text-[#0b2466] transition-colors text-[14.5px] whitespace-nowrap py-3 focus:outline-none">
                      {item.name}
                      <FaChevronDown size={10} className="text-gray-400 group-hover:text-[#0b2466] transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-[100%] left-0 w-48 bg-white rounded-b-md shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="py-2">
                        {item.dropdown.map((sub, subIdx) => (
                          <HashLink
                            smooth
                            key={subIdx}
                            to={sub.path}
                            className="block px-4 py-2.5 text-[14px] font-medium text-gray-600 hover:bg-gray-50 hover:text-[#0b2466] transition-colors"
                          >
                            {sub.name}
                          </HashLink>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <HashLink
                    smooth
                    to={item.path}
                    className="text-gray-600 font-bold hover:text-[#0b2466] transition-colors text-[14.5px] whitespace-nowrap py-3 block"
                  >
                    {item.name}
                  </HashLink>
                )}
              </div>
            ))}
          </div>
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
            className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
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
            className="lg:hidden fixed top-0 right-0 h-[100dvh] w-[85%] max-w-[320px] bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <img src="/Logo_transparent.png" alt="Bhavani Hospital Logo" className="h-14 object-contain" />
              <button
                className="text-gray-400 hover:text-[#0b2466] transition-colors focus:outline-none p-2 -mr-2 rounded-full hover:bg-gray-100"
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
                        <HashLink
                          smooth
                          key={subIdx}
                          to={sub.path}
                          className="text-gray-700 font-semibold hover:text-[#0b2466] hover:bg-gray-50 px-4 py-3 rounded-md transition-all text-sm block"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </HashLink>
                      ))}
                    </div>
                  ) : (
                    <HashLink
                      smooth
                      to={item.path}
                      className="block text-gray-800 font-bold hover:text-[#0b2466] hover:bg-gray-50 px-4 py-3 rounded-md transition-all text-[15px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </HashLink>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-3">
              <HashLink smooth to="/packages" className="flex justify-center bg-[#c24f2b] text-white px-4 py-3 rounded-md font-semibold text-sm transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                Health Packages
              </HashLink>
              <HashLink smooth to="/#appointment" className="flex justify-center bg-[#0b2466] text-white px-4 py-3 rounded-md font-semibold text-sm transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                Book Appointment
              </HashLink>
              <a href="tel:+917796655655" className="flex items-center justify-center gap-2 text-[#0b2466] border-2 border-[#0b2466]/20 bg-white px-4 py-3 rounded-md font-bold hover:bg-[#0b2466]/5 transition-colors text-sm">
                <FaPhoneAlt size={14} />
                <span>+91 7796-655-655</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
