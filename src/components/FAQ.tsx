import React from 'react';

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
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Question</h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
