import React, { useEffect } from 'react';
import About from '../components/About';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 lg:pt-44 min-h-screen">
      <About />
    </div>
  );
};

export default AboutPage;
