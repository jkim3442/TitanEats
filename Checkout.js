import React, { Component } from 'react';
import './Checkout.css';

class Checkout extends Component {
  state = {
    firstName: '',
    lastName: '',
    address: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

   
  };

  render() {
    const { firstName, lastName, address, state, zipCode, cardNumber, expirationDate, cvv } = this.state;

    return (
      <div className="checkout">
        <h2>Checkout</h2>

        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={this.handleInputChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={lastName} onChange={this.handleInputChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={address} onChange={this.handleInputChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="state">State:</label>
            <input type="text" id="state" name="state" value={state} onChange={this.handleInputChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="zipCode">Zip Code:</label>
            <input type="text" id="zipCode" name="zipCode" value={zipCode} onChange={this.handleInputChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber" value={cardNumber} onChange={this.handleInputChange} required />
          </div>

          <div className="form-group input-group">
            <label htmlFor="expirationDate">Expiration Date (MM/YY):</label>
            <input type="text" id="expirationDate" name="expirationDate" value={expirationDate} onChange={this.handleInputChange} required />


        
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" value={cvv} onChange={this.handleInputChange} required />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Checkout;
