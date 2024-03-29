import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import inhale from "../components/assets/images/inhaleExhale.jpeg";
import kidsYoga02 from "../components/assets/images/GrowAndGlow_Kids01.jpeg";
import growAndGlow from "../components/assets/images/growAndGlow_Logo_4in.png";
import gena from "components/assets/images/YB_Gena.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import YBIcon from "../components/assets/images/ybIcon.png";
import { auth } from "../utils/firebase";
import { useStateContext } from "../context/StateContext";
const KidsYoga = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      <Head>
        <title>Yoga Barn - Grow & Glow - Kids Yoga</title>
        <meta
          name="description"
          content="Yoga Barn - Grown & Glow - Kids Yoga"
          key="desc"
        />
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
      />
      <Script id="ga-script" strategy="lazyOnload">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
      page_path: window.location.pathname,
    });
        `}
      </Script>
      <div className="relative pt-24 font-thin text-2xl tracking-wider text-black">
        {" "}
        <div className="flex justify-center">
          <div className="flex-col justify-center  max-w-sm items-center">
            <div className="flex flex-1 justify-center">
              <Image
                src={growAndGlow}
                alt="Yoga Barn - Grow and Glow - Kids Yoga"
                className=" object-contain h-32  flex justify-center"
              />
            </div>
            <div className="flex-col  justify-center flex-1 text-2xl font-thin mb-0 flex  text-gray-600 tracking-widest">
              <div className="flex justify-center pb-1">GROW & GLOW</div>
              <div className=" text-base tracking-widest leading-3 flex justify-center">
                KIDS YOGA
              </div>
              <div
                className="flex justify-center text-xs pt-8 pb-8
             "
              >
                INSTRUCTED BY: GENA FLEITMAN
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-center  font-thin text-2xl tracking-wider pb-8 text-black ">
        <div className="relative w-full pt-4">
          <Image
            src={kidsYoga02}
            alt="Yoga Barn"
            className=" object-cover h-48 "
          />
        </div>
      </div>
      <div className=" flex justify-center">
        <h2 className=" bg-slate-200 rounded-3xl px-10 py-5 my-2 max-w-sm flex justify-center text-lg font-thin tracking-widest text-black ">
          YOGA FOR KIDS AGES 4-12
        </h2>
      </div>
      <div className="flex sm: flex-wrap gap-10 sm:divide-x justify-center sm:w-full mx-auto   mt-10    ">
        {/* WORKSHOP CONTAINER */}

        <div className="w-full   px-5  sm:max-w-lg rounded-xl  shadow-sm">
          <h2 className="flex justify-center text-2xl font-thin tracking-widest text-black border-b-2 pb-2">
            Upcoming Kids Workshops
          </h2>

          {/* END WORKSHOPS */}
        </div>

        <div className="w-full sm: px-5 sm:max-w-lg ">
          <h3 className="flex justify-center text-2xl font-thin tracking-widest text-black border-b-2 pb-2">
            Weekly Kids Classes
          </h3>

          {/* WEDNESDAY */}

          <p className="flex text-xl mt-2 font-thin text-black tracking-wide">
            Wednesdays in September:
          </p>

          <p className="text-base font-normal mt-2 text-black">
            5:00pm - 5:45pm
          </p>
          <p className="text-xs font-thin tracking-wide mt-1 text-black  pb-2">
            Kids yoga class is for ages 4-12. Enjoy finding movement through a
            fun yoga flow. Kids will learn breath work, meditation and yoga
            poses, while having fun with new friends.
          </p>

          {/* <h1 className=" font-semibold">
            Schedule for {selectDate.toDate().toDateString()}
          </h1>
          <p className="text-gray-400">No meetings for today.</p> */}
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/* PRICING */}
      {/*  */}
      {/*  */}
      <div className="flex justify-center">
        <div className="w-full flex-col   px-5 py-5 sm:max-w-lg rounded-xl pt-3 shadow-sm flex justify-center items-center">
          {/*  */}

          {/* DROP IN HEADER */}
          <div className="flex justify-center mt-8">
            <Image src={YBIcon} alt="Yoga Barn Icon" className="  w-16 h-14" />
          </div>
          <h3 className="flex justify-center tracking-widest items-center text-3xl font-thin text-teal-600  px-4  rounded-2xl pt-2">
            KIDS SINGLE CLASS
          </h3>
          {/* KIDS SINGLE CLASS DROP-IN*/}

          <div className=" flex justify-center  bg-white  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-full rounded-lg mt-2 ">
            <div className="p-2 text-lg font-thin tracking-wide text-black ">
              <div className="flex items-center ">
                {" "}
                <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                  <Image
                    className="w-10 object-contain"
                    src={growAndGlow}
                    alt="Yoga Barn"
                  />
                </div>
                Kids Single Class/Drop-In
              </div>
              <p className="text-xs font-normal text-left bg-gray-100 py-2 px-2 rounded-xl">
                One single kids class at the Yoga Barn - Expires after 30 days
              </p>
              <div className="flex p-2 items-center text-2xl font-thin">
                <div> $20</div>
                {user && (
                  <Link href="https://buy.stripe.com/6oEcQ982UcciaGcbJr">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8 ml-4 text-white rounded-full tracking-widest">
                      Pay
                    </button>
                  </Link>
                )}
                {!user && (
                  <Link href="/signUpPage">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-xs bg-teal-600 py-2 px-8 ml-4 text-white rounded-full">
                      Sign-Up to Purchase
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* END PRICES */}
        </div>
      </div>
    </>
  );
};

export default KidsYoga;
