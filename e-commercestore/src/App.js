import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./login";
import Product from "./product";
import Cart from "./cart";
import Payment from "./Payment";
import "./style.css";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cart, setCart] = useState([]); // Cart State

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route
                    path="/product"
                    element={isLoggedIn ? <Product setIsLoggedIn={setIsLoggedIn} cart={cart} setCart={setCart} /> : <Navigate to="/" />}
                />
                <Route
                    path="/cart"
                    element={isLoggedIn ? <Cart cart={cart} setCart={setCart} /> : <Navigate to="/" />}
                />
                <Route
                    path="/payment"
                    element={isLoggedIn ? <Payment cart={cart} setCart={setCart} /> : <Navigate to="/" />}
                />
            </Routes>
        </Router>
    );
}

export default App;
