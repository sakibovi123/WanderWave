import React from "react";

const HomePageCallToActionSection = () => {
  return (
    <section id="call-to-action">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-lg-start text-center">
            <h3 className="cta-title">Call To Action</h3>
            <p className="cta-text">Need any Assistance </p>
            <p className="cta-text">Feel Free to Contact Us </p>
            <p className="cta-text">
              Our 24x7 Customer is always there to Listen to your Queries and
              Help you to Solve your Queries ASAP{" "}
            </p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#contact">
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageCallToActionSection;
