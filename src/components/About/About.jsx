import React from 'react';
import Navbar from '../Navbar/Navbar';

const About = () => {
  return (
    <div className="container mx-auto mt-8">
      <Navbar/>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700">Learn more about our company and mission.</p>
    </div>
  );
};

export default About;
