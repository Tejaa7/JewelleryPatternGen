import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../Home/Bhnvb.module.css';

export const Brandheader = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is logged in (e.g., check for a token in cookies/local storage)
        const token = document.cookie.split('; ').find(row => row.startsWith('jwt='));
        setIsLoggedIn(!!token); // Set login state based on token presence
    }, []);

    const handleLogout = () => {
        // Clear the session (e.g., remove token from cookies)
        document.cookie = 'jwt=; Max-Age=0; path=/;'; // Clear the cookie
        setIsLoggedIn(false); // Update login state
        navigate('/login'); // Redirect to login page
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

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Brand Header */}
            <header className={`${styles.brandHeader} cormorant-sc-medium`}>
                <Link
                    className={styles.brandName}
                    to="/Home"
                    style={{ textDecoration: 'none', fontWeight: '900' }}
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
                                style={{ height: '100px', width: '270px' }}
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
                        <ul className={`navbar-nav ms-auto ${styles.navJustify2}`}>
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold fs-5 ${styles.navLink}`} to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold fs-5 ${styles.navLink}`} to="/traditional">Traditional</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold fs-5 ${styles.navLink}`} to="/modern">Modern</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold fs-5 ${styles.navLink}`} to="/upload">Upload</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold fs-5 ${styles.navLink}`} to="/contactus">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link fw-bold fs-5 ${styles.navLink}`} to="/aboutus">About Us</Link>
                            </li>
                            <li className="nav-item">
                                {isLoggedIn ? (
                                    <button
                                        className={`btn nav-link fw-bold fs-5 ${styles.navLink}`}
                                        onClick={handleLogout}
                                        style={{ background: 'none', border: 'none' }}
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <Link className={`nav-link fw-bold fs-5 ${styles.navLink}`} to="/login">Login</Link>
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
