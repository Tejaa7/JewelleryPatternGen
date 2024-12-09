import React, { useState } from 'react';
import './forgot.css'; 
import { useNavigate } from 'react-router-dom';
import Footer from "../../components/Global/Footer";

export const Forgot = () => {
  const [step, setStep] = useState('request'); // 'request' or 'reset'
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) {
        alert(data.message);
        setStep('reset');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/reset-password/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, confirmPassword }),
      });
      const data = await response.json();
      if (data.success) {
        alert(data.message);
        navigate('/login'); // Redirect to login page
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section> 
      <div className="forgot-page container-fluid" style={{ padding: '0', margin: '0', width: '100%' }}>
        <div className="row justify-content-center" style={{ backgroundColor: 'white' }}>
          <div className="col-lg-4 col-md-8 col-sm-12">
            <div className="forgot-container">
              <div className="logo">
                <img
                  src="/logo/LOGO1.jpg"
                  alt="Logo"
                  className="img-fluid"
                  style={{ height: "100px", width: "270px", margin: '0' }}
                />
              </div>
              <h5 style={{ padding: '1rem' }}>
                {step === 'request' ? 'Forgot Password?' : 'Reset Password'}
              </h5>
              {step === 'request' ? (
                <form onSubmit={handleForgotPassword}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="submit-btn btn btn-primary btn-block">
                    Submit
                  </button>
                </form>
              ) : (
                <form onSubmit={handleResetPassword}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="token"
                      name="token"
                      required
                      placeholder="Enter the reset token"
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      required
                      placeholder="Enter your new password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="confirm-password"
                      name="confirm-password"
                      required
                      placeholder="Re-enter your new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="submit-btn btn btn-primary btn-block">
                    Reset Password
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Forgot;
