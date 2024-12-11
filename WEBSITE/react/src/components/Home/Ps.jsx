import React from 'react';

const ProblemSolutionSection = ({ title, description, videoSrc, reverse }) => {
    return (
        <section className="problem-solution-section">
            <div className="container">
                <div className={`row d-flex align-items-center ${reverse ? 'flex-row-reverse' : ''}} style={{ margin: 0 }`}>
                    <div className="col-lg-6 d-flex justify-content-center" style={{ border: 'none', margin: 0, padding: 0 }}>
                        <video className="img-fluid" autoPlay muted loop style={{ maxHeight: '100%', width: '100%', objectFit: 'cover', border: 'none', margin: 0, padding: 0 }}>
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="col-lg-6">
                        <h2 style={{fontSize:'45px',color:'black',padding:'0 0 5px 0'}}>{title}</h2>
                        <p >{description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolutionSection;