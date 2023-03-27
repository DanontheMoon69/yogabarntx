import React, { useState } from "react";

import { HeroBanner } from "../components";
import { AiOutlineLogin, AiOutlineClockCircle } from "react-icons/ai";
import { WiSunrise, WiSunset } from "react-icons/wi";
import Image from "next/image";
import Link from "next/link";
import YBIcon from "../components/assets/images/ybIcon.png";
import { useStateContext } from "../context/StateContext";
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
      <HeroBanner />
      <div className="">
        <div className=" font-thin max-h-96 pt-20">
          <div className="flex justify-center">
            <Image src={YBIcon} alt="Yoga Barn Icon" className="w-16 h-14" />
          </div>
          <span className="text-2xl  block text-teal-700 text-center pt-5 ">
            New to Yoga?
          </span>
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
                className="hover:ease-in transform hover:scale-105 hover:transition hover:duration-100 py-2 px-6  hover:bg-gray-400 bg-gray-200   text-gray-800 hover:text-gray-200 w-full transition ease-in duration-200 text-center text-sm font-thin shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg tracking-wide "
              >
                View Schedule
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className=" text-center mt-20">
        <div className="text-md tracking-widest text-gray-400 font-thin pb-2">
          AVAILABLE CLASSES
        </div>
        <div className="relative carousel w-full bg-teal-600 pt-8">
          <div id="item1" className=" carousel-item w-full text-center z-20">
            <div
              className="absolute left-1/2 -top-12 transform -translate-x-1/2 
 font-extrabold text-5xl bg-gray-50 text-center w-20 h-20 rotate-45 z-10 text-white "
            ></div>
            <div className="text-center w-full ">
              <div className="relative z-30 flex justify-center text-2xl font-thin tracking-widest pt-8 text-white">
                TUESDAY MORNINGS
              </div>
              <p className="flex justify-center text-2xl pt-4 font-thin tracking-widest text-gray-200">
                Power 30
              </p>
              <p className="flex justify-center text-sm font-thin text-gray-300  tracking-wide">
                {" "}
                6:00am - 6:30am
              </p>
              <p className="flex justify-center text-2xl pt-4  font-thin tracking-widest text-gray-200">
                Rise & Shine:
              </p>
              <p className="flex justify-center text-sm font-thin text-gray-300  tracking-wide">
                {" "}
                6:45am - 7:45am
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
 font-extrabold text-5xl  text-center w-20 h-20 rotate-45 z-10 text-gray-300"
            ></div>
            <div className="text-center w-full">
              {" "}
              <div className="flex justify-center text-2xl font-thin tracking-widest pt-8 text-white">
                WEDNESDAY EVENINGS
              </div>
              <p className="flex justify-center text-2xl pt-4 font-thin tracking-widest text-gray-400">
                Power 30
              </p>
              <p className="flex justify-center text-sm font-thin text-gray-500  tracking-wide">
                {" "}
                6:00am - 6:30am
              </p>
              <p className="flex justify-center text-2xl pt-4  font-thin tracking-widest text-gray-400">
                Rise & Shine:
              </p>
              <p className="flex justify-center text-sm font-thin text-gray-500  tracking-wide">
                {" "}
                6:45am - 7:45am
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
 font-extrabold text-5xl  text-center w-20 h-20 rotate-45 z-10 text-gray-300"
            ></div>
            <div className="text-center w-full">
              {" "}
              <div className="flex justify-center text-2xl font-thin tracking-widest pt-8 text-white">
                THURSDAY MORNINGS
              </div>
              <p className="flex justify-center text-2xl pt-4 font-thin tracking-widest text-gray-400">
                Candle Lit Flow
              </p>
              <p className="flex justify-center text-sm font-thin text-gray-500  tracking-wide">
                {" "}
                6:30pm - 7:30pm
              </p>
              <p className="flex justify-center text-2xl pt-4  font-thin tracking-widest text-gray-400">
                Power 45
              </p>
              <p className="flex justify-center text-sm font-thin text-gray-500  tracking-wide">
                {" "}
                7:45pm - 8:30pm
              </p>
              <Link href="/Calendar">
                <button className="bg-gray-50 px-4 py-2 rounded-full mt-4 text-xs mb-4">
                  View Full Schedule
                </button>
              </Link>
            </div>
          </div>
          <div id="item4" className="relative carousel-item w-full">
            <div
              className="absolute bg-gray-50 left-1/2 -top-20 transform -translate-x-1/2 
 font-extrabold text-5xl  text-center w-20 h-20 rotate-45 z-10 text-gray-300"
            ></div>
            <div className="text-center w-full">
              {" "}
              <div className="flex justify-center text-2xl font-thin tracking-widest pt-8 text-white">
                FRIDAY EVENINGS
              </div>
              <p className="flex justify-center text-2xl pt-4 font-thin tracking-widest text-gray-400">
                Mindful Movement
              </p>
              <p className="flex justify-center text-sm font-thin text-gray-500  tracking-wide">
                {" "}
                4:00pm - 5:00pm
              </p>
              <p className="flex justify-center text-2xl pt-4  font-thin tracking-widest text-gray-400">
                Fire Flow
              </p>
              <p className="flex justify-center text-sm font-thin text-gray-500  tracking-wide">
                {" "}
                5:30pm - 6:30pm
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
 font-extrabold text-5xl  text-center w-20 h-20 rotate-45 z-10 text-gray-300"
            ></div>
            <div className="text-center w-full">
              {" "}
              <div className="flex justify-center text-2xl font-thin tracking-widest pt-8 text-white">
                SUNDAY EVENINGS
              </div>
              <p className="flex justify-center text-2xl pt-4 font-thin tracking-widest text-gray-400">
                Mindful Movement
              </p>
              <p className="flex justify-center text-sm font-thin text-gray-500  tracking-wide">
                {" "}
                4:00pm - 5:00pm
              </p>
              <p className="flex justify-center text-2xl pt-4 font-thin tracking-widest text-gray-400">
                Fire Flow
              </p>
              <p className="flex justify-center text-sm font-thin text-gray-500  tracking-wide">
                {" "}
                5:30pm - 6:30pm
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
          <a href="#item4" className=" hover:text-gray-500 p-1">
            FRIDAYS
          </a>
          <a href="#item5" className="hover:text-gray-500 p-1">
            SUNDAYS
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
