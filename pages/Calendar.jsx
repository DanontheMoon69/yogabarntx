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
          <h1 className="flex justify-center text-2xl font-thin tracking-wider pt-24  text-black  ">
            SCHEDULED YOGA CLASSES
          </h1>
          <div className="flex justify-center">
            <button
              onClick={() => {
                setShowSchedule(true);
              }}
              className="ease-in transform hover:scale-105 transition duration-100 text-sm font-semibold  bg-teal-600 py-1 px-4 text-white rounded-full mt-2 animate-pulse"
            >
              View April Calendar
            </button>
          </div>
          <div className="flex sm: flex-wrap gap-10 sm:divide-x justify-center sm:w-full mx-auto   mt-10  pb-10 mb-10 ">
            {/* WORKSHOP CONTAINER */}

            <div className="w-full   px-5 py-5 sm:max-w-lg rounded-xl pt-3 shadow-sm">
              <h2 className="flex justify-center text-2xl font-thin tracking-wider text-black border-b-2 pb-2">
                Upcoming Workshops
              </h2>

              {/* Blessings of Spring Equinox */}

              <div>
                <h3 className="text-3xl font-thin tracking-wider text-teal-600 mt-4">
                  Sunday April 30th
                </h3>
                <p className="text-2xl font-thin text-black mt-4">
                  Lavender Ridge Farms
                </p>
                <p className="flex text-sm font-thin text-black  tracking-wide">
                  {" "}
                  10:00am - 11:00am
                </p>
                <p className="text-xs font-semibold mt-2 text-gray-500">
                  Class Description:
                </p>
                <p className="text-sm mt-1 text-gray-500  pb-2">
                  Join us for yoga at Lavender Ridge Farms in Gainesville. It's
                  a beautiful time to enjoy the Spring season and move through
                  an energizing yoga flow. After class enjoy a refreshing
                  lavender lemonade and walk around the beautiful property of
                  Lavender Ridge Farms. The Cafe is open for lunch. Please bring
                  your own water, yoga mat and props you may need.
                </p>
                {user && (
                  <Link href="https://buy.stripe.com/dR64jD6YQ7W24hO5kH">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8  text-white rounded-full">
                      Buy Ticket
                    </button>
                  </Link>
                )}
                {!user && (
                  <Link href="/signUpPage">
                    <button className=" ease-in transform font-bold hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8  text-white rounded-full">
                      Sign-Up to Purchase
                    </button>
                  </Link>
                )}
              </div>
            </div>

            <div className="w-full sm: px-5 sm:max-w-lg ">
              <h3 className="flex justify-center text-3xl font-thin tracking-wide text-black border-b-2 pb-2 pt-6">
                Weekly Classes
              </h3>

              {/* Tuesdays and Thursdays */}

              <h3 className="text-2xl font-thin text-black mt-4">
                Tuesdays and Thursdays: Mornings
              </h3>
              <p className="flex text-xl mt-2 font-thin text-black tracking-wide">
                Power 30:
              </p>
              <p className="flex text-sm font-thin text-black  tracking-wide">
                {" "}
                6:30am - 7:00am
              </p>
              <p className="text-xs font-thin mt-2 text-black">
                Class Description:
              </p>
              <p className="text-xs font-thin tracking-wide mt-1 text-black  pb-2">
                Can&apos;t fit an hour class into your schedule? This 30 minute
                class is just right for you. Wake up, get in, sweat and go! This
                is a quick 30 minute power flow. All levels welcome but this
                will challenge you. If you give anything to yourself in a day,
                let it be 30 minutes of activity.
              </p>
              <div className="border-b-2 border-gray-100 mt-4"></div>
              <p className="flex text-xl mt-2 font-thin text-black tracking-wide">
                Rise & Shine 30:
              </p>
              <p className="flex text-sm font-thin text-black  tracking-wide">
                {" "}
                7:15am - 7:45am
              </p>
              <p className="text-xs font-thin mt-2 text-black">
                Class Description:
              </p>
              <p className="text-xs font-thin tracking-wide mt-1 text-black  pb-2">
                Start your day right in this 30 minute Yoga Class. Whether
                it&apos;s before work, a day running the kids around, or before
                household chores, start your day at the studio. This is an All
                Levels class that you will build up your own heat and strength
                and then slowly cool the body.
              </p>

              {/* Wednesdays */}
              <div className="border-b-4 mt-4"></div>

              <h3 className="text-2xl font-thin text-black mt-4">
                Wednesdays: Evenings
              </h3>
              <p className="flex text-xl mt-2 font-thin text-black tracking-wide">
                Candle Lit Flow:
              </p>
              <p className="flex text-sm font-thin text-black  tracking-wide">
                {" "}
                6:30pm - 7:30pm
              </p>
              <p className="text-xs font-thin mt-2 text-gray-600">
                Class Description:
              </p>
              <p className="text-xs font-thin tracking-wide mt-1 text-black  pb-2">
                Break up your week at the studio moving through a Vinyasa flow
                that leaves you feeling both replenished and relaxed. This is an
                All Levels class that helps you build your own heat and finish
                with a relaxing savasana.
              </p>

              {/* Fridays */}
              <div className="border-b-4 mt-4"></div>

              <h3 className="text-2xl font-thin text-black mt-4">
                Fridays: Mornings
              </h3>
              <p className="flex text-xl mt-2 font-thin text-black tracking-wide">
                Mindful Movement:
              </p>
              <p className="flex text-sm font-thin text-black  tracking-wide">
                {" "}
                8:00am - 9:00am
              </p>
              <p className="text-xs font-thin mt-2 text-gray-600">
                Class Description:
              </p>
              <p className="text-xs font-thin tracking-wide mt-1 text-black  pb-2">
                Our Mindful Movement is a Vinyasa Flow that focuses on
                stretching and lengthening the body. We may linger in poses
                longer and slow things down when needed. All levels welcome.
              </p>

              {/* Sundays */}
              <div className="border-b-4 mt-4"></div>
              <h3 className="text-2xl font-thin text-black mt-4">
                Sundays: Evenings
              </h3>
              <p className="flex text-xl mt-2 font-thin text-black tracking-wide">
                Mindful Movement:
              </p>
              <p className="flex text-sm font-thin text-black  tracking-wide">
                {" "}
                4:00pm - 5:00pm
              </p>
              <p className="text-xs font-thin mt-2 text-black">
                Class Description:
              </p>
              <p className="text-xs font-thin tracking-wide mt-1 text-black  pb-2">
                Start the week off slow and steady. Our Mindful Movement is a
                Vinyasa Flow that focuses on stretching and lengthening the
                body. We may linger in poses longer and slow things down when
                needed. All levels welcome.
              </p>
              <div className="border-b-2 border-gray-100 mt-4"></div>
              <p className="flex text-xl mt-2 font-thin text-black tracking-wide">
                Fire Flow:
              </p>
              <p className="flex text-sm font-thin text-black  tracking-wide">
                {" "}
                5:30pm - 6:30pm
              </p>
              <p className="text-xs font-thin mt-2 text-black">
                Class Description:
              </p>
              <p className="text-xs font-thin tracking-wide mt-1 text-black  pb-2">
                Start the week off strong! Challenge yourself in this evening
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
