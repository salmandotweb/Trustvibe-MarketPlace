import React, { useEffect, useRef, useState } from "react";
import { FaHeart, FaEllipsisV } from "react-icons/fa";
import BuyBtn from "../BuyBtn/BuyBtn";
import PriceBtn from "../PriceBtn/PriceBtn";
import "./NFTcard.css";

function truncate(str) {
  return str.length > 15 ? str.substring(0, 15) + "..." : str;
}

function CardOptions({ option_name, option_img }) {
  return (
    <li>
      <button className="card_menu_btn">
        <img src={option_img} alt={option_name} />
        <span>{option_name}</span>
      </button>
    </li>
  );
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
  const ref = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="nft_card">
      <div
        className="card_options"
        onClick={() => setIsMenuOpen((oldState) => !oldState)}
        ref={ref}
      >
        <FaEllipsisV className="option_btn" />
      </div>
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
          <BuyBtn
            name={btn_name}
            cls_name="btn-2"
            onClick={(e) => e.location.reload()}
          />
        </div>
      </div>
      {isMenuOpen && (
        <>
          <div className="card_menu">
            <ul>
              <CardOptions
                option_img="images/view-icon.svg"
                option_name="View NFT"
              />
              <CardOptions
                option_img="images/edit-icon.svg"
                option_name="Edit"
              />
              <CardOptions
                option_img="images/onSale-icon.svg"
                option_name="Put On Sale"
              />
              <CardOptions
                option_img="images/stopSale.svg"
                option_name="Stop Sale"
              />
              <CardOptions
                option_img="images/transfer.svg"
                option_name="Transfer"
              />
              <CardOptions
                option_img="images/resell-icon.svg"
                option_name="Resell"
              />
              <CardOptions
                option_img="images/publish-icon.svg"
                option_name="Publish"
              />
              <CardOptions
                option_img="images/unpublish-icon.svg"
                option_name="UnPublish"
              />
              <CardOptions
                option_img="images/burn-icon.svg"
                option_name="Burn"
              />
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default NFTcard;
