import React from 'react';
import './style.css';

function GettingStarted({ onGetStarted }) {
  return (
    <div className="container">
      <h1>Getting Started</h1>
      <button onClick={onGetStarted}>Get Started</button>
    </div>
  );
}

export default GettingStarted;
