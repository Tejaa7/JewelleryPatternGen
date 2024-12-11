import React, { useState } from 'react';
import styles from './signup.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../../components/Global/Footer";
import Navbar from '../../components/Global/Navbar';
export const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // React Router's navigate function

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setErrorMessage(''); // Clear previous errors

    try {
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData), // Convert formData to URL-encoded string
        });

        const result = await response.json();
        if (response.ok) {
            if (result.success) {
                alert(result.message); // Optional: Show success message
                navigate('/login'); // Redirect to the login page
            } else {
                setErrorMessage(result.message || 'Signup failed.');
            }
        } else {
            setErrorMessage(result.message || 'Signup failed.');
        }
    } catch (error) {
        console.error('Error during signup:', error);
        setErrorMessage('An error occurred. Please try again later.');
    }
};

  return (
    <section>
      <Navbar/>
      <br></br>
      <br></br>
      <div className="signup-page">
        <div className={`container-fluid ${styles.background}`}>
          <div className={`image-container d-none d-md-block ${styles.imgc}`}>
            <img
              src="/images/signup/signupcover.jpg"
              alt="Image"
              className={`img-fluid ${styles['img-fluidd']}`}
              style={{ height: "600px", width: "450px" }}
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
              <form onSubmit={handleSubmit}>
                <div className={`${styles['form-group']} mb-3`}>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    required
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={handleInputChange}
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
                    value={formData.email}
                    onChange={handleInputChange}
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
                    value={formData.password}
                    onChange={handleInputChange}
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
                    value={formData.repassword}
                    onChange={handleInputChange}
                  />
                </div>
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                <button type="submit" className={`btn w-100 ${styles['submit-btn']}`}>
                  Get Started
                </button>
                <div id={styles.option}>OR</div>
              </form>
              <div className={styles['login-back']}>
                <p>
                  Already have an account? <Link to="/login">Login Here</Link>
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

export default Signup;
