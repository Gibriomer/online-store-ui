import React from 'react';
import './App.scss';
import Register from './Register';
import Header from './Header';
import Login from './Login';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Login />
        <Register />
      </div>
    </div>
  );
}

export default App;
