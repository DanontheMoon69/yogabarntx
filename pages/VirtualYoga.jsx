import React, { useState } from "react";
import YouTube from "react-youtube";
import { useStateContext } from "../context/StateContext";
import virtualImage from "../components/assets/images/virtualYoga.jpeg";
import Image from "next/image";

import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

const VirtualYoga = () => {
  const [isVerified, setIsVerified] = useState(false);
  const checkPw = () => {
    // gets the current input value
    const answer = document.getElementById("password").value;
    const virtualPassword = process.env.NEXT_PUBLIC_VIRTUALPASS;

    if (answer === virtualPassword) {
      setIsVerified(true);
    } else if (answer === "") {
      alert("Please Enter an Answer");
    } else {
      alert("Incorrect Password");
    }
  };

  return (
    <>
      {isVerified ? (
        <>
          <div className=" h-full pb-24">
            <div className="relative text-center pt-24 font-thin text-2xl tracking-wider text-black">
              <h1> YOGA BARN - VIRTUAL YOGA</h1>
              <div className="relative w-full pt-4">
                <Image
                  src={virtualImage}
                  alt="Yoga Barn"
                  className=" object-cover h-48 "
                />
              </div>
            </div>
            <div className="text-white py-8 px-4 font-thin tracking-wider text-center bg-teal-400">
              Below you&apos;ll find videos listed by Length to give you the
              option to do a short class or a longer class.
            </div>{" "}
            {/*  */}
            {/* Yoga Setup*/}
            <h2 className=" text-3xl text-black font-thin tracking-wider flex justify-center pt-10">
              Yoga Setup
            </h2>
            {/*  */}
            {/* Yoga Setup */}
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {/*  */}
              {/* yoga Setup */}
              <div className="flex flex-col bg-teal-600 justify-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 sm:rounded-lg">
                <h3 className=" text-xl flex justify-center font-thin tracking-widest text-white text-center">
                  Level: All Levels
                  <br />
                  Yoga Setup
                </h3>
                <YouTube
                  videoId="gY3e5_9G6Pg"
                  autoplay="1"
                  className="flex justify-center  p-2"
                />
              </div>
              {/* END Yoga Setup */}
              {/*  */}
              {/*  */}
              {/* Breaking Down: Sun Salutations */}
              <div className="flex flex-col bg-teal-600 justify-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 sm:rounded-lg">
                <h3 className=" text-xl flex justify-center font-thin tracking-widest text-white text-center">
                  Level: All Levels
                  <br />
                  Breaking Down: 1/2 Sun Salute
                </h3>
                <YouTube
                  videoId="vDqBW9KhXFM"
                  autoplay="1"
                  className="flex justify-center  p-2"
                />
              </div>
              {/* END Breaking Down: Sun Salutations */}
              {/*  */}
            </div>
            {/*  */}
            {/* END 10 MINUTE VIDEOS CONTAINER */}
            {/*  */}
            {/* 15 MINUTE VIDEOS */}
            <h2 className=" text-3xl text-black font-thin tracking-wider flex justify-center pt-8">
              15 Minute Yoga Classes
            </h2>
            {/*  */}
            {/* 15 MINUTE VIDEOS CONTAINER */}
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {/*  */}
              {/* 15 MINUTE - BALANCE */}
              <div className="flex flex-col bg-teal-600 justify-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 sm:rounded-lg">
                <h3 className=" text-xl flex justify-center font-thin tracking-widest text-white text-center">
                  Level: All Levels
                  <br />
                  Practice: Balance
                </h3>
                <YouTube
                  videoId="sTnm5jvjgjM"
                  autoplay="1"
                  className="flex justify-center  p-2"
                />
              </div>
              {/* END 15 MINUTE STRETCHING */}
              {/*  */}
            </div>
            {/*  */}
            {/* END 15 MINUTE VIDEOS CONTAINER */}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col h-screen">
            <div className="relative text-center pt-24 font-thin text-2xl tracking-wider text-black">
              <h1> YOGA BARN - VIRTUAL YOGA</h1>
              <div className="relative w-full pt-4">
                <Image
                  src={virtualImage}
                  alt="Yoga Barn"
                  className=" object-cover h-48 "
                />
              </div>
            </div>
            <div className="flex flex-col justify-center text-center mt-12">
              <p className=" text-black font-thin tracking-wider">
                This Page is Password Protected.
              </p>
              <p className=" text-black font-thin tracking-wider">
                Virtual Yoga is included with our Bliss Pack or can be purchased
                separately on our{" "}
                <Link href="/Pricing">
                  <span className="text-teal-600">Pricing Page</span>
                </Link>
                .
              </p>
              <div className=" text-black font-thin tracking-wider py-4">
                Please Enter Password below
              </div>

              <div className="w-full flex justify-center items-center">
                <form
                  onSubmit={checkPw}
                  className="flex flex-col justify-center items-center "
                >
                  <input
                    className="flex justify-center h-8 bg-white border-2 border-teal-500"
                    id="password"
                    name="password"
                  />
                  <button className="flex justify-center items-center mt-2 font-thin tracking-wide bg-teal-500 rounded-full px-4 py-2 w-fit text-white">
                    ENTER
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default VirtualYoga;
