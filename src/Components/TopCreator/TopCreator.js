import React from "react";
import "./TopCreator.css";

function TopCreator({ creator_no, creator_img, creator_name, creator_price }) {
  return (
    <div className="top_creator">
      <div className="creator_no">{creator_no}</div>
      <div className="creator_img">
        <img src={creator_img} alt="Top Creators" />
      </div>
      <div className="creator">
        <h3 className="creator_name">{creator_name}</h3>
        <p className="creator_price">{creator_price}</p>
      </div>
    </div>
  );
}

export default TopCreator;
