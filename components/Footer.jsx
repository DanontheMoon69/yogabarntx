import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container text-emerald-600 margin-top:auto">
      <p>2023 Yoga Barn All rights reserved</p>
      <p className="icons text-emerald-600">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
