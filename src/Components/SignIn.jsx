import React from "react";
import { Link } from "react-router-dom";
import CardShadowForm from "./CardShadowForm";

const SignIn = () => {
  return (
    <CardShadowForm>
      <h1>
        <b>Sign In</b>
      </h1>
      <form action="">
        <input type="text" placeholder="Enter username" className="form-control" />
        <br />
        <input type="password" placeholder="Enter password" className="form-control" />
        <br />
        <button type="submit" className="btn btn-outline-success bg-dark text-white">
          Sign In
        </button>
        <br />
        <p>
          Already have an account? <Link to="/Signup">Sign Up</Link>
        </p>
      </form>
    </CardShadowForm>
  );
};

export default SignIn;
