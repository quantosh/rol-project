import { useNavigate } from "react-router-dom";
import { auth } from '../main'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(_ => {
        navigate("/lobbies");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        switch (errorCode) {
          case 'auth/invalid-email':
          case 'auth/invalid-login-credentials':
            toast.error('Invalid email or password');
            break;
          default:
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
    <section className="bg-blueGray-50">
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="flex items-center justify-center mb-2">
          <img src="src\assets\rl-temp-white.png" width="240px" alt="" />
        </div>
        <div className="card shadow-xl bg-slate-100">
          <div className="card-body">
            <h2 className="card-title font-press-start ">Login</h2>
            <form onSubmit={handleSubmit}>
              <label className="label font-press-start text-xs" htmlFor="email">Email</label>
              <input className="input input-bordered w-full max-w-xs" htmlFor="grid-password" type="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
              <label className="label font-press-start text-xs" htmlFor="password">Password</label>
              <input className="input input-bordered w-full max-w-xs" type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
              <div className="flex justify-between">
                <input type="submit" className="btn btn-primary mt-2" value="Login" />
                <button className="btn mt-2" onClick={handleRegisterButtonClick}>Register</button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
        <div className="flex items-center justify-center mt-2 gap-4">
          <a href="http://">q</a>
          <a href="http://">q</a>
          <a href="http://">q</a>
          <a href="http://">q</a>
        </div>
      </div>
    </section>
  );
}

export default Login;
