import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { doc, getDocs, setDoc, onSnapshot, getDoc } from "firebase/firestore";
import db from "../utils/firebase";
import {
  AiOutlineShopping,
  AiOutlineCalendar,
  AiOutlineEnvironment,
  AiOutlineLogin,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";

import ybLogo from "./assets/images/YB_Logo.png";
import ybLogoWhite from "./assets/images/YB_LogoWhite.png";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const [nav, setNav] = useState(false);

  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#404040");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 10) {
        setColor("#0D9488");
        setTextColor("#ffffff");
      } else {
        setColor("transparent");
        setTextColor("#404040");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <header
      style={{ backgroundColor: `${color}` }}
      className="fixed w-full left-0 top-0  z-10 ease-in duration-300"
    >
      <div className=" m-auto flex justify-between items-center p-4">
        <Link href="/">
          {color == "transparent" ? (
            <Image
              src={ybLogo}
              alt="Yoga Barn"
              className=" w-20 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 "
            />
          ) : (
            <Image
              src={ybLogoWhite}
              alt="Yoga Barn"
              className=" w-20 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 "
            />
          )}
        </Link>

        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex text-xs tracking-widest"
        >
          <li className=" p-2 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 ">
            <Link href="/">HOME</Link>
          </li>
          <li className=" p-2 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 ">
            <Link href="/Calendar">SCHEDULE</Link>
          </li>

          <li className=" p-2 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 ">
            <Link href="/Pricing">PRICING</Link>
          </li>
          <li className=" p-2 hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 ">
            <Link href="/Contact">CONTACT</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="flex">
          {!user && (
            <>
              <Link href="/signUpPage">
                <button className=" transform hover:scale-105  text-xs flex visible  py-2 px-4  bg-gray-200 hover:bg-gray-300   text-emerald-600 transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  lg:px-6  rounded-lg">
                  Join
                </button>
              </Link>
              <Link href="/Login">
                <button className=" transform hover:scale-105  flex text-xs py-2 px-4  bg-white hover:bg-gray-200  text-emerald-600 transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  lg:px-6  rounded-lg ml-2">
                  Sign-In
                </button>
              </Link>
            </>
          )}
          {user && (
            <>
              <div style={{ color: `${textColor}` }}>
                {" "}
                <span className="flex justify-center text-xs font-thin tracking-wider">
                  Welcome
                </span>
                <span className="flex justify-center text-sm font-thin tracking-wide">
                  {user.displayName}
                </span>
              </div>
              <button
                type="submit"
                className="text-xs sm:text-sm py-2 px-4   bg-white  text-emerald-600 mr-2 transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 lg:text-lg lg:px-6 rounded-lg ml-2"
                onClick={() => auth.signOut()}
              >
                Logout
              </button>
            </>
          )}
        </div>
        <div
          onClick={handleNav}
          className="block sm:hidden z-10 cursor-pointer hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 hover:shadow-lg"
        >
          {nav ? (
            <AiOutlineClose size={30} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={30} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* Mobile Menu */}

        <div
          className={
            nav
              ? " sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-teal-600 text-center ease-in duration-300"
              : " sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-teal-600 text-center ease-in duration-300"
          }
        >
          <ul className="font-thin">
            <li
              className="p-4  text-3xl text-white hover:text-gray-400 tracking-widest hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 "
              onClick={handleNav}
            >
              <Link href="/">HOME</Link>
            </li>
            <li
              className="p-4 text-3xl text-white hover:text-gray-400 tracking-widest hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 "
              onClick={handleNav}
            >
              <Link href="/Calendar">SCHEDULE</Link>
            </li>

            <li
              className="p-4 text-3xl text-white hover:text-gray-400 tracking-widest hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 "
              onClick={handleNav}
            >
              <Link href="/Pricing">PRICING</Link>
            </li>
            <li
              className="p-4 text-3xl text-white hover:text-gray-400 tracking-widest hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 "
              onClick={handleNav}
            >
              <Link href="/Contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>

    //
    // OLD NAVBAR
    //

    // <div className="navbar  items-center shadow-md fixed  ">
    //   <div className="navbar-start items-center">
    //     <div className="dropdown items-center">
    //       <button className="transform hover:scale-105 transition ease-in duration-200 bg-gray-100 p-2 rounded-lg cursor-pointer lg:hidden">
    //         <label tabIndex={0} className=" lg:hidden">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5 cursor-pointer"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h8m-8 6h16"
    //             />
    //           </svg>
    //         </label>
    //       </button>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-56"
    //       >
    //         <li className=" text-teal-400 font-semibold ">
    //           <Link href="/Calendar">Schedule</Link>
    //         </li>
    //         <li className=" text-teal-400 font-semibold">
    //           <Link href="/Pricing">Pricing</Link>
    //         </li>
    //         <li className=" text-teal-400 font-semibold">
    //           <Link href="/Contact">Contact</Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <Link href="/">
    //       <Image
    //         src={ybLogo}
    //         alt="Yoga Barn"
    //         className=" w-1/2 ml-4 transform hover:scale-105 transition ease-in duration-200"
    //       />
    //     </Link>
    //   </div>
    //   <div className="navbar-center hidden lg:flex tracking-widest">
    //     <ul className="flex gap-2 px-1 text-gray-400 font-semibold text-sm items-center">
    //       <li className="hover:text-gray-200 transform hover:scale-105 transition ease-in duration-200">
    //         <Link href="/Calendar">SCHEDULE</Link>
    //       </li>
    //       <li className="text-gray-400">|</li>
    //       <li className="hover:text-gray-200 transform hover:scale-105 transition ease-in duration-200">
    //         <Link href="/Pricing">PRICING</Link>
    //       </li>
    //       <li className="text-gray-400">|</li>
    //       <li className="hover:text-gray-200 transform hover:scale-105 transition ease-in duration-200">
    //         <Link href="/Contact">CONTACT</Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    // {!user && (
    //   <>
    //     <Link href="/signUpPage">
    //       <button className=" transform hover:scale-105  text-xs flex visible  py-2 px-4  bg-gray-200 hover:bg-gray-300   text-emerald-600 transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  lg:px-6  rounded-lg">
    //         Join
    //       </button>
    //     </Link>
    //     <Link href="/Login">
    //       <button className=" transform hover:scale-105  flex text-xs py-2 px-4  bg-white hover:bg-gray-200  text-emerald-600 transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  lg:px-6  rounded-lg ml-2">
    //         Sign-In
    //       </button>
    //     </Link>
    //   </>
    // )}
    // {user && (
    //   <>
    //     <div className=" text-white">
    //       {" "}
    //       <span className="flex justify-center text-xs font-semibold text-gray-100">
    //         Welcome
    //       </span>
    //       {user.displayName}
    //     </div>
    //     <button
    //       type="submit"
    //       className="text-xs sm:text-sm py-2 px-4   bg-white  text-emerald-600 mr-2 transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 lg:text-lg lg:px-6 rounded-lg ml-2"
    //       onClick={() => auth.signOut()}
    //     >
    //       Logout
    //     </button>
    //   </>
    // )}
    //   </div>
    // </div>
  );
};

export default Navbar;
