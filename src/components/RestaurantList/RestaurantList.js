import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import "./RestaurantList.css";
import "../ShoppingCart/ShoppingCart.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";


function RestaurantList(props) {
  const [cart, setCart] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  const navigate = useNavigate();

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const checkout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items to your cart.');
      return;
    }

    const confirmation = window.confirm('Confirm your order?');
    if (confirmation) {
      const orderId = Math.floor(Math.random() * 1000); // Simulate order ID
      const orderDate = new Date().toLocaleString();
      const orderTotal = cart.reduce((total, item) => total + item.price, 0);

      const order = {
        id: orderId,
        date: orderDate,
        total: orderTotal,
      };

      navigate('/checkout',{state:{order}});


      setCart([]);
      setOrderHistory([...orderHistory]);

    }
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <section className="restaurant-list">
        <h2>Choose a Restaurant</h2>
        <ul>
          {/* Restaurant items with Add to Cart button */}
          <li>
            <img src="restaurant1.jpg" alt="Restaurant 1" />
            <h3>Restaurant 1</h3>
            <p>Italian Cuisine</p>
            <button onClick={() => addToCart({ item: 'Pizza', price: 10.99 })}>
              Add to Cart
            </button>
          </li>
          {/* Add more restaurants as needed */}
        </ul>
      </section>
      <ShoppingCart cart={cart} checkout={checkout} removeFromCart={removeFromCart}/>
    </div>
  );
}

export default RestaurantList
;