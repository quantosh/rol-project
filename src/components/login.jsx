import React from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/login.css';

function Login() {
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your authentication logic here.
      // If authentication is successful:
      navigate("/dashboard");
    };

    const handleRegisterButtonClick  = (e) => {
        e.preventDefault();
        navigate("/register");
      };

  return (
    <div className="container">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <input type="submit" class="login-box-login-button" value="Login" />
        </form>
        <button className="login-box-register-button" onClick={handleRegisterButtonClick}>Register</button>
      </div>
    </div>
  );
}

export default Login;
