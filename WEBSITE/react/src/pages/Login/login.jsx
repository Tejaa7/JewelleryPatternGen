import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../../components/Global/Footer";
import Navbar from "../../components/Global/Navbar";
import styles from './Login.module.css';
import Navbar from '../../components/Global/Navbar';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData),
        credentials: 'include',
      });

      const result = await response.json();

      if (response.ok && result.success) {
        navigate(result.redirectTo);
      } else {
        setErrorMessage(result.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (

    
    <section>
<<<<<<< HEAD
      <Navbar/>
      <br></br>
      <br></br>
      <div className="login-page">

=======
      <Navbar />
      <div className={`login-page ${styles['top-margin']}`}>
>>>>>>> d844627846a6213c5474937369be88881d47f040
        <div className={`container-fluid ${styles.background}`}>
          <div className={`image-container d-none d-md-block ${styles.imgc}`}>
            <img
              className={`img-fluid ${styles['img-fluiddd']}`}
              src="/images/login/login.avif"
              alt="Login visual"
              style={{ height: "500px", width: "400px" }}
            />
          </div>
          <div className="col-lg-4 col-md-8 col-sm-12">
            <div className={`${styles['login-container']} ${styles.loginc}`}>
              <Link to="/home">
                <div className={styles.logo}>
                  <img
                    src="/logo/LOGO1.jpg"
                    alt="Logo"
                    className="img-fluid"
                    style={{ height: "100px", width: "270px" }}
                  />
                </div>
              </Link>
              <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ padding: '0' }}>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter your username or email"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                <button type="submit" className={`btn btn-primary btn-block ${styles['submit-btn']}`}>
                  Log in
                </button>
                <div id={styles.option} className="mt-3">OR</div>
              </form>
              <div className="text-center mt-2">
                <Link to="/forgot">Forgot password?</Link>
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
