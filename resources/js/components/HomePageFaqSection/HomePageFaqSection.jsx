import React from "react";

const HomePageFaqSection = () => {
  return (
    <section id="faq">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">Frequently Asked Questions</h3>
          <span className="section-divider"></span>
          <p className="section-description">
            VIALUGGAGE WELCOMES YOU. FEEL FREE TO ASK ANYTHING
          </p>
        </div>

        <ul className="faq-list">
          <li>
            <div
              data-bs-toggle="collapse"
              className="collapsed question"
              href="#faq1"
            >
              Q: What is viaLuggage?{" "}
              <i className="bi bi-chevron-down icon-show"></i>
              <i className="bi bi-chevron-up icon-close"></i>
            </div>
            <div id="faq1" className="collapse" data-bs-parent=".faq-list">
              <p>
                viaLuggage is India's online aggregator for luggage storage in
                India. Founded in 2021 by company name viaLuggage Services
                Private Limited. viaLuggage is having Luggage storage sites
                located inside existing businesses, including retail outlets,
                hotels, cafes, and more. Every piece of luggage is secured with
                unique security seals provided for free at viaLuggage partner
                location.
              </p>
            </div>
          </li>

          <li>
            <div
              data-bs-toggle="collapse"
              href="#faq2"
              className="collapsed question"
            >
              {" "}
              Q. How do I make a booking?
              <i className="bi bi-chevron-down icon-show"></i>
              <i className="bi bi-chevron-up icon-close"></i>
            </div>
            <div id="faq2" className="collapse" data-bs-parent=".faq-list">
              <p>
                Go on the top of the home page and choose the desired location,
                time and date after that you will get the list of the partner
                and you can choose any one of them.
              </p>
            </div>
          </li>

          <li>
            <div
              data-bs-toggle="collapse"
              href="#faq3"
              className="collapsed question"
            >
              Q. How do I calculate the price?{" "}
              <i className="bi bi-chevron-down icon-show"></i>
              <i className="bi bi-chevron-up icon-close"></i>
            </div>
            <div id="faq3" className="collapse" data-bs-parent=".faq-list">
              <p>
                Price shown online is for each bag for the first day and
                subsequent day cost less.
              </p>
            </div>
          </li>

          <li>
            <div
              data-bs-toggle="collapse"
              href="#faq4"
              className="collapsed question"
            >
              Q. What are the acceptable items for storage and is there a size
              or weight limit?<i className="bi bi-chevron-down icon-show"></i>
              <i className="bi bi-chevron-up icon-close"></i>
            </div>
            <div id="faq4" className="collapse" data-bs-parent=".faq-list">
              <p>
                All item are acceptable except that don't come as per law of
                goverment of India like drugs and arm. Regarding Size and
                Weight: Any luggage size which can be handle by a single person.
              </p>
            </div>
          </li>

          <li>
            <div
              data-bs-toggle="collapse"
              href="#faq5"
              className="collapsed question"
            >
              Q. What is the maximum duration for storing my items?
              <i className="bi bi-chevron-down icon-show"></i>
              <i className="bi bi-chevron-up icon-close"></i>
            </div>
            <div id="faq5" className="collapse" data-bs-parent=".faq-list">
              <p>
                No, there is no duration limit. You can keep your luggage as
                long as want.
              </p>
            </div>
          </li>

          <li>
            <div
              data-bs-toggle="collapse"
              href="#faq6"
              className="collapsed question"
            >
              Q. How can I find the directions to the shop where I want to store
              my bags? <i className="bi bi-chevron-down icon-show"></i>
              <i className="bi bi-chevron-up icon-close"></i>
            </div>
            <div id="faq6" className="collapse" data-bs-parent=".faq-list">
              <p>
                Please go through the google map location sent you on the
                booking confirmation mail.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomePageFaqSection;
