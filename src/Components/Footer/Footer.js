import React from "react";
import { FaLinkedinIn, FaTwitter, FaTelegram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2022, Trustworks. All Rights Reserved.</p>
      <ul className="footer_social_links">
        <li>
          <a
            href="https://www.linkedin.com/company/trustvibes/"
            target="_blank"
            rel="noreferrer"
            className="social_link"
          >
            <FaLinkedinIn className="social_link_icon" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Trustworks_NfT"
            target="_blank"
            rel="noreferrer"
            className="social_link"
          >
            <FaTwitter className="social_link_icon" />
          </a>
        </li>
        <li>
          <a
            href="https://t.me/TrustWorks"
            target="_blank"
            rel="noreferrer"
            className="social_link"
          >
            <FaTelegram className="social_link_icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UChD-PYuMWsxxZYKFIlo0Cww/videos"
            target="_blank"
            rel="noreferrer"
            className="social_link"
          >
            <FaYoutube className="social_link_icon" />
          </a>
        </li>
        <li>
          <a
            href="https://coinmarketcap.com/currencies/trustworks/"
            target="_blank"
            rel="noreferrer"
            className="social_link"
          >
            <img src="images/coinmarket.svg" alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://www.coingecko.com/en/coins/trustworks"
            target="_blank"
            rel="noreferrer"
            className="social_link"
          >
            <img src="images/coingecko.svg" alt="" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
