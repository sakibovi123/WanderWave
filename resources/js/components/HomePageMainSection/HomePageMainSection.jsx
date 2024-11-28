import React from "react";
import HomePageAboutSection from "../HomePageAboutSection/HomePageAboutSection";
import HomePageFeaturesSection from "../HomePageFeaturesSection/HomePageFeaturesSection";
import HomePageCallToActionSection from "../HomePageCallToActionSection/HomePageCallToActionSection";
import HomePageMoreFeaturesSection from "./HomePageMoreFeaturesSection";
import HomePagePricingSection from "../HomePagePricingSection/HomePagePricingSection";
import HomePageFaqSection from "../HomePageFaqSection/HomePageFaqSection";
import HomePageGallerySection from "../HomePageGallerySection/HomePageGallerySection";
import HomePageContactSection from "../HomePageContactSection/HomePageContactSection";

const HomePageMainSection = () => {
  return (
    <main id="main">
      <HomePageAboutSection></HomePageAboutSection>

      <HomePageFeaturesSection></HomePageFeaturesSection>

      <HomePageCallToActionSection></HomePageCallToActionSection>

      <HomePageMoreFeaturesSection></HomePageMoreFeaturesSection>

      <HomePagePricingSection></HomePagePricingSection>

      <HomePageFaqSection></HomePageFaqSection>

      <HomePageGallerySection></HomePageGallerySection>

      <HomePageContactSection></HomePageContactSection>
    </main>
  );
};

export default HomePageMainSection;
