import React from "react";
import "./Contact.css";

const ContactUs = () => {
    return (
        <main className="main d-flex justify-content-center align-items-center">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="contact-form">
                            <h2 className="text-center mb-4">Contact Us</h2>
                            <form method="POST">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="name" 
                                        name="name" 
                                        placeholder="Your Name" 
                                        required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        name="email" 
                                        placeholder="Your Email" 
                                        required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea 
                                        className="form-control" 
                                        id="message" 
                                        name="message" 
                                        rows="5" 
                                        placeholder="Your Message" 
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn submit-btn w-100">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactUs;
