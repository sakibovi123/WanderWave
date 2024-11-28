import React from "react";

const HomePageMoreFeaturesSection = () => {
  return (
    <section id="more-features" className="section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3 className="section-title">More Features</h3>
          <span className="section-divider"></span>
          <p className="section-description">
            Our Motto is Simple just : "Keep Storing and Exploring"
          </p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="box">
              <div className="icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h4 className="title">
                <a href="#">Secure Check-In</a>
              </h4>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="box">
              <div className="icon">
                <i className="bi bi-card-checklist"></i>
              </div>
              <h4 className="title">
                <a href="#">ID Card Verification</a>
              </h4>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="box">
              <div className="icon">
                <i className="bi bi-bar-chart"></i>
              </div>
              <h4 className="title">
                <a href="#">Affordable</a>
              </h4>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="box">
              <div className="icon">
                <i className="bi bi-binoculars"></i>
              </div>
              <h4 className="title">
                <a href="#">Secure Lock</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageMoreFeaturesSection;
