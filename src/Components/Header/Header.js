import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header_img">
        <img src="images/header-bg.png" alt="" />
      </div>
      <div className="header_content">
        <h1>MetaRebels</h1>
        <p>Avalaible now on BSC</p>
      </div>
    </header>
  );
}

export default Header;
