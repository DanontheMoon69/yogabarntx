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

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import { Schedule } from "./";
import { Login } from "../pages/Login";
import Image from "next/image";
import Link from "next/link";

import ybLogo from "./assets/images/YB_Logo.png";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState([]);

  const {
    showCart,
    setShowCart,
    totalQuantities,
    showSchedule,
    setShowSchedule,
    showLogin,
    setShowLogin,
  } = useStateContext();

  return (
    <div className="flex g-white navbar-container ml-2 rounded-xl">
      {showSchedule && <Schedule />}
      {showCart && <Cart />}
      {showLogin && <Login />}
      <div className="flex w-1/4 items-center align-middle ">
        <Link href={"/"}>
          <Image
            src={ybLogo}
            width="120"
            alt="Yoga Barn"
            className="bg-white "
          />
        </Link>
      </div>

      <div className=" w-2/3 ">
        <div className="my-2">
          {!user && (
            <div className="flex gap-1 font-semibold text-xs mx-2 bg-white justify-end ">
              <Link href="/signUpPage">
                <button className="text-antialiased flex visible  py-2 px-4  bg-gray-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
                  Join
                </button>
              </Link>
              <Link href="/Login">
                <button className="flex text-hairline py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
                  Sign-In
                </button>
              </Link>
            </div>
          )}
          <div className="flex gap-2 items-center text-sm font-semibold justify-end">
            {user && (
              <>
                <img
                  className="hidden sm:flex rounded-full w-5 h-5 my-2 bg-white text-antialiased "
                  src={user.photoURL}
                  alt={user.displayName}
                />
                <div className="my-2 bg-white">{user.displayName}</div>
                <button
                  type="submit"
                  className="text-xs sm:text-sm py-2 px-4   bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  onClick={() => auth.signOut()}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>

        <div className=" px-4 my-2  ">
          <div className="flex gap-2 mt-1 items-center justify-end mr-0">
            <Link href="/Contact">
              <button
                type="button"
                className="text-xs sm:text-sm text-gray-500 font-semibold hover:text-blue-700 "
              >
                Contact
              </button>
            </Link>
            <Link href="/Calendar">
              <button
                type="button"
                className="text-xs sm:text-sm sm:text-sm text-gray-500 font-semibold hover:text-blue-700"
              >
                Schedule
              </button>
            </Link>
            <Link href="/Pricing">
              <button
                type="button"
                className="text-xs sm:text-sm mt-1 text-gray-500 font-semibold hover:text-blue-700"
                // onClick={() => setShowCart(true)}
              >
                Pricing
              </button>
            </Link>
            <div className="hidden sm:flex text-gray-500 font-semibold hover:text-blue-700">
              {user && (
                <Link href={"/UserProfile"}>
                  <button
                    type="button"
                    className="text-xs sm:text-sm text-gray-500 font-semibold hover:text-blue-700"
                  >
                    Account
                  </button>
                </Link>
              )}
            </div>

            {/* <button
              type="button"
              className="text-sm text-gray-500 font-semibold hover:text-blue-700"
              onClick={() => setShowCart(true)}
            >
              Cart
              <span className="cart-item-qty mr-2 mt-2">{totalQuantities}</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
