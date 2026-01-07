import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section className="py-5 flex-grow-1 d-flex align-items-center w-100">
            <div className="container-fluid px-4 px-lg-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-lg border-0 rounded-4 p-4 p-lg-5">
                            <div className="text-center mb-5">
                                <h1 className="fw-bold text-primary mb-2 display-6">Join KwikPesa</h1>
                                <p className="text-muted lead">Start processing secure payments today</p>
                            </div>

                            <form className="text-start">
                                <div className="row g-3 mb-3">
                                    <div className="col-sm-6">
                                        <label className="form-label fw-bold">First Name</label>
                                        <input type="text" className="form-control form-control-lg bg-light border-0" placeholder="John" required />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label fw-bold">Last Name</label>
                                        <input type="text" className="form-control form-control-lg bg-light border-0" placeholder="Doe" required />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Email Address</label>
                                    <input type="email" className="form-control form-control-lg bg-light border-0" placeholder="john@example.com" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Password</label>
                                    <input type="password" className="form-control form-control-lg bg-light border-0" placeholder="Create a password" required />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label fw-bold">Confirm Password</label>
                                    <input type="password" className="form-control form-control-lg bg-light border-0" placeholder="Repeat password" required />
                                </div>
                                <div className="mb-4 form-check">
                                    <input type="checkbox" className="form-check-input" id="terms" required />
                                    <label className="form-check-label text-muted" htmlFor="terms">I agree to the <Link to="/terms" className="text-decoration-none fw-bold">Terms & Conditions</Link></label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg w-100 py-3 fs-5 rounded-3 shadow-sm mb-4">Register</button>
                            </form>

                            <div className="text-center">
                                <p className="mb-0 text-muted">Already have an account? <Link to="/login" className="fw-bold text-primary text-decoration-none">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
