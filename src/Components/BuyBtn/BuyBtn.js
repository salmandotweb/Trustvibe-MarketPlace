import React from "react";
import { Link } from "react-router-dom";
import "./BuyBtn.css";

function BuyBtn({ name, cls_name, onClick }) {
  return (
    <Link
      to="/nft"
      className={`buy_btn ${cls_name}`}
      onClick={onClick ? onClick : ""}
    >
      {name}
    </Link>
  );
}

export default BuyBtn;
