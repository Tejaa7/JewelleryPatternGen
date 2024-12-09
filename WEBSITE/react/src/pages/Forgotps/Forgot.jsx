import React from 'react';
import './forgot.css'; 
import { Link } from 'react-router-dom';
import Footer from "../../components/Global/Footer";
import Navbar from "../../components/Global/Navbar";


export const Forgot = () => {
  return (
    <section> 
      <Navbar />
<div className="forgot-page container-fluid" style={{padding:'0',margin:'0',width:'100%'}}>
  <div className="row justify-content-center" style={{backgroundColor:'white'}}>
    <div className="col-lg-4 col-md-8 col-sm-12">
      <div className="forgot-container">
        <h2 style={{padding:'16px 0 16px 0'}}>Forgot Password?</h2>
        <form method="post">
          <div className="form-group">
          <label htmlFor="username" style={{display:'flex',justifyContent:'left'}}>Username</label>
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
          <label htmlFor="password" style={{display:'flex',justifyContent:'left'}}>Set New Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
              placeholder="Enter your new password"
            />
          </div>
          <div className="form-group">
          <label htmlFor="password" style={{display:'flex',justifyContent:'left'}}>Confirm New Password</label>
            <input
              type="password"
              className="form-control"
              id="confirm-password"
              name="confirm-password"
              required
              placeholder="Re-Enter your new password"
            />
          </div>
          <button type="submit" className="submit-btn btn btn-primary btn-block">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
<Footer />
</section>
  );
};

export default Forgot;