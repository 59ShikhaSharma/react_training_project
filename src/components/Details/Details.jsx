// import React from 'react';

// const Details = ({ products }) => {


//   return (
//     <div className="overflow-hidden border border-gray-200 rounded-lg ">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Product ID
//             </th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Product Name
//             </th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Description
//             </th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.id}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.description}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Details;

// import React, { useState, useEffect } from 'react';
// import Pagination from '../Pagination/Pagination';

// const Details = () => {
//   const initialProducts = [
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

//   const [products, setProducts] = useState(initialProducts);
//   const [filteredProducts, setFilteredProducts] = useState(products);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage] = useState(4); // Number of products per page

//   // Calculate total pages
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//   // Logic to paginate products
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//   // Function to filter products based on search query
//   const filterProducts = (query) => {
//     if (!query.trim()) {
//       setFilteredProducts(products); // Reset to original products if query is empty
//       return;
//     }

//     const filtered = products.filter((product) =>
//       product.name.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   };

//   // Reset current page when filtered products change
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [filteredProducts]);

//   return (
//     <div>


//       <div className="overflow-hidden border border-gray-200 rounded-lg">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Product ID
//               </th>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Product Name
//               </th>
//               <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Description
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {currentProducts.map((product) => (
//               <tr key={product.id}>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.id}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.description}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
//     </div>
//   );
// };

// export default Details;


import React from 'react';

const Details = ({ products, onDelete }) => {

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div className="overflow-hidden border border-gray-200 rounded-lg ">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product ID
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Color
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Season
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.color}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.season}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-red-600 hover:text-red-900 px-6 py-3 text-left text-xs font-medium"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
