import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {
    const navigate = useNavigate();

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
    };

    return (
        <div className="container">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul className="cart-list">
                    {cart.length > 0 && (
                        <li className="cart-item">
                            <img src={cart[0].image} alt={cart[0].name} width="100" />
                            <p>{cart[0].name} - ₹{cart[0].price}</p>
                            <button onClick={() => removeFromCart(0)}>Remove</button>
                        </li>
                    )}
                    {cart.length > 1 && (
                        <li className="cart-item">
                            <img src={cart[1].image} alt={cart[1].name} width="100" />
                            <p>{cart[1].name} - ₹{cart[1].price}</p>
                            <button onClick={() => removeFromCart(1)}>Remove</button>
                        </li>
                    )}
                    {cart.length > 2 && (
                        <li className="cart-item">
                            <img src={cart[2].image} alt={cart[2].name} width="100" />
                            <p>{cart[2].name} - ₹{cart[2].price}</p>
                            <button onClick={() => removeFromCart(2)}>Remove</button>
                        </li>
                    )}
                </ul>
            )}
            <button onClick={() => navigate("/payment")}>Proceed to Payment</button>
            <button onClick={() => navigate("/product")}>Back to Products</button>
        </div>
    );
}

export default Cart;
