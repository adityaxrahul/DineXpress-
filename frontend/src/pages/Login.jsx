import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Works for BOTH local + production
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      // ❗ Handle server errors cleanly without crashing
      if (!response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
           const json = await response.json();
           alert(json.error || "Invalid credentials");
           return;
        }

        const text = await response.text();
        if (response.status === 500 || response.status === 503) {
          alert(
            "Backend error or waking up. Check MongoDB on Render."
          );
          return;
        }
        alert(`Server Error: ${response.statusText}`);
        return;
      }

      const json = await response.json();

      if (json.success) {
        localStorage.setItem("token", json.authtoken);

        if (json.isAdmin) {
          localStorage.setItem("isAdmin", "true");
        }

        alert("Logged in Successfully!");

        const returnTo = location.state?.returnTo || "/";
        navigate(returnTo);
      } else {
        alert(json.error || "Invalid credentials");
      }
    } catch (error) {
      console.error(error);

      alert(
        "Cannot connect to backend.\n\n👉 Open backend URL first (Render sleep issue)."
      );
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-page">
      <style>
        {`
        .login-page * {
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
        .login-container {
          background: #fff;
          padding: 40px 30px;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
          text-align: center;
        }
        .login-container h2 {
          margin-bottom: 20px;
          color: #b85c38;
        }
        .login-container input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
        }
        .login-container input:focus {
          border-color: #b85c38;
          box-shadow: 0 0 6px rgba(184, 92, 56, 0.3);
        }
        .login-container button {
          width: 100%;
          padding: 12px;
          margin-top: 15px;
          background: #b85c38;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          color: #fff;
          cursor: pointer;
        }
        .login-container button:hover {
          background: #944a2d;
        }
        .skip-btn {
          background: #555 !important;
          margin-top: 10px;
        }
        .skip-btn:hover {
          background: #333 !important;
        }
        .login-container p {
          margin-top: 15px;
        }
        a {
          color: #b85c38;
          text-decoration: none;
          font-weight: bold;
        }
      `}
      </style>

      <div className="login-container">
        <h2>Login to Aditya Restaurant</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            placeholder="Enter your email"
            required
          />

          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            placeholder="Enter your password"
            required
          />

          <button type="submit">Log In</button>

          <button
            type="button"
            className="skip-btn"
            onClick={() => navigate("/")}
          >
            Skip
          </button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/All_Background_Component/singup.html">Sign up</Link>
        </p>
      </div>
    </div>
  );
}