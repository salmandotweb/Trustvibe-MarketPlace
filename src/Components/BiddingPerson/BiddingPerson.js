import React from "react";
import "./BiddingPerson.css";

function BiddingPerson({
  img,
  bidding_person,
  bidding_time,
  bidding_price,
  trust,
}) {
  return (
    <div className="bidding_person">
      <div className="bidding_person_left">
        <div className="bidding_person_img">
          <img src={img} alt="" />
        </div>
        <div className="bidding_person_details">
          <p className="bidding_by">
            Bid Placed by <span>@{bidding_person}</span>
          </p>
          <p className="bidding_time">{bidding_time}</p>
        </div>
      </div>
      <div className="bidding_person_price">
        <p className="bidding_trust">{trust} Trust</p>
        <p className="bidding_price">{bidding_price}</p>
      </div>
    </div>
  );
}

export default BiddingPerson;
