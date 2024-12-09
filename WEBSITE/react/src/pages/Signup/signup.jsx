import React from 'react';
import styles from './signup.module.css';
import { Link } from 'react-router-dom';
import Footer from "../../components/Global/Footer";
import Navbar from "../../components/Global/Navbar";

export const Signup = () => {
  return (
    <section>
      <Navbar />
      <div className={`signup-page ${styles['top-margin']}`}>
    <div className={`container-fluid ${styles.background}`}>
      <div className={`image-container d-none d-md-block ${styles.imgc}`}>
        <img
          src="/images/signup/signupcover.jpg"
          alt="Image"
          className={`img-fluid ${styles['img-fluidd']}`}
          style={{ height: "550px", width: "430px" }}
        />
      </div>
      <div className="col-lg-4 col-md-8 col-sm-12">
        <div className={styles['login-container']}>
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
            <div className={`${styles['form-group']} mb-3`}>
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
            <div className={`${styles['form-group']} mb-3`}>
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
            <div className={`${styles['form-group']} mb-3`}>
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
            <div className={`${styles['form-group']} mb-3`}>
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
            <button type="submit" className={`btn w-100 ${styles['submit-btn']}`}>
              Get Started
            </button>
            {/* <div id={styles.option}>OR</div> */}
          </form>
          {/* <div className={styles['login-back']}>
            <p>
              Already have an account? <Link to="/login">Login Here</Link>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  <Footer />
  </section>
  );
};

export default Signup;
