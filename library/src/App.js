// src/App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import Login from "./Login";
import ProductCatalogue from "./ProductCatalogue";
import Cart from "./Cart";
import StartPage from "./StartPage";
import AdminLogin from "./AdminLogin";
import AdminPage from "./AdminPage";
import AdminProductManagement from "./AdminProductManagement";
import Payment from "./Payment"; // Import Payment component
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link> |  
          <Link to="/cart">Cart</Link> |  
          <Link to="/products">Products</Link> |  
          <Link to="/admin-login">Admin</Link>
        </nav>

        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductCatalogue addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/payment" element={<Payment cart={cart} setCart={setCart} />} /> {/* Fixed */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin-products" element={<AdminProductManagement />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
