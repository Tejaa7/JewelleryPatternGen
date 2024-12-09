import React from "react";
import Carousel from '../../components/Aboutus/Carousel'
import Context from '../../components/Aboutus/Context'
import Navbar from "../../components/Global/Navbar";
import Footer from "../../components/Global/Footer";
// import { Link } from 'react-router-dom';

export const AboutUs = () => {
  return (
    <div>
    <Navbar />
    <Context />
    <Carousel />
    <Footer />
    </div>
  );
};

export default AboutUs;
