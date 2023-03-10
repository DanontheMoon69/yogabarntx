import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// import { urlFor } from "../lib/client";
import egg from "../components/assets/images/YogaBarn_Egg.png";
import coffee from "../components/assets/images/coffee_yoga.png";
//import sun from "../components/assets/images/sun.png";

import Schedule from "./Schedule";

const HeroBanner = ({ props }) => {
  const [user, loading] = useAuthState(auth);
  const { showSchedule, setShowSchedule } = useStateContext();

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
    <>
      {showSchedule && <Schedule />}
      {!showSchedule && (
        <>
          {" "}
          <div className="flex justify-center text-lg font-bold text-teal-600 border-b-2">
            UPCOMING WORKSHOPS
          </div>
          <div className="flex-wrap justify-center sm:flex   pb-2 pr-2">
            {/* FILL YOUR CUP @ COMBS */}

            <div className="items-center justify-center bg-white rounded-xl mt-3 py-2 px-4 shadow-md">

              <div className="flex justify-center items-center text-sm font-bold sm:text-md">
                <Image src={coffee} width="30" height="30" className="mr-2" />
                Fill Your Cup @ Combs&apos; Coffee
              </div>
              <div className="flex justify-center text-sm font-bold text-center text-gray-500 ">
                March 18th @ Combs&apos; Coffee, Gainesville, Tx
              </div>
              <div className="flex justify-center">
                <Link href="/Calendar">
                  <button className="ease-in transform hover:scale-105 transition duration-100 text-sm font-semibold  bg-emerald-600 py-1 px-4 text-white rounded-full mt-2">
                    View in Schedule
                  </button>
                </Link>
                {user && (
                  <Link href="https://buy.stripe.com/9AQaI1fvmdgm8y49AO">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm font-semibold  bg-emerald-600 py-1 px-4 text-white rounded-full mt-2 ml-2">
                      Buy
                    </button>
                  </Link>
                )}
                {!user && (
                  <Link href="/signUpPage">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm font-semibold  bg-emerald-600 py-1 px-4 text-white rounded-full mt-2 ml-2">
                      Sign-Up to Buy
                    </button>
                  </Link>
                )}
              </div>
            </div>

            {/* BLESSINGS OF SPRING EQUINOX */}
            <div className="items-center justify-center bg-white rounded-xl   mt-3 py-2 px-4 shadow-md">
              <div className="flex justify-center text-md font-bold">
                Blessings of Spring Equinox
              </div>
              <div className="flex justify-center text-sm font-bold text-center text-gray-500 ">
                March 25th @ Yoga Barn, Whitesboro, Tx
              </div>
              <div className="flex justify-center">
                <Link href="/Calendar">
                  <button className="ease-in transform hover:scale-105 transition duration-100 text-sm font-semibold  bg-emerald-600 py-1 px-4 text-white rounded-full mt-2">
                    View in Schedule
                  </button>
                </Link>
                {user && (
                  <Link href="https://buy.stripe.com/28o7vPbf60tA6pWaER">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm font-semibold  bg-emerald-600 py-1 px-4 text-white rounded-full mt-2 ml-2">
                      Buy
                    </button>
                  </Link>
                )}
                {!user && (
                  <Link href="/signUpPage">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm font-semibold  bg-emerald-600 py-1 px-4 text-white rounded-full mt-2 ml-2">
                      Sign-Up to Buy
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => {
                setShowSchedule(true);
              }}
              className="ease-in transform hover:scale-105 transition duration-100 text-sm font-semibold  bg-teal-600 py-1 px-4 text-white rounded-full mt-2  animate-pulse"
            >
              View March Calendar
            </button>
          </div>
          <div className="bg-gray-100 mr-3 mt-2">
            {/* HERO BANNER  */}
            <div className=" flex sm:w-full overflow-hidden  rounded-xl my-2">
              <div className="lg:ml-10 flex-col md:w-3/4 md:rounded-xl  justify-center text-start items-center  py-4 px-4 sm:px-4 lg:py-16 lg:px-4 mr-4 ">
                <h2 className="sm:w-full text-2xl font-extrabold text-black dark:text-white sm:text-4xl">
                  <span className="ml-1 sm:ml-8 block text-gray-800 ">
                    Welcome to the Yoga Barn
                  </span>

                  <span className="ml-1 sm:ml-8 block text-emerald-800 ">
                    Whitesboro, Texas
                  </span>
                </h2>
                <p className="ml-1 mr-5 sm:pr-0 sm:ml-8 sm:w-full md:w-3/4 text-sm mt-4 text-gray-400 ">
                  Yoga is a great way to improve your physical and mental
                  health. It can help you relax and reduce stress, as well as
                  improve your flexibility, balance and strength. It also helps
                  to improve your posture and improve your breathing, which can
                  be beneficial for both physical and mental health. Yoga can
                  help you become more mindful and in tune with your body, which
                  can ultimately lead to greater self-awareness and self-care.
                  Yoga is a great way to improve your physical, mental and
                  emotional wellbeing. We can&apos;t wait to see you in class!
                </p>
                <div className="lg:mt-0  lg:flex-shrink-0 justify-center ">
                  <div className="ml-3 sm:ml-8 mt-12 inline-flex rounded-md gap-5 ">
                    <Link href="/Login">
                      <button
                        type="button"
                        className="ease-in transform hover:scale-105 transition duration-100 py-2 px-6  bg-emerald-600   text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Sign-Up
                      </button>
                    </Link>
                    <Link href="/Calendar">
                      <button
                        type="button"
                        className="ease-in transform hover:scale-105 transition duration-100 ml-0 sm:ml-5 py-2 px-6  bg-emerald-600  text-white w-full transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        View Schedule
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* hero side image */}

              <div className="hidden md:flex justify-center items-center w-full">
                <Image src={egg} width="400" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HeroBanner;
