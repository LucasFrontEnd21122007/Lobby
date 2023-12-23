// lobby.jsx

import React, { useState } from 'react';
import './lobby.css';

const Lobby = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
}
  const login = () => {
    // Simulando uma verificação de login simples
    if (username === 'user' && password === 'password') {
      setLoginMessage('Login successful!');
    } else {
      setLoginMessage('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="lobby-container">
      <h1>Welcome to the Lobby</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          t
  )