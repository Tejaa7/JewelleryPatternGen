import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modern from "./pages/Modern/modern";
import "./styles/variables.css";
import "./styles/main.css";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/modern" element={<Modern />} />
            </Routes>
        </Router>
    );
}

export default App;
