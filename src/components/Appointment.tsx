import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCalendarCheck } from 'react-icons/fa';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment request:', formData);
    // In a real app, send data to backend
    alert('Appointment request submitted successfully!');
  };

  const handleWhatsApp = () => {
    const text = `Hello Bhavani Hospital, I would like to book an appointment.\nName: ${formData.name}\nPhone: ${formData.phone}\nDepartment: ${formData.department}\nPreferred Date: ${formData.date}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="appointment" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Left: Image/Info */}
          <div className="w-full lg:w-2/5 bg-primary relative p-10 flex flex-col justify-center text-white">
            <div className="absolute inset-0 bg-medical-pattern opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Book An Appointment</h3>
              <p className="text-gray-200 mb-8 leading-relaxed">
                Skip the waiting line by booking your appointment online. Our team will get back to you to confirm your slot.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <FaCalendarCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Easy Scheduling</h4>
                    <p className="text-sm text-gray-200">Choose your preferred time</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <FaWhatsapp size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">WhatsApp Booking</h4>
                    <p className="text-sm text-gray-200">Instant chat support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-3/5 p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Patient Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                  <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Years" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <select name="department" value={formData.department} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-white">
                    <option value="">Select Department</option>
                    <option value="General">General Physician</option>
                    <option value="Pediatrics">Pediatrics (Child Care)</option>
                    <option value="Ayurvedic">Ayurvedic</option>
                    <option value="Surgery">General Surgery</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                  <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                <textarea name="message" rows={3} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none" placeholder="Briefly describe your medical issue..."></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button type="submit" className="flex-1 bg-primary text-white px-6 py-3.5 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                  <FaCalendarCheck />
                  Book Appointment
                </button>
                <button type="button" onClick={handleWhatsApp} className="flex-1 bg-green-500 text-white px-6 py-3.5 rounded-lg font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30 flex items-center justify-center gap-2">
                  <FaWhatsapp size={20} />
                  WhatsApp Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
