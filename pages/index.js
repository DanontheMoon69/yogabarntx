import React, { useState } from "react";

import { HeroBanner } from "../components";
import { AiOutlineLogin, AiOutlineClockCircle } from "react-icons/ai";
import { WiSunrise, WiSunset } from "react-icons/wi";
import Image from "next/image";
import Link from "next/link";
import YBIcon from "../components/assets/images/ybIcon.png";
import JuneCalendar from "../components/assets/images/June2023.png";
import Script from "next/script";
import { useStateContext } from "../context/StateContext";
import Head from "next/head";
const Home = () => {
  // Subscribe Logic
  const { showSchedule, setShowSchedule } = useStateContext();
  const [toSend, setToSend] = useState({
    email: "",
  });

  // const handleChange = (e) => {
  //   setToSend({ ...toSend, [e.target.name]: e.target.value });
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   send("service_g0cucze", "template_jfb1v6e", toSend, "HYY8JDeeZmiQZ-f79")
  //     .then((response) => {
  //       console.log("SUCCESS!", response.status, response.text);
  //       alert("You've subscribed!");
  //     })
  //     .catch((err) => {
  //       console.log("FAILED...", err);
  //       alert(err);
  //     });
  // };

  return (
    <>
      <Head>
        <title>Yoga Barn - Whitesboro, Tx</title>
        <meta
          name="description"
          content="Yoga Barn - Yoga Studio in Whitesboro Texas that will improve your physical and mental health. It can help you relax and reduce stress, as well as improve your flexibility, balance and strength"
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
      <HeroBanner />
      <div className=" w-full">
        <div className=" font-thin max-h-96 pt-20">
          <div className="flex justify-center">
            <Image src={YBIcon} alt="Yoga Barn Icon" className="w-16 h-14" />
          </div>
          <h2 className="text-lg  block text-teal-700 text-center pt-5 tracking-widest ">
            JOIN US AT THE YOGA BARN FOR
          </h2>
          <h1 className=" capitalize text-3xl  block text-teal-700 text-center pt-5 tracking-widest">
            Yoga in Whitesboro, TX
          </h1>
          <div className=" border-b-2 mt-6"></div>
          <h2 className="text-2xl  block text-teal-700 text-center pt-5 pb-4">
            New to Yoga?
          </h2>
        </div>
        <p className=" text-md  text-teal-600  tracking-wide leading-6 font-thin text-center px-12 sm:px-48">
          Yoga is a great way to improve your physical and mental health. It can
          help you relax and reduce stress, as well as improve your flexibility,
          balance and strength. It also helps to improve your posture and
          improve your breathing, which can be beneficial for both physical and
          mental health. Yoga can help you become more mindful and in tune with
          your body, which can ultimately lead to greater self-awareness and
          self-care. Yoga is a great way to improve your physical, mental and
          emotional wellbeing. We can&apos;t wait to see you in class!
        </p>
        <div className=" flex justify-center">
          <div className="mt-12 inline-flex rounded-md gap-5 ">
            <Link href="/Login">
              <button
                type="button"
                className="hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 py-2 px-6  hover:bg-gray-400 bg-gray-200   text-gray-800 hover:text-gray-200 w-full transition ease-in duration-200 text-center text-sm font-thin shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg tracking-wide "
              >
                Sign-Up
              </button>
            </Link>
            <Link href="/Calendar">
              <button
                type="button"
                className="hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 py-2 px-6  hover:bg-gray-400 bg-gray-200   text-gray-800 hover:text-gray-200 w-full transition ease-in duration-200 text-center text-sm font-thin shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg tracking-wide ml-2"
              >
                View Schedule
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center bg-teal-600  w-md  md:rounded-xl mt-16 m-0 sm:mx-4 p-2">
          <div className="flex justify-center text-center w-full md:w-lg pt-3 text-3xl text-white tracking-widest font-thin">
            JUNE CALENDAR
          </div>
          <div className="flex justify-center bg-white">
            <Image src={JuneCalendar} className=" w-full sm:max-w-lg" />
          </div>
        </div>
      </div>
      <div className=" text-center mt-20">
        <h3 className="text-md tracking-widest text-gray-400 font-thin pb-2">
          SCHEDULED YOGA CLASSES
        </h3>
        <div className="relative carousel w-full bg-teal-600 pt-8">
          <div id="item1" className=" carousel-item w-full text-center">
            <div
              className="absolute left-1/2 -top-12 transform -translate-x-1/2 
 font-extrabold text-5xl bg-gray-50 text-center w-20 h-20 rotate-45  text-white "
            ></div>
            <div className="text-center w-full ">
              <h3 className="relative  flex justify-center text-2xl font-thin tracking-widest pt-8 text-white">
                TUESDAY MORNINGS
              </h3>
              <p className="flex justify-center text-2xl pt-4 font-thin tracking-widest text-gray-200">
                Power 45
              </p>
              <p className="flex justify-center text-sm font-thin text-gray-300  tracking-wide">
                {" "}
                6:30am - 7:15am
              </p>
              <Link href="/Calendar">
                <button className="bg-gray-50 px-4 py-2 rounded-full mt-4 text-xs mb-4">
                  View Full Schedule
                </button>
              </Link>
            </div>
          </div>
          <div id="item2" className="relative carousel-item w-full">
            <div
              className="absolute bg-gray-50 left-1/2 -top-20 transform -translate-x-1/2 
 font-extrabold text-5xl  text-center w-20 h-20 rotate-45 text-gray-300"
            ></div>
            <div className="text-center w-full">
              {" "}
              <h3 className="flex justify-center text-2xl font-thin tracking-widest pt-8 text-white">
                WEDNESDAY EVENINGS
              </h3>
              <p className="flex justify-center text-2xl pt-4 font-thin tracking-widest text-gray-200">
                Candle Lit Flow
              </p>
              <p className="flex justify-center text-sm font-thin text-gray-300  tracking-wide">
                {" "}
                6:30pm - 7:30pm
              </p>
              <Link href="/Calendar">
                <button className="bg-gray-50 px-4 py-2 rounded-full mt-4 text-xs mb-4">
                  View Full Schedule
                </button>
              </Link>
            </div>
          </div>
          <div id="item3" className="relative carousel-item w-full">
            <div
              className="absolute bg-gray-50 left-1/2 -top-20 transform -translate-x-1/2 
 font-extrabold text-5xl  text-center w-20 h-20 rotate-45  text-gray-300"
            ></div>
            <div className="text-center w-full">
              {" "}
              <h3 className="flex justify-center text-2xl font-thin tracking-widest pt-8 text-white">
                THURSDAY MORNINGS
              </h3>
              <p className="flex justify-center text-2xl pt-4 font-thin tracking-widest text-gray-200">
                Power 45
              </p>
              <p className="flex justify-center text-sm font-thin text-gray-300  tracking-wide">
                {" "}
                6:30am - 7:15am
              </p>
              <Link href="/Calendar">
                <button className="bg-gray-50 px-4 py-2 rounded-full mt-4 text-xs mb-4">
                  View Full Schedule
                </button>
              </Link>
            </div>
          </div>

          <div id="item5" className="relative carousel-item w-full">
            <div
              className="absolute bg-gray-50 left-1/2 -top-20 transform -translate-x-1/2 
 font-extrabold text-5xl  text-center w-20 h-20 rotate-45 text-gray-300"
            ></div>
            <div className="text-center w-full">
              {" "}
              <h3 className="flex justify-center text-2xl font-thin tracking-widest pt-8 text-white">
                SATURDAY MORNINGS
              </h3>
              <p className="flex justify-center text-2xl pt-4  font-thin tracking-widest text-gray-200">
                Mindful Movement
              </p>
              <p className="flex justify-center text-sm font-thin text-gray-300  tracking-wide">
                {" "}
                8:30am - 9:30am
              </p>
              <p className="flex justify-center text-2xl pt-4  font-thin tracking-widest text-gray-200">
                Fire Flow
              </p>
              <p className="flex justify-center text-sm font-thin text-gray-300  tracking-wide">
                {" "}
                10:00am - 11:00am
              </p>
              <Link href="/Calendar">
                <button className="bg-gray-50 px-4 py-2 rounded-full mt-4 text-xs mb-4">
                  View Full Schedule
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" text-xs flex justify-center w-full  gap-2 text-gray-400 font-thin tracking-wide pt-2">
          <a href="#item1" className=" hover:text-gray-500 p-1">
            TUESDAYS
          </a>
          <a href="#item2" className=" hover:text-gray-500 p-1">
            WEDNESDAYS
          </a>
          <a href="#item3" className="hover:text-gray-500 p-1">
            THURSDAYS
          </a>
          <a href="#item5" className="hover:text-gray-500 p-1">
            SATURDAYS
          </a>
        </div>
      </div>
    </>
  );
};

// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);

//   const bannerQuery = '*[_type == "banner"]';
//   const bannerData = await client.fetch(bannerQuery);

//   return {
//     props: { products, bannerData },
//   };
// };
export default Home;
