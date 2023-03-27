import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import fcLogo from "../components/assets/images/fourClover_logo.png";
import ybLogo from "../components/assets/images/YB_Logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import inhale from "../components/assets/images/inhaleExhale.jpeg";
import clouds from "../components/assets/images/dominik-schroder-FIKD9t5_5zQ-unsplash.jpg";
import sunset from "../components/assets/images/tim-johnson-430Ad4CRkhk-unsplash.jpg";
import mountains from "../components/assets/images/rohit-tandon-9wg5jCEPBsw-unsplash.jpg";
import YBIcon from "../components/assets/images/ybIcon.png";

function PricingPage() {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      <div className="relative text-center pt-24 font-thin text-2xl tracking-wider text-teal-600">
        PRICING TEST 1
        <div className="relative w-full pt-4">
          <Image src={inhale} alt="Yoga Barn" className=" object-cover h-48 " />
        </div>
        <div
          className="absolute  left-1/2 transform -translate-x-1/2 
  text-white text-center w-full flex flex-col bottom-3"
        >
          <div className=" text-3xl font-thin tracking-wide text-white ">
            Virtual yoga coming soon!
          </div>
          <div className=" text-gray-100 font-thin text-base">
            Ages 55 and up qualify for Senior Discount.
          </div>
        </div>
      </div>
      {/*  */}
      {/* WORKSHOPS */}
      {/*  */}

      <div className=" flex justify-center">
        <div className="text-3xl text-center font-bold   w-full   pt-16 px-3">
          <div className="flex justify-center">
            <Image src={YBIcon} alt="Yoga Barn Icon" className="  w-16 h-14" />
          </div>
          <div className="flex justify-center tracking-widest items-center text-4xl font-thin text-teal-600  px-4  rounded-2xl pt-2">
            WORKSHOPS
          </div>
          <div className="flex justify-center">
            {/*  */}
            {/* workshops container */}
            {/*  */}
            <div className="flex-wrap justify-center sm:flex ">
              {/* BLESSINGS OF SPRING EQUINOX */}

              <div className=" bg-white  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-full rounded-lg mt-2  ">
                <div className="p-2 text-lg font-thin tracking-wide text-black">
                  <div className="flex ">
                    {" "}
                    <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                      <Image
                        className="h-6 w-10"
                        src={ybLogo}
                        alt="Yoga Barn"
                      />
                    </div>
                    Blessings of Spring Equinox
                  </div>
                  <p className="text-xs font-normal text-left bg-gray-100 py-2 px-2 rounded-xl">
                    Welcome Spring Equinox at the Yoga Barn. We will be moving
                    through 108 Sun Salutations to welcome this new season. This
                    is a challenging practice that helps strengthen body and
                    mind. Leave feeling refreshed and ready for what ever life
                    offers you in this new season. Mat, Water and Small Towel
                    recommended. Workshop is $25 - Space is limited purchase
                    tickets as soon as possible!
                  </p>
                  <div className="flex p-2 items-center text-2xl font-thin">
                    <div> $25</div>
                    {user && (
                      <Link href="https://buy.stripe.com/28o7vPbf60tA6pWaER">
                        <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8 ml-4 text-white rounded-full tracking-widest">
                          Pay
                        </button>
                      </Link>
                    )}
                    {!user && (
                      <Link href="/signUpPage">
                        <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8 ml-4 text-white rounded-full">
                          Sign-Up to Purchase
                        </button>
                      </Link>
                    )}
                    <div className="ease-in transform hover:scale-105 transition duration-100 flex-wrap ml-2 justify-center">
                      <Link href="/Contact">
                        <div className="flex mt-1 text-center font-normal justify-center px-2  items-center bg-gray-400 text-white    rounded-full  text-xs ">
                          Class Packs Include $5 Off
                        </div>

                        <span className="flex mt-0 text-center font-normal justify-center  items-center text-gray-500      text-xs ">
                          Click to Contact for Code
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/* SPECIALS & EXTRAS */}
      {/*  */}
      {/*  */}
      <div className=" pt-16  px-3">
        <div className="flex justify-center">
          <Image src={YBIcon} alt="Yoga Barn Icon" className="w-16 h-14" />
        </div>
        <div className="flex justify-center tracking-wider items-center text-4xl font-thin text-teal-600  px-4 rounded-2xl text-center pt-2">
          SPECIALS & EXTRAS
        </div>
        {/* NEW STUDENT SPECIAL */}
        <div className="flex justify-center">
          <div className="flex-wrap sm:flex justify-center items-center gap-3">
            <div className=" bg-white border-2 font-thin tracking-wide border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2">
              <div className="p-2 text-lg  text-black">
                <div className="flex tracking-wider">
                  {" "}
                  <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                    <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
                  </div>
                  New Student Special
                </div>
                <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
                  Try 2 Weeks Unlimited at the Yoga Barn - Expires after 2 weeks
                  from first attended class
                </p>
                <div className="flex p-2 items-center text-2xl font-thin">
                  <div> $30</div>
                  {user && (
                    <Link href="https://buy.stripe.com/eVa5nH0As3FMdSo4gj">
                      <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8 ml-4 text-white rounded-full tracking-widest">
                        Pay
                      </button>
                    </Link>
                  )}
                  {!user && (
                    <Link href="/signUpPage">
                      <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8 ml-4 text-white rounded-full">
                        Sign-Up to Purchase
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            {/*  */}
            {/* MAT RENTAL */}
            {/*  */}
            <div className=" bg-white border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 font-thin tracking-wide">
              <div className="p-2 text-lg font-thin text-black">
                <div className="flex">
                  {" "}
                  <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                    <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
                  </div>
                  Yoga Mat Rental
                </div>
                <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
                  We encourage you to invest into your yoga practice by
                  purchasing your own mat, but we will always be able to supply
                  one for you.
                </p>
                <div className="flex p-2 items-center text-2xl font-thin">
                  <div> $2</div>
                  {user && (
                    <Link href="https://buy.stripe.com/eVaaI1dneb8ebKg28h">
                      <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8 ml-4 text-white rounded-full tracking-widest">
                        Pay
                      </button>
                    </Link>
                  )}
                  {!user && (
                    <Link href="/signUpPage">
                      <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8 ml-4 text-white rounded-full">
                        Sign-Up to Purchase
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="relative">
          <Image
            src={mountains}
            alt="Yoga Barn"
            className="object-cover h-48 mt-16"
          />
        </div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
 font-thin text-5xl text-white text-center "
        >
          INHALE
        </div>
      </div>
      {/*  */}
      {/* SINGLE CLASS */}
      {/*  */}
      <div className="flex justify-center">
        <div className="text-3xl text-center font-bold    w-full   pt-16 px-3">
          <div className="flex justify-center">
            <Image src={YBIcon} alt="Yoga Barn Icon" className="w-16 h-14" />
          </div>
          <div className="flex justify-center tracking-wide items-center text-4xl font-thin text-teal-600 px-4  rounded-2xl">
            SINGLE CLASS
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center items-center">
              <div className=" flex justify-center bg-white border-2 border-gray-100 shadow-md  rounded-lg mt-2 pt-2 font-thin  px-2">
                <div className=" text-lg font-thin text-black tracking-wide">
                  <div className="flex">
                    <div className="flex justify-end ml-3 mx-3 max-w-1/2  px-2">
                      <Image
                        className="h-6 w-10"
                        src={ybLogo}
                        alt="Yoga Barn"
                      />
                    </div>
                    Single Class/Drop-In
                  </div>
                  <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
                    One single class at the Yoga Barn - Expires after 30 days
                  </p>
                  <div className="flex p-2 items-center text-2xl font-thin">
                    <div> $20</div>
                    {user && (
                      <Link href="https://buy.stripe.com/7sI2bv96Ygsy01y4gk">
                        <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8 ml-4 text-white rounded-full">
                          Pay
                        </button>
                      </Link>
                    )}
                    {!user && (
                      <Link href="/signUpPage">
                        <button className="ease-in transform hover:scale-105 transition duration-100 text-xs bg-teal-600 py-1 px-4 ml-4 text-white rounded-full">
                          Sign-Up to Purchase
                        </button>
                      </Link>
                    )}

                    <div className="ease-in transform hover:scale-105 transition duration-100 flex-wrap ml-2 justify-center">
                      <Link href="/Contact">
                        <div className="flex mt-1 text-center font-normal justify-center px-2  items-center bg-gray-400 text-white    rounded-full  text-xs ">
                          Senior Discount Available
                        </div>

                        <span className="flex mt-0 text-center font-normal justify-center  items-center text-gray-500      text-xs ">
                          Click to Contact for Code
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/* MONTHLY PACKS */}
      {/*  */}
      {/*  */}

      {/* BLISS PACK */}
      <div className="pt-16  px-3">
        <div className="flex justify-center">
          <Image src={YBIcon} alt="Yoga Barn Icon" className="w-16 h-14" />
        </div>
        <div className="flex justify-center tracking-wide items-center text-4xl font-thin text-teal-600 px-4 py-2 rounded-2xl ">
          MONTHLY PACKS
        </div>
        <div className="flex sm: flex-wrap justify-center gap-3 items-center">
          <div className="items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 bg-gray-200 ">
            <div className="p-2 text-lg font-thin tracking-wide text-black">
              <div className="flex items-center mb-1">
                {" "}
                <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                  <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
                </div>
                Bliss Pack
                <div className="flex ml-3 py-1 px-4  text-center justify-center font-bold  items-center bg-teal-700 text-white    rounded-full tracking-wide   text-xs animate-pulse ">
                  MOST POPULAR
                </div>
              </div>
              <p className="text-xs font-thin tracking-wide bg-gray-100 py-2 px-2 rounded-xl">
                Monthly Unlimited Auto-Renewal with 4 Month Commitment -
                <span className="font-semibold">Includes Virtual Yoga</span>
              </p>
              <div className="flex p-2 items-center text-2xl font-thin">
                <div> $110</div>
                {user && (
                  <Link href="https://buy.stripe.com/00gdUdcjaekq15C14l">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8 ml-4 text-white rounded-full">
                      Pay
                    </button>
                  </Link>
                )}
                {!user && (
                  <Link href="/signUpPage">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-xs bg-teal-600 py-1 px-4 ml-4 text-white rounded-full">
                      Sign-Up to Purchase
                    </button>
                  </Link>
                )}
                <div className="flex-wrap ml-2 justify-center ease-in transform hover:scale-105 transition duration-100">
                  <Link href="/Contact">
                    <div className="flex mt-1 text-center font-normal justify-center px-2  items-center bg-gray-400 text-white    rounded-full  text-xs ">
                      Senior Discount Available
                    </div>

                    <span className="flex mt-0 text-center font-normal justify-center  items-center text-gray-500      text-xs ">
                      Click to Contact for Code
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ENLIGHTENED PACK */}
          <div className="items-center justify-center bg-white text-black  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg  ">
            <div className="p-2 text-lg font-thin tracking-wide">
              <div className="flex items-center mb-1">
                {" "}
                <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                  <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
                </div>
                Enlightened Pack
              </div>
              <p className=" bg-gray-100 text-xs font-normal py-2 px-2 rounded-xl">
                Monthly Unlimited -{" "}
                <span className="font-bold animate-pulse">
                  No Monthly Commitment
                </span>
              </p>
              <div className="flex p-2 items-center text-2xl font-black">
                <div> $125</div>
                {user && (
                  <Link href="https://buy.stripe.com/00gdUdcjaekq15C14l">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-emerald-600 py-2 px-8 ml-4 text-white rounded-full">
                      Pay
                    </button>
                  </Link>
                )}
                {!user && (
                  <Link href="/signUpPage">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-xs bg-emerald-600 py-1 px-4 ml-4 text-white rounded-full">
                      Sign-Up to Purchase
                    </button>
                  </Link>
                )}
                <div className="flex-wrap ml-2 justify-center ease-in transform hover:scale-105 transition duration-100">
                  <Link href="/Contact">
                    <div className="flex mt-1 text-center font-normal justify-center px-2  items-center bg-gray-400 text-white    rounded-full  text-xs ">
                      Senior Discount Available
                    </div>

                    <span className="flex mt-0 text-center font-normal justify-center  items-center text-gray-500      text-xs ">
                      Click to Contact for Code
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ENLIGHTENED FAMILY PACK */}

          <div className="items-center justify-center bg-white text-black border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg  ">
            <div className="p-2 text-lg font-bold">
              <div className="flex">
                {" "}
                <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                  <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
                </div>
                Enlightened Family Pack
              </div>
              <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
                Bring a friend or family member with you to enjoy your monthly
                unlimited classes with. - Includes 2 Members and expires after
                30 days from first attended class. Each Additional member is $40
              </p>
              <div className="flex p-2 items-center text-2xl font-black">
                <div> $165</div>
                {user && (
                  <Link href="https://buy.stripe.com/4gw7vP96Y6RY01y28o">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-emerald-600 py-2 px-8 ml-4 text-white rounded-full">
                      Pay
                    </button>
                  </Link>
                )}
                {!user && (
                  <Link href="/signUpPage">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-xs bg-emerald-600 py-1 px-4 ml-4 text-white rounded-full">
                      Sign-Up to Purchase
                    </button>
                  </Link>
                )}
                <div className="ease-in transform hover:scale-105 transition duration-100 flex-wrap ml-2 justify-center">
                  <Link href="/Contact">
                    <div className="flex mt-1 text-center font-normal justify-center px-2  items-center bg-gray-400 text-white    rounded-full  text-xs ">
                      Senior Discount Available
                    </div>

                    <span className="flex mt-0 text-center font-normal justify-center  items-center text-gray-500      text-xs ">
                      Click to Contact for Code
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-16">
        <div className="relative">
          <Image src={sunset} alt="Yoga Barn" className=" object-cover h-48" />
        </div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
 font-thin text-5xl text-white text-center"
        >
          EXHALE
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/* CLASS PACKS */}
      {/*  */}
      {/*  */}

      <div className="py-4  px-3 pt-16">
        <div className="flex justify-center">
          <Image src={YBIcon} alt="Yoga Barn Icon" className="w-16 h-14" />
        </div>
        <div className="flex justify-center tracking-wide items-center text-4xl font-thin text-teal-600 px-4 py-2 rounded-2xl">
          CLASS PACKS
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {/* ZEN PACK*/}
          <div className="flex bg-gray-50 flex-wrap items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 ">
            <div className="p-2 text-lg font-bold">
              <div className="flex text-black ">
                {" "}
                <div className="flex justify-end ml-3 mx-3 max-w-1/2  ">
                  <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
                </div>
                Zen Pack
              </div>

              <p className="text-xs font-normal bg-gray-100 text-black py-2 px-2 rounded-xl">
                5 Classes at Yoga Barn - Expires after 30 Days
              </p>
              <div className="flex p-2 items-center text-2xl font-black">
                <div className="text-black"> $65</div>
                {user && (
                  <Link href="https://buy.stripe.com/eVa7vP3MEa4adSodR9">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-emerald-600 py-2 px-8 ml-4 text-white rounded-full">
                      Pay
                    </button>
                  </Link>
                )}
                {!user && (
                  <Link href="/signUpPage">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-xs bg-emerald-600 py-1 px-4 ml-4 text-white rounded-full">
                      Sign-Up to Purchase
                    </button>
                  </Link>
                )}

                <div className="ease-in transform hover:scale-105 transition duration-100 flex-wrap ml-2 justify-center">
                  <Link href="/Contact">
                    <div className="flex mt-1 text-center font-normal justify-center px-2  items-center bg-gray-400 text-white    rounded-full  text-xs ">
                      Senior Discount Available
                    </div>

                    <span className="flex mt-0 text-center font-normal justify-center  items-center text-gray-500      text-xs ">
                      Click to Contact for Code
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* WARRIOR PACK */}
          <div className="flex bg-gray-50 flex-wrap items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2">
            <div className="p-2 text-lg font-bold">
              <div className="flex text-black">
                {" "}
                <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                  <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
                </div>
                Warrior Pack
              </div>
              <p className="text-xs text-black font-normal bg-gray-100 py-2 px-2 rounded-xl">
                10 Classes at the Yoga Barn - Expires after 60 Days
              </p>
              <div className="flex p-2 items-center text-2xl font-black">
                <div className="text-black"> $135</div>
                {user && (
                  <Link href="https://buy.stripe.com/7sIcQ94QIa4a6pW00i">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-emerald-600 py-2 px-8 ml-4 text-white rounded-full">
                      Pay
                    </button>
                  </Link>
                )}
                {!user && (
                  <Link href="/signUpPage">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-xs bg-emerald-600 py-1 px-4 ml-4 text-white rounded-full">
                      Sign-Up to Purchase
                    </button>
                  </Link>
                )}
                <div className="ease-in transform hover:scale-105 transition duration-100 flex-wrap ml-2 justify-center">
                  <Link href="/Contact">
                    <div className="flex mt-1  text-center font-normal justify-center px-2  items-center bg-gray-400 text-white    rounded-full  text-xs ">
                      Senior Discount Available
                    </div>

                    <span className="flex mt-0 text-center font-normal justify-center  items-center text-gray-500      text-xs ">
                      Click to Contact for Code
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/* PRIVATE SESSIONS */}
      {/*  */}
      {/*  */}

      <div className="pt-16  px-3">
        <div className="flex justify-center">
          <Image src={YBIcon} alt="Yoga Barn Icon" className="w-16 h-14" />
        </div>
        <div className="flex justify-center tracking-wide items-center text-4xl font-thin text-teal-600 px-4 py-2 rounded-2xl ">
          PRIVATE SESSIONS
        </div>
      </div>
      {/* SINGLE PRIVATE SESSIONS */}
      <div className="flex justify-center">
        <div className="flex-wrap gap-3 sm:flex justify-center text-black">
          <div className="items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 mr-3">
            <div className="p-2 text-lg font-bold">
              <div className="flex">
                {" "}
                <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                  <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
                </div>
                Single Private Yoga Session
              </div>
              <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
                One on One In-Studio Session from 1 Hour to 1 Hour 15 Minutes -
                Contact studio for scheduling - In Home Sessions available upon
                request for additional charge. (Local to Whitesboro)
              </p>
              <div className="flex p-2 items-center text-2xl font-black">
                <div> $65</div>
                {user && (
                  <Link href="https://buy.stripe.com/eVaaI16YQ0tA15C8wQ">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-emerald-600 py-2 px-8 ml-4 text-white rounded-full">
                      Pay
                    </button>
                  </Link>
                )}
                {!user && (
                  <Link href="/signUpPage">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-emerald-600 py-2 px-8 ml-4 text-white rounded-full">
                      Sign-Up to Purchase
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* 5 PRIVATE SESSIONS */}

          <div className="items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 mr-3">
            <div className="p-2 text-lg font-bold">
              <div className="flex">
                {" "}
                <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                  <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
                </div>
                5 Private Yoga Session
              </div>
              <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
                One on One In-Studio Session from 1 Hour to 1 Hour 15 Minutes -
                Contact studio for scheduling - In Home Sessions available upon
                request for additional charge. (Local to Whitesboro)
              </p>
              <div className="flex p-2 items-center text-2xl font-black">
                <div> $300</div>
                <span className="text-xs ml-1 font-semibold"> ($25 Off)</span>
                {user && (
                  <Link href="https://buy.stripe.com/6oEdUd96Y0tAaGc8wR">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-emerald-600 py-2 px-8 ml-4 text-white rounded-full">
                      Pay
                    </button>
                  </Link>
                )}
                {!user && (
                  <Link href="/signUpPage">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-emerald-600 py-2 px-8 ml-4 text-white rounded-full">
                      Sign-Up to Purchase
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* 10 PRIVATE SESSIONS */}

          <div className="items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 mr-3">
            <div className="p-2 text-lg font-bold">
              <div className="flex">
                {" "}
                <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                  <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
                </div>
                10 Private Yoga Session
              </div>
              <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
                One on One In-Studio Session from 1 Hour to 1 Hour 15 Minutes -
                Contact studio for scheduling - In Home Sessions available upon
                request for additional charge. (Local to Whitesboro)
              </p>
              <div className="flex p-2 items-center text-2xl font-black">
                <div> $550</div>
                <span className="text-xs ml-1 font-semibold"> ($100 Off)</span>
                {user && (
                  <Link href="https://buy.stripe.com/cN2eYh1Ewekqg0wfZk">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-emerald-600 py-2 px-8 ml-4 text-white rounded-full">
                      Pay
                    </button>
                  </Link>
                )}
                {!user && (
                  <Link href="/signUpPage">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-emerald-600 py-2 px-8 ml-4 text-white rounded-full">
                      Sign-Up to Purchase
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/* FOUR CLOVER PRODUCTS */}
      {/*  */}
      <div className="pt-16  px-3">
        <div className="flex justify-center">
          <Image src={fcLogo} alt="Yoga Barn Icon" className=" w-24 h-18" />
        </div>
        <div className="flex justify-center tracking-wide items-center text-4xl font-thin text-teal-600 px-4 py-2 rounded-2xl text-center ">
          Four Clovers Products
        </div>
      </div>
      <div className="flex justify-center">
        <span className="flex justify-center text-xs font-semibold mt-1 text-gray-500 text-center mr-2">
          All Items will include shipping. For Local Pick Up, Enter code at
          checkout for $5 Off
        </span>
      </div>
      <div className="flex justify-center">
        <div className="flex-wrap gap-3 sm:flex ">
          {/* ELDERBERRY */}

          <div className="items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 mr-3">
            <div className="p-2 text-lg font-bold text-black">
              <div className="flex items-center">
                {" "}
                <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                  <Image className="h-6 w-10" src={fcLogo} alt="Four Clovers" />
                </div>
                Organic Elderberry Elixir
              </div>
              <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
                Immune boosting supplement to help ease cold, flu, and sinus.
                Encourages healthy skin. Natural diuretic. Eases allergies. This
                is a DIY kit that you can do at home. Add your local raw honey
                (not included) and water. Yields 32oz.
              </p>
              <div className="flex p-2 items-center text-2xl font-black">
                <div>
                  {" "}
                  $32
                  <div className="flex text-center text-xs font-normal">
                    + Shipping: $5
                  </div>
                </div>

                <Link href="https://buy.stripe.com/4gwdUd96Y7W2cOkaEF">
                  <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-emerald-600 py-2 px-8 ml-4 text-white rounded-full">
                    Pay
                  </button>
                </Link>

                <div className="flex-col ml-3 justify-center">
                  <div className="flex mt-1  text-center font-normal justify-center px-2  items-center bg-gray-400 text-white    rounded-full  text-xs ">
                    Local Pick-Up Available
                  </div>

                  <span className="flex mt-0 text-center font-normal justify-center  items-center text-gray-500      text-xs ">
                    Use Code: whitesboro
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* SOURDOUGH */}

          <div className="items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 mr-3">
            <div className="p-2 text-lg font-bold text-black">
              <div className="flex items-center">
                {" "}
                <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                  <Image className="h-6 w-10" src={fcLogo} alt="Four Clovers" />
                </div>
                Organic Sourdough Starter
              </div>
              <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
                This is a very well loved and nurtured organic starter. Make
                your sourdough journey an easy one by grabbing a kit and getting
                started with a very active healthy starter. Great gift for those
                you love. It&apos;s the gift that keeps giving.
              </p>
              <div className="flex p-2 items-center text-2xl font-black">
                <div>
                  {" "}
                  $15
                  <div className="flex text-center text-xs font-normal">
                    + Shipping: $5
                  </div>
                </div>

                <Link href="https://buy.stripe.com/bIYg2l2IAb8e3dK8wG">
                  <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-emerald-600 py-2 px-8 ml-4 text-white rounded-full">
                    Pay
                  </button>
                </Link>

                <div className="flex-col ml-3 justify-center">
                  <div className="flex mt-1  text-center font-normal justify-center px-2  items-center bg-gray-400 text-white    rounded-full  text-xs ">
                    Local Pick-Up Available
                  </div>

                  <span className="flex mt-0 text-center font-normal justify-center  items-center text-gray-500      text-xs ">
                    Use Code: whitesboro
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingPage;
