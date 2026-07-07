import React, { useEffect } from 'react';
import Services from '../components/Services';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 lg:pt-44 min-h-screen">
      <Services />
    </div>
  );
};

export default ServicesPage;
