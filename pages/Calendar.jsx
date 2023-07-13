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
import Head from "next/head";
import Script from "next/script";
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
      <Head>
        <title>Yoga Barn - Schedule</title>
        <meta
          name="description"
          content="Yoga Barn - Yoga Studio Schedule in Whitesboro"
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
      {showSchedule && <Schedule />}
      {!showSchedule && (
        <>
          <h1 className="flex justify-center text-2xl font-thin tracking-wider pt-24 text-center text-black  ">
            YOGA BARN <br />
            SCHEDULED CLASSES
          </h1>
          <div className="flex justify-center">
            <button
              onClick={() => {
                setShowSchedule(true);
              }}
              className="ease-in transform hover:scale-105 transition duration-100 text-sm font-semibold  bg-teal-600 py-1 px-4 text-white rounded-full mt-2 animate-pulse"
            >
              View July Calendar
            </button>
          </div>
          <div className="flex sm: flex-wrap gap-10 sm:divide-x justify-center sm:w-full mx-auto   mt-10  pb-10 mb-10 ">
            {/* WORKSHOP CONTAINER */}

            <div className="w-full   px-5 py-5 sm:max-w-lg rounded-xl pt-3 shadow-sm">
              <h2 className="flex justify-center text-2xl font-thin tracking-wider text-black border-b-2 pb-2">
                Upcoming Workshops
              </h2>

              {/* PRENATAL WORKSHOP */}

              <div>
                <h3 className="text-3xl font-thin tracking-wider text-teal-600 mt-4">
                  Saturdays - July 8th - August 5th
                </h3>
                <p className="text-2xl font-thin text-black mt-4">
                  Prenatal Yoga - Series
                </p>
                <p className="flex text-sm font-thin text-black  tracking-wide">
                  {" "}
                  12:00pm - 1:00pm
                </p>
                <p className="text-xs font-semibold mt-2 text-gray-500">
                  Class Description:
                </p>
                <p className="text-sm mt-1 text-gray-500  pb-2">
                  Finding Movement As Your Body Changes Building community with
                  other mamas Reduce stress and anxiety Improve Sleep Quality
                  Increase strength and Flexibility Decrease back pain, nausea
                  and headaches Tones muscles needed for child birth
                </p>
                {user && (
                  <Link href="https://buy.stripe.com/14k4jDerib8e4hO4gP">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8  text-white rounded-full">
                      Buy Series
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
              {/* Sunset Beach Yoga */}

              <div>
                <h3 className="text-3xl font-thin tracking-wider text-teal-600 mt-4">
                  Thursday July 13th
                </h3>
                <p className="text-2xl font-thin text-black mt-4">
                  Sunset Beach Yoga @ Ray Roberts Lake
                </p>
                <p className="flex text-sm font-thin text-black  tracking-wide">
                  {" "}
                  7:30pm - 9:00pm
                </p>
                <p className="text-xs font-semibold mt-2 text-gray-500">
                  Class Description:
                </p>
                <p className="text-sm mt-1 text-gray-500  pb-2">
                  Summer time is the best time to enjoy the great outdoors! Join
                  us for a beautiful Sunset Yoga on the sand near the water. At
                  Ray Roberts Lake State Park Isle Du Bois. Come in your swim
                  suit or light yoga wear. Let&apos;s move on our mats while we
                  watch the Sunset! To Bring: Yoga Mat, Water, Towel, Bug Spray.{" "}
                  <br />
                  To purchase, you must go online to the state park ASAP and
                  reserve a day use pass. This is the only way to ensure access
                  to the beach. it is $7 per car and can be purchased ahead of
                  time and you must also purchase this workshop online. (You may
                  not pay in person)
                  <br />
                  <br />
                  <Link
                    href="https://texasstateparks.reserveamerica.com/camping/ray-roberts-lake-state-park-isle-du-bois/r/deDetails.do?contractCode=TX&parkId=1200123"
                    target="_blank"
                    className="text-md font-bold text-teal-500"
                  >
                    Click here to go to purchase day pass at Ray Roberts Website
                  </Link>
                </p>
                {user && (
                  <Link href="https://buy.stripe.com/5kAcQ93ME4JQg0w3cJ">
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
              {/* YOGA Play Shop */}

              <div>
                <h3 className="text-3xl font-thin tracking-wider text-teal-600 mt-4">
                  Thursday July 27th
                </h3>
                <p className="text-2xl font-thin text-black mt-4">
                  "Back To School" Kids Yoga Workshop
                </p>
                <p className="flex text-sm font-thin text-black  tracking-wide">
                  {" "}
                  2:00pm - 4:00pm
                </p>
                <p className="text-xs font-semibold mt-2 text-gray-500">
                  Class Description:
                </p>
                <p className="text-sm mt-1 text-gray-500  pb-2">
                  For Ages 4 to 13 <br />
                  This class will encourage mindfulness, creative expression;
                  develop fine motor skills, coordination and patience. Your
                  child will gain skills to self regulate big emotions with
                  strategies and mindful coping skills. This workshop is also an
                  opportunity for making friends as we come together in a
                  creative environment. <br />
                  *Every workshop is unique with circle time, breathing
                  exercise, yoga poses, creative movements, story time, games,
                  meditation and mindfulness craft project.
                </p>
                {user && (
                  <Link href="">
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
              {/* YOGA Play Shop */}

              <div>
                <h3 className="text-3xl font-thin tracking-wider text-teal-600 mt-4">
                  Thursday July 27th
                </h3>
                <p className="text-2xl font-thin text-black mt-4">
                  Yoga Play Shop
                </p>
                <p className="flex text-sm font-thin text-black  tracking-wide">
                  {" "}
                  6:30pm - 8:30pm
                </p>
                <p className="text-xs font-semibold mt-2 text-gray-500">
                  Class Description:
                </p>
                <p className="text-sm mt-1 text-gray-500  pb-2">
                  Alright Yogis, its time to test your strength. We will learn
                  and work through arm balances/inversions or poses that help
                  challenge us while also learning transitions you can connect
                  with and bring to your practice. Have something you want to
                  break down on work on? Share what it is and we can all join
                  in. Love this class to learn, grow and expand your practice.
                  All curious yogis welcome! Bring yoga mat and water.
                </p>
                {user && (
                  <Link href="https://buy.stripe.com/fZe03ngzqfou15C4gO">
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

              {/* END WORKSHOPS */}
            </div>

            <div className="w-full sm: px-5 sm:max-w-lg ">
              <h3 className="flex justify-center text-3xl font-thin tracking-wide text-black border-b-2 pb-2 pt-6">
                Weekly Classes
              </h3>

              {/* Tuesdays and Thursdays */}

              <p className="flex text-xl mt-2 font-thin text-black tracking-wide">
                Sunrise Vinyasa:
              </p>

              <p className="text-xs font-thin mt-2 text-black">
                Class Description:
              </p>
              <p className="text-xs font-thin tracking-wide mt-1 text-black  pb-2">
                Can&apos;t fit an hour class into your schedule? This 45 minute
                class is just right for you. Wake up, get in, sweat and go! This
                is a quick 45 minute power vinyasa flow. This class will
                challenge you. If you give anything to yourself in a day, let it
                be 45 minutes of activity.
              </p>
              <div className="border-b-2 border-gray-100 mt-4"></div>
              <p className="flex text-xl mt-2 font-thin text-black tracking-wide">
                Slow Flow:
              </p>

              <p className="text-xs font-thin mt-2 text-black">
                Class Description:
              </p>
              <p className="text-xs font-thin tracking-wide mt-1 text-black  pb-2">
                Our Slow Flow is a Vinyasa Flow that focuses on stretching and
                lengthening the body. We may linger in poses longer and slow
                things down when needed. All levels welcome.
              </p>

              {/* Wednesdays */}
              <div className="border-b-4 mt-4"></div>

              <p className="flex text-xl mt-2 font-thin text-black tracking-wide">
                Stretch & Flow:
              </p>

              <p className="text-xs font-thin mt-2 text-gray-600">
                Class Description:
              </p>
              <p className="text-xs font-thin tracking-wide mt-1 text-black  pb-2">
                Stretch & Flow is a great class for beginners or yogis wanting
                to linger a little longer in poses while finding a light flow.
                It will leave you feeling both replenished and relaxed. This is
                an All Levels class that helps you build your own heat and
                finish with a relaxing savasana.
              </p>
              <div className="border-b-2 border-gray-100 mt-4"></div>
              <p className="flex text-xl mt-2 font-thin text-black tracking-wide">
                Vinyasa Flow:
              </p>
              <p className="text-xs font-thin mt-2 text-black">
                Class Description:
              </p>
              <p className="text-xs font-thin tracking-wide mt-1 text-black  pb-2">
                Challenge yourself in this energizing vinyasa flow. Grow your
                practice both in mind and body. You will quickly build heat
                moving through more challenging poses and transitions. Leave
                feeling cleansed and renewed, ready to finish your week! Best
                for yogis who are wanting to challenge their practice.
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
