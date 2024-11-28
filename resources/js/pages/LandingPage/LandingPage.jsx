import React from "react";
// imports
import "../../../../public/assets/css/style.css";
import "../../../../public/assets/vendor/aos/aos.css";
import "../../../../public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../../../public/assets/vendor/glightbox/css/glightbox.min.css";

import HomePageHeader from "../../components/HomePageHeader/HomePageHeader";
import HeroSection from "../../components/HeroSection/HeroSection";
import HomePageMainSection from "../../components/HomePageMainSection/HomePageMainSection";
import HomePageFooter from "../../components/HomePageFooter/HomePageFooter";

const LandingPage = () => {
  return (
    <div>
      <HomePageHeader></HomePageHeader>

      <HeroSection></HeroSection>

      <HomePageMainSection></HomePageMainSection>

      <HomePageFooter></HomePageFooter>
    </div>
  );
};

export default LandingPage;
