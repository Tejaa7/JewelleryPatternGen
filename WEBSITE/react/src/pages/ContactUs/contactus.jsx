import React from "react";
import Navbar from "../../components/Global/Navbar"
import Contact from "../../components/Contactus/Contact"
import Footer from "../../components/Global/Footer";



export const ContactUs = () => {
    return (
        <section className="contactus-page" >
            <Navbar />
            <Contact />
            <Footer />
        </section>
    );
};

export default ContactUs;
