import React from "react";
import Footer from "../Components/Footer/Footer";
import SingleNFT from "../Components/SingleNFT/SingleNFT";
import AboutSection from "../Sections/AboutSection/AboutSection";
import MoreCollectionSection from "../Sections/MoreCollectionSection";

function SingleNFTPage() {
  return (
    <>
      <SingleNFT />
      <MoreCollectionSection />
      <AboutSection />
      <Footer />
    </>
  );
}

export default SingleNFTPage;
