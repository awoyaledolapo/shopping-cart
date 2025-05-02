
import React from 'react';
import './Payment.css';

const Payment: React.FC = () => {
  return (
    <div className="payment-container">
      <h2>Card Details</h2>

      <label>Select Card Type</label>
      <div className="card-types">
        <div className="circle"></div>
        <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
        <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" />
        <img src="https://img.icons8.com/ios-filled/50/ffffff/bank-card-back-side.png" alt="Verve" />
      </div>

      <label>Card Number</label>
      <input type="text" className="input" placeholder="Card Number" />

      <div className="row">
        <div className="column">
          <label>Expiry Date</label>
          <input type="text" className="input" placeholder="MM / YY" />
        </div>
        <div className="column">
          <label>CVV</label>
          <input type="text" className="input" placeholder="CVV" />
        </div>
      </div>

      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Payment;
