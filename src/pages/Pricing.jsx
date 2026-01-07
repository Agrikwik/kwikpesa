import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <section className="py-5 w-100">
            <div className="container-fluid px-4 px-lg-5">
                <div className="pricing-header text-center mb-5">
                    <h2 className="display-4 fw-bold text-primary mb-3">Simple, Transparent Pricing</h2>
                    <p className="lead fs-4 text-muted mx-auto" style={{ maxWidth: '800px' }}>No hidden fees. No surprises. Just straightforward pricing for your transactions.</p>
                </div>

                {/* Main Pricing Card */}
                <div className="row g-4 justify-content-center mb-5">
                    <div className="col-md-8 col-lg-6">
                        <div className="card pricing-card featured-card shadow-lg border-0 rounded-4 overflow-hidden">
                            <div className="card-body p-5">
                                <div className="pricing-badge mb-4">Most Popular</div>
                                <div className="text-center mb-5">
                                    <h1 className="display-1 fw-bold text-primary mb-0">3%</h1>
                                    <p className="fs-4 text-muted">Flat transaction fee</p>
                                </div>
                                <ul className="pricing-features list-unstyled mb-5 fs-5">
                                    <li className="d-flex align-items-center mb-3"><i className="bi bi-check-circle-fill text-success me-3 fs-4"></i> Bank Transfers</li>
                                    <li className="d-flex align-items-center mb-3"><i className="bi bi-check-circle-fill text-success me-3 fs-4"></i> Card Payments</li>
                                    <li className="d-flex align-items-center mb-3"><i className="bi bi-check-circle-fill text-success me-3 fs-4"></i> Airtel Money</li>
                                    <li className="d-flex align-items-center mb-3"><i className="bi bi-check-circle-fill text-success me-3 fs-4"></i> TNM Mpamba</li>
                                    <li className="d-flex align-items-center mb-3"><i className="bi bi-check-circle-fill text-success me-3 fs-4"></i> No minimum transaction</li>
                                    <li className="d-flex align-items-center mb-3"><i className="bi bi-check-circle-fill text-success me-3 fs-4"></i> Instant settlement</li>
                                </ul>
                                <Link to="/register" className="btn btn-primary btn-lg w-100 py-3 fs-4 rounded-3 shadow-sm">Get Started Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Benefits */}
                <div className="row g-4 mt-5">
                    <div className="col-md-6 col-lg-4">
                        <div className="benefit-card card shadow-sm p-4 h-100 border-0 rounded-4 text-center">
                            <div className="benefit-icon mb-4">
                                <i className="bi bi-lock-fill text-primary display-4"></i>
                            </div>
                            <h4 className="fw-bold mb-3">Transparent</h4>
                            <p className="text-muted fs-5">No hidden charges or surprise fees. What you see is what you pay.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="benefit-card card shadow-sm p-4 h-100 border-0 rounded-4 text-center">
                            <div className="benefit-icon mb-4">
                                <i className="bi bi-lightning-charge-fill text-success display-4"></i>
                            </div>
                            <h4 className="fw-bold mb-3">Fast Payouts</h4>
                            <p className="text-muted fs-5">Get your money instantly. No waiting, no delays, just fast settlements.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="benefit-card card shadow-sm p-4 h-100 border-0 rounded-4 text-center">
                            <div className="benefit-icon mb-4">
                                <i className="bi bi-people-fill text-info display-4"></i>
                            </div>
                            <h4 className="fw-bold mb-3">For Everyone</h4>
                            <p className="text-muted fs-5">Whether you're a freelancer, merchant, or business, we have the right plan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
