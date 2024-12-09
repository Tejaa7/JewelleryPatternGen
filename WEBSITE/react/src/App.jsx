import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modern from "./pages/Modern/modern";
import Traditional from "./pages/Traditional/traditional";
import ContactUs from "./pages/ContactUs/contactus";
import Upload from "./pages/Upload/upload";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import AboutUs from "./pages/AboutUs/Aboutus";
import Homepage from "./pages/Homepage/Home";
import Forgotps from './pages/Forgotps/Forgot';




function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />  
                <Route path="/login" element={<Login />} />  
                <Route path="/Home" element={<Homepage />} />  
                <Route path="/modern" element={<Modern />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/traditional" element={<Traditional />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/Forgot" element={<Forgotps />} />
                <Route path="/contactus" element={<ContactUs />} />
            </Routes>
        </Router>
    );
}

export default App;
