import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/main.css";
import "../styles/variables.css";

export const Navbar = () => {
    const [loggedin, setLoggedin] = useState(false); // Track login state
    const navigate = useNavigate();

    // Check for JWT cookie on component mount
    useEffect(() => {
        const checkLoginStatus = () => {
            const cookies = document.cookie.split('; ');
            const jwtCookie = cookies.find(cookie => cookie.trim().startsWith('jwt='));
            setLoggedin(!!jwtCookie); // Update state based on cookie presence
        };

        checkLoginStatus();
    }, []);

    const handleLogout = () => {
        // Clear the JWT cookie
        document.cookie = 'jwt=; Max-Age=0; path=/;';
        setLoggedin(false); // Update state
        navigate('/login'); // Redirect to login page
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white shadow">
            <div className="container-fluid nav-justify1">
                <div className="logo">
                    <Link to="/Home">
                        <img
                            src="/logo/LOGO1.jpg"
                            alt="Logo"
                            className="img-fluid"
                            style={{ height: "100px", width: "270px", margin: '0' }}
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
                            <Link className="nav-link fw-bold fs-5 text-black" to="/Home">Home</Link>
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
                            <Link className="nav-link fw-bold fs-5 text-black" to="/aboutus">About Us</Link>
                        </li>
                        <li className="nav-item">
                            {loggedin ? (
                                <button
                                    className="btn nav-link fw-bold fs-5 text-black"
                                    style={{ background: 'none', border: 'none' }}
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
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
