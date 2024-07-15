import React from 'react';
import './style.css';

function Welcome({ username, onGoToProducts, onLogout }) {
  return (
    <div className="container">
      <h1>Welcome, {username}!</h1>
      <button onClick={onGoToProducts}>Go to Products</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Welcome;
