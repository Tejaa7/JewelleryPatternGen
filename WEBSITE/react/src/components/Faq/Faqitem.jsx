import React from 'react';

const FAQItem = ({ id, question, answer }) => {
    return (
        <div className="accordion-item">
            <p className="accordion-header" id={`heading${id}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
                    {question}
                </button>
            </p>
            <div id={`collapse${id}`} className="accordion-collapse collapse" aria-labelledby={`heading${id}`} data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default FAQItem;
