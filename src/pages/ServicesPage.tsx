import React, { useEffect } from 'react';
import Services from '../components/Services';
import Facilities from '../components/Facilities';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 lg:pt-44 pb-16 min-h-screen bg-slate-50">
      <Services />
      <Facilities />
    </div>
  );
};

export default ServicesPage;
