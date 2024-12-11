import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Home/Bhnvb.module.css";
import "../styles/main.css";
import "../styles/variables.css";

const Brandheader = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("User");
    const navigate = useNavigate();

    useEffect(() => {
        const checkLoginStatus = () => {
            const cookies = document.cookie.split("; ");
            const jwtCookie = cookies.find((cookie) =>
                cookie.trim().startsWith("jwt=")
            );

            if (jwtCookie) {
                const token = jwtCookie.split("=")[1];

                try {
                    const base64Url = token.split(".")[1];
                    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
                    const jsonPayload = JSON.parse(atob(base64));

                    setUsername(jsonPayload.username);
                    setIsLoggedIn(true);
                } catch (error) {
                    console.error("Error decoding JWT:", error);
                    setIsLoggedIn(false);
                }
            } else {
                setIsLoggedIn(false);
            }
        };

        checkLoginStatus();
    }, []);

    const handleLogout = () => {
        document.cookie = "jwt=; Max-Age=0; path=/;";
        setIsLoggedIn(false);
        navigate("/login");
    };

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector(`.${styles.navbar}`);
            const brandHeader = document.querySelector(`.${styles.brandHeader}`);

            if (window.scrollY > 160) {
                navbar.classList.add(styles.scrolled);
                brandHeader.classList.add(styles.hidden);
            } else {
                navbar.classList.remove(styles.scrolled);
                brandHeader.classList.remove(styles.hidden);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Brand Header */}
            <header className={`${styles.brandHeader} cormorant-sc-medium`}>
                <Link
                    className={styles.brandName}
                    to="/Home"
                    style={{ textDecoration: "none", fontWeight: "900" }}
                >
                    LuminairE
                </Link>
            </header>

            {/* Navbar */}
            <nav className={`${styles.navbar} navbar navbar-expand-lg fixed-top navbar-light`}>
                <div className={`container-fluid ${styles.navJustify1}`}>
                    <div className={styles.logo}>
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
                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className={`navbar-nav ms-auto ${styles.navJustify2}`}>
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold fs-5 ${styles.navLink}`} to="/Home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold fs-5 ${styles.navLink}`} to="/traditional">
                                    Traditional
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold fs-5 ${styles.navLink}`} to="/modern">
                                    Modern
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold fs-5 ${styles.navLink}`} to="/upload">
                                    Upload
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold fs-5 ${styles.navLink}`} to="/contactus">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold fs-5 ${styles.navLink}`} to="/aboutus">
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                {isLoggedIn ? (
                                    <div className="dropdown">
                                        <button
                                            className={`btn nav-link dropdown-toggle fw-bold fs-5 ${styles.navLink}`}
                                            id="accountDropdown"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            style={{
                                                background: "none",
                                                border: "none",
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
                                    </div>
                                ) : (
                                    <Link className={`nav-link fw-bold fs-5 ${styles.navLink}`} to="/login">
                                        Login
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Brandheader;
