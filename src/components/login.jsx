import React from 'react';
import '../styles/login.css';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your authentication logic here.
      // If authentication is successful:
      navigate("/dashboard");
    };

  return (
    <div className="container">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <input type="submit" value="Login" />
        </form>
        <button className="register-button">Register</button>
      </div>
    </div>
  );
}

export default Login;
