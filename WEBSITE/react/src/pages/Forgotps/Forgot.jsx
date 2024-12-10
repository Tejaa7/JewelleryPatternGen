import React, { useState } from "react";
import "./forgot.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Global/Footer";
import Navbar from "../../components/Global/Navbar";

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
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Forgot;
