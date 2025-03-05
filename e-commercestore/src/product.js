import React from "react";

function Product() {
    return (
        <div className="container">
            <h2>PRODUCTS</h2>
            <ul>
                <li>
                    <img src="/images/poodle.jpeg" alt = "poodle Dog" width="100"/>
                    <p>Poodle - 40k</p>
                </li>
                <li>
                    <img src="/images/Havanese.jpeg" alt="Havanese Dog" width="100"/>
                    <p>Havanese - 75k</p>
                </li>
                <li>
                    <img src="/images/shih-tzu.jpeg" alt ="shih-tzu Dog" width="100"/>
                    <p>Shih-tzu - 25k</p>
                </li>
            </ul>
        </div>
    );
}

export default Product;
