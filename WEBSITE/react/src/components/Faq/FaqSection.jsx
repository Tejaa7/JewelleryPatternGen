import React from 'react';
import FAQItem from './Faqitem';

const FAQSection = () => {
    const faqItems = [
        { id: 1, question: "How do I upload my jewelry sketch?", answer: "To upload your sketch, click the 'Upload Your Sketch' button on the homepage or in the upload page. We accept files in JPEG, PNG" },
        { id: 2, question: "What kind of sketches can I submit?", answer: "You can submit clear and detailed sketches, whether hand-drawn or digital. Ensure the design outlines are visible and the proportions are accurate for best results." },
        {id: 3,question: "How long does it take to convert my sketch into a 2D image?",answer: "The conversion processes instantly regardless of the complexity of the design."},
        {id: 5,question: "Can I edit the 2D model after receiving it?",answer: "Unfortunately, once the 2D model is finalized, it cannot be edited. However, if you're unsatisfied, you can try regenerating again"},
        {id: 7,question: "How is my personal data and design protected?",answer: "Your privacy is important to us. We store your design in a secure environment, and it will not be shared or used for any purpose without your consent."},
        {id: 8,question: "Can I convert multiple sketches at once?",answer: "No, you cannot upload multiple sketches at once. "},
    ];

    return (
        <footer className="bg-dark text-white">
        <section className="faq-section py-5">
            <div className="container">
                <h2 className="text-center mb-5 text-white" style={{fontSize:'45px'}}>Frequently Asked Questions</h2>
                <div className="accordion" id="faqAccordion">
                    {faqItems.map((item) => (
                        <FAQItem key={item.id} id={item.id} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </section>
        </footer>
    );
};

export default FAQSection;