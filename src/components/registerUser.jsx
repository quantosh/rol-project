import { useNavigate } from "react-router-dom";
import '../styles/registerUser.css';

function RegisterUser() {
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your registration logic here.
      // If registration is successful:
      navigate("/dashboard");
    };

  return (
    <div className="container-register">
      <div className="register-box">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          
          <input type="submit" className="register-box-register-button" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default RegisterUser;
