// import React, { useState } from 'react';
// import AddProductModal from '../AddProductModal/AddProductModal';


// const Navbar = ({ products, setFilteredProducts }) => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     // State for new product form
//    const [newProduct, setNewProduct] = useState({ name: '', description: '' , color: '', season:''});

//     // Function to handle search input change
//     const handleSearchInputChange = (event) => {
//         const query = event.target.value;
//         setSearchQuery(query);
//         filterProducts(query);
//     };

//     // Function to filter products based on search query
//     const filterProducts = (query) => {
//         if (!query.trim()) {
//             setFilteredProducts(products); // Reset to original products if query is empty
//             return;
//         }

//         const filtered = products.filter((product) =>
//             product.name.toLowerCase().includes(query.toLowerCase())
//         );
//         setFilteredProducts(filtered);
//     };

//     // Function to handle modal open
//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     // Function to handle modal close
//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     // Function to handle adding new product
//     const handleAddProduct = (product) => {
//         const newProducts = [{ id: products.length + 1, ...product },...products];
//         setFilteredProducts(newProducts);
//     };

//     return (
//         <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6 " >
//             <div className="flex items-center flex-shrink-0 text-white mr-6">

//                 <img className="rounded-full w-12 h-12 " src="https://marketplace.canva.com/EAFvDRwEHHg/1/0/1600w/canva-colorful-abstract-online-shop-free-logo-cpI8ixEpis8.jpg" alt="" />
//             </div>

//             <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
//                 <div className="text-sm lg:flex-grow">
//                     <a href="home" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
//                         Home
//                     </a>
//                     <a href="about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
//                         About
//                     </a>
//                     <a href="contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
//                         ContactUs
//                     </a>
//                 </div>

//                 <div className="relative">
//                     <input
//                         type="text"
//                         value={searchQuery}
//                         onChange={handleSearchInputChange}
//                         placeholder="Search products..."
//                         className="bg-gray-800 focus:bg-yellow focus:outline-none text-white placeholder-gray-500 px-3 py-2 rounded-md w-64 mr-4"
//                     />
//                     <button
//                         className="absolute right-0 top-0 mt-3 mr-4 text-white hover:text-gray-300 mr-4"
//                         onClick={() => filterProducts(searchQuery)}
//                     >
//                         Search
//                     </button>
//                 </div>

//                 <div>
//                     <button
//                         onClick={openModal}
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                     >
//                         Add
//                     </button>
//                 </div>
//             </div>

//             <AddProductModal
//                 isOpen={isModalOpen}
//                 onClose={closeModal}
//                 onAddProduct={handleAddProduct}
//             />

//         </nav>
//     );
// };

// export default Navbar;



// import React, { useState } from 'react';


// const Navbar = ({ setFilteredProducts }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   // Function to handle search input change
//   const handleSearchInputChange = (event) => {
//     const query = event.target.value;
//     setSearchQuery(query);
//     filterProducts(query);
//   };

//   // Function to filter products based on search query
//   const filterProducts = (query) => {
//     if (!query.trim()) {
//       setFilteredProducts((prevProducts) => [...prevProducts]); // Reset to original products if query is empty
//       return;
//     }

//     const filtered = products.filter((product) =>
//       product.name.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   };

//   return (
//     <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
//       <div className="flex items-center flex-shrink-0 text-white mr-6">

//         <img className="rounded-full w-12 h-12 " src="https://marketplace.canva.com/EAFvDRwEHHg/1/0/1600w/canva-colorful-abstract-online-shop-free-logo-cpI8ixEpis8.jpg" alt="" />
//       </div>


//     </nav>
//   );

// };

// export default Navbar;



// import React, { useState } from 'react';
// import AddProductModal from '../AddProductModal/AddProductModal';

// const Navbar = ({ products, setFilteredProducts }) => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [newProduct, setNewProduct] = useState({ name: '', description: '' });

