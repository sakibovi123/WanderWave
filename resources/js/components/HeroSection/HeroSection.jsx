import React from "react";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="hero-text" data-aos="zoom-out">
        <h2>Welcome to viaLuggage</h2>
        <p>VIALUGGAGE IS A START-UP COMPANY TO CHANGE INDIAN TOURISM STYLE </p>
        <a href="booking-page/index.html" className="btn-get-started scrollto">
          Book Now
        </a>
        <a href="#about" className="btn-get-started scrollto">
          Explore Us
        </a>
      </div>
      <div className="page-wrap">
        <div className="city-page-top">
          <div className="city-name container"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
