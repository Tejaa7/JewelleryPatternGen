import React from 'react';
import './Login.css'; 
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="container-fluid background">
      <div className="image-container d-none d-md-block"></div>
      <div className="login-container">
        <Link to="/Home">
          <div className="logo"></div>
        </Link>
        <form method="post">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              required
              placeholder="Enter your username or email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block submit-btn">
            Log in
          </button>
          <div id="option" className="mt-3">OR</div>
        </form>
        <div className="text-center mt-2">
          <Link to="#">Forgot password?</Link>
        </div>
        <div className="text-center mt-3">
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
