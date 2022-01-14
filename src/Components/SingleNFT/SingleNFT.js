import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import BiddingPerson from "../BiddingPerson/BiddingPerson";
import BuyBtn from "../BuyBtn/BuyBtn";
import PlaceBidModal from "../PlaceBidModal/PlaceBidModal";
import PriceBtn from "../PriceBtn/PriceBtn";
import "./SingleNFT.css";

function SingleNFT() {
  const [OpenModal, setOpenModal] = useState(false);
  return (
    <div className="singleNFT">
      <div className="singleNFT_header">
        <div className="creator_profile_img">
          <img src="images/creator_img.png" alt="Creator Name" />
        </div>
        <div className="creator_details">
          <p>Creator</p>
          <h1 className="collection_name">MetaRebels Collection</h1>
        </div>
      </div>
      <div className="nft_details">
        <div className="nft_img">
          <img src="images/nft_img.png" alt="Trending NFT" />
        </div>
        <div className="auction_details">
          <div className="auction_details_header">
            <div className="nft_name">
              <h2>Rebel #620</h2>
              <p>1/1</p>
            </div>
          </div>
          <div className="auction_ending_card">
            <div className="auction_ending">
              <h3>Auction ending in</h3>
              <div className="auction_ending_time">
                <span>1d</span>
                <span>13h</span>
                <span>42m</span>
                <span>16s</span>
              </div>
            </div>
            <div className="rebel_img">
              <img src="images/rebel_img.svg" alt="" />
            </div>
          </div>
          <div className="nft_buttons_container">
            <div className="nft_fav_icon">
              <FaHeart className="nft_icon_i" />
              <p className="+fav_counter">120</p>
            </div>
            <PriceBtn date="Highest Bid" time="1.24 BNB" cls_name="nft_btn_1" />
            <BuyBtn
              name="Place Bid"
              cls_name="nft_btn_2"
              onClick={() => setOpenModal(true)}
            />
          </div>
          <div className="nft_owner">
            <h4 className="owner_title">Owner</h4>
            <h4 className="owner_name">@rjay1</h4>
          </div>
          <div className="bidding_history_container">
            <div className="bidding_history_title">
              <h3>Bidding History</h3>
            </div>
            <div className="bidding_persons_container">
              <BiddingPerson
                img="images/bidding_person_img.png"
                bidding_person="Samuels"
                bidding_time="Jun 7, 2021 at 9:32 pm"
                bidding_price="$501.81"
                trust="300"
              />
              <BiddingPerson
                img="images/bidding_person_img1.png"
                bidding_person="Samuels"
                bidding_time="Jun 7, 2021 at 9:32 pm"
                bidding_price="$501.81"
                trust="300"
              />
              <BiddingPerson
                img="images/bidding_person_img2.png"
                bidding_person="Samuels"
                bidding_time="Jun 7, 2021 at 9:32 pm"
                bidding_price="$501.81"
                trust="300"
              />
            </div>
          </div>
        </div>
      </div>
      {OpenModal && <PlaceBidModal closeModal={setOpenModal} />}
    </div>
  );
}

export default SingleNFT;
