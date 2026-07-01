import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: "1. What are the various services that Bhavani Hospital in Loni Kalbhor specialises in?",
    answer: "The various services that Bhavani Hospital specialises in are General Physician and many more."
  },
  {
    question: "2. Is Bhavani Hospital clean and hygienic?",
    answer: "Almost all hospitals maintain high-level cleanliness to keep patients safe from any infection. For more information on the cleanliness maintained at Bhavani Hospital, you can check the customer ratings and reviews or visit the hospital in person."
  },
  {
    question: "3. Do hospitals provide ambulance services?",
    answer: "Yes, most hospitals provide ambulance services for transporting patients to the hospital and back. However, it is recommended to check with Bhavani Hospital for further information on this."
  },
  {
    question: "4. Can I visit a patient any time of the day in a hospital?",
    answer: "No, there are fixed visiting hours at hospitals. You can contact the Bhavani Hospital for visiting hours."
  },
  {
    question: "5. How can I contact Bhavani Hospital in Loni Kalbhor, Pune?",
    answer: "You can contact Bhavani Hospital in Loni Kalbhor directly through the contact details available above for enquiries."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <button 
                className="w-full flex items-center justify-between p-5 text-left bg-white transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <span className="text-primary shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform">
                  {openIndex === index ? <FaMinus size={14} /> : <FaPlus size={14} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed bg-white border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
