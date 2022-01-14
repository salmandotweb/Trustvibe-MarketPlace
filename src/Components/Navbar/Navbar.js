import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./Navbar.css";

function Navbar({ connectMetamask }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const authedUser = useSelector((state) => state.authedUser);
  return (
    <nav class="navbar">
      <a href="/marketplace" class="nav_logo" onClick={closeMobileMenu}>
        <img src="images/nav_logo.svg" alt="" />
      </a>
      <form className="nav_searchbar">
        <FaSearch className="search_icon" />
        <input type="search" placeholder="Search the marketplace" />
      </form>
      <ul className={click ? "nav_links active" : "nav_links"}>
        <li onClick={closeMobileMenu}>
          <a href="/">Explore</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="/shop">My profile</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="/create">Create</a>
        </li>
        <li onClick={connectMetamask} className="connect_wallet-btn">
          <a href="/" className="connect_wallet-btn">
            {authedUser.authedUser?.address
              ? `${authedUser.authedUser.address.substring(
                  0,
                  5
                )}...${authedUser.authedUser.address.substring(38, 42)}`
              : "Connect Wallet"}
          </a>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <FaTimes className="menu_icon" />
        ) : (
          <FaBars className="menu_icon" />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
