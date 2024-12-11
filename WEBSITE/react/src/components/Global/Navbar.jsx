import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/main.css";
import "../styles/variables.css";

export const Navbar = () => {
    const [loggedin, setLoggedin] = useState(false); // Track login state
    const [username, setUsername] = useState("User"); // Placeholder username
    const navigate = useNavigate();

    // Decode JWT manually to extract username
    useEffect(() => {
        const checkLoginStatus = () => {
            // Parse cookies to find the JWT
            const cookies = document.cookie.split("; ");
            const jwtCookie = cookies.find((cookie) =>
                cookie.trim().startsWith("jwt=")
            );

            if (jwtCookie) {
                const token = jwtCookie.split("=")[1]; // Extract JWT value

                try {
                    // Decode the JWT payload (2nd part of the token)
                    const base64Url = token.split(".")[1]; // Get payload
                    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
                    const jsonPayload = JSON.parse(atob(base64)); // Decode Base64

                    setUsername(jsonPayload.username); // Set username from payload
                    setLoggedin(true); // Mark as logged in
                } catch (error) {
                    console.error("Error decoding JWT:", error);
                    setLoggedin(false); // Mark as logged out in case of an error
                }
            } else {
                // No JWT found, mark as logged out
                setLoggedin(false);
            }
        };

        checkLoginStatus();
    }, []);

    const handleLogout = () => {
        // Clear the JWT cookie
        document.cookie = "jwt=; Max-Age=0; path=/;";
        setLoggedin(false); // Update state
        navigate("/login"); // Redirect to login page
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
                            style={{ height: "100px", width: "270px", margin: "0" }}
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
                            <Link className="nav-link fw-bold fs-5 text-black" to="/Home">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link fw-bold fs-5 text-black"
                                to="/traditional"
                            >
                                Traditional
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold fs-5 text-black" to="/modern">
                                Modern
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold fs-5 text-black" to="/upload">
                                Upload
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link fw-bold fs-5 text-black"
                                to="/contactus"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold fs-5 text-black" to="/aboutus">
                                About Us
                            </Link>
                        </li>

                        {/* Conditional Rendering for Login/Dropdown */}
                        {loggedin ? (
                            <li className="nav-item dropdown">
                                <button
                                    className="btn nav-link dropdown-toggle fw-bold fs-5 text-black"
                                    id="accountDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{
                                        background: "none",
                                        border: "none",
                                        fontFamily: "Poppins, sans-serif",
                                    }}
                                >
                                    {username}
                                </button>
                                <ul
                                    className="dropdown-menu dropdown-menu-end shadow"
                                    aria-labelledby="accountDropdown"
                                    style={{ fontFamily: "Poppins, sans-serif" }}
                                >
                                    <li>
                                        <Link
                                            className="dropdown-item d-flex align-items-center"
                                            to="/history"
                                        >
                                            <i className="bi bi-clock-history me-2"></i> History
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            className="dropdown-item d-flex align-items-center"
                                            onClick={handleLogout}
                                        >
                                            <i className="bi bi-box-arrow-right me-2"></i> Logout
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link
                                    className="nav-link fw-bold fs-5 text-black"
                                    to="/login"
                                >
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
