import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./ListPrice.css";

function ListPrice({ quantity_container }) {
  const options = ["ETH", "TRUST", "BTC", "BNB", "LINK", "ADA"];
  const defaultOption = options[0];
  return (
    <div className="list_price_container">
      <div className="list_price_wrapper">
        <div className="input_dropdown_container">
          <label for="list_price">List Price</label>
          <div className="input_dropdown">
            <input
              type="text"
              id="list_price"
              placeholder="Enter starting price"
              required
            />
            <div className="eth_Dropdowm">
              <Dropdown
                options={options}
                value={defaultOption}
                placeholder="ETH"
              />
            </div>
          </div>
          <p className="current_eth_price">
            Current price of 1 ETH is US $4,205.25.
          </p>
        </div>
        {quantity_container}
      </div>
    </div>
  );
}

export default ListPrice;
