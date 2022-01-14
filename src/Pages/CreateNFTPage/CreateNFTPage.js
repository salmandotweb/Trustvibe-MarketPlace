import React, { useState } from "react";
import UploadNFT from "../../Components/UploadNFT/UploadNFT";
import Keywords from "../../Components/Keywords/Keywords";
import "./CreateNFTPage.css";
import ListPrice from "../../Components/ListPrice/ListPrice";
import AuctionDate from "../../Components/AuctionDate/AuctionDate";
import ArtistRoyality from "../../Components/ArtistRoyality/ArtistRoyality";

function CreateNFTPage() {
  const [status, setStatus] = useState(1);

  const radioHandler = (status) => {
    setStatus(status);
  };
  return (
    <div className="create_nft_page">
      <div className="create_nft_header">
        <p>Create</p>
        <h1>Create your Unique NFT</h1>
      </div>
      <div className="create_nft_form">
        <div className="upload_nft_container">
          <UploadNFT />
        </div>
        <div className="form_right_container">
          <div className="create_nft_details">
            <div className="nft_details_basics">
              <h1 className="nft_basics_attributes_title">The Basics</h1>
              <div className="nft_details_title">
                <label htmlFor="nft_title">Title</label>
                <input
                  type="text"
                  placeholder="Name to be shown in the title"
                  id="nft_title"
                />
              </div>
              <div className="nft_details_description">
                <div className="nft_description_label">
                  <label htmlFor="nft_description">Description</label>
                  <p>optional</p>
                </div>
                <textarea
                  type="text"
                  placeholder="Briefly describe the details or what makes this NFT special"
                  id="nft_description"
                />
              </div>
              <div className="keywords_container">
                <h3>Keywords</h3>
                <Keywords />
              </div>
            </div>
          </div>
          <div className="create_nft_attributes">
            <h1 className="nft_basics_attributes_title">Attributes</h1>
            <div className="nft_checkboxes">
              <input
                type="radio"
                name="select"
                id="option-1"
                checked={status === 1}
                onClick={(e) => radioHandler(1)}
              />
              <input
                type="radio"
                name="select"
                id="option-2"
                checked={status === 2}
                onClick={(e) => radioHandler(2)}
              />
              <label for="option-1" className="option option-1">
                <div className="dot"></div>
                <span>Auction</span>
              </label>
              <label for="option-2" className="option option-2">
                <div className="dot"></div>
                <span>Fixed Price</span>
              </label>
            </div>
            {status === 1 && <ListPrice />}
            {status === 1 && <AuctionDate />}
            {status === 1 && <ArtistRoyality />}
            {status === 2 && (
              <ListPrice
                quantity_container={
                  <div className="quantity_container">
                    <label for="list_price_quantity">Quantity</label>
                    <div className="list_price_quantity">
                      <input
                        type="text"
                        id="list_price_quantity"
                        placeholder="No. of copies"
                        required
                      />
                    </div>
                    <p className="current_eth_price">Enter 1 for unique</p>
                  </div>
                }
              />
            )}
            {status === 2 && <ArtistRoyality />}
          </div>
          <div className="mint_ethereum_btn">
            <button className="btn">Mint on Ethereum</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNFTPage;
