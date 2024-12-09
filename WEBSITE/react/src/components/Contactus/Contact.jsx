import React, { useState } from "react";
import "./Contact.css";

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setResponseMessage("Your message has been sent successfully!");
                setFormData({ name: "", email: "", message: "" }); // Clear the form
            } else {
                setResponseMessage(data.message || "Failed to send the message.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setResponseMessage("An error occurred. Please try again later.");
        }
    };

    return (
        <main className="main d-flex justify-content-center align-items-center">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="contact-form">
                            <h2 className="text-center mb-4">Contact Us</h2>
                            <form method="POST" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
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
                                        value={formData.email}
                                        onChange={handleChange}
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
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn submit-btn w-100">Send Message</button>
                                {responseMessage && <p className="mt-3">{responseMessage}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactUs;
