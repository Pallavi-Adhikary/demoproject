import React, { useState } from 'react';
import './style.css';

function Signup({ onSignup }) {
  const [details, setDetails] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(details);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <div className="input-group">
          <input type="email" placeholder="Email" onChange={(e) => setDetails({ ...details, email: e.target.value })} />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" onChange={(e) => setDetails({ ...details, password: e.target.value })} />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
