import React, { useState } from "react";
import "./App.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = (e) => {
    e.preventDefault();
    let valid = true;

    setEmailError("");
    setPasswordError("");

    const emailPattern =
      /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+\.(com|in|org|net|edu|[a-zA-Z]{2,})$/;

    if (!email) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError("Invalid email format.");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } else if (password.length < 5) {
      setPasswordError("Minimum 5 characters required.");
      valid = false;
    } else if (!/^[A-Z]/.test(password)) {
      setPasswordError("Must start with a capital letter.");
      valid = false;
    } else if (!/[0-9]/.test(password)) {
      setPasswordError("Must contain at least one number.");
      valid = false;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setPasswordError("Must contain one special character.");
      valid = false;
    }

    if (valid) {
      alert("Login Successful!");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <form onSubmit={validateForm}>
        <label>Email Address</label>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="error">{emailError}</p>}

        <label>Password</label>

        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className="eye-button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="black"
                  d="M12 6a9.77 9.77 0 0 0-9 6 9.77 9.77 0 0 0 9 6 9.77 9.77 0 0 0 9-6 9.77 9.77 0 0 0-9-6Zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="black"
                  d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 7.61 17 4.5 12 4.5Zm0 12A4.5 4.5 0 1 1 12 7a4.5 4.5 0 0 1 0 9Z"
                />
              </svg>
            )}
          </button>
        </div>

        {passwordError && <p className="error">{passwordError}</p>}

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginForm;