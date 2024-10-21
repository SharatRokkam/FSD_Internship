import React from "react";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      setErrorMessage("Invalid Email or password");
    }
  };

  return (
    <>
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p>
          Don't have an account ? <NavLink to="/signup">Signup</NavLink>
        </p>
      </div>
    </>
  );
};

export default Login;
