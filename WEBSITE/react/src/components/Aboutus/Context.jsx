import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './context.css'


export const Context = () => {
  return(
<div className="aboutus">
<section className="container-fluid my-5">
<div className="row align-items-center first">
  <div className="col-md-6" style={{padding:'0'}}>
    <img
      src="/images/aboutus/abtus1.avif"
      alt="Travel"
      className="img-fluid "
      style={{width:'800px',height:'600px'}}
    />
  </div>
  <div className="col-md-6" style={{paddingLeft:'80px',paddingRight:'80px'}}>
    <h1 className="fw-bold" style={{fontSize:'49px',fontFamily:'Times New Roman'}}>Our Story</h1>
    <p className="text-muted">
    Luminaire was born out of a shared passion for combining art and technology. 
    As students at Keshav Memorial Institute of Technology (KMIT), 
    we saw the challenges faced by jewelry designers and artisans in visualizing their creations. 
    Traditional methods often require a significant investment of time, effort, and resources.
    This inspired us to reimagine the design process by creating a platform where innovation meets artistry.
    </p>
  </div>
</div>
</section>
<section className="container my-5">
<div className="row align-items-center">
  <div className="col-md-6" style={{paddingLeft:'80px',paddingRight:'80px'}}>
    <h2 className="fw-bold" style={{fontSize:'49px',fontFamily:'Times New Roman'}}>Our Journey</h2>
    <p className="text-muted">
    When we started, Luminaire was just an ambitious idea on paper. 
    The road wasn’t easy—there were countless nights spent coding, testing, and refining our platform. 
    Early challenges included integrating machine learning models like GANs and CNNs to accurately transform sketches into 2D designs. 
    Today, Luminaire has grown into a robust platform, offering users tools to create precise, customizable 2D jewelry designs from sketches. 
    With features like 360-degree views in the works and the potential for 3D modeling on the horizon, we continue to push boundaries and enhance our offerings.
    </p>
  </div>
  <div className="col-md-6" style={{padding:'0'}}>
    <img
      src="/images/aboutus/abtus1.avif"
      alt="Travel"
      className="img-fluid rounded"
    />
  </div>
</div>
</section>

  <section className="container my-5">
  <div className="row align-items-center">
    <div className="col-md-6" style={{padding:'0'}}>
      <img
        src="/images/aboutus/abtus1.avif"
        alt="Travel"
        className="img-fluid rounded"
      />
    </div>
    <div className="col-md-6" style={{paddingLeft:'80px',paddingRight:'80px'}}>
      <h2 className="fw-bold" style={{fontSize:'49px',fontFamily:'Times New Roman'}}>Our Mission and Vision</h2>
      <p className="text-muted">
      Our mission is to empower jewelry designers, artisans, and entrepreneurs by providing them with accessible, cutting-edge tools to bring their ideas to life.
      We envision a future where anyone with a creative spark can seamlessly transform their jewelry concepts into reality. By continually innovating and enhancing our platform, 
      we aim to make the jewelry design process intuitive, efficient, and limitless.
With Luminaire, the possibilities are endless. Whether you’re a seasoned jeweler or an aspiring designer, we’re here to help you turn your vision into timeless creations.
      </p>
    </div>
  </div>
</section>
</div>
  );
};

export default Context;