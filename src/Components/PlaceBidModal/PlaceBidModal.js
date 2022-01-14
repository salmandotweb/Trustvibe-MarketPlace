import React from "react";
import { FaTimes } from "react-icons/fa";
import BuyBtn from "../BuyBtn/BuyBtn";
import "./PlaceBidModal.css";

function PlaceBidModal({ closeModal }) {
  return (
    <>
      <div className="modal_background" onClick={() => closeModal(false)}></div>
      <div className="bid_modal">
        <div className="bid_modal_header">
          <h2>Your Purchase</h2>
          <button className="close_modal_btn" onClick={() => closeModal(false)}>
            <FaTimes className="close_btn_icon" />
          </button>
        </div>
        <div className="bid_modal_content">
          <div className="bid_modal_content_header">
            <div className="selected_user_details">
              <img src="images/purchase_user_img.png" alt="" />
              <div className="selected_user">
                <span>You have selected to buy</span>
                <p>Rebel #062</p>
              </div>
            </div>
            <div className="selected_quantity">
              <p>Qty.</p>
              <span>1</span>
            </div>
          </div>
          <div className="purchase_details">
            <div className="purchase_detail">
              <span>NFT Price:</span>
              <p>$1201</p>
            </div>
            <div className="purchase_detail">
              <span>Quantity:</span>
              <p>1</p>
            </div>
            <div className="purchase_detail">
              <span>Network Charges (BSC)</span>
              <p>$1</p>
            </div>
            <div className="purchase_detail">
              <span>Service charges (1.5%)</span>
              <p>$0.15</p>
            </div>
          </div>
          <div className="purchase_item">
            <div className="purchase_amount">
              <h1>$1202.15</h1>
              <p>250.75 TRUST</p>
            </div>
            <BuyBtn name="Buy Now" cls_name="buy_nft_btn" />
          </div>
        </div>
        <div className="bid_modal_footer">
          Available balance <p>$1,245.67</p> (550 TRUST)
        </div>
      </div>
    </>
  );
}

export default PlaceBidModal;
