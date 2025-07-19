import React, { useState } from "react";

const PasswordManager = () => {
  const [form, setForm] = useState({
    website: "",
    username: "",
    password: "",
  });
  const [savedData, setSavedData] = useState([]);

  const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let newPassword = "";
    for (let i = 0; i < 12; i++) {
      newPassword += chars[Math.floor(Math.random() * chars.length)];
    }
    setForm({ ...form, password: newPassword });
    navigator.clipboard.writeText(newPassword);
    alert("Password copied to clipboard!");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveData = () => {
    if (!form.website || !form.username || !form.password) {
      alert("Please fill in all fields.");
      return;
    }
    setSavedData([...savedData, form]);
    setForm({ website: "", username: "", password: "" });
  };

  return (
    <div style={styles.container}>
      <h2>Password Generator & Saver</h2>
      <input
        style={styles.input}
        type="text"
        name="website"
        placeholder="Website Name"
        value={form.website}
        onChange={handleChange}
      />
      <input
        style={styles.input}
        type="text"
        name="username"
        placeholder="Username or Email"
        value={form.username}
        onChange={handleChange}
      />
      <input
        style={styles.input}
        type="text"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      <div>
        <button onClick={generatePassword} style={styles.button}>
          Generate Password
        </button>
        <button onClick={saveData} style={{ ...styles.button, backgroundColor: "green" }}>
          Save
        </button>
      </div>

      <h3 style={{ marginTop: 30 }}>Saved Credentials</h3>
      {savedData.map((item, index) => (
        <div key={index} style={styles.savedItem}>
          <strong>{item.website}</strong><br />
          Username: {item.username}<br />
          Password: {item.password}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 15px",
    margin: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  savedItem: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#f8f9fa",
    borderRadius: "5px",
  },
};

export default PasswordManager;
