import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className="py-5 flex-grow-1 d-flex align-items-center w-100">
            <div className="container-fluid px-4 px-lg-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5 col-xl-4">
                        <div className="card shadow-lg border-0 rounded-4 p-4 p-lg-5">
                            <div className="text-center mb-5">
                                <h1 className="fw-bold text-primary mb-2 display-6">Welcome Back</h1>
                                <p className="text-muted lead">Login to your KwikPesa account</p>
                            </div>

                            <form className="text-start">
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Email Address</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light border-0"><i className="bi bi-envelope-at text-muted"></i></span>
                                        <input type="email" className="form-control form-control-lg bg-light border-0" placeholder="name@example.com" required />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label fw-bold">Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-light border-0"><i className="bi bi-lock text-muted"></i></span>
                                        <input type="password" className="form-control form-control-lg bg-light border-0" placeholder="Enter password" required />
                                    </div>
                                </div>
                                <div className="mb-4 d-flex justify-content-between align-items-center">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                                        <label className="form-check-label text-muted" htmlFor="rememberMe">Remember me</label>
                                    </div>
                                    <Link to="/forgot-password" title="Forgot password?" className="text-decoration-none fw-bold">Forgot password?</Link>
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg w-100 py-3 fs-5 rounded-3 shadow-sm mb-4">Login</button>
                            </form>

                            <div className="text-center">
                                <p className="mb-0 text-muted">Don't have an account? <Link to="/register" className="fw-bold text-primary text-decoration-none">Create Account</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
