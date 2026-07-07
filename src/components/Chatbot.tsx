import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaUser, FaRegCommentDots } from 'react-icons/fa';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
}

const FAQS = [
  {
    id: 'q1',
    question: 'What are your OPD timings?',
    answer: 'Our OPD is open from 9:00 AM to 9:00 PM on weekdays, and 9:00 AM to 2:00 PM on Sundays.'
  },
  {
    id: 'q2',
    question: 'Do you have 24/7 emergency services?',
    answer: 'Yes, our emergency department and pharmacy are open 24/7.'
  },
  {
    id: 'q3',
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment by calling us at +91 8886-606060 or by clicking the "Book Appointment" button on the top right.'
  },
  {
    id: 'q4',
    question: 'Do you accept health insurance/TPA?',
    answer: 'Yes, we are empaneled with major health insurance companies and TPAs. Please contact our front desk for more details.'
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'welcome', type: 'bot', text: 'Hello! Welcome to Bhavani Hospital. How can I help you today? Please choose a question below:' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleQuestionClick = (faq: typeof FAQS[0]) => {
    // Add user question
    const userMsg: Message = { id: Date.now().toString() + 'u', type: 'user', text: faq.question };
    
    // Add bot answer immediately or with slight delay for realism
    const botMsg: Message = { id: Date.now().toString() + 'b', type: 'bot', text: faq.answer };
    
    setMessages(prev => [...prev, userMsg, botMsg]);
  };

  const handleReset = () => {
    setMessages([
      { id: 'welcome', type: 'bot', text: 'Hello! Welcome to Bhavani Hospital. How can I help you today? Please choose a question below:' }
    ]);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-[96px] right-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-blue-900/20 hover:scale-105 transition-all z-50 focus:outline-none border-2 border-[#0b2466]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Chatbot"
      >
        {isOpen ? <FaTimes size={24} className="text-[#0b2466]" /> : <img src="/Logo_transparent.png" alt="Chatbot Logo" className="w-11 h-11 object-contain" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-[176px] right-6 w-[340px] max-w-[calc(100vw-48px)] h-[500px] max-h-[60vh] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0b2466] to-blue-800 text-white p-4 flex justify-between items-center shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden p-1 shadow-sm">
                  <img src="/Logo_transparent.png" alt="Bot Avatar" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Bhavani AI Assistant</h3>
                  <p className="text-xs text-blue-100">Usually replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors focus:outline-none">
                <FaTimes />
              </button>
            </div>

            {/* Chat History */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-2 max-w-[85%] ${msg.type === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                  {/* Avatar */}
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 overflow-hidden shadow-sm ${msg.type === 'user' ? 'bg-[#c24f2b] text-white' : 'bg-white p-0.5'}`}>
                    {msg.type === 'user' ? <FaUser size={10} /> : <img src="/Logo_transparent.png" alt="Bot" className="w-full h-full object-contain" />}
                  </div>
                  
                  {/* Bubble */}
                  <div className={`p-3 rounded-2xl text-sm shadow-sm ${msg.type === 'user' ? 'bg-[#c24f2b] text-white rounded-tr-sm' : 'bg-white text-gray-700 border border-gray-100 rounded-tl-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Predefined Questions Area */}
            <div className="p-3 bg-white border-t border-gray-100">
              <p className="text-xs font-bold text-gray-400 uppercase mb-2 tracking-wider">Suggested Questions</p>
              <div className="flex flex-wrap gap-2">
                {FAQS.map(faq => (
                  <button
                    key={faq.id}
                    onClick={() => handleQuestionClick(faq)}
                    className="text-left text-xs bg-gray-100 hover:bg-[#0b2466] hover:text-white text-gray-700 px-3 py-1.5 rounded-full transition-colors border border-gray-200 hover:border-[#0b2466]"
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
              
              {messages.length > 1 && (
                <button
                  onClick={handleReset}
                  className="w-full mt-3 text-xs text-gray-500 hover:text-[#c24f2b] transition-colors font-medium"
                >
                  Clear Chat History
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
