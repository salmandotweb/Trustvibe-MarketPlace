import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import AboutSection from "../Sections/AboutSection/AboutSection";
import EndingSoonSection from "../Sections/EndingSoonSection";
import RecentlyAddedSection from "../Sections/RecentlyAddedSection";
import TopCreatorSection from "../Sections/TopCreatorSection/TopCreatorSection";
import TrendingSection from "../Sections/TrendingSection";

function MarketPlacePage() {
  return (
    <>
      <Header />
      <TrendingSection />
      <TopCreatorSection />
      <EndingSoonSection />
      <RecentlyAddedSection />
      <AboutSection />
      <Footer />
    </>
  );
}

export default MarketPlacePage;
