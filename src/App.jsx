// import React, { useState } from 'react';
// import Navbar from './components/Navbar/Navbar'
// import Details from './components/Details/Details';

// const App = () => {
//   const products = [
//     { id: 1, name: 'Mango', description: 'Mangos are one of the most popular fruits, King of Fruits' },
//     { id: 2, name: 'Apple', description: 'Apple is a sweet and delicious fruit that is very healthy.' },
//     { id: 3, name: 'Banana', description: 'A banana is a curved, yellow fruit with a thick skin .' },
//     { id: 4, name: 'Grapes', description: 'A grape is a fruit, botanically a berry, of the deciduous woody' },
//     { id: 5, name: 'Papaya', description: 'Description of Product E' },
//     { id: 6, name: 'Orange', description: 'Description of Product F' },
//     { id: 7, name: 'Water Melon', description: 'Description of Product G' },
//     { id: 8, name: 'Musk Melon', description: 'Description of Product H' },
//     { id: 9, name: 'Litchi', description: 'Description of Product I' },
//     { id: 10, name: 'Pomegranate', description: 'Description of Product J' },
//     { id: 11, name: 'Guava', description: 'Description of Product K' },
//     { id: 12, name: 'Black Berry', description: 'Description of Product K' },

//   ];

//   const [filteredProducts, setFilteredProducts] = useState(products);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Navbar products={products} setFilteredProducts={setFilteredProducts} />
//       <h1 className="text-2xl font-bold mb-4">Fruits List</h1>
//       <Details products={filteredProducts} />
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar/Navbar';
// import Details from './components/Details/Details';
// import Pagination from  './components/Pagination/Pagination'

// const App = () => {
//   const products = [
//     { id: 1, name: 'Mango', description: 'Mangos are one of the most popular fruits, King of Fruits' },
//     { id: 2, name: 'Apple', description: 'Apple is a sweet and delicious fruit that is very healthy.' },
//     { id: 3, name: 'Banana', description: 'A banana is a curved, yellow fruit with a thick skin .' },
//     { id: 4, name: 'Grapes', description: 'A grape is a fruit, botanically a berry, of the deciduous woody' },
//     { id: 5, name: 'Papaya', description: 'Description of Product E' },
//     { id: 6, name: 'Orange', description: 'Description of Product F' },
//     { id: 7, name: 'Water Melon', description: 'Description of Product G' },
//     { id: 8, name: 'Musk Melon', description: 'Description of Product H' },
//     { id: 9, name: 'Litchi', description: 'Description of Product I' },
//     { id: 10, name: 'Pomegranate', description: 'Description of Product J' },
//     { id: 11, name: 'Guava', description: 'Description of Product K' },
//     { id: 12, name: 'Black Berry', description: 'Description of Product L' },
//   ];

//   const [filteredProducts, setFilteredProducts] = useState(products);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage] = useState(4); // Number of products per page

//   // Calculate total pages
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//   // Logic to paginate products
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//   // Reset current page when filtered products change
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [filteredProducts]);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Navbar products={products} setFilteredProducts={setFilteredProducts} />
      
//       <h1 className="text-2xl font-bold mb-4">Fruits List</h1>
//       <Details products={currentProducts} />

//       {/* Render Pagination Component */}
//       <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
//     </div>
//   );
// };

// export default App;


// import React from 'react';
// import Navbar from './components/Navbar/Navbar';
// import Details from './components/Details/Details';


// const App = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Navbar />
//       <h1 className="text-2xl font-bold mb-4">Fruits List</h1>
//       <Details />

//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Details from './components/Details/Details';
import Pagination from './components/Pagination/Pagination';
import ProductDetails from './components/ProductDetails/ProductDetails';


const App = () => {
  const initialProducts = [
    { id: 1, name: 'Mango', description: 'Mangos are one of the most popular fruits, King of Fruits .', color: 'Yellow', season: 'Summer' },
    { id: 2, name: 'Apple', description: 'Apple is a sweet and delicious fruit that is very healthy .', color: 'Red', season: 'All' },
    { id: 3, name: 'Banana', description: 'A banana is a curved, yellow fruit with a thick skin .', color: 'Yellow', season: 'All' },
    { id: 4, name: 'Grapes', description: 'A grape is a fruit, botanically a berry, of the deciduous woody .', color: 'Green', season: 'Summer' },
    { id: 5, name: 'Papaya', description: 'Papaya is high in fiber and water content rich fruit .', color: 'Yellow', season: 'Winter' },
    { id: 6, name: 'Orange', description: 'An orange, also called sweet orange from the bitter orange .', color: 'Orange', season: 'Summer' },
    { id: 7, name: 'Water Melon', description: 'Watermelon is grown in favorable climates temperate regions. ', color: 'Red', season: 'Summer' },
    { id: 8, name: 'Musk Melon', description: 'Muskmelon, also referred to as sweet melon, got its name . ', color: 'Yellow', season: 'Summer' },
    { id: 9, name: 'Litchi', description: 'A tall evergreen tree, it bears small fleshy sweet fruits .', color: 'Red', season: 'All' },
    { id: 10, name: 'Pomegranate', description: 'Pomegranates are round, red fruits and healthier to eat .', color: 'Red', season: 'All' },
    { id: 11, name: 'Guava', description: 'Guava is a common tropical fruit cultivated in tropical regions.', color: 'Green', season: 'Winter' },
    { id: 12, name: 'Black Berry', description: 'The blackberry is an edible fruit produced by many species .', color: 'Black', season: 'All' },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4); // Number of products per page
  
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Logic to paginate products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle deletion of a product
  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts); // Update filtered products as well
  };

  const handleProductClick = (id) => {
    const selected = products.find((product) => product.id === id);
    setSelectedProduct(selected);
  };

  // Reset current page when filtered products change
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProducts]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar products={products} setFilteredProducts={setFilteredProducts} />

      <h1 className="text-2xl font-bold mb-4">Fruits List</h1>
      <Details products={currentProducts} onDelete={handleDelete} onProductClick={handleProductClick}/>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      <ProductDetails product={selectedProduct} />
    </div>
    
  );
};

export default App;
