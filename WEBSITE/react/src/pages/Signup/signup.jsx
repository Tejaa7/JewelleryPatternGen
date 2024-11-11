import React from 'react';
import './signup.css'; 
import { Link } from 'react-router-dom';

export const Signup = () => {
  return (
    <div className="container-fluid background">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="image-container"></div>
        </div>
        <div className="col-lg-4 col-md-8 col-sm-12">
          <div className="login-container">
            <Link to="/Home">
              <div className="logo"></div>
            </Link>
            <form method="post">
              <div className="form-group mb-3">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  required
                  placeholder="Enter your username"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  required
                  placeholder="Enter your password"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="re-password">Re-Enter Password</label>
                <input
                  type="password"
                  id="re-password"
                  name="repassword"
                  className="form-control"
                  required
                  placeholder="Re-enter your password"
                />
              </div>
              <button type="submit" className="btn submit-btn w-100">
                Get Started
              </button>
              <div id="option">OR</div>
            </form>
            <div className="login-back">
              <p>
                Already have an account? <Link to="/login">Login Here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
