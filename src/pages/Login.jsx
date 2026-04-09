import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });
      const json = await response.json();
      if (json.success) {
        
        localStorage.setItem('token', json.authtoken);
        if (json.isAdmin) localStorage.setItem('isAdmin', 'true');
        alert("Logged in Successfully!");
        const returnTo = location.state?.returnTo || "/";
        navigate(returnTo);
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to the server. Please ensure backend is running.");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className="login-page">
      <style dangerouslySetInnerHTML={{ __html: `.login-page * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.login-page {
  font-family: Arial, sans-serif;
  background: #fff8f3;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.login-page .login-container {
  background: #fff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}
.login-page .login-container h2 {
  margin-bottom: 20px;
  color: #b85c38;
}
.login-page .login-container input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: 0.3s;
}
.login-page .login-container input:focus {
  border-color: #b85c38;
  box-shadow: 0 0 6px rgba(184, 92, 56, 0.3);
}
.login-page .login-container button:not(.skip-btn) {
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  background: #b85c38;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
}
.login-page .login-container button:not(.skip-btn):hover {
  background: #944a2d;
}
.login-page .skip-btn {
  width: 100%;
  padding: 12px;
  background: #555;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
}
.login-page .skip-btn:hover {
  background: #333;
}
.login-page .login-container p {
  margin-top: 15px;
  font-size: 0.9rem;
}
.login-page .login-container a {
  color: #b85c38;
  text-decoration: none;
  font-weight: bold;
}
.login-page .login-container a:hover {
  text-decoration: underline;
}` }} />
      
  <div className="login-container">
    <h2>Login to Aditya Resturent</h2>
    <form id="loginForm" onSubmit={handleSubmit}>
      <input type="email" id="email" name="email" value={credentials.email} onChange={onChange} placeholder="Enter your email" required />
      <input type="password" id="password" name="password" value={credentials.password} onChange={onChange} placeholder="Enter your password" required />
      <button type="submit">Log In</button>
      <button type="button" className="skip-btn" onClick={() => navigate("/")}>Skip</button>
    </form>
    <p>Don't have an account? <Link to="/All_Background_Component/singup.html" state={{ returnTo: location.state?.returnTo }}>Sign up</Link></p>
  </div>
    </div>
  );
}
