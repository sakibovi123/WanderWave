import React from "react";
import userImg from "../../../../public/assets/img/user.png";

const HomePageHeader = () => {
  return (
    <header
      id="header"
      className="fixed-top d-flex align-items-center header-transparent"
    >
      <div className="d-flex justify-content-between align-items-center container">
        <div id="logo">
          <h1>
            <a href="index-2.html">viaLuggage</a>
          </h1>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#features">
                Features
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#faq">
                FAQ's
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Team
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#gallery">
                Gallery
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <ul>
            <li className="dropdown">
              <a href="#">
                <span>
                  {" "}
                  <img src={userImg} size="16x16" />{" "}
                </span>{" "}
                <i className="bi bi-chevron-down"></i>
              </a>{" "}
            </li>

            <li>
              <a href="ProfileSection/profile.html">
                <span>Profile</span>{" "}
              </a>
            </li>
            <li>
              <a href="ProfileSection/MyBooking/index.html">
                <span>My Bookings</span>{" "}
              </a>
            </li>
            <li>
              {/* onclick="logout()" */}
              <a href="#">LogOut</a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default HomePageHeader;
