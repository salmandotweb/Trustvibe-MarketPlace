import React from "react";
import "./BuyBtn.css";

function BuyBtn({ name, cls_name }) {
  return (
    <a href="/nft" className={`buy_btn ${cls_name}`}>
      {name}
    </a>
  );
}

export default BuyBtn;
