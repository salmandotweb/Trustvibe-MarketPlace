import React from "react";
import { FaSearch, FaPlus, FaChevronDown } from "react-icons/fa";
import NFTcard from "../../Components/NFTcard/NFTcard";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./UserCollection.css";

function Tabs({ tab_name, active_class, tab_span }) {
  return (
    <button className={`collection_btn ${active_class ? active_class : ""}`}>
      {tab_name} {tab_span}
    </button>
  );
}

function UserCollection() {
  const options = ["High to Low", "Low to High"];
  const defaultOption = options[0];
  return (
    <div className="user_collection_container">
      <div className="price_filters">
        <form className="filter_inputs search_input">
          <FaSearch className="search_icon" />
          <input type="search" placeholder="Search" />
        </form>
        <form className="filter_inputs price_range_input">
          <input type="text" placeholder="Price Range" />
          <FaPlus className="color_icon" />
        </form>
        <div className="price_low_input">
          <Dropdown
            options={options}
            value={defaultOption}
            className="price_dropdown"
          />
        </div>
      </div>
      <div className="top_collection_tabs">
        <Tabs
          tab_name="For Sale"
          tab_span={<span>101</span>}
          active_class="active"
        />
        <Tabs tab_name="Not For Sale" tab_span={<span>5</span>} />
        <Tabs tab_name="Collected" tab_span={<span>20</span>} />
        <Tabs tab_name="Created" tab_span={<span>200</span>} />
        <Tabs tab_name="Liked" />
        <Tabs tab_name="All" />
      </div>
      <div className="section_cards">
        <NFTcard
          card_img="images/nftCardImg9.png"
          user_img="images/user_img.png"
          username="MetaRebels #280"
          bid="2.25 BNB"
          btn_name="Place Bid"
          ending_price="Ending In"
          time_price="13h 26m 2s"
        />
        <NFTcard
          card_img="images/nftCardImg3.png"
          user_img="images/user_img.png"
          username="My Degenerate Ape Academy"
          bid="2.25 BNB"
          btn_name="Buy Now"
          ending_price="Price"
          time_price="1.58 BNB"
        />
        <NFTcard
          card_img="images/nftCardImg2.png"
          user_img="images/user_img.png"
          username="MutantApeYachtClub #6469"
          bid="2.25 BNB"
          btn_name="Place Bid"
          ending_price="Ending In"
          time_price="13h 26m 2s"
        />
        <NFTcard
          card_img="images/nftCardImg1.png"
          user_img="images/user_img.png"
          username="Grifter #177"
          bid="2.25 BNB"
          btn_name="Buy Now"
          ending_price="Price"
          time_price="1.58 BNB"
        />
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
          card_img="images/nftCardImg3.png"
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

export default UserCollection;
