import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ setIsLoggedIn, cart, setCart }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate("/");
    };

    const addToCart = (dog) => {
        setCart([...cart, dog]);
    };

    return (
        <div className="product-container">
            <h2>PRODUCTS</h2>
            <ul className="product-list">
                <li className="product-item">
                    <img src="/images/poodle.jpeg" alt="Poodle" />
                    <p>Poodle - ₹40000</p>
                    <button onClick={() => addToCart({ name: "Poodle", price: 40000, image: "/images/poodle.jpeg" })}>Add to Cart</button>
                </li>
                <li className="product-item">
                    <img src="/images/Havanese.jpeg" alt="Havanese" />
                    <p>Havanese - ₹75000</p>
                    <button onClick={() => addToCart({ name: "Havanese", price: 75000, image: "/images/havanese.jpeg" })}>Add to Cart</button>
                </li>
                <li className="product-item">
                    <img src="/images/shih-tzu.jpeg" alt="Shih-Tzu" />
                    <p>Shih-Tzu - ₹25000</p>
                    <button onClick={() => addToCart({ name: "Shih-Tzu", price: 25000, image: "/images/shih-tzu.jpeg" })}>Add to Cart</button>
                </li>
                <li className="product-item">
                    <img src="/images/Chowchow.jpeg" alt="Chowchow" />
                    <p>Chowchow - ₹50000</p>
                    <button onClick={() => addToCart({ name: "Chowchow", price: 50000, image: "/images/Chowchow.jpeg" })}>Add to Cart</button>
                </li>
                <li className="product-item">
                    <img src="/images/Golden Retriever.jpeg" alt="Golden Retriever" />
                    <p>Golden Retriever - ₹30000</p>
                    <button onClick={() => addToCart({ name: "Golden Retriever", price: 30000, image: "/images/Golden Retriever.jpg" })}>Add to Cart</button>
                </li>
                <li className="product-item">
                    <img src="/images/German Shepherd.jpeg" alt="German Shepherd" />
                    <p>German Shepherd - ₹60000</p>
                    <button onClick={() => addToCart({ name: "German Shepherd", price: 60000, image: "/images/German Shepherd.jpeg" })}>Add to Cart</button>
                </li>
                <li className="product-item">
                    <img src="/images/Bulldog.jpeg" alt="Bulldog" />
                    <p>Bulldog - ₹70000</p>
                    <button onClick={() => addToCart({ name: "Bulldog", price: 70000, image: "/images/Bulldog.jpeg" })}>Add to Cart</button>
                </li>
            </ul>
            <div className="button-container">
                <button className="cart-btn" onClick={() => navigate("/cart")}>
                    Go to Cart <span className="cart-badge">{cart.length}</span>
                </button>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default Product;
