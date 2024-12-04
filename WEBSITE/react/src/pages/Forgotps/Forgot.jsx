import React from 'react';
import './forgot.css'; 
import { Link } from 'react-router-dom';
import Footer from "../../components/Global/Footer";


export const Forgot = () => {
  return (
    <section> 
<div className="forgot-page container-fluid" style={{padding:'0',margin:'0',width:'100%'}}>
  <div className="row justify-content-center" style={{backgroundColor:'white'}}>
    <div className="col-lg-4 col-md-8 col-sm-12">
      <div className="forgot-container">
        <Link to="/Home">
          <div className="logo">
            <img
              src="/logo/LOGO1.jpg"
              alt="Logo"
              className="img-fluid"
              style={{ height: "100px", width: "270px",margin:'0' }}
            />
          </div>
        </Link>
        <h5 style={{padding:'1rem'}}>Forgot Password?</h5>
        <form method="post">
          <div className="form-group">
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