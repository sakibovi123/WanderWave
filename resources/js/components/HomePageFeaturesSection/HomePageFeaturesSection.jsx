import React from "react";
import productFeaturesImg from "../../../../public/assets/img/product-features.png";

const HomePageFeaturesSection = () => {
  return (
    <section id="features">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-8 offset-lg-4">
            <div className="section-header">
              <h3 className="section-title">Product Featuress</h3>
              <span className="section-divider"></span>
            </div>
          </div>

          <div className="col-lg-4 col-md-5 features-img">
            <img src={productFeaturesImg} alt="" data-aos="fade-right" />
          </div>

          <div className="col-lg-8 col-md-7 ">
            <div className="row">
              <div className="col-lg-6 col-md-6 box" data-aos="fade-up">
                <div className="icon">
                  <i className="bi bi-briefcase"></i>
                </div>
                <h4 className="title">
                  <a href="#">Safe & Reliability</a>
                </h4>
                <p className="description">
                  {" "}
                  We Provide Safe CloakRoom Service.{" "}
                </p>
              </div>
              <div className="col-lg-6 col-md-6 box" data-aos="fade-up">
                <div className="icon">
                  <i className="bi bi-card-checklist"></i>
                </div>
                <h4 className="title">
                  <a href="#">Verified Room</a>
                </h4>
                <p className="description">Verified CloakRoom Providers.</p>
              </div>
              <div
                className="col-lg-6 col-md-6 box"
                data-aos="fade-up"
                dat-aos-delay="100"
              >
                <div className="icon">
                  <i className="bi bi-binoculars"></i>
                </div>
                <h4 className="title">
                  <a href="#">Total Security</a>
                </h4>
                <p className="description">Fully Verified Luggage Check-In </p>
              </div>
              <div
                className="col-lg-6 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon">
                  <i className="bi bi-brightness-high"></i>
                </div>
                <h4 className="title">
                  <a href="#">24x7 Services</a>
                </h4>
                <p className="description">
                  We Provide you with full 24x7 hours facility with Help Centre.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageFeaturesSection;
