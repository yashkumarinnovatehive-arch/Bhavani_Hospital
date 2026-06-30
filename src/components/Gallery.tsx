import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from 'framer-motion';
import { FaExpandArrowsAlt } from 'react-icons/fa';

const galleryImages = [
  { id: 1, category: 'Hospital Exterior', src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Hospital Exterior' },
  { id: 2, category: 'Reception', src: 'https://img.magnific.com/free-photo/no-people-empty-waiting-area-clinical-center-with-reception-desk-waiting-room-with-seats-start-checkup-visit-appointment-medical-examination-with-doctor-hospital-lobby_482257-46239.jpg?semt=ais_hybrid&w=740&q=80', alt: 'Reception Area' },
  { id: 3, category: 'Doctor Cabin', src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Doctor Cabin' },
  { id: 4, category: 'OPD', src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'OPD Section' },
  { id: 5, category: 'Medical Equipment', src: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Advanced Equipment' },
  { id: 6, category: 'Beds', src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Patient Beds' },
  { id: 7, category: 'Clinic Interior', src: '/Clicknik.png', alt: 'Clinic Interior' },
  { id: 8, category: 'Facilities', src: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Laboratory' },
];

const categories = ['All', 'Hospital Exterior', 'Reception', 'Doctor Cabin', 'OPD', 'Facilities', 'Medical Equipment', 'Beds', 'Clinic Interior'];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [index, setIndex] = useState(-1);

  const filteredImages = activeTab === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  const slides = filteredImages.map(img => ({ src: img.src }));

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-accent font-semibold tracking-wider uppercase mb-2">Our Gallery</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">A Glimpse Inside Bhavani Hospital</h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setIndex(i)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <FaExpandArrowsAlt size={20} />
                </div>
                <span className="font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={slides}
        />
      </div>
    </section>
  );
};

export default Gallery;
