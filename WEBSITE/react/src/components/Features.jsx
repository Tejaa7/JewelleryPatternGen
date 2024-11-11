import React from 'react';

const FeaturedProducts = () => {
    return (
        <div className="container my-5">
            <div className="text-section text-center mb-5">
                <h2 className="gridt heading fluid-heading">Featured Products</h2>
            </div>
            
            <div className="row">
                {[1, 2, 3].map((item, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
                        <div className="grid-item shadow-sm" style={{ height: '400px' }}> 
                            <a href={`/product${item}`}>
                                <img src="/images/home/comp.avif" alt={`Product ${item}`} className="img-fluid rounded mb-3" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
                            </a>
                            <h4 className="heading1">{item === 1 ? 'Elegant Necklace' : item === 2 ? 'Stylish Earrings' : 'Classic Bracelet'}</h4>
                            <p className="para">
                                {item === 1 ? 'A beautifully crafted necklace that showcases your style.' : item === 2 ? 'Add a touch of elegance with these stunning earrings.' : 'Timeless elegance in every detail of this bracelet.'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
