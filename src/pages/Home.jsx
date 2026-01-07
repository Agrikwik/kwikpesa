import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className="hero w-100">
                <div className="container-fluid px-4 px-lg-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-white text-center text-lg-start">
                            <h1 className="display-3 fw-bold">Fast, Secure Digital Payments in Malawi</h1>
                            <p className="lead fs-4">KwikPesa is your all-in-one payment gateway. Send, receive, and accept payments instantly via bank transfers, cards, Airtel Money, or TNM Mpamba.</p>
                            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3 mt-4">
                                <Link to="/register" className="btn btn-light btn-lg px-5 py-3 fs-5">Create Account</Link>
                                <Link to="/pricing" className="btn btn-outline-light btn-lg px-5 py-3 fs-5">View Fees</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 text-lg-end mt-5 mt-lg-0">
                            <img src="/assets/images/hero_payment.png" alt="Digital payments" className="img-fluid rounded-4 shadow-lg hero-image ms-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-5 w-100">
                <div className="container-fluid px-4 px-lg-5">
                    <h2 className="text-center mb-5 display-5 fw-bold text-primary">How KwikPesa Works</h2>
                    <div className="row g-4 text-center">
                        <div className="col-md-3">
                            <i className="bi bi-person-plus-fill display-3 text-primary mb-3 d-block"></i>
                            <h4 className="fw-bold">Sign Up</h4>
                            <p className="text-muted">Create your KwikPesa account in minutes and verify securely.</p>
                        </div>
                        <div className="col-md-3">
                            <i className="bi bi-wallet2 display-3 text-primary mb-3 d-block"></i>
                            <h4 className="fw-bold">Add Funds</h4>
                            <p className="text-muted">Top up your wallet via bank, card, Airtel Money, or TNM Mpamba.</p>
                        </div>
                        <div className="col-md-3">
                            <i className="bi bi-arrow-right-circle-fill display-3 text-primary mb-3 d-block"></i>
                            <h4 className="fw-bold">Make Payments</h4>
                            <p className="text-muted">Send money to anyone instantly or pay merchants easily.</p>
                        </div>
                        <div className="col-md-3">
                            <i className="bi bi-pie-chart-fill display-3 text-primary mb-3 d-block"></i>
                            <h4 className="fw-bold">Track Transactions</h4>
                            <p className="text-muted">Monitor your payment history and transaction analytics anytime.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transaction Fee Highlight */}
            <section className="bg-light py-5 w-100">
                <div className="container-fluid px-4 px-lg-5 text-center">
                    <h2 className="display-5 fw-bold text-primary">Transparent Fees</h2>
                    <p className="mb-5 fs-5 text-muted">Every payment processed through KwikPesa carries a flat <strong>3%</strong> fee.</p>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="card shadow-lg p-4 p-lg-5 border-0 rounded-4">
                                <h3 className="fw-bold text-primary mb-4">All Methods Covered</h3>
                                <div className="row g-3">
                                    <div className="col-6 text-start">
                                        <div className="d-flex align-items-center mb-3">
                                            <i className="bi bi-bank fs-3 me-3 text-primary"></i>
                                            <span className="fs-5 fw-medium">Bank Transfers</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-credit-card-2-front fs-3 me-3 text-primary"></i>
                                            <span className="fs-5 fw-medium">Card Payments</span>
                                        </div>
                                    </div>
                                    <div className="col-6 text-start">
                                        <div className="d-flex align-items-center mb-3">
                                            <i className="bi bi-phone fs-3 me-3 text-primary"></i>
                                            <span className="fs-5 fw-medium">Airtel Money</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-phone-fill fs-3 me-3 text-primary"></i>
                                            <span className="fs-5 fw-medium">TNM Mpamba</span>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/register" className="btn btn-primary btn-lg mt-5 px-5 py-3 fs-5 w-100 rounded-3">Start Using KwikPesa</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Showcase / Visuals */}
            <section className="py-5 w-100 showcase">
                <div className="container-fluid px-4 px-lg-5">
                    <h2 className="text-center mb-5 display-5 fw-bold text-primary">See KwikPesa in Action</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card shadow-sm border-0 rounded-4 h-100">
                                <img src="/assets/images/transaction_secure.png" className="card-img-top rounded-top-4" alt="Merchant dashboard" />
                                <div className="card-body p-4 text-start">
                                    <h4 className="card-title fw-bold">Merchant Tools</h4>
                                    <p className="card-text text-muted">Easy-to-use merchant tools for tracking payments and settlements.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm border-0 rounded-4 h-100">
                                <img src="/assets/images/payment_methods.png" className="card-img-top rounded-top-4" alt="Mobile payments" />
                                <div className="card-body p-4 text-start">
                                    <h4 className="card-title fw-bold">Mobile & Card</h4>
                                    <p className="card-text text-muted">Accept payments from mobile wallets and cards with confidence.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm border-0 rounded-4 h-100">
                                <img src="/assets/images/hero_payment.png" className="card-img-top rounded-top-4" alt="Security" />
                                <div className="card-body p-4 text-start">
                                    <h4 className="card-title fw-bold">Built-in Security</h4>
                                    <p className="card-text text-muted">Industry-standard encryption and fraud protection for every transaction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center py-5 w-100 bg-primary text-white">
                <div className="container-fluid px-4 px-lg-5">
                    <h3 className="display-4 fw-bold mb-4">Ready to get started?</h3>
                    <p className="lead mb-5 fs-4">Join thousands of merchants already using KwikPesa.</p>
                    <Link to="/register" className="btn btn-light btn-lg px-5 py-3 fs-5 rounded-3">Create Your Account Now</Link>
                </div>
            </section>
        </>
    );
};

export default Home;
