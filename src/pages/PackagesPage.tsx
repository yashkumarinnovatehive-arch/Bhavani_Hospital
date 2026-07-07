import React, { useEffect } from 'react';
import Packages from '../components/Packages';

const PackagesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 lg:pt-44 min-h-screen bg-gray-50">
      <Packages />
    </div>
  );
};

export default PackagesPage;
