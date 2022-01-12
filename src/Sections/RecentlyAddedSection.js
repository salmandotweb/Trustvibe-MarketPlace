import React from "react";
import NFTcard from "../Components/NFTcard/NFTcard";
import "./Sections.css";

function RecentlyAddedSection() {
  return (
    <div className="section">
      <div className="section_title">
        <h2>Recently Added</h2>
      </div>
      <div className="section_cards">
        <NFTcard
          card_img="images/nftCardImg6.png"
          user_img="images/user_img.png"
          username="MetaRebels #280"
          bid="2.25 BNB"
          btn_name="Place Bid"
          ending_price="Ending In"
          time_price="13h 26m 2s"
        />
        <NFTcard
          card_img="images/nftCardImg7.png"
          user_img="images/user_img.png"
          username="My Degenerate Ape Academy"
          bid="2.25 BNB"
          btn_name="Buy Now"
          ending_price="Price"
          time_price="1.58 BNB"
        />
        <NFTcard
          card_img="images/nftCardImg8.png"
          user_img="images/user_img.png"
          username="MutantApeYachtClub #6469"
          bid="2.25 BNB"
          btn_name="Place Bid"
          ending_price="Ending In"
          time_price="13h 26m 2s"
        />
        <NFTcard
          card_img="images/nftCardImg2.png"
          user_img="images/user_img.png"
          username="Grifter #177"
          bid="2.25 BNB"
          btn_name="Buy Now"
          ending_price="Price"
          time_price="1.58 BNB"
        />
      </div>
    </div>
  );
}

export default RecentlyAddedSection;
