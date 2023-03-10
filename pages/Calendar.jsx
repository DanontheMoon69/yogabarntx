import dayjs from "dayjs";
import React, { useState } from "react";
// import { generateDate, months } from "./util/calendar";
import cn from "./util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useStateContext } from "../context/StateContext";
import Schedule from "../components/Schedule";

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
  const { showSchedule, setShowSchedule } = useStateContext();
  const [user, loading] = useAuthState(auth);
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  return (
    <>
      {showSchedule && <Schedule />}
      {!showSchedule && (
        <>
          <div className="text-xl font-bold mt-5  text-gray-600  ">
            Yoga Barn Scheduled Classes
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => {
                setShowSchedule(true);
              }}
              className="ease-in transform hover:scale-105 transition duration-100 text-sm font-semibold  bg-teal-600 py-1 px-4 text-white rounded-full mt-2 ml-2 animate-pulse"
            >
              View Full March Calendar
            </button>
          </div>
          <div className="flex sm: flex-wrap gap-10 sm:divide-x justify-center sm:w-full mx-auto   mt-10  pb-10 mb-10 ">
            {/* WORKSHOP CONTAINER */}

            <div className="w-full ml-25 mr-10 sm: px-5 py-5 sm:max-w-lg bg-gray-100 rounded-xl pt-3 shadow-sm">
              <h1 className="flex justify-center text-xl font-bold text-gray-700 border-b-2 mr-15">
                Scheduled Workshops for March 2023
              </h1>

              {/* FILL YOUR CUP - COMBS' COFFE - GAINESVILLE*/}
              <div>
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
                  Join Becca from Yoga Barn at the downtown Gainesville coffee
                  shop Combs&apos; Coffee for a fun yoga flow and a coffee
                  tasting. Leave with your body energized while understanding
                  and loving coffee in a much deeper way. <br />
                  <br />
                  Experience coffee cupping in our new CQI certified cupping
                  lab, which consists of objective measures in order to evaluate
                  and qualify specialty grade coffee. We will cover many
                  technical and procedurdal aspects of the evaluation process,
                  while keeping the process fun and easy. We will smell and
                  taste our way through a few unique coffees, while explaining
                  how the ten cupping attributes are used to evaluate, score and
                  describe each specialty grade coffee. This is geared towards
                  beginners but a great opportunity to try a flight of World
                  Class Coffees. In the end, you should feel more confident in
                  your ability to decipher which varieties and processing
                  methods you prefer (and those that you may dislike).
                  <br />
                  <br />
                  Workshop is $25 - Space is limited purchase tickets as soon as
                  possible!
                </p>
                {user && (
                  <Link href="https://buy.stripe.com/6oE03nfvm3FMbKg00b">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-emerald-600 py-2 px-8 ml-4 text-white rounded-full">
                      Buy Ticket
                    </button>
                  </Link>
                )}
                {!user && (
                  <Link href="/signUpPage">
                    <button className="ease-in transform font-bold hover:scale-105 transition duration-100 text-sm bg-emerald-600 py-2 px-8 ml-4 text-white rounded-full">
                      Sign-Up to Purchase
                    </button>
                  </Link>
                )}
              </div>
              <div className="border-b-2 border-gray-200 mt-4"></div>

              {/* Blessings of Spring Equinox */}

              <div>
                <h1 className="text-2xl font-semibold text-gray-600 mt-4">
                  Saturday March 25th
                </h1>
                <p className="flex text-md mt-2 font-semibold text-gray-700">
                  Blessings of Spring Equinox:
                </p>
                <p className="flex text-xs font-bold text-gray-900">
                  {" "}
                  9:00am - 11:00am. Yoga Barn, Whitesboro, TX.
                </p>
                <p className="text-xs font-semibold mt-2 text-gray-500">
                  Class Description:
                </p>
                <p className="text-xs mt-1 text-gray-500  pb-2">
                  Welcome Spring Equinox at the Yoga Barn. We will be moving
                  through 108 Sun Salutations to welcome this new season. This
                  is a challenging practice that helps strengthen body and mind.
                  Leave feeling refreshed and ready for what ever life offers
                  you in this new season. Mat, Water and Small Towel
                  recommended. Workshop is $25 - Space is limited purchase
                  tickets as soon as possible!
                </p>
                {user && (
                  <Link href="https://buy.stripe.com/9AQ8zTdneekqg0w5kw">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-emerald-600 py-2 px-8 ml-4 text-white rounded-full">
                      Buy Ticket
                    </button>
                  </Link>
                )}
                {!user && (
                  <Link href="/signUpPage">

                    <button className=" ease-in transform font-bold hover:scale-105 transition duration-100 text-sm bg-emerald-600 py-2 px-8 ml-4 text-white rounded-full">

                      Sign-Up to Purchase
                    </button>
                  </Link>
                )}
              </div>
            </div>

            <div className="w-full ml-25 mr-12 sm: px-5 sm:max-w-lg ">
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
                Can&apos;t fit an hour class into your schedule? Well this 30
                minute class is just right for you. Wake up, get in, sweat and
                go! This is a quick 30 minute power flow. All levels welcome but
                this will challenge you. If you give anything to yourself in a
                day, let it be 30 minutes of activity.
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
                Start your day right. Whether it&apos;s before work, a day
                running the kids around, or before household chores, start your
                day at the studio. This is an All Levels class that you will
                build up your own heat and strength and then slowly cool the
                body for a nice savasana.
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
                6:30pm - 7:30pm
              </p>
              <p className="text-xs font-semibold mt-2 text-gray-500">
                Class Description:
              </p>
              <p className="text-xs mt-1 text-gray-500  pb-2">
                Finish out your week at the studio moving through a warm flow
                that has you leaving feeling both replenished and relaxed. This
                is an All Levels class that helps you build your own heat and
                finish with a relaxing savasana.
              </p>
              <div className="border-b-2 border-gray-100 mt-4"></div>
              <p className="flex text-md mt-2 font-semibold text-gray-700">
                Power 45:
              </p>
              <p className="flex text-xs font-bold text-gray-900">
                {" "}
                7:45pm - 8:30pm
              </p>
              <p className="text-xs font-semibold mt-2 text-gray-500">
                Class Description:
              </p>
              <p className="text-xs mt-1 text-gray-500  pb-2">
                Finish out your week feeling strong and empowered. This class is
                45 minutes of building up your strength and finishing with a 5
                minute savasana. This is a class meant to challenge yogis and
                leave you feeling cleansed and renewed.
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
                Start the week off slow and steady. Our slow flow is a Vinyasa
                Flow that focuses on stretching and lengthening the body. We may
                linger in poses longer and slow things down when needed. All
                levels welcome.
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
                Start the week of strong! Challenge yourself in this evening
                class. Grow your practice both in mind and body. You will
                quickly build heat moving through more challenging poses and
                transitions. Leave feeling cleansed and renewed, ready to start
                your week! Best for yogis who are wanting to challenge their
                practice.
              </p>
              {/* <h1 className=" font-semibold">
            Schedule for {selectDate.toDate().toDateString()}
          </h1>
          <p className="text-gray-400">No meetings for today.</p> */}
            </div>
          </div>
        </>
      )}
    </>
  );
}
