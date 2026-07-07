import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaCalendarCheck, FaHeartbeat, FaUserMd, FaHospital, FaSmile, FaStethoscope, FaSyringe, FaShieldAlt } from 'react-icons/fa';

/* ── Animated Counter Hook (fixed: NOT called inside .map) ── */
const useCounter = (end: number, duration = 1800) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic for smoother deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, end, duration]);

  return { count, ref };
};

/* ── Individual stat card so each has its own counter hook ── */
interface StatItem {
  icon: React.ElementType;
  end: number;
  suffix?: string;
  label: string;
}

const StatCard: React.FC<{ stat: StatItem; index: number }> = ({ stat, index }) => {
  const { count, ref } = useCounter(stat.end, 1800);
  return (
    <div
      ref={ref}
      className="stat-card bg-glass-card rounded-2xl p-6 text-center hover-glow hover:-translate-y-1 transition-all duration-300 group cursor-default border-t-[4px] border-t-[#0ea5e9]"
    >
      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary text-xl group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300 will-change-transform">
        <stat.icon />
      </div>
      <div className="text-3xl font-extrabold text-gray-900 tracking-tight tabular-nums">
        {count}{stat.suffix}
      </div>
      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
    </div>
  );
};

const stats: StatItem[] = [
  { icon: FaHospital, end: 6, suffix: '+', label: 'Years of Excellence' },
  { icon: FaSmile, end: 50, suffix: 'k+', label: 'Happy Patients' },
  { icon: FaUserMd, end: 4, label: 'Expert Doctors' },
  
];

const Hero = () => {
  /* Typing animation */
  const fullText = "Best of Care,";
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] pt-24 lg:pt-44 pb-6 flex items-center bg-hero-gradient overflow-hidden">

      {/* ── Animated Blobs (GPU-accelerated, will-change) ── */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-accent-light/60 to-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob-morph will-change-transform" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-br from-blue-100/60 to-primary-light/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob-morph animation-delay-2000 will-change-transform" />
      <div className="absolute -bottom-8 left-40 w-64 h-64 bg-gradient-to-br from-teal-50/50 to-accent-light/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob-morph animation-delay-4000 will-change-transform" />

      {/* ── Floating Medical Icons ── */}
      <FaStethoscope className="floating-icon text-primary text-7xl top-[15%] left-[8%] animate-float-slow" />
      <FaHeartbeat className="floating-icon text-accent text-6xl top-[60%] right-[5%] animate-float animation-delay-1000" />
      <FaSyringe className="floating-icon text-secondary text-5xl bottom-[20%] left-[15%] animate-float-reverse animation-delay-2000" />
      <FaShieldAlt className="floating-icon text-primary text-6xl top-[25%] right-[12%] animate-float-slow animation-delay-3000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 pt-0 lg:pt-2">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left Text Content ── */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-glass-card shadow-sm mb-8"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-sm font-bold text-primary tracking-wide">Caring for pune since 2021</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900 mb-6 tracking-tight"
            >
              {typedText}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-shift">Close to Home</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed"
            >
              Delivering excellence in healthcare with compassion and integrity, Bhavani Hospital is dedicated to providing comprehensive medical services, advanced diagnostics, and patient-centered care for every stage of life—all conveniently close to your home.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#appointment"
                className="btn-shimmer flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
              >
                <FaCalendarCheck />
                <span>Book Appointment</span>
              </a>
              <a
                href="tel:+917796655655"
                className="flex items-center justify-center gap-2 bg-white text-primary border-2 border-primary/20 px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm transform hover:-translate-y-1"
              >
                <FaPhoneAlt />
                <span>Call Now</span>
              </a>
            </motion.div>

            {/* ── Floating Badges ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3 mt-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-green-200 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold text-green-700">24/7 Emergency</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 shadow-sm">
                <FaShieldAlt className="text-primary text-xs" />
                <span className="text-xs font-bold text-primary">NABH Standards</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right Image Content ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mt-8 lg:mt-0 block"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/15 border-4 border-white aspect-[4/3] lg:aspect-auto animate-glow-pulse">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Modern Hospital Facility"
                className="w-full h-full lg:h-[500px] object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-4 -right-4 bg-glass p-4 rounded-2xl shadow-xl z-20 animate-float-slow hidden md:flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-sm shadow-lg">
                <FaSmile />
              </div>
              <div>
                <div className="text-lg font-extrabold text-gray-900">10k+</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Happy Patients</div>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* ── Stats Counter Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
