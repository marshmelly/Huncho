import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const navigate = useNavigate();

  const evaluatePasswordStrength = (pwd) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[a-z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;

    switch (strength) {
      case 0:
      case 1:
      case 2:
        return "Weak";
      case 3:
      case 4:
        return "Moderate";
      case 5:
        return "Strong";
      default:
        return "";
    }
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setPasswordStrength(evaluatePasswordStrength(pwd));
  };

  const isPasswordStrong = passwordStrength === "Strong";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isPasswordStrong) {
      alert("Please enter a strong password.");
      return;
    }
    // Simulate successful signup
    navigate("/", { state: { successMessage: "Successfully signed up!" } });
  };

  return (
    <div className="row justify-content-center mt-4 ">
      <div className="col-md-6 card shadow p-2  dola">
        <h1 className='yo'>
          <b>Sign Up</b>
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter username"
            className="form-control"
          />
          <br />
          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
          />
          <br />
          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          {password && (
            <div>
              Password strength:{" "}
              <span
                style={{
                  color:
                    passwordStrength === "Strong"
                      ? "green"
                      : passwordStrength === "Moderate"
                      ? "orange"
                      : "red",
                }}
              >
                {passwordStrength}
              </span>
            </div>
          )}
          <br />
          <input
            type="tel"
            placeholder="Enter phone"
            className="form-control"
          />
          <br />
          <button
            className="btn btn btn-outline-success bg-dark text-white"
            type="submit"
            disabled={!isPasswordStrong}
          >
            Signup
          </button>
          <p>
            Already have an account? <Link to="/Signin">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
