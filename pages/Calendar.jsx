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
              View August Calendar
            </button>
          </div>
          <div className="flex sm: flex-wrap gap-10 sm:divide-x justify-center sm:w-full mx-auto   mt-10  pb-10 mb-10 ">
            {/* WORKSHOP CONTAINER */}

            <div className="w-full   px-5 py-5 sm:max-w-lg rounded-xl pt-3 shadow-sm">
              <h2 className="flex justify-center text-2xl font-thin tracking-wider text-black border-b-2 pb-2">
                Upcoming Workshops
              </h2>

              {/* Raindrop Technique Demo */}

              <div>
                <h3 className="text-3xl font-thin tracking-wider text-teal-600 mt-4">
                  Thursday August 24th
                </h3>
                <p className="text-2xl font-thin text-black mt-4">
                  Raindrop Technique Demo
                </p>
                <p className="flex text-sm font-thin text-black  tracking-wide">
                  {" "}
                  6:30pm - 8:30pm
                </p>
                <p className="text-xs font-semibold mt-2 text-gray-500">
                  Class Description:
                </p>
                <p className="text-sm mt-1 text-gray-500  pb-2">
                  Dr. Kayla Richer will be joining us for yoga and after demoing
                  the Raindrop Technique that she offers at her Chiropractic
                  Office in Pilot Point. Raindrop is a combination of 100%
                  natural Young Living essential oils strategically placed and
                  massaged along the body. It brings harmony and balance to the
                  body by combining targeted massage and distinctive energy
                  approaches. We will move through an hour of Vinyasa Yoga Flow
                  and finish with a Raindrop Demo. You will have the opportunity
                  to book an appointment at $10 off if booked this day for a
                  later date at her Office. You will leave with a Raindrop Oil
                  Roller to help balance the body even when you are not
                  receiving an actual Raindrop! Bring yoga mat, water, and good
                  energy. Come learn with us all about the Raindrop Technique
                </p>
                {user && (
                  <Link href="https://buy.stripe.com/3cs8zTgzq9064hO14J">
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
              {/* FULL MOON RECHARGE WORKSHOP */}

              <div>
                <h3 className="text-3xl font-thin tracking-wider text-teal-600 mt-4">
                  Thursday August 31st
                </h3>
                <p className="text-2xl font-thin text-black mt-4">
                  Full Moon Recharge Workshop
                </p>
                <p className="flex text-sm font-thin text-black  tracking-wide">
                  {" "}
                  6:30pm - 8:30pm
                </p>
                <p className="text-xs font-semibold mt-2 text-gray-500">
                  Class Description:
                </p>
                <p className="text-sm mt-1 text-gray-500  pb-2">
                  Join us for a cleansing Moon Yoga Flow and Meditation. Now is
                  the time to cleanse your space of low vibrations and and
                  stagnate energy. Use the Moon energy to feel renewed and
                  release all that does not serve you. We will move through a
                  cleansing Moon flow and finish with Mediation and breath work.
                  Grab your Malas to help you through your meditation, if you
                  don&apos;t have a Mala no problem you can do without or grab
                  one for purchase at the studio! Bring water, yoga mat,
                  anything you like for meditation! We will also be providing
                  iTOVi scans.
                  <span className=" text-xs">
                    {" "}
                    (What is iTOVI? It is a handheld device that uses subtle
                    electrical frequencies and GSR Technology to test and record
                    your body&apos;s realtime responses to natural wellness
                    products)
                  </span>
                </p>
                {user && (
                  <Link href="https://buy.stripe.com/6oE4jD5UM906dSo28M">
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

              {/* RAY ROBERTS WORKSHOP */}

              <div>
                <h3 className="text-3xl font-thin tracking-wider text-teal-600 mt-4">
                  Thursday September 7th
                </h3>
                <p className="text-2xl font-thin text-black mt-4">
                  Ray Roberts - Sunset Yoga Workshop
                </p>
                <p className="flex text-sm font-thin text-black  tracking-wide">
                  {" "}
                  7:30pm - 9:00pm
                </p>
                <p className="text-xs font-semibold mt-2 text-gray-500">
                  Class Description:
                </p>
                <p className="text-sm mt-1 text-gray-500  pb-2">
                  Summer Time is the best time to enjoy the great outdoors! Join
                  us for a beautiful Sunset Yoga on the sand near the water. At
                  Ray Roberts Lake State Park Isle Du Bois. Come in your swim
                  suit or light yoga wear. And let&apos;s move on our mats while
                  we watch the Sunset! To bring: yoga mat, water, towel, bug
                  spray.
                  <br /> To purchase you must go online to the state park asap
                  and reserve a day use pass. This is the only way to ensure
                  access to the Beach. It is $7 per car. Passes can be purchased
                  ahead of time. You must also purchase this workshop online,
                  (You may not pay in person).
                  <br />
                  <br />
                  <Link
                    href="https://texasstateparks.reserveamerica.com/camping/ray-roberts-lake-state-park-isle-du-bois/r/deDetails.do?contractCode=TX&parkId=1200123"
                    target="0"
                  >
                    <div className=" ease-in transform hover:scale-105 transition duration-100 bg-slate-300 flex justify-center rounded-full max-w-sm text-slate-600 tracking-wide mb-4">
                      Click here to get your Ray Roberts Day Use Pass
                    </div>
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

              {/* AUTUMN EQUINOX WORKSHOP */}

              <div>
                <h3 className="text-3xl font-thin tracking-wider text-teal-600 mt-4">
                  Saturday September 23rd
                </h3>
                <p className="text-2xl font-thin text-black mt-4">
                  Autumn Equinox Workshop
                </p>
                <p className="flex text-sm font-thin text-black  tracking-wide">
                  {" "}
                  10:00am - 12:00pm
                </p>
                <p className="text-xs font-semibold mt-2 text-gray-500">
                  Class Description:
                </p>
                <p className="text-sm mt-1 text-gray-500  pb-2">
                  Autumn is a time of transformation and reflection. Take time
                  to reflect on your life and where you are going in it. With
                  grace, let go of anything that is not serving you positively
                  and make way for new blessings. 108 Sun Salutations helps to
                  cleanse and bring in this new season. We will move through
                  sets of sun salutes starting slow and increasing intensity.
                  Finishing with a much needed Savasana adjustmenet. Bring
                  water, yoga mat, small towel. This is a challenging workshop.
                  Expect to sweat.
                </p>
                {user && (
                  <Link href="https://buy.stripe.com/9AQ3fz2IA7W28y4fZE">
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

              {/* FALL EQUINOX KIDS YOGA WORKSHOP */}

              <div>
                <h3 className="text-3xl font-thin tracking-wider text-teal-600 mt-4">
                  Saturday September 23rd
                </h3>
                <p className="text-2xl font-thin text-black mt-4">
                  Autumn Equinox - Kids Yoga Workshop
                </p>
                <p className="flex text-sm font-thin text-black  tracking-wide">
                  {" "}
                  1:30pm - 3:00pm
                </p>
                <p className="text-xs font-semibold mt-2 text-gray-500">
                  Class Description:
                </p>
                <p className="text-sm mt-1 text-gray-500  pb-2">
                  Through our fun and interactive workshop, your child will
                  learn yoga poses, breathing exercises, partner work, guided
                  visualization and relaxation with a seasonal themed craft. The
                  focus is the teach mindfulness, self regulation skills,
                  balance, flexibility, coordination, strength and
                  self-awareness. All Students will leave with a handmade beaded
                  wall hanging.
                </p>
                {user && (
                  <Link href="https://buy.stripe.com/00g03ngzq0tA29G00H">
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
              {/* FULL MOON RECHARGE WORKSHOP */}

              <div>
                <h3 className="text-3xl font-thin tracking-wider text-teal-600 mt-4">
                  Friday September 29th
                </h3>
                <p className="text-2xl font-thin text-black mt-4">
                  Full Moon Recharge Workshop
                </p>
                <p className="flex text-sm font-thin text-black  tracking-wide">
                  {" "}
                  6:30pm - 8:30pm
                </p>
                <p className="text-xs font-semibold mt-2 text-gray-500">
                  Class Description:
                </p>
                <p className="text-sm mt-1 text-gray-500  pb-2">
                  Join us for a cleansing Moon Yoga Flow and Meditation. Now is
                  the time to cleanse your space of low vibrations and and
                  stagnate energy. Use the Moon energy to feel renewed and
                  release all that does not serve you. We will move through a
                  cleansing Moon flow and finish with Mediation and breath work.
                  Grab your Malas to help you through your meditation, if you
                  don&apos;t have a Mala no problem you can do without or grab
                  one for purchase at the studio! Bring water, yoga mat,
                  anything you like for meditation! We will also be providing
                  iTOVi scans.
                  <span className=" text-xs">
                    {" "}
                    (What is iTOVI? It is a handheld device that uses subtle
                    electrical frequencies and GSR Technology to test and record
                    your body&apos;s realtime responses to natural wellness
                    products)
                  </span>
                </p>
                {user && (
                  <Link href="https://buy.stripe.com/6oE4jD5UM906dSo28M">
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
