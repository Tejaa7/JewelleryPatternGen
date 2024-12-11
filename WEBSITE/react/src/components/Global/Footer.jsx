import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"; // External CSS for styling

const Footer = () => {
  return (
    <footer className="text-white py-5 footer">
      <div className="container">
        <div className="row">
          {/* Section 1: Customer Support */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Customer Support</h6>
            <ul className="list-unstyled">
              <li><a href="/help-center" className="text-white">Contact Us</a></li>
              <li><a href="/order-tracking" className="text-white">Order Tracking</a></li>
              <li><a href="/returns" className="text-white">Returns & Refunds</a></li>
              <li><a href="/contact-us" className="text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Section 2: Membership */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Navigation</h6>
            <ul className="list-unstyled">
              <li><a href="/traditional" className="text-white">Traditional</a></li>
              <li><a href="/modern" className="text-white">Modern</a></li>
              <li><a href="/upload" className="text-white">Upload</a></li>
              <li><a href="/contactus" className="text-white">Contact Us</a></li>
              <li><a href="/aboutus" className="text-white">About Us</a></li>
              <li><a href="/Login" className="text-white">Login</a></li>
              <li><a href="/Signup" className="text-white">SignUp</a></li>
              <li><a href="/forgot" className="text-white">Forgot Password</a></li>
            </ul>
          </div>

          {/* Section 3: About Us */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">About Luminaire</h6>
            <ul className="list-unstyled">
              <li><a href="/aboutus" className="text-white">Our Story</a></li>
              <li><a href="/" className="text-white">Sustainability</a></li>
              <li><a href="/" className="text-white">Careers</a></li>
              <li><a href="/" className="text-white">Blog</a></li>

            </ul>
          </div>

          {/* Section 4: Legal */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Terms of Service</a></li>
              <li><a href="/" className="text-white">Privacy Policy</a></li>
              <li><a href="/" className="text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="row align-items-center">
          {/* Branding Section */}
          <div className="col-md-4 text-center text-md-start">
            <p style={{fontSize:'15px',padding:'0 0 0 12px'}}className="mb-0 fw-bold">&copy; {new Date().getFullYear()} Luminaire. All rights reserved.</p>
          </div>

          {/* Logo in the Center */}
          <div className="col-md-4 text-center" style={{padding:'0'}}>
            <h2 className="fw-bold brand-logo">LUMINAIRE</h2>
          </div>

          {/* Social Icons on the Right */}
          {/* <div className="col-md-4 text-center text-md-end">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
