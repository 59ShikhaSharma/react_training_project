import React, { useState } from 'react';

const UpdateProductModal = ({ isOpen, onClose, onUpdateProduct, product }) => {
    const [updatedProduct, setUpdatedProduct] = useState(product);

    // Function to handle changes in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct({ ...updatedProduct, [name]: value });
    };

    // Function to handle submission of updated product
    const handleSubmit = () => {
        onUpdateProduct(updatedProduct);
        onClose();
    };


    return (
        <div className={`fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
            <div className="modal-dialog bg-white rounded-lg w-1/3 p-4">
                <div className="modal-content">
                    <div className="modal-header flex justify-between items-center border-b pb-2 mb-4">
                        <h3 className="text-lg font-bold">Update Product</h3>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Name:</label>
                            <input type="text" name="name" value={updatedProduct.name} onChange={handleChange} className="form-input mt-1 block w-full" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Description:</label>
                            <textarea name="description" value={updatedProduct.description} onChange={handleChange} className="form-textarea mt-1 block w-full" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Color:</label>
                            <input type="text" name="color" value={updatedProduct.color} onChange={handleChange} className="form-input mt-1 block w-full" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Season:</label>
                            <input type="text" name="season" value={updatedProduct.season} onChange={handleChange} className="form-input mt-1 block w-full" />
                        </div>
                    </div>
                    <div className="modal-footer border-t pt-4 mt-4">
                        <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Update Product
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpdateProductModal;

