// Cart.js

import{ useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  
  // Function to add an item to the cart
  const addToCart = (itemName, itemPrice) => {
    const newItem = { name: itemName, price: itemPrice };
    setCartItems([...cartItems, newItem]);
  };

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <span className="item-name">{item.name}</span>
              <span className="item-price">${item.price}</span>
            </li>
          ))}
        </ul>
      )}
      <p className="total">Total: ${calculateTotal()}</p>
      <button className="checkout-button">Checkout</button>
      {/* Example Usage: */}
      {/* <button onClick={() => addToCart("Item Name", 10)}>Add Item</button> */}
    </div>
  );
};

export default Cart;
