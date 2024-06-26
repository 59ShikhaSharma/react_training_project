import React from 'react';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <div className="container mx-auto mt-8">
      <Navbar/>
      <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg text-gray-700">This is the content of the home page.</p>

   
    </div>
  );
};

export default Home;
