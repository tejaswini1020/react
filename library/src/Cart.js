import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart({ cart, removeFromCart }) {
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Oops! Your cart is empty 😢</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <p className="cart-name">{item.name}</p>
              <p className="cart-price">{item.price}</p>
              <button className="remove-button" onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Buttons Section */}
      <div className="button-container">
        <button className="back-button" onClick={() => navigate("/products")}>
          Back to Products
        </button>

        {cart.length > 0 && (
          <button className="payment-button" onClick={() => navigate("/payment")}>
             Proceed to Payment
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
