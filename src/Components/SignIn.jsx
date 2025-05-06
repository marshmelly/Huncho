import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardShadowForm from "./CardShadowForm";

const SignIn = () => {
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
    // Simulate successful signin
    navigate("/", { state: { successMessage: "Successfully signed in!" } });
  };

  return (
    <CardShadowForm>
      <h1 className="yo">
        <b>Sign In</b>
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter username" className="form-control" />
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
           
          </div>
        )}
        <br />
        <button
          type="submit"
          className="btn btn-outline-success bg-dark text-white yo"
          disabled={!isPasswordStrong}
        >
          Sign In
        </button>
        <br />
        <p className="yo">
          Already have an account? <Link to="/Signup">Sign Up</Link>
        </p>
      </form>
    </CardShadowForm>
  );
};

export default SignIn;
