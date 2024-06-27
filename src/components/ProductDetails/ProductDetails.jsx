import React from 'react';

const ProductDetails = ({ product }) => {
    if (!product) return null; // Handle case where product is not selected yet
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{product.name}</div>
                    <p className="text-gray-700 text-base">{product.description}</p>
                </div>
                <div className="px-6 py-4">
                    <div className="flex items-center mb-2">
                        <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: product.color }}></div>
                        <span className="text-gray-700">Color: {product.color}</span>
                    </div>
                    <div className="text-gray-700">Season: {product.season}</div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;




