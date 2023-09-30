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
              View Calendar
            </button>
          </div>
          <div className="flex sm: flex-wrap gap-10 sm:divide-x justify-center sm:w-full mx-auto   mt-10  pb-10 mb-10 ">
            {/* WORKSHOP CONTAINER */}

            <div className="w-full   px-5 py-5 sm:max-w-lg rounded-xl pt-3 shadow-sm">
              <h2 className="flex justify-center text-2xl font-thin tracking-wider text-black border-b-2 pb-2">
                Upcoming Workshops
              </h2>

              {/* SPOOKY SPIDER - KIDS YOGA WORKSHOP */}

              <div>
                <h3 className="text-3xl font-thin tracking-wider text-teal-600 mt-4">
                  Saturday October 7th
                </h3>
                <p className="text-2xl font-thin text-black mt-4">
                  Spooky Spider - Kids Yoga Workshop
                </p>
                <p className="flex text-sm font-thin text-black  tracking-wide">
                  {" "}
                  4:00pm - 5:30pm
                </p>
                <p className="text-xs font-semibold mt-2 text-gray-500">
                  Class Description:
                </p>
                <p className="text-sm mt-1 text-gray-500  pb-2">
                  During this workshop we will complete a Halloween themed flow
                  with poses that will surely encourage students to dive deeper
                  into their imagination. Each child will make their own spider
                  web using natural materials while building fine motor skills
                  as we practice building patience and mindfulness through our
                  weaving technique. Students bring your yoga mat and a bottle
                  of water.
                </p>
                {user && (
                  <Link href="https://buy.stripe.com/4gw3fzfvmfou5lS6pg">
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
              {/* SUCCULENT PUMPKIN - WORKSHOP */}

              <div>
                <h3 className="text-3xl font-thin tracking-wider text-teal-600 mt-4">
                  Friday October 13th
                </h3>
                <p className="text-2xl font-thin text-black mt-4">
                  Succulent Pumpkin Social Workshop @ Eucalyptus Room
                  Gainesville
                </p>
                <p className="flex text-sm font-thin text-black  tracking-wide">
                  {" "}
                  6:30pm - 8:30pm
                </p>
                <p className="text-xs font-semibold mt-2 text-gray-500">
                  Class Description:
                </p>
                <p className="text-sm mt-1 text-gray-500  pb-2">
                  Join us at Eucalyptus Room in Gainesville for a fun Fall
                  Craft. We will be putting together beautiful succulent pumpkin
                  arrangements. There will be two sizes to choose from, small
                  and large. Great date night or girls night out. Grab a friend
                  or make some new friends with us. Light snacks and beverages
                  will be provided.
                </p>
                {user && (
                  <>
                    <div className="flex gap-2">
                      <div className="flex flex-col justify-center items-center">
                        <p className=" text-sm tracking-wider ">
                          Small Pumpkin
                        </p>
                        <Link href="https://buy.stripe.com/3cs4jDcja5NU5lS4h6">
                          <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8  text-white rounded-full">
                            Buy Ticket
                          </button>
                        </Link>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <p className=" text-sm tracking-wider ">
                          Large Pumpkin
                        </p>
                        <Link href="https://buy.stripe.com/dR69DXgzqa4a3dK00R">
                          <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8  text-white rounded-full">
                            Buy Ticket
                          </button>
                        </Link>
                      </div>
                    </div>
                  </>
                )}
                {!user && (
                  <Link href="/signUpPage">
                    <button className=" ease-in transform font-bold hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8  text-white rounded-full">
                      Sign-Up to Purchase
                    </button>
                  </Link>
                )}
              </div>

              {/* LAVENDER RIDGE - YOGA WORKSHOP */}

              <div>
                <h3 className="text-3xl font-thin tracking-wider text-teal-600 mt-4">
                  Sunday October 22nd
                </h3>
                <p className="text-2xl font-thin text-black mt-4">
                  Outdoor Yoga Workshop @ Lavender Ridge Farms
                </p>
                <p className="flex text-sm font-thin text-black  tracking-wide">
                  {" "}
                  10:30pm - 11:30pm
                </p>
                <p className="text-xs font-semibold mt-2 text-gray-500">
                  Class Description:
                </p>
                <p className="text-sm mt-1 text-gray-500  pb-2">
                  Join us for yoga at Lavender Ridge Farms in Gainesville. After
                  class enjoy a refreshing lavender lemonade and walk around the
                  beautiful property of Lavender Ridge Farms. The Cafe is open
                  for lunch. Please bring water, yoga mat and props you may
                  need.
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
              <div className="border-b-2 border-gray-100 mt-4"></div>
              <p className="flex text-xl mt-2 font-thin text-black tracking-wide">
                Kids Yoga:
              </p>
              <p className="text-xs font-thin mt-2 text-black">
                Class Description:
              </p>
              <p className="text-xs font-thin tracking-wide mt-1 text-black  pb-2">
                Kids yoga class is for ages 4-12. Enjoy finding movement through
                a fun yoga flow. Kids will learn breath work, meditation and
                yoga poses, while having fun with new friends.
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
