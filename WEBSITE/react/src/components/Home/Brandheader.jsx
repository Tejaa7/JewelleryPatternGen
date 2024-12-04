import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Home/Bhnvb.module.css';

export const Brandheader = () => {
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
                                <Link className={`nav-link fw-bold fs-5 ${styles.navLink}`} to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Brandheader;
