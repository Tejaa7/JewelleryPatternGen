import React, { useState } from "react";
import "./forgot.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Global/Footer";
<<<<<<< HEAD
import Navbar from '../../components/Global/Navbar';
=======
import Navbar from "../../components/Global/Navbar";
>>>>>>> d844627846a6213c5474937369be88881d47f040

export const Forgot = () => {
  const [step, setStep] = useState("request"); // 'request' or 'reset'
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false); // New loading state
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setLoading(false);
      alert(data.message);
      if (data.success) {
        setStep("reset");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/reset-password/${token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        }
      );
      const data = await response.json();
      setLoading(false);
      alert(data.message);
      if (data.success) {
        navigate("/login"); // Redirect to login page
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
<<<<<<< HEAD
    <section> 
      <Navbar/>
      <br></br>
      <br></br>
      <div className="forgot-page container-fluid" style={{ padding: '0', margin: '0', width: '100%' }}>
        <div className="row justify-content-center" style={{ backgroundColor: 'white' }}>
          <div className="col-lg-4 col-md-8 col-sm-12">
            <div className="forgot-container">
              <div className="logo">
                {/* <img
                  src="/logo/LOGO1.jpg"
                  alt="Logo"
                  className="img-fluid"
                  style={{ height: "100px", width: "270px", margin: '0' }}
                /> */}
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
=======
    <section>
      <Navbar />
      <div className="forgot-page">
        <div className="forgot-container">
          <h3 style={{padding:'1rem'}}>{step === "request" ? "Forgot Password?" : "Reset Password"}</h3>
          {step === "request" ? (
            <form onSubmit={handleForgotPassword}>
              <input
                type="email"
                className="form-control"
                style={{}}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="submit-btn">
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleResetPassword}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the reset token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                required
              />
              <input
                type="password"
                className="form-control"
                placeholder="Enter your new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                className="form-control"
                placeholder="Re-enter your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="submit" className="submit-btn">
                {loading ? "Resetting..." : "Reset Password"}
              </button>
            </form>
          )}
>>>>>>> d844627846a6213c5474937369be88881d47f040
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Forgot;
