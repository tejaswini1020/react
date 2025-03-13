import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductCatalogue.css";

const AdminProductManagement = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products", error));
  }, []);

  const handleAddProduct = () => {
    const newProduct = {
      name: prompt("Enter product name:"),
      price: prompt("Enter product price:"),
      image: prompt("Enter product image URL:")
    };

    if (newProduct.name && newProduct.price && newProduct.image) {
      axios.post("http://localhost:5000/api/products", newProduct)
        .then(response => setProducts([...products, response.data]))
        .catch(error => console.error("Error adding product", error));
    }
  };

  const handleEditProduct = (id) => {
    const updatedProduct = {
      name: prompt("Update product name:"),
      price: prompt("Update product price:"),
      image: prompt("Update product image URL:")
    };

    axios.put(`http://localhost:5000/api/products/${id}`, updatedProduct)
      .then(response => {
        setProducts(products.map(product => (product._id === id ? response.data : product)));
      })
      .catch(error => console.error("Error updating product", error));
  };

  const handleDeleteProduct = (id) => {
    axios.delete(`http://localhost:5000/api/products/${id}`)
      .then(() => {
        setProducts(products.filter(product => product._id !== id));
      })
      .catch(error => console.error("Error deleting product", error));
  };

  return (
    <div className="product-container">
      <h2>Admin Books Management</h2>
      <button className="cart-button" onClick={handleAddProduct}>Add Books</button>

      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
            <button className="edit-button" onClick={() => handleEditProduct(product._id)}>Edit</button>
            <button className="delete-button" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
          </div>
        ))}
      </div>

      <button className="logout-button" onClick={() => navigate("/")}>Logout</button>
    </div>
  );
};

export default AdminProductManagement;
