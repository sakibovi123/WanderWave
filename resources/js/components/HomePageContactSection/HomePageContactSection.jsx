import React from "react";

const HomePageContactSection = () => {
  return (
    <section id="contact">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="contact-about">
              <h3>VIALUGGAGE</h3>
              <p>
                Our project aims to simplify and bring in advanced luggage
                storage solutions for tourists and visitors alike at several
                locations with utmost security and affordability.
              </p>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/prak_aaditya/"
                  className="instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://www.instagram.com/m.nishant_/"
                  className="instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://www.instagram.com/varun.awana/"
                  className="instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="info">
              <div>
                <i className="bi bi-geo-alt"></i>
                <a href="https://goo.gl/maps/JVk2Vv7CB73Fo9aX8">
                  {" "}
                  ViaLuggage Pvt. Ltd., Dwarka Mor
                  <br />
                  New Delhi, IN 110059
                </a>
              </div>
              <p></p>
              <div>
                <i className="bi bi-envelope"></i>
                <a href="mailto:support.team@vialuggage.org">
                  {" "}
                  support.team@vialuggage.org
                </a>
              </div>
              <p></p>
              <div>
                <i className="bi bi-phone"></i>
                <a href="tel:+91 9871322384"> +91 9871322384</a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-8">
            <div className="form">
              <form
                action="https://formspree.io/f/mjvjbnpe"
                method="POST"
                role="form"
                className="php-email-form"
                id="my-form"
              >
                <div className="row">
                  <div className="form-group col-lg-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                  </div>
                  <div className="form-group col-lg-6 mt-lg-0 mt-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="Mobile Number"
                      id="phone"
                      placeholder="Your Mobile Number"
                      data-rule="phone"
                      data-msg="Please enter a valid Mobile Number"
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                </div>
                <div className="text-center">
                  <button type="submit" title="Send Message">
                    Send Message
                  </button>
                </div>
              </form>
              <p></p>
              <div id="status"></div>
            </div>
          </div>
        </div>
        <script src="assets/vendor/php-email-form/validate.js"></script>
      </div>
    </section>
  );
};

export default HomePageContactSection;
