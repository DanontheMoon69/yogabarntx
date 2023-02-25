import dayjs from "dayjs";
import React, { useState } from "react";
// import { generateDate, months } from "./util/calendar";
import cn from "./util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Link from "next/link";

const schedule = [
  {
    id: 1,
    name: "Rise & Shine",
    // imageUrl:
    startDateTime: "2023-03-05T13:00",
    endDateTime: "2023-03-05T14:30",
  },
];

export default function Calendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  return (
    <>
      <div className="text-xl font-bold mt-5  text-gray-600">
        Yoga Barn Scheduled Classes
      </div>

      <div className="flex sm: flex-wrap gap-10 sm:divide-x justify-center sm:w-full mx-auto   mt-10  pb-10 mb-10">
        {/* WORKSHOP CONTAINER */}

        <div className="w-full ml-25 mr-25 sm: px-5 py-5 sm:max-w-lg bg-gray-100 rounded-xl pt-3 shadow-sm">
          <h1 className="flex justify-center text-xl font-bold text-gray-700 border-b-2">
            Scheduled Workshops for March 2023
          </h1>

          {/* FILL YOUR CUP - COMBS' COFFE - GAINESVILLE*/}

          <h1 className="text-2xl font-semibold text-gray-600 mt-4">
            Saturday March 18th
          </h1>
          <p className="flex text-md mt-2 font-semibold text-gray-700">
            Fill Your Cup:
          </p>
          <p className="flex text-xs font-bold text-gray-900">
            {" "}
            11:00am - 12:30pm. Hosted at Combs&apos; Coffee.
            <span className="flex text-gray-600">
              Address: 701 E Broadway St Gainesville, TX 76240
            </span>
          </p>
          <p className="text-xs font-semibold mt-2 text-gray-500">
            Class Description:
          </p>
          <p className="text-xs mt-1 text-gray-500  pb-2">
            Join Becca from Yoga Barn at the downtown Gainesville coffee shop
            Combs&apos; Coffee for a fun yoga flow and a demonstration of
            beautifully roasted coffee. Leave with your body energized and
            understanding and loving coffee so much more. Workshop is $20 -
            Space is limited purchase tickets as soon as possible!
          </p>
          <Link href="https://buy.stripe.com/bIY5nHbf65NUdSo4gi">
            <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-emerald-600 py-2 px-8  text-white rounded-full">
              Buy Ticket
            </button>
          </Link>
        </div>

        <div className="w-full ml-25 mr-25 sm: px-5 sm:max-w-lg ">
          <h1 className="flex justify-center text-xl font-bold text-gray-700 border-b-2">
            Scheduled Classes for March 2023
          </h1>

          {/* Tuesdays and Thursdays */}

          <h1 className="text-2xl font-semibold text-gray-600 mt-4">
            Tuesdays and Thursdays:
          </h1>
          <p className="flex text-md mt-2 font-semibold text-gray-700">
            Power 30:
          </p>
          <p className="flex text-xs font-bold text-gray-900">
            {" "}
            6:00am - 6:30am
          </p>
          <p className="text-xs font-semibold mt-2 text-gray-500">
            Class Description:
          </p>
          <p className="text-xs mt-1 text-gray-500  pb-2">
            Can&apos;t fit an hour class into your schedule? Well this 30 minute
            class is just right for you. Wake up, get in, sweat and go! This is
            a quick 30 minuite power flow. All levels welcome but this will
            challenge you. No savasana but we will finish with a 5 minute
            meditation that you can take any way you like, whether it&apos;s
            laying down, sitting up or whatever feels good! If you give anything
            to yourself in a day, let it be 30 minutes of activity.
          </p>
          <div className="border-b-2 border-gray-100 mt-4"></div>
          <p className="flex text-md mt-2 font-semibold text-gray-700">
            Rise & Shine:
          </p>
          <p className="flex text-xs font-bold text-gray-900">
            {" "}
            6:45am - 7:45am
          </p>
          <p className="text-xs font-semibold mt-2 text-gray-500">
            Class Description:
          </p>
          <p className="text-xs mt-1 text-gray-500  pb-2">
            Start your day right. Whether it&apos;s before work, a day running
            the kids around, or before household chores, start your day at the
            studio. This is an All Levels class that you will build up your own
            heat and strength and then slowly cool the body for a nice savasana.
          </p>
          <div className="border-b-4 mt-4"></div>

          {/* Fridays */}

          <h1 className="text-2xl font-semibold text-gray-600 mt-4">
            Fridays:
          </h1>
          <p className="flex text-md mt-2 font-semibold text-gray-700">
            Candle Lit Flow:
          </p>
          <p className="flex text-xs font-bold text-gray-900">
            {" "}
            6:30am - 7:30am
          </p>
          <p className="text-xs font-semibold mt-2 text-gray-500">
            Class Description:
          </p>
          <p className="text-xs mt-1 text-gray-500  pb-2">
            Candle Lit Flow Decription
          </p>
          <div className="border-b-2 border-gray-100 mt-4"></div>
          <p className="flex text-md mt-2 font-semibold text-gray-700">
            Power 45:
          </p>
          <p className="flex text-xs font-bold text-gray-900">
            {" "}
            6:45pm - 8:30pm
          </p>
          <p className="text-xs font-semibold mt-2 text-gray-500">
            Class Description:
          </p>
          <p className="text-xs mt-1 text-gray-500  pb-2">
            Finish out your week feeling strong and empowered. This class is 45
            min of building up your strength and finishing with a 5 min
            savasana.
          </p>
          <div className="border-b-4 mt-4"></div>

          {/* Sundays */}

          <h1 className="text-2xl font-semibold text-gray-600 mt-4">
            Sundays:
          </h1>
          <p className="flex text-md mt-2 font-semibold text-gray-700">
            Mindful Movement:
          </p>
          <p className="flex text-xs font-bold text-gray-900">
            {" "}
            4:00pm - 5:00pm
          </p>
          <p className="text-xs font-semibold mt-2 text-gray-500">
            Class Description:
          </p>
          <p className="text-xs mt-1 text-gray-500  pb-2">
            Start the week off slow and steady. Our slow flow is a vinyasa Flow
            that focuses on stretching and lengthening the body. We may linger
            in poses longer and slow things down when needed. All levels
            welcome.
          </p>
          <div className="border-b-2 border-gray-100 mt-4"></div>
          <p className="flex text-md mt-2 font-semibold text-gray-700">
            Fire Flow:
          </p>
          <p className="flex text-xs font-bold text-gray-900">
            {" "}
            5:30pm - 6:30pm
          </p>
          <p className="text-xs font-semibold mt-2 text-gray-500">
            Class Description:
          </p>
          <p className="text-xs mt-1 text-gray-500  pb-2 ">
            Start the week of strong! Challenge yourself in this evening class.
            Grow your practice both in mind and body. You will quickly build
            heat moving through more challenging poses and transitions. Leave
            feeling cleansed and renewd, ready to start your week! Experienced
            yogis welcome or ones wanting to challenge their practice.
          </p>
          {/* <h1 className=" font-semibold">
            Schedule for {selectDate.toDate().toDateString()}
          </h1>
          <p className="text-gray-400">No meetings for today.</p> */}
        </div>
      </div>
    </>
  );
}
