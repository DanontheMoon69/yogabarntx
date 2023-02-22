import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import heroPromo from "../components/assets/images/LuckOfTheYogi_2023_SETUP.png";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { start } from "@popperjs/core";
import { Countdown } from "./Countdown";
import Calendar from "../pages/Calendar";
// import { urlFor } from "../lib/client";
import egg from "../components/assets/images/YogaBarn_Egg.png";
import cow from "../components/assets/images/YogaBarn_Cow.png";

const HeroBanner = ({ props }) => {
  const [user, loading] = useAuthState(auth);
  const {
    showCart,
    showSchedule,
    showLogin,
    setShowLogin,
    showMemberLoginButton,
    setShowMemberLoginButton,
  } = useStateContext();

  dayjs.extend(relativeTime);

  const todaysDate = dayjs().format("M/D/YYYY h:mm:ss");
  const startDate = dayjs("2023-3-5T05:30:01");
  const formattedStartDate = startDate.format("M/D/YYYY h:mm P");

  const formattedStartSeconds = startDate.diff(todaysDate, "seconds");
  const formattedStartMinutes = startDate.diff(todaysDate, "minutes");

  const formattedStartHours = startDate.diff(todaysDate, "hours");

  const formattedStartDays = startDate.diff(todaysDate, "days");

  console.log(
    "Todays Date:",
    todaysDate,
    "Start Date:",
    formattedStartDate,
    "Seconds:",
    formattedStartSeconds,
    "Minutes:",
    formattedStartMinutes,
    "Hours:",
    formattedStartHours,
    "Days:",
    formattedStartDays
  );
  return (
    <div className="">
      {showLogin && setShowMemberLoginButton(false)}
      {showSchedule && setShowMemberLoginButton(false)}
      {showCart && setShowMemberLoginButton(false)}
      {/* <Countdown /> */}
      <div className=" flex sm:w-full overflow-hidden  rounded-xl my-2">
        <div className="lg:ml-10 flex-col lg:w-1/2 lg:rounded-xl  justify-center text-start  py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="sm:w-full text-2xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="ml-1 sm:ml-8 block bg-white">
              Welcome to the Yoga Barn
            </span>
            <span className="ml-1 sm:ml-8 block text-emerald-800 bg-white">
              Whitesboro, Texas
            </span>
          </h2>
          <p className="ml-1 mr-5 sm:pr-0 sm:ml-8 sm:w-full md:w-3/4 text-sm mt-4 text-gray-400 bg-white">
            Yoga is a great way to improve your physical and mental health. It
            can help you relax and reduce stress, as well as improve your
            flexibility, balance and strength. It also helps to improve your
            posture and improve your breathing, which can be beneficial for both
            physical and mental health. Additionally, yoga can help you become
            more mindful and in tune with your body, which can ultimately lead
            to greater self-awareness and self-care. Overall, yoga is a great
            way to improve your physical, mental and emotional wellbeing.
          </p>
          <div className="lg:mt-0  lg:flex-shrink-0 justify-center bg-white">
            <div className="ml-3 sm:ml-8 mt-12 inline-flex rounded-md gap-5 ">
              <Link href="/Login">
                <button
                  type="button"
                  className="py-2 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Sign-Up
                </button>
              </Link>
              <Link href="/Calendar">
                <button
                  type="button"
                  className=" ml-0 sm:ml-5 py-2 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  View Schedule
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* hero side image */}

        <div className="hidden lg:flex justify-center items-center w-1/2">
          <Image src={egg} width="400" />
        </div>
      </div>

      <div className="flex text-2xl justify-center mb-5 text-emerald-800 font-black">
        Available Packages
      </div>
      <div className="max-w-screen border-b-4"></div>
      <div className="flex-wrap lg:flex justify-center">
        {/* new student special */}
        <div className="border-b-2 mb-4 ml-0 sm:ml-6">
          <script
            async
            src="https://js.stripe.com/v3/pricing-table.js"
          ></script>
          <stripe-pricing-table
            pricing-table-id="prctbl_1Me8RcDKe3ucAI14dX0Suo4t"
            publishable-key="pk_live_51MK8dGDKe3ucAI14ZXbXUfphBT8Ltf31nCKeFKLG3V2ynlW0M7W6anH1mUV4YzqimZCrkynjqcBa2FZx5XICYMuE00porX8reX"
          ></stripe-pricing-table>
        </div>

        {/* zen package */}
        <div className="border-b-2 mb-4">
          <script
            async
            src="https://js.stripe.com/v3/pricing-table.js"
          ></script>
          <stripe-pricing-table
            pricing-table-id="prctbl_1Me8V4DKe3ucAI14LxIj2nAg"
            publishable-key="pk_live_51MK8dGDKe3ucAI14ZXbXUfphBT8Ltf31nCKeFKLG3V2ynlW0M7W6anH1mUV4YzqimZCrkynjqcBa2FZx5XICYMuE00porX8reX"
          ></stripe-pricing-table>
        </div>
        {/* enligtened package */}
        <div className="border-b-2 mb-4 pb-4 mt-2">
          <script
            async
            src="https://js.stripe.com/v3/pricing-table.js"
          ></script>
          <stripe-pricing-table
            pricing-table-id="prctbl_1Me8WTDKe3ucAI14WthJWens"
            publishable-key="pk_live_51MK8dGDKe3ucAI14ZXbXUfphBT8Ltf31nCKeFKLG3V2ynlW0M7W6anH1mUV4YzqimZCrkynjqcBa2FZx5XICYMuE00porX8reX"
          ></stripe-pricing-table>
        </div>
        {/* warrior package */}
        <div className="border-b-2 mb-4">
          <script
            async
            src="https://js.stripe.com/v3/pricing-table.js"
          ></script>
          <stripe-pricing-table
            pricing-table-id="prctbl_1Me8hGDKe3ucAI14fCxXz7yi"
            publishable-key="pk_live_51MK8dGDKe3ucAI14ZXbXUfphBT8Ltf31nCKeFKLG3V2ynlW0M7W6anH1mUV4YzqimZCrkynjqcBa2FZx5XICYMuE00porX8reX"
          ></stripe-pricing-table>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
