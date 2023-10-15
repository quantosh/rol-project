import { useNavigate } from "react-router-dom";
import { auth } from '../main'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/registerUser.css';

function RegisterUser() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(_ => {
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        switch (errorCode) {
          case 'auth/email-already-in-use':
            toast.error('Email already in use');
            break;
          case 'auth/weak-password':
            toast.error('Password should be at least 6 characters');
            break;
          default:
            toast.error(errorMessage);
            console.log(errorMessage);
        }
      });
};

return (
  <div className="container-register">
    <div className="register-box">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required />

        <input type="submit" className="register-box-register-button" value="Register" />
      </form>
    </div>
    <ToastContainer />
  </div>
);
}

export default RegisterUser;
