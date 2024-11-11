// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [loggedin, setLoggedin] = useState(false); 

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white shadow">
            <div className="container-fluid nav-justify1">
                <div className="logo">
                    <Link to="/Home">
                        <img
                            src="/logo/LOGO1.jpg"
                            alt="Logo"
                            className="img-fluid"
                            style={{ height: "100px", width: "270px" }}
                        />
                    </Link>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto nav-justify2">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold fs-5 text-black" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold fs-5 text-black" to="/traditional">Traditional</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold fs-5 text-black" to="/modern">Modern</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold fs-5 text-black" to="/upload">Upload</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold fs-5 text-black" to="/contactus">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            {loggedin ? (
                                <Link className="nav-link fw-bold fs-5 text-black" to="/logout">Logout</Link>
                            ) : (
                                <Link className="nav-link fw-bold fs-5 text-black" to="/login">Login</Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
