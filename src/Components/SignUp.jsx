import React from 'react'
import { Link } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  return (
    <div className="row justify-content-center mt-4 ">
      <div className="col-md-6 card shadow p-2  dola">
        <h1>
          <b>Sign Up</b>
        </h1>
        <form action="">
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
          />
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

export default SignUp