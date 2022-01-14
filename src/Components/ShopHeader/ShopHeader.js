import React from "react";
import { FaTwitter, FaInstagram, FaShare, FaCopy } from "react-icons/fa";
import "./ShopHeader.css";

function ShopHeader() {
  return (
    <div className="shop_header">
      <div className="profile_container">
        <div className="profile_header">
          <div className="profile_cover">
            <img src="images/profile_cover.png" alt="User Cover Img" />
          </div>
          <div className="profile_content">
            <div className="profile_img">
              <img src="images/profile_img.png" alt="User Img" />
            </div>
            <div className="profile_details">
              <div className="profile_headings">
                <h1 className="profile_name">TrustVibes</h1>
                <div className="profile_username">
                  <h2 className="profile_user_username">@trustvibes</h2>
                  <div className="profile_id">
                    <img src="images/diamond.png" alt="" />
                    <p>0xe2...ea5e</p>
                    <FaCopy className="copy_icon" />
                  </div>
                </div>
              </div>
              <p className="profile_bio">
                Passions minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat.
              </p>
              <div className="profile_tags">
                <p>#Future</p>
                <p>#Celebrity Art</p>
              </div>
              <div className="profile_stats_container">
                <button className="btn follow_btn">Follow</button>
                <ul className="profile_stats">
                  <li>
                    <p>200</p>
                    <p>Items</p>
                  </li>
                  <li>
                    <p>4.4K</p>
                    <p>Followers</p>
                  </li>
                  <li>
                    <p>250</p>
                    <p>Following</p>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="profile_links">
              <li>
                <a href="/">
                  <FaTwitter />
                  JustinWBratton
                </a>
              </li>
              <li>
                <a href="/">
                  <FaInstagram />
                  JustinWBratton
                </a>
              </li>
              <li>
                <a href="/">
                  <FaShare />
                  Share
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopHeader;
