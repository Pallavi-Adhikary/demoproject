import React, { useState } from 'react';
import GettingStarted from './components/GettingStarted';
import Signup from './components/Signup';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Product from './components/Product';

function App() {
  const [page, setPage] = useState('gettingStarted');
  const [user, setUser] = useState(null);

  const handleSignup = (userData) => {
    setUser(userData);
    setPage('login');
  };

  const handleLogin = (username) => {
    setUser({ ...user, username });
    setPage('welcome');
  };

  const handleLogout = () => {
    setUser(null);
    setPage('gettingStarted');
  };

  return (
    <div>
      {page === 'gettingStarted' && <GettingStarted onGetStarted={() => setPage('signup')} />}
      {page === 'signup' && <Signup onSignup={handleSignup} />}
      {page === 'login' && <Login onLogin={handleLogin} />}
      {page === 'welcome' && <Welcome username={user.username} onGoToProducts={() => setPage('product')} onLogout={handleLogout} />}
      {page === 'product' && <Product username={user.username} />}
    </div>
  );
}

export default App;