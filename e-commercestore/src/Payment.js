import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment({ cart, setCart }) {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const [expiry, setExpiry] = useState("");

    const handlePayment = () => {
        if (!name || !cardNumber || !cvv || !expiry) {
            alert("Please fill all the payment details.");
            return;
        }
        alert("Payment Successful! Thank you for your purchase.");
        setCart([]); // Clear Cart
        navigate("/product"); // Redirect to Products Page
    };

    return (
        <div className="container">
            <h2>Payment Page</h2>
            <p>Total Amount: ₹{cart.reduce((sum, item) => sum + item.price, 0)}</p>
            
            <input type="text" placeholder="Cardholder Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Card Number" maxLength="16" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            <input type="text" placeholder="CVV" maxLength="3" value={cvv} onChange={(e) => setCvv(e.target.value)} />
            <input type="text" placeholder="Expiry (MM/YY)" value={expiry} onChange={(e) => setExpiry(e.target.value)} />

            <button onClick={handlePayment}>Pay Now</button>
            <button onClick={() => navigate("/cart")}>Back to Cart</button>
        </div>
    );
}

export default Payment;
