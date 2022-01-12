import React from "react";
import { FaHeart } from "react-icons/fa";
import BuyBtn from "../BuyBtn/BuyBtn";
import PriceBtn from "../PriceBtn/PriceBtn";
import "./NFTcard.css";

function truncate(str) {
  return str.length > 15 ? str.substring(0, 15) + "..." : str;
}

function NFTcard({
  card_img,
  user_img,
  username,
  bid,
  ending_price,
  time_price,
  btn_name,
}) {
  return (
    <div className="nft_card">
      <div className="card_img">
        <img src={card_img} alt="Trending NFTs" />
      </div>
      <div className="card_user_details">
        <div className="user_img">
          <img src={user_img} alt="Trending NFTs" />
        </div>
        <div className="user_details">
          <div className="user">
            <h2>{truncate(username)}</h2>
            <p>
              <span className="colorize">Highest Bid:</span> {bid}
            </p>
          </div>
          <div className="diamond">
            <p>1/4</p>
            <div>
              <img src="images/diamond.png" alt="Trending NFTs" />
            </div>
          </div>
        </div>
      </div>
      <div className="card_buttons">
        <btn className="like_btn1">
          <FaHeart className="like_btn" />
        </btn>
        <div className="buttons_container">
          <PriceBtn date={ending_price} time={time_price} cls_name="btn-1" />
          <BuyBtn name={btn_name} cls_name="btn-2" />
        </div>
      </div>
    </div>
  );
}

export default NFTcard;
