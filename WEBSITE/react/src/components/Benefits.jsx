import React from 'react';


const BenefitsSection = () => {
    return (
        <section className="benefits-section">
            <div className="fluid-container bc">
                <h2 className="bg text-center mb-5 heading cormorant-sc-medium">Advancements</h2>
                <div className="row text-center">
                    <div className="col-md-4">
                        <i className="bi bi-search" style={{ fontSize: '4rem' }}></i>
                        <h4>Enhanced Visualization</h4>
                        <p>Explain the first benefit here.</p>
                    </div>
                    <div className="col-md-4">
                        <i className="bi bi-hourglass-split" style={{ fontSize: '4rem' }}></i>
                        <h4>Time Efficiency</h4>
                        <p>Our service significantly reduces the time required to convert jewelry sketches into 2D images, allowing designers to focus on creativity.</p>
                    </div>
                    <div className="col-md-4">
                        <i className="bi bi-brush" style={{ fontSize: '4rem' }}></i>
                        <h4>Increased Design Accuracy</h4>
                        <p>Explain the third benefit here.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
