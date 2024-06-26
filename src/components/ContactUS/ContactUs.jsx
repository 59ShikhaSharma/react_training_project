import React from 'react';
import Navbar from '../Navbar/Navbar';

const ContactUs = () => {
  return (
    <div className="container mx-auto mt-8">
      <Navbar/>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700">Get in touch with us via the contact form or details below.</p>
    </div>
  );
};

export default ContactUs;
