import React from "react";
import aboutImg from "../../../../public/assets/img/about-img.jpg";

const HomePageAboutSection = () => {
  return (
    <section id="about" className="section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="section-header">
          <h3 className="section-title">About Us</h3>
          <span className="section-divider"></span>
          <p className="section-description">
            VIALUGGAGE IS A START-UP BASED COMPANY TO CHANGE INDIAN TOURISM
            STYLE. WE ARE PROVIDING YOU COMFORT FROM YOUR LUGGAGE THROUGHOUT
            YOUR TRIP.
          </p>
        </div>

        <div className="row">
          <div
            className="col-lg-6 about-img"
            data-aos="fade-right"
            dat-aos-delay="100"
          >
            <img src={aboutImg} alt="" />
          </div>

          <div
            className="col-lg-6 content"
            data-aos="fade-left"
            dat-aos-delay="100"
          >
            <h2>
              Our project aims to simplify and bring in advanced luggage storage
              solutions for tourists and visitors alike at several locations
              with utmost security and affordability.
            </h2>
            <h3>
              To bring in affordability along with reliable security in the
              market to help customers to be free from exploitation due to the
              monopoly created by hotel chains through overcharging and a high
              market share.
            </h3>
            <p>
              It’s not uncommon to see tourists and visitors carrying their
              heavy luggage across different places to avoid massive costs of
              checking into expensive hotels just to have a safe space for their
              luggage. Neither people are very comfortable at cloakrooms due to
              security issues, ViaLuggage places itself in this very gap created
              between the lack of providers and the needs of the customers.{" "}
            </p>

            <ul>
              <li>
                <i className="bi bi-check-circle"></i> Safe & Reliability{" "}
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Security{" "}
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Affordability{" "}
              </li>
            </ul>

            <p>
              A future proof business would be the outcome of the project which
              would be directly linked to the tourism and travel, packers and
              movers industry. A sustained revenue source would be very much
              possible with greater expansion with the help of first large-scale
              mover advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageAboutSection;
