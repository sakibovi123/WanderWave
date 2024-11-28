import React from "react";

const HomePageFooter = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-lg-start text-center">
            <div className="copyright">
              &copy; Copyright <strong>viaLuggage Pvt. Ltd.</strong>. All Rights
              Reserved
            </div>
            <div className="credits"></div>
          </div>
          <div className="col-lg-6">
            <nav className="footer-links text-lg-right pt-lg-0 pt-2 text-center">
              <a href="#hero" className="scrollto">
                Home
              </a>
              <a href="#about" className="scrollto">
                About
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomePageFooter;
