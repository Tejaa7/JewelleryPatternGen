import React from 'react';
import { Link } from 'react-router-dom';

export const Brandheader = () => {
    return (
        <div className="x">
            <header className="brand-header cormorant-sc-medium1">
                <Link className="brandname" to="/Home">LuminairE</Link>
            </header>
            </div>
    );
};

export default Brandheader;