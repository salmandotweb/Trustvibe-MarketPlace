import React from "react";
import "./ArtistRoyality.css";

function ArtistRoyality() {
  return (
    <div className="artist_royality_container">
      <div className="artist_royality_inputs">
        <div className="artist_royality">
          <label for="artist">Royality for Artist</label>
          <input type="text" id="artist" placeholder="5%" required />
        </div>
        <div className="wallet_address">
          <label for="wallet_address">Wallet Address for Royalty</label>
          <input
            type="text"
            id="wallet_address"
            placeholder="Add BSC Wallet Address"
            required
          />
        </div>
      </div>
      <p className="current_eth_price">
        Max. combined royalty percentage allowed is 50%.
      </p>
    </div>
  );
}

export default ArtistRoyality;
