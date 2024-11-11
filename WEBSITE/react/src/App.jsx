import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modern from "./pages/Modern/modern";
import Traditional from "./pages/Traditional/traditional";
import ContactUs from "./pages/ContactUs/contactus";
import Upload from "./pages/Upload/upload";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
// import Homepage from "./pages/Homepage/Home";
import "./styles/variables.css";
import "./styles/main.css";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/" element={<Home />} />  */}
                <Route path="/modern" element={<Modern />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/traditional" element={<Traditional />} />
                <Route path="/contactus" element={<ContactUs />} />
            </Routes>
        </Router>
    );
}

export default App;
