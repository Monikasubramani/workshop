/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
/* ------ ******-----*/

/*import React, { useState } from "react";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [hover, setHover] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generatePassword = () => {
    const length = 12;
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setForm({ ...form, password });
    navigator.clipboard.writeText(password);
    setMessage("Password generated and copied to clipboard!");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setMessage("Please fill all fields");
      return;
    }
    const userExists = users.find((user) => user.email === form.email);
    if (userExists) {
      setMessage("User already exists");
      return;
    }
    setUsers([...users, { name: form.name, email: form.email, password: form.password }]);
    setMessage("Sign up successful! Please login.");
    setForm({ email: "", password: "", name: "" });
    setIsLogin(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === form.email && user.password === form.password
    );
    if (user) {
      setMessage(`Welcome back, ${user.name}!`);
    } else {
      setMessage("Invalid email or password");
    }
  };

  const containerStyle = {
    maxWidth: 400,
    margin: "60px auto",
    padding: 30,
    borderRadius: 8,
    boxShadow: "0 0 12px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    margin: "8px 0 16px 0",
    borderRadius: 4,
    border: "1px solid #ccc",
    fontSize: 16,
  };

  const buttonStyle = {
    width: "100%",
    padding: 12,
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: 4,
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: 16,
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  const smallButtonStyle = {
    ...buttonStyle,
    width: "auto",
    padding: "8px 16px",
    marginTop: -10,
    marginBottom: 10,
    fontSize: 14,
    backgroundColor: "#28a745",
  };

  const toggleTextStyle = {
    marginTop: 18,
    color: "#007BFF",
    cursor: "pointer",
    textAlign: "center",
    fontWeight: 500,
    userSelect: "none",
  };

  const messageStyle = {
    marginTop: 14,
    textAlign: "center",
    color: message.startsWith("Welcome") || message.includes("generated")
      ? "green"
      : "red",
    fontWeight: "600",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>
        {isLogin ? "Login" : "Sign Up"}
      </h2>

      <form onSubmit={isLogin ? handleLogin : handleSignup}>
        {!isLogin && (
          <>
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Your full name"
            />
          </>
        )}

        <label>Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
          placeholder="email@example.com"
        />

        <label>Password</label>
        <input
          name="password"
          type="text"
          value={form.password}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Password"
        />

        {!isLogin && (
          <button
            type="button"
            style={smallButtonStyle}
            onClick={generatePassword}
          >
            Generate Password
          </button>
        )}

        <button
          type="submit"
          style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p
        style={toggleTextStyle}
        onClick={() => {
          setIsLogin(!isLogin);
          setMessage("");
          setForm({ email: "", password: "", name: "" });
        }}
      >
        {isLogin
          ? "Don't have an account? Sign Up"
          : "Already have an account? Login"}
      </p>

      {message && <p style={messageStyle}>{message}</p>}
    </div>
  );
}
*/

import React from "react";
import PasswordManager from "./components/PasswordManager";

function App() {
  return (
    <div>
      <PasswordManager />
    </div>
  );
}

export default App;

