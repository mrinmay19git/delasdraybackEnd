
import React, { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace this with your actual login logic
    if (username === 'admin' && password === 'password') {
      navigate('/dashboard'); // Redirect to Dashboard on successful login
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="App">
      <header className="header">
        <img src="logo.png" alt="Logo" />
        <h1>Login Page</h1>
      </header>
      <main className="main">
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </main>
    </div>
  );
}

export default Login;
