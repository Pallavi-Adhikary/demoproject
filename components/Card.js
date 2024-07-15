import React from 'react';
import './style.css';

const Card = ({ title, price, discount, description }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Price: {price}</p>
      <p>Discount: {discount}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Card;
