import React from "react";
import TopCreator from "../../Components/TopCreator/TopCreator";
import "../Sections.css";
import "./TopCreatorSection.css";

function TopCreatorSection() {
  return (
    <div className="creator_section section">
      <div className="section_title">
        <h2 className="top_creators_title">Top selling creators this week</h2>
      </div>
      <div className="creators_container">
        <TopCreator
          creator_no="1"
          creator_img="images/creator_img.png"
          creator_name="TrustVibes"
          creator_price="1,234,567.89"
        />
        <TopCreator
          creator_no="2"
          creator_img="images/creator_img.png"
          creator_name="TrustVibes"
          creator_price="1,234,567.89"
        />
        <TopCreator
          creator_no="3"
          creator_img="images/creator_img.png"
          creator_name="TrustVibes"
          creator_price="1,234,567.89"
        />
        <TopCreator
          creator_no="4"
          creator_img="images/creator_img.png"
          creator_name="TrustVibes"
          creator_price="1,234,567.89"
        />
        <TopCreator
          creator_no="5"
          creator_img="images/creator_img.png"
          creator_name="TrustVibes"
          creator_price="1,234,567.89"
        />
        <TopCreator
          creator_no="6"
          creator_img="images/creator_img.png"
          creator_name="TrustVibes"
          creator_price="1,234,567.89"
        />
        <TopCreator
          creator_no="7"
          creator_img="images/creator_img.png"
          creator_name="TrustVibes"
          creator_price="1,234,567.89"
        />
        <TopCreator
          creator_no="8"
          creator_img="images/creator_img.png"
          creator_name="TrustVibes"
          creator_price="1,234,567.89"
        />
        <TopCreator
          creator_no="9"
          creator_img="images/creator_img.png"
          creator_name="TrustVibes"
          creator_price="1,234,567.89"
        />
        <TopCreator
          creator_no="10"
          creator_img="images/creator_img.png"
          creator_name="TrustVibes"
          creator_price="1,234,567.89"
        />
        <TopCreator
          creator_no="11"
          creator_img="images/creator_img.png"
          creator_name="TrustVibes"
          creator_price="1,234,567.89"
        />
        <TopCreator
          creator_no="12"
          creator_img="images/creator_img.png"
          creator_name="TrustVibes"
          creator_price="1,234,567.89"
        />
        <TopCreator
          creator_no="13"
          creator_img="images/creator_img.png"
          creator_name="TrustVibes"
          creator_price="1,234,567.89"
        />
        <TopCreator
          creator_no="14"
          creator_img="images/creator_img.png"
          creator_name="TrustVibes"
          creator_price="1,234,567.89"
        />
        <TopCreator
          creator_no="15"
          creator_img="images/creator_img.png"
          creator_name="TrustVibes"
          creator_price="1,234,567.89"
        />
      </div>
    </div>
  );
}

export default TopCreatorSection;
