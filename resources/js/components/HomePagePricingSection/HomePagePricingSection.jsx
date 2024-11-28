import React from "react";
import pricingTag1Img from "../../../../public/assets/img/pricing-tag-1.png";
import pricingTag2Img from "../../../../public/assets/img/pricing-tag-2.png";

const HomePagePricingSection = () => {
  return (
    <section id="pricing" className="section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3 className="section-title">Pricing</h3>
          <span className="section-divider"></span>
          <p className="section-description">
            Our Main Focus is to Provide our ustomers Cheapest CloakRooms with
            High Security
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="box">
              <ul>
                <img src={pricingTag1Img} />
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="box featured">
              <h3>VIALUGGAGE PLAN</h3>
              <h4>
                <sup>₹</sup>100<span>PerBag/hr</span>
              </h4>
              <h4>
                <sup>₹</sup>2000<span>PerDay*</span>
              </h4>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i> Safety{" "}
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Hour and Day booking
                  available
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Fully Maintained
                  CloakRoom{" "}
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> ID Verification at
                  CloakRoom
                </li>
              </ul>
              <a href="LoginPage/SignIN.html" className="get-started-btn">
                Book Now
              </a>
              <h3>
                <sup>*</sup>No Limit on<span> Luggage</span>
              </h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="box">
              <ul>
                <img src={pricingTag2Img} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePagePricingSection;