//     const handleSearchInputChange = (event) => {
//         const query = event.target.value;
//         setSearchQuery(query);
//         setFilteredProducts(
//             products.filter((product) =>
//                 product.name.toLowerCase().includes(query.toLowerCase())
//             )
//         );
//     };

//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     const handleAddProduct = () => {
//         const updatedProducts = [...products, { id: products.length + 1, ...newProduct }];
//         setFilteredProducts(updatedProducts);
//         setIsModalOpen(false); // Close modal after adding product
//         setNewProduct({ name: '', description: '' }); // Clear new product state
//     };

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setNewProduct({ ...newProduct, [name]: value });
//     };

//     return (
//         <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
//             {/* Your existing navbar content */}
//             <div className="relative">
//                 <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={handleSearchInputChange}
//                     placeholder="Search products..."
//                     className="bg-gray-800 focus:bg-yellow focus:outline-none text-white placeholder-gray-500 px-3 py-2 rounded-md w-64 mr-4"
//                 />
//                 <button
//                     className="absolute right-0 top-0 mt-3 mr-4 text-white hover:text-gray-300"
//                     onClick={() => setFilteredProducts(
//                         products.filter((product) =>
//                             product.name.toLowerCase().includes(searchQuery.toLowerCase())
//                         )
//                     )}
//                 >
//                     Search
//                 </button>
//             </div>

//             <div>
//                 <button
//                     onClick={openModal}
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                     Add
//                 </button>
//             </div>

//             <AddProductModal
//                 isOpen={isModalOpen}
//                 onClose={closeModal}
//                 onAddProduct={handleAddProduct}
//                 newProduct={newProduct}
//                 onInputChange={handleInputChange}
//             />
//         </nav>
//     );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import AddProductModal from '../AddProductModal/AddProductModal';

// const Navbar = ({ products, setFilteredProducts }) => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     // State for sorting
//     const [sortOption, setSortOption] = useState('');

//     // Function to handle search input change
//     const handleSearchInputChange = (event) => {
//         const query = event.target.value;
//         setSearchQuery(query);
//         filterProducts(query);
//     };

//     // Function to handle sorting
//     const handleSortChange = (event) => {
//         const option = event.target.value;
//         setSortOption(option);
//         sortProducts(option);
//     };

//     // Function to filter products based on search query
//     const filterProducts = (query) => {
//         if (!query.trim()) {
//             setFilteredProducts(products); // Reset to original products if query is empty
//             return;
//         }

//         const filtered = products.filter((product) =>
//             product.name.toLowerCase().includes(query.toLowerCase())
//         );
//         setFilteredProducts(filtered);
//     };

//     // Function to sort products based on selected option
//     const sortProducts = (option) => {
//         let sortedProducts = [...products];
//         if (option === 'sortByName') {
//             sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
//         }
//         setFilteredProducts(sortedProducts);
//     };

//     // Function to handle modal open
//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     // Function to handle modal close
//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     // Function to handle adding new product
//     const handleAddProduct = (product) => {
//         const newProducts = [{ id: products.length + 1, ...product }, ...products];
//         setFilteredProducts(newProducts);
//     };

//     return (
//         <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
//             <div className="flex items-center flex-shrink-0 text-white mr-6">
//                 <img className="rounded-full w-12 h-12 " src="https://marketplace.canva.com/EAFvDRwEHHg/1/0/1600w/canva-colorful-abstract-online-shop-free-logo-cpI8ixEpis8.jpg" alt="" />
//             </div>

//             <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
//                 <div className="text-sm lg:flex-grow">
//                     <a href="home" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
//                         Home
//                     </a>
//                     <a href="about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
//                         About
//                     </a>
//                     <a href="contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
//                         ContactUs
//                     </a>
//                 </div>

