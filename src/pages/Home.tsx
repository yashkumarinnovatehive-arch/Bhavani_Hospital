import React from 'react';
import Hero from '../components/Hero';
import ManagementMessage from '../components/ManagementMessage';
import Doctors from '../components/Doctors';
import WhyChooseUs from '../components/WhyChooseUs';

import Gallery from '../components/Gallery';
import Appointment from '../components/Appointment';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <ManagementMessage />
      <Doctors />
      <WhyChooseUs />

      <Gallery />
      <Appointment />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
