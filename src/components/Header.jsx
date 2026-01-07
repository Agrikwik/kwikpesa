import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top w-100">
            <div className="container-fluid px-4 px-lg-5">
                <Link className="navbar-brand fw-bold fs-3 text-primary" to="/">KwikPesa</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-lg-center">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-primary ms-lg-3 px-4 py-2" to="/register">Get Started</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
