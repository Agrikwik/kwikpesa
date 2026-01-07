import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-3 w-100">
            <div className="container-fluid px-4 px-lg-5">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5 className="fw-bold">KwikPesa</h5>
                        <p>Fast, secure digital payments. Send, receive, and accept money instantly.</p>
                    </div>

                    <div className="col-md-4 mb-3">
                        <h5 className="fw-bold">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                            <li><Link to="/pricing" className="text-white text-decoration-none">Pricing</Link></li>
                            <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
                            <li><Link to="/login" className="text-white text-decoration-none">Login</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-3">
                        <h5 className="fw-bold">Contact Us</h5>
                        <p>Email: support@kwikpesa.com</p>
                        <p>Phone: +265 888 123 456</p>
                        <div>
                            <a href="#" className="text-white me-2"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-white me-2"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <hr className="bg-secondary" />

                <p className="text-center mb-0">&copy; 2026 KwikPesa. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
