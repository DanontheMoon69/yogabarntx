import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import Image from "next/image";
import YBLogo from "../components/assets/images/YB_Logo.png";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer-container text-teal-600 margin-top:auto">
      <div className="flex justify-center w-16 h-14">
        <Image src={YBLogo} alt="Yoga Barn Logo" />{" "}
      </div>
      <ul className="flex gap-3 text-xs font-thin tracking-widest">
        <Link href="/">
          <li className="p-1">HOME</li>
        </Link>
        <Link href="/Calendar">
          <li className="p-1">SCHEDULE</li>
        </Link>
        <Link href="/Pricing">
          <li className="p-1">PRICING</li>
        </Link>
        <Link href="/Contact">
          <li className="p-1">CONTACT</li>
        </Link>
      </ul>

      <p className="text-xs tracking-wider font-thin">
        501 N Union St. Whitesboro Texas
      </p>
      <p className="text-xs tracking-wider font-thin">
        2023 Yoga Barn All rights reservered
      </p>
      <p className="icons text-teal-600">
        <AiOutlineInstagram />
        <AiOutlineFacebook />
      </p>
    </div>
  );
};

export default Footer;
