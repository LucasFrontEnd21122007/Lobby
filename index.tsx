// lobby.tsx

import React, { useState } from 'react';
import './index.css';

const Lobby: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginMessage, setLoginMessage] = useState<string>('');

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
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="button" onClick={login}>
          Login
        </button>
      </form>
      <p className={loginMessage.includes('successful') ? 'success-message' : 'error-message'}>
        {loginMessage}
      </p>
    </div>
  );
};

export default Lobby;
