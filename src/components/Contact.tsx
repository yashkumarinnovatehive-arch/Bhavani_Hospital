import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-accent font-semibold tracking-wider uppercase mb-2">Contact Us</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600">We are here to help you. Reach out to us for appointments, emergencies, or any queries.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Info Cards */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Hospital Address</h4>
                <p className="text-sm text-gray-600">Bhavani Hospital, Near Bharat Petroleum, MIT Corner Pune Solapur Highway, Loni Kalbhor, Pune - 412201, Maharashtra</p>
                <a href="#" className="inline-block mt-2 text-xs font-semibold text-primary hover:underline">Get Directions</a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Phone Number</h4>
                <p className="text-sm text-gray-600">Reception: +91 7796 655 655</p>
                <p className="text-sm text-red-500 font-semibold mt-1">Emergency: 1066</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">
                <FaClock size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Working Hours</h4>
                <p className="text-sm text-gray-600">Mon - Sat: 10:00 AM - 9:00 PM</p>
                <p className="text-sm text-gray-600 mt-1">Emergency: 24/7 Open</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="tel:+917796655655" className="flex-1 bg-primary text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-primary-dark transition-colors">
                <FaPhoneAlt /> Call
              </a>
              <a href="https://wa.me/917796655655" className="flex-1 bg-green-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-green-600 transition-colors">
                <FaWhatsapp size={18} /> WhatsApp
              </a>
            </div>

          </div>

          {/* Map */}
          <div className="w-full lg:w-2/3 h-96 lg:h-auto rounded-2xl overflow-hidden shadow-md">
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
