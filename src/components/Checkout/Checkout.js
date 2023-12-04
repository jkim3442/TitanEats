import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    address: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const location = useLocation();
  const { order } = location.state;

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission if needed
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <h2>Total: {order && order.total}</h2>
      
      <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={state.firstName} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={state.lastName} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={state.address} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="state">State:</label>
            <input type="text" id="state" name="state" value={state.state} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="zipCode">Zip Code:</label>
            <input type="text" id="zipCode" name="zipCode" value={state.zipCode} onChange={handleInputChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber" value={state.cardNumber} onChange={handleInputChange} required />
          </div>

          <div className="form-group input-group">
            <label htmlFor="expirationDate">Expiration Date (MM/YY):</label>
            <input type="text" id="expirationDate" name="expirationDate" value={state.expirationDate} onChange={handleInputChange} required />

            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" value={state.cvv} onChange={handleInputChange} required />
          </div>

          <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default Checkout;
