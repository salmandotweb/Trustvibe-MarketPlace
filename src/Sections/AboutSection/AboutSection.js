import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <div className="about_section">
      <div className="left_about_section">
        <h1>The TrustVibes App</h1>
        <h4>It makes NFTs Go Viral!</h4>
        <p>
          Mobile, fast, easy to use, filled with features, and 100% focused on
          NFTs. The TrustVibes App is a transactional platform that uses social
          to create network effects. It is the perfect sales and marketing tool
          for NFT creators and owners!
        </p>
        <div className="google_play_icon">
          <img src="images/googlePlay.png" alt="TrustVibes App" />
        </div>
      </div>
      <div className="right_about_section">
        <img src="images/mobile_mockups.png" alt="TrustVibes App" />
      </div>
    </div>
  );
}

export default AboutSection;
