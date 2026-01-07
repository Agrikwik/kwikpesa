import React from 'react';

const Contact = () => {
    return (
        <section className="py-5 w-100">
            <div className="container-fluid px-4 px-lg-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                            <div className="row g-0">
                                <div className="col-md-5 bg-primary p-5 text-white d-flex flex-column justify-content-center">
                                    <h2 className="display-4 fw-bold mb-4">Get in Touch</h2>
                                    <p className="lead mb-5">Have questions? We're here to help you get started with KwikPesa.</p>

                                    <div className="d-flex align-items-center mb-4">
                                        <div className="bg-white bg-opacity-25 rounded-circle p-3 me-4">
                                            <i className="bi bi-envelope-fill fs-3"></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-1 fw-bold">Email Support</h5>
                                            <p className="mb-0 opacity-75">support@kwikpesa.com</p>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center mb-4">
                                        <div className="bg-white bg-opacity-25 rounded-circle p-3 me-4">
                                            <i className="bi bi-telephone-fill fs-3"></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-1 fw-bold">Call Us</h5>
                                            <p className="mb-0 opacity-75">+265 888 123 456</p>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4">
                                        <div className="d-flex gap-3">
                                            <a href="#" className="btn btn-outline-light rounded-circle p-2"><i className="bi bi-facebook fs-5"></i></a>
                                            <a href="#" className="btn btn-outline-light rounded-circle p-2"><i className="bi bi-twitter fs-5"></i></a>
                                            <a href="#" className="btn btn-outline-light rounded-circle p-2"><i className="bi bi-linkedin fs-5"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 p-5 bg-white">
                                    <form className="text-start">
                                        <div className="row g-3">
                                            <div className="col-12 mb-3">
                                                <label className="form-label fw-bold">Full Name</label>
                                                <input type="text" className="form-control form-control-lg bg-light border-0 py-3 px-4" placeholder="Your Name" required />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="form-label fw-bold">Email Address</label>
                                                <input type="email" className="form-control form-control-lg bg-light border-0 py-3 px-4" placeholder="name@example.com" required />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="form-label fw-bold">Subject</label>
                                                <input type="text" className="form-control form-control-lg bg-light border-0 py-3 px-4" placeholder="How can we help?" required />
                                            </div>
                                            <div className="col-12 mb-4">
                                                <label className="form-label fw-bold">Message</label>
                                                <textarea className="form-control form-control-lg bg-light border-0 py-3 px-4" rows="4" placeholder="Your message here..." required></textarea>
                                            </div>
                                            <div className="col-12 text-end">
                                                <button type="submit" className="btn btn-primary btn-lg px-5 py-3 fs-5 rounded-3 shadow-sm">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
