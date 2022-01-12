import React from "react";
import "./PriceBtn.css";

function PriceBtn({ date, time, cls_name }) {
  return (
    <button className={`price_btn ${cls_name}`}>
      <p className="date">{date}</p>
      <p className="time">{time}</p>
    </button>
  );
}

export default PriceBtn;
