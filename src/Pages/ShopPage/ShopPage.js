import React from "react";
import Footer from "../../Components/Footer/Footer";
import ShopHeader from "../../Components/ShopHeader/ShopHeader";
import AboutSection from "../../Sections/AboutSection/AboutSection";
import UserCollection from "../../Sections/UserCollection/UserCollection";
import "./ShopPage.css";

function ShopPage() {
  return (
    <div className="shop_page">
      <ShopHeader />
      <UserCollection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default ShopPage;
