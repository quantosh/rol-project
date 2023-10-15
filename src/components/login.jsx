import { useNavigate } from "react-router-dom";
import { auth } from '../main'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(_ => {
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/invalid-email' || errorCode === 'auth/wrong-password') {
          toast.error('Invalid email or password');
        } else {
          toast.error(errorMessage);
          console.log(errorMessage);
        }
      });
  };

  const handleRegisterButtonClick = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <div className="container">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required />

          <input type="submit" className="login-box-login-button" value="Login" />
        </form>
        <button className="login-box-register-button" onClick={handleRegisterButtonClick}>Register</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
