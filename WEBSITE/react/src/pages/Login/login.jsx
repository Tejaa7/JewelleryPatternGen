import React from 'react';
import styles from './Login.module.css'; 
import { Link } from 'react-router-dom';
import Footer from "../../components/Global/Footer";
import Navbar from "../../components/Global/Navbar";


export const Login = () => {
  return (
    <section>
      <Navbar />
      <div className={`login-page ${styles['top-margin']}`}>
    <div className={`container-fluid ${styles.background}`}>
      <div className={`image-container d-none d-md-block ${styles.imgc}`}>
        <img
          className={`img-fluid ${styles['img-fluiddd']}`}
          src="/images/login/login.avif"
          alt="Image"
          style={{ height: "500px", width: "400px" }}
        />
      </div>
      <div className="col-lg-4 col-md-8 col-sm-12">
       <div className={`${styles['login-container']} ${styles.loginc}`}>
        <Link to="/Home">
          <div className={styles.logo}>
            <img
              src="/logo/LOGO1.jpg"
              alt="Logo"
              className="img-fluid"
              style={{ height: "100px", width: "270px" }}
            />
          </div>
        </Link>
        <form method="post">
          <div className="form-group" style={{ padding: '0' }}>
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
          <button
            type="submit"
            className={`btn btn-primary btn-block ${styles['submit-btn']}`}
          >
            Log in
          </button>
          <div id={styles.option} className="mt-3">OR</div>
        </form>
        <div className="text-center mt-2">
          <Link to="/Forgot">Forgot password?</Link>
        </div>
        <div className="text-center mt-3">
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
       </div>
     </div>
    </div>
    </div>
    <Footer />
    </section>
  );
};

export default Login;
