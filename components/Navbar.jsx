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
} from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";

import ybLogo from "./assets/images/YB_LogoWhite.png";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="navbar bg-gradient-to-b from-teal-500 to-teal-600 items-center mb-5 rounded-lg">
      <div className="navbar-start items-center">
        <div className="dropdown items-center">
          <button className="transform hover:scale-105 transition ease-in duration-200 bg-gray-100 p-2 rounded-lg cursor-pointer lg:hidden">
            <label tabIndex={0} className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-56"
          >
            <li className=" text-teal-400 font-semibold ">
              <Link href="/Calendar">Schedule</Link>
            </li>
            <li className=" text-teal-400 font-semibold">
              <Link href="/Pricing">Pricing</Link>
            </li>
            <li className=" text-teal-400 font-semibold">
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="/">
          <Image
            src={ybLogo}
            alt="Yoga Barn"
            className=" w-1/2 ml-4 transform hover:scale-105 transition ease-in duration-200"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-2 px-1 text-white font-semibold text-lg items-center">
          <li className="hover:text-gray-200 transform hover:scale-105 transition ease-in duration-200">
            <Link href="/Calendar">Schedule</Link>
          </li>
          <li className="text-gray-300">|</li>
          <li className="hover:text-gray-200 transform hover:scale-105 transition ease-in duration-200">
            <Link href="/Pricing">Pricing</Link>
          </li>
          <li className="text-gray-300">|</li>
          <li className="hover:text-gray-200 transform hover:scale-105 transition ease-in duration-200">
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user && (
          <>
            <Link href="/signUpPage">
              <button className=" transform hover:scale-105  text-xs flex visible  py-2 px-4  bg-gray-200 hover:bg-gray-300   text-emerald-600 transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 lg:text-lg lg:px-6  rounded-lg">
                Join
              </button>
            </Link>
            <Link href="/Login">
              <button className=" transform hover:scale-105  flex text-xs py-2 px-4  bg-white hover:bg-gray-200  text-emerald-600 transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 lg:text-lg lg:px-6  rounded-lg ml-2">
                Sign-In
              </button>
            </Link>
          </>
        )}
        {user && (
          <>
            <div className=" text-white">
              {" "}
              <span className="flex justify-center text-xs font-semibold text-gray-100">
                Welcome
              </span>
              {user.displayName}
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
    </div>

    // <div className="flex bg-gradient-to-b from-teal-500 to-teal-600 navbar-container  rounded-xl shadow-md m-2">
    //   <div className="flex w-1/4 py-1 items-center align-middle ml-2 ease-in transform hover:scale-105 transition duration-100 ">
    //     <Link href={"/"}>
    //       <Image src={ybLogo} width="120" alt="Yoga Barn" className="" />
    //     </Link>
    //   </div>

    //   <div className=" w-2/3 ">
    //     <div className="my-2">
    //       {!user && (
    // <div className="flex gap-1 font-semibold text-xs mx-2  justify-end ">
    //   <Link href="/signUpPage">
    //     <button className="ease-in transform hover:scale-105 transition duration-100 text-xs flex visible  py-2 px-4  bg-gray-200 hover:bg-gray-300   text-emerald-600 transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
    //       Join
    //     </button>
    //   </Link>
    //   <Link href="/Login">
    //     <button className="ease-in transform hover:scale-105 transition duration-100 flex text-xs py-2 px-4  bg-white hover:bg-gray-200  text-emerald-600 transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
    //       Sign-In
    //     </button>
    //   </Link>
    // </div>
    //       )}
    //       <div className="flex gap-2 items-center text-sm font-semibold justify-end">
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
    //       className="text-xs sm:text-sm py-2 px-4   bg-white  text-emerald-600 mr-2 transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
    //       onClick={() => auth.signOut()}
    //     >
    //       Logout
    //     </button>
    //   </>
    // )}
    //       </div>
    //     </div>

    //     <div className=" px-4 my-2  ">
    //       <div className="flex gap-3 sm:gap-4 mt-1 items-center justify-end mr-0">
    //         <Link href="/Calendar">
    //           <button
    //             type="button"
    //             className="ease-in transform hover:scale-105 transition duration-100 text-xs sm:text-sm sm:text-sm text-white font-semibold hover:text-gray-200"
    //           >
    //             Schedule
    //           </button>
    //         </Link>
    //         <div className="text-xs flex items-center text-gray-200   ml-1 mr-1">
    //           {" | "}
    //         </div>

    //         <Link href="/Pricing">
    //           <button
    //             type="button"

    //             className="ease-in transform hover:scale-105 transition duration-100 text-xs sm:text-sm text-white font-semibold hover:text-gray-200"

    //             // onClick={() => setShowCart(true)}
    //           >
    //             Pricing
    //           </button>
    //         </Link>
    //         <div className="text-xs flex items-bottom justify-center text-gray-200 ml-1 mr-1">
    //           {" | "}
    //         </div>

    //         <Link href="/Contact">
    //           <button
    //             type="button"
    //             className="ease-in transform hover:scale-105 transition duration-100 text-xs sm:text-sm text-white font-semibold hover:text-gray-200 "
    //           >
    //             Contact
    //           </button>
    //         </Link>

    //         {/* <button
    //           type="button"
    //           className="text-sm text-gray-500 font-semibold hover:text-blue-700"

    //         >
    //           Cart
    //           <span className="cart-item-qty mr-2 mt-2">{totalQuantities}</span>
    //         </button> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
