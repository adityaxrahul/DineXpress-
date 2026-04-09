import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

export default function Singup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
      });
      const json = await response.json();
      if (json.success) {
        
        localStorage.setItem('token', json.authtoken);
        alert("Signed Up Successfully!");
        const returnTo = location.state?.returnTo || "/";
        navigate(returnTo);
      } else {
        alert(json.error || "Invalid credentials");
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
    <div className="singup-page">
      <style dangerouslySetInnerHTML={{ __html: `.singup-page * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.singup-page {
  font-family: Arial, sans-serif;
  background: #fff8f3;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.singup-page .signup-container {
  background: #fff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  text-align: center;
}
.singup-page .signup-container h2 {
  margin-bottom: 20px;
  color: #b85c38;
}
.singup-page .signup-container input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: 0.3s;
}
.singup-page .signup-container input:focus {
  border-color: #b85c38;
  box-shadow: 0 0 6px rgba(184, 92, 56, 0.3);
}
.singup-page .signup-container button {
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
.singup-page .signup-container button:hover {
  background: #944a2d;
}
.singup-page .signup-container p {
  margin-top: 15px;
  font-size: 0.9rem;
}
.singup-page .signup-container a {
  color: #b85c38;
  text-decoration: none;
  font-weight: bold;
}
.singup-page .signup-container a:hover {
  text-decoration: underline;
}` }} />
      
  <div className="signup-container">
    <h2>Create Your Account</h2>
    <form id="signupForm" onSubmit={handleSubmit}>
      <input type="text" id="name" name="name" value={credentials.name} onChange={onChange} placeholder="Enter your full name" required />
      <input type="email" id="email" name="email" value={credentials.email} onChange={onChange} placeholder="Enter your email" required />
      <input type="password" id="password" name="password" value={credentials.password} onChange={onChange} placeholder="Create a password" required />
      <input type="password" id="confirmPassword" name="confirmPassword" value={credentials.confirmPassword} onChange={onChange} placeholder="Confirm your password" required />
      <button type="submit">Sign Up</button>
    </form>
    <p>Already have an account? <Link to="/All_Background_Component/log-in.html">Log In</Link></p>
  </div>
    </div>
  );
}