//                 <div className="relative">
//                     <input
//                         type="text"
//                         value={searchQuery}
//                         onChange={handleSearchInputChange}
//                         placeholder="Search products..."
//                         className="bg-gray-800 focus:bg-yellow focus:outline-none text-white placeholder-gray-500 px-3 py-2 rounded-md w-64 mr-4"
//                     />
//                     <button
//                         className="absolute right-0 top-0 mt-3 mr-4 text-white hover:text-gray-300"
//                         onClick={() => filterProducts(searchQuery)}
//                     >
//                         Search
//                     </button>
//                 </div>

//                 <div className="mr-4">
//                     <select
//                         value={sortOption}
//                         onChange={handleSortChange}
//                         className="bg-gray-800 focus:bg-yellow focus:outline-none text-white px-3 py-2 rounded-md"
//                     >
//                         <option value="">Sort By</option>
//                         <option value="sortByName">Name</option>

//                         {/* Add more sorting options if needed */}
//                     </select>
//                 </div>

//                 <div>
//                     <button
//                         onClick={openModal}
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                     >
//                         Add
//                     </button>
//                 </div>
//             </div>

//             <AddProductModal
//                 isOpen={isModalOpen}
//                 onClose={closeModal}
//                 onAddProduct={handleAddProduct}
//             />
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState } from 'react';
import AddProductModal from '../AddProductModal/AddProductModal';

const Navbar = ({ products, setFilteredProducts }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State for sorting
    const [sortOption, setSortOption] = useState('');

    // Function to handle search input change
    const handleSearchInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        filterProducts(query);
    };

    // Function to handle sorting
    const handleSortChange = (event) => {
        const option = event.target.value;
        setSortOption(option);
        sortProducts(option);
    };

    // Function to filter products based on search query
    const filterProducts = (query) => {
        if (!query.trim()) {
            setFilteredProducts(products); // Reset to original products if query is empty
            return;
        }

        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    // Function to sort products based on selected option
    const sortProducts = (option) => {
        let sortedProducts = [...products];
        switch (option) {
            case 'sortByName':
                sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'sortByColor':
                sortedProducts.sort((a, b) => a.color.localeCompare(b.color));
                break;
            case 'sortBySeason':
                sortedProducts.sort((a, b) => a.season.localeCompare(b.season));
                break;
            // Add more cases for other sorting options if needed
            default:
                break;
        }
        setFilteredProducts(sortedProducts);
    };

    // Function to handle modal open
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to handle modal close
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Function to handle adding new product
    const handleAddProduct = (product) => {
        const newProducts = [{ id: products.length + 1, ...product }, ...products];
        setFilteredProducts(newProducts);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img className="rounded-full w-12 h-12 " src="https://marketplace.canva.com/EAFvDRwEHHg/1/0/1600w/canva-colorful-abstract-online-shop-free-logo-cpI8ixEpis8.jpg" alt="" />
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="home" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                        Home
                    </a>
                    <a href="about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                        About
                    </a>
                    <a href="contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
                        ContactUs
                    </a>
                </div>

                <div className="relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        placeholder="Search products..."
                        className="bg-gray-800 focus:bg-yellow focus:outline-none text-white placeholder-gray-500 px-3 py-2 rounded-md w-64 mr-4"
                    />
                    <button
                        className="absolute right-0 top-0 mt-3 mr-4 text-white hover:text-gray-300"
                        onClick={() => filterProducts(searchQuery)}
                    >
                        Search
                    </button>
                </div>

                <div className="mr-4">
                    <select
                        value={sortOption}
                        onChange={handleSortChange}
                        className="bg-gray-800 focus:bg-yellow focus:outline-none text-white px-3 py-2 rounded-md"
                    >
                        <option value="">Sort By</option>
                        <option value="sortByName">Name</option>
                        <option value="sortByColor">Color</option>
                        <option value="sortBySeason">Season</option>
                        

                        {/* Add more sorting options if needed */}
                    </select>
                </div>

                

                <div>
                    <button
                        onClick={openModal}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Add
                    </button>
                </div>
            </div>

            <AddProductModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onAddProduct={handleAddProduct}
            />
        </nav>
    );
};

export default Navbar;
