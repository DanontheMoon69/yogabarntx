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
import mala01 from "../components/assets/images/AfricanJadeMala2.jpg";
import YBIcon from "../components/assets/images/ybIcon.png";
import Head from "next/head";
import Script from "next/script";
function PricingPage() {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      <Head>
        <title>Yoga Barn - Pricing</title>
        <meta
          name="description"
          content="Yoga Barn - Yoga Studio Pricing in Whitesboro"
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
      <div className="relative text-center pt-24 font-thin text-2xl tracking-wider text-black">
        <h1> YOGA BARN PRICING</h1>
        <div className="relative w-full pt-4">
          <Image src={inhale} alt="Yoga Barn" className=" object-cover h-48 " />
        </div>
        <div
          className="absolute  left-1/2 transform -translate-x-1/2 
  text-white text-center w-full flex flex-col bottom-3"
        >
          <h2 className=" text-3xl font-thin tracking-wide text-white ">
            Virtual Yoga Now Available!
          </h2>
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
          <h3 className="flex justify-center tracking-widest items-center text-4xl font-thin text-teal-600  px-4  rounded-2xl pt-2">
            WORKSHOPS
          </h3>
          <div className="flex justify-center">
            {/*  */}
            {/* workshops container */}
            {/*  */}
            <div className="flex-wrap justify-center sm:flex ">
              {/* PRENATAL WORKSHOP*/}

              {/* <div className=" bg-white  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-full rounded-lg mt-2  ">
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
                    Prenatal Yoga Series
                  </div>
                  <p className="text-xs font-normal text-left bg-gray-100 py-2 px-2 rounded-xl">
                    July 8th to August 5th - Finding Movement As Your Body
                    Changes Building community with other mamas Reduce stress
                    and anxiety Improve Sleep Quality Increase strength and
                    Flexibility Decrease back pain, nausea and headaches Tones
                    muscles needed for child birth
                  </p>
                  <div className="flex p-2 items-center text-2xl font-thin">
                    <div> $120</div>
                    {user && (
                      <Link href="https://buy.stripe.com/14k4jDerib8e4hO4gP">
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
              </div> */}

              {/* YOGA PLAY SHOP*/}

              {/* <div className=" bg-white  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-full rounded-lg mt-2  ">
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
                    Yoga Play Shop
                  </div>
                  <p className="text-xs font-normal text-left bg-gray-100 py-2 px-2 rounded-xl">
                    Alright Yogis, its time to test your strength. We will learn
                    and work through arm balances/inversions or poses that help
                    challenge us while also learning transitions you can connect
                    with and bring to your practice. Have something you want to
                    break down on work on? Share what it is and we can all join
                    in. Love this class to learn, grow and expand your practice.
                    All curious yogis welcome! Bring yoga mat and water.
                  </p>
                  <div className="flex p-2 items-center text-2xl font-thin">
                    <div> $30</div>
                    {user && (
                      <Link href="https://buy.stripe.com/fZe03ngzqfou15C4gO">
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
                    <div className="ease-in transform hover:scale-105 transition duration-100 flex-wrap ml-2 justify-center">
                      <Link href="/Contact">
                        <div className="flex mt-1 text-center font-normal justify-center px-2  items-center bg-gray-400 text-white    rounded-full  text-xs ">
                          Class Packs & Monthly Members get $5 Off
                        </div>

                        <span className="flex mt-0 text-center font-normal justify-center  items-center text-gray-500      text-xs ">
                          Click to Contact for Code
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* AUTUMN EQUINOX WORKSHOP*/}

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
                    Autum Equinox - Workshop
                  </div>
                  <p className="text-xs font-normal text-left bg-gray-100 py-2 px-2 rounded-xl">
                    Autumn is a time of transformation and reflection. Take time
                    to reflect on your life and where you are going in it. With
                    grace, let go of anything that is not serving you positively
                    and make way for new blessings. 108 Sun Salutations helps to
                    cleanse and bring in this new season. We will move through
                    sets of sun salutes starting slow and increasing intensity.
                    Finishing with a much needed Savasana adjustmenet. Bring
                    water, yoga mat, small towel. This is a challenging
                    workshop. Expect to sweat.
                  </p>
                  <div className="flex p-2 items-center text-2xl font-thin">
                    <div> $35</div>
                    {user && (
                      <Link href="https://buy.stripe.com/9AQ3fz2IA7W28y4fZE">
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
                    <div className="ease-in transform hover:scale-105 transition duration-100 flex-wrap ml-2 justify-center">
                      <Link href="/Contact">
                        <div className="flex mt-1 text-center font-normal justify-center px-2  items-center bg-gray-400 text-white    rounded-full  text-xs ">
                          Class Packs & Monthly Members get $5 Off
                        </div>

                        <span className="flex mt-0 text-center font-normal justify-center  items-center text-gray-500      text-xs ">
                          Click to Contact for Code
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* AUTUMN EQUINOX KIDS YOGA WORKSHOP*/}

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
                    Autumn Equinox - Kids Yoga
                  </div>
                  <p className="text-xs font-normal text-left bg-gray-100 py-2 px-2 rounded-xl">
                    Through our fun and interactive workshop, your child will
                    learn yoga poses, breathing exercises, partner work, guided
                    visualization and relaxation with a seasonal themed craft.
                    The focus is the teach mindfulness, self regulation skills,
                    balance, flexibility, coordination, strength and
                    self-awareness. All Students will leave with a handmade
                    beaded wall hanging.
                  </p>
                  <div className="flex p-2 items-center text-2xl font-thin">
                    <div> $45</div>
                    {user && (
                      <Link href="https://buy.stripe.com/00g03ngzq0tA29G00H">
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
                    <div className="ease-in transform hover:scale-105 transition duration-100 flex-wrap ml-2 justify-center">
                      <Link href="/Contact">
                        <div className="flex mt-1 text-center font-normal justify-center px-2  items-center bg-gray-400 text-white    rounded-full  text-xs ">
                          Class Packs & Monthly Members get $5 Off
                        </div>

                        <span className="flex mt-0 text-center font-normal justify-center  items-center text-gray-500      text-xs ">
                          Click to Contact for Code
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* FULL MOON RECHARGE WORKSHOP*/}

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
                    Full Moon Recharge Workshop
                  </div>
                  <p className="text-xs font-normal text-left bg-gray-100 py-2 px-2 rounded-xl">
                    Join us for a cleansing Moon Yoga Flow and Meditation. Now
                    is the time to cleanse your space of low vibrations and and
                    stagnate energy. Use the Moon energy to feel renewed and
                    release all that does not serve you. We will move through a
                    cleansing Moon flow and finish with Mediation and breath
                    work. Grab your Malas to help you through your meditation,
                    if you don&apos;t have a Mala no problem you can do without
                    or grab one for purchase at the studio! Bring water, yoga
                    mat, anything you like for meditation!
                  </p>
                  <div className="flex p-2 items-center text-2xl font-thin">
                    <div> $25</div>
                    {user && (
                      <Link href="https://buy.stripe.com/eVa9DX2IA3FM01y5l9">
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
                    <div className="ease-in transform hover:scale-105 transition duration-100 flex-wrap ml-2 justify-center">
                      <Link href="/Contact">
                        <div className="flex mt-1 text-center font-normal justify-center px-2  items-center bg-gray-400 text-white    rounded-full  text-xs ">
                          Class Packs & Monthly Members get $5 Off
                        </div>

                        <span className="flex mt-0 text-center font-normal justify-center  items-center text-gray-500      text-xs ">
                          Click to Contact for Code
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* END WORKSHOPS */}
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
        <h3 className="flex justify-center tracking-wider items-center text-4xl font-thin text-teal-600  px-4 rounded-2xl text-center pt-2">
          SPECIALS & EXTRAS
        </h3>
        {/* SPECIALS AND EXTRAS CONTAINER */}
        <div className="flex justify-center">
          <div className="flex-wrap sm:flex justify-center items-center gap-3">
            {/*  */}
            {/* NEW STUDENT SPECIAL*/}
            {/*  */}
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
            {/* AFRICAN JADE MALA NECKLACE*/}
            <div className="items-center justify-center  border-2 border-gray-100 shadow-md md:max-w-sm sm:w-1/2 rounded-lg mt-2 bg-gray-200 ">
              <div className="p-2 text-lg font-thin tracking-wide text-black">
                <div className="flex items-center mb-1">
                  {" "}
                  <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                    <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
                  </div>
                  Afircan Jade Mala
                </div>
                <div>
                  <Image
                    src={mala01}
                    alt="Yoga Barn"
                    className=" object-cover align-baseline h-48 "
                  />
                </div>
                <p className="text-xs font-thin tracking-wider bg-gray-100 py-2 px-2 rounded-xl max-w-sm">
                  White Howlite Beads. Marker and Guru bread African Jade.
                  African Jade is a gentle natured stone. Loving, soothing,
                  caring and uplifting. Gives support in time of need and a hand
                  of hope. Offers protection and energy shields. <br />
                  Use: Malas are great for meditation. Grab when needed on the
                  run or set aside time to meditate and enhance your yoga
                  practice. Beautiful enough to be worn as a necklace or
                  bracelet.
                </p>
                <div className="flex p-2 items-center text-2xl font-thin">
                  <div>
                    {" "}
                    $60{" "}
                    <div className="flex text-center text-xs font-normal">
                      + Shipping: $5
                    </div>
                  </div>

                  <Link href="https://buy.stripe.com/5kA5nHgzqdgm3dK5kN">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8 ml-4 text-white rounded-full">
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
            {/* PRENATAL YOGA
            <div className="items-center justify-center  border-2 border-gray-100 shadow-md md:max-w-sm sm:w-1/2 rounded-lg mt-2 bg-gray-200 ">
              <div className="p-2 text-lg font-thin tracking-wide text-black">
                <div className="flex items-center mb-1">
                  {" "}
                  <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                    <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
                  </div>
                  Prenatal Yoga
                </div>
                <p className="text-xs font-thin tracking-wider bg-gray-100 py-2 px-2 rounded-xl max-w-sm">
                  4 Week Series - May 23rd - June 17 <br />
                  <span className=" font-normal">
                    {" "}
                    Tuesdays 6:30pm - 7:30pm <br />
                    Saturdays 10:00am - 11:00am
                  </span>
                  <br />
                  <br />
                  Partners Attend Free!
                  <br />
                  <br />
                  Specialized classes for women preparing for pregnancy and
                  during pregnancy Helping you to continue finding movement as
                  your body changes. Building Community between mamas. Helps
                  reduce stress and anxiety. Improves sleep quality. Increases
                  strength and flexibility. Tones muscles needed for child
                  birth. Decreases back pain, nausea, and headaches.
                  <br />
                  <br />
                  <span className=" font-normal">
                    Mamas may attend any of the other classes during this 4 week
                    series.
                  </span>
                </p>
                <div className="flex p-2 items-center text-2xl font-thin">
                  <div> $190</div>
                  {user && (
                    <Link href="https://buy.stripe.com/5kA5nHgzqdgm3dK5kN">
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
                  <div className="flex-wrap ml-2 justify-center ease-in transform hover:scale-105 transition duration-100"></div>
                </div>
              </div>
            </div> */}
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

            {/*  */}
            {/* PRE-NATAL DROP IN CLASS */}
            {/*  */}
            <div className=" bg-white border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 font-thin tracking-wide">
              <div className="p-2 text-lg font-thin text-black">
                <div className="flex">
                  {" "}
                  <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                    <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
                  </div>
                  Prenatal Drop-In Class
                </div>
                <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
                  July 8th to August 5th - Prenatal Single Class - Finding
                  Movement As Your Body Changes Building community with other
                  mamas Reduce stress and anxiety Improve Sleep Quality Increase
                  strength and Flexibility Decrease back pain, nausea and
                  headaches Tones muscles needed for child birth
                </p>
                <div className="flex p-2 items-center text-2xl font-thin">
                  <div> $30</div>
                  {user && (
                    <Link href="https://buy.stripe.com/eVa9DXbf60tA15CaFg">
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

            {/* END PACK SPECIALS INDIVIDUALS */}
          </div>
        </div>
      </div>

      {/*   END SPECIALS MAIN */}

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
      <div className=" text-gray-700 text-xs font-thin text-center pt-3">
        Ages 55 and up qualify for Senior Discount.
      </div>
      <div className="flex justify-center">
        <div className="text-3xl text-center font-bold    w-full   pt-16 px-3">
          <div className="flex justify-center">
            <Image src={YBIcon} alt="Yoga Barn Icon" className="w-16 h-14" />
          </div>
          <h3 className="flex justify-center tracking-wide items-center text-4xl font-thin text-teal-600 px-4  rounded-2xl">
            SINGLE CLASS
          </h3>
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
        <h3 className="flex justify-center tracking-wide items-center text-4xl font-thin text-teal-600 px-4 py-2 rounded-2xl ">
          MONTHLY PACKS
        </h3>
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
                  <Link href="https://buy.stripe.com/3cs6rLcja9067u000f">
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
              <div className="flex p-2 items-center text-2xl font-thin">
                <div> $125</div>
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

          {/* ENLIGHTENED FAMILY PACK */}

          <div className="items-center justify-center bg-white text-black border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg  ">
            <div className="p-2 text-lg font-thin tracking-wide">
              <div className="flex">
                {" "}
                <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                  <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
                </div>
                Enlightened Family Pack
              </div>
              <p className="text-xs font-thin tracking-wider bg-gray-100 py-2 px-2 rounded-xl">
                Bring a friend or family member with you to enjoy your monthly
                unlimited classes with. - Includes 2 Members and expires after
                30 days from first attended class. Each Additional member is $40
              </p>
              <div className="flex p-2 items-center text-2xl font-thin">
                <div> $165</div>
                {user && (
                  <Link href="https://buy.stripe.com/4gw7vP96Y6RY01y28o">
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

          {/* ADDITIONAL FAMILY MEMBER - ENLIGHTENED FAMILY PACK */}

          <div className="items-center justify-center bg-white text-black border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg  ">
            <div className="p-2 text-lg font-thin tracking-wide">
              <div className="flex">
                {" "}
                <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                  <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
                </div>
                Enlightened Family Pack - Family Member Add-On
              </div>
              <p className="text-xs font-thin tracking-wider bg-gray-100 py-2 px-2 rounded-xl">
                This is for an Additional Family Member you would like to add to
                your existing Enlightened Family Pack.
              </p>
              <div className="flex p-2 items-center text-2xl font-thin">
                <div> $40</div>
                {user && (
                  <Link href="https://buy.stripe.com/4gw9DXfvmcci5lS9Bb">
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
              </div>
            </div>
          </div>

          {/*  */}
          {/* VIRTUAL YOGA */}
          <div className="items-center justify-center  border-2 border-gray-100 shadow-md md:max-w-sm sm:w-1/2 rounded-lg mt-2 bg-gray-200 ">
            <div className="p-2 text-lg font-thin tracking-wide text-black">
              <div className="flex items-center mb-1">
                {" "}
                <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                  <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
                </div>
                Virtual Yoga
                <div className="flex ml-3 py-1 px-4  text-center justify-center font-bold  items-center bg-teal-700 text-white    rounded-full tracking-wide   text-xs animate-pulse ">
                  NEW PACK
                </div>
              </div>
              <p className="text-xs font-thin tracking-wider bg-gray-100 py-2 px-2 rounded-xl">
                Monthly Unlimited Virtual Yoga with Auto-Renewal
              </p>
              <div className="flex p-2 items-center text-2xl font-thin">
                <div> $40</div>
                {user && (
                  <Link href="https://buy.stripe.com/5kA7vPcjab8e8y49AZ">
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
                <div className="flex-wrap ml-2 justify-center ease-in transform hover:scale-105 transition duration-100"></div>
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
        <h3 className="flex justify-center tracking-wide items-center text-4xl font-thin text-teal-600 px-4 py-2 rounded-2xl">
          CLASS PACKS
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {/* ZEN PACK*/}
          <div className="flex bg-gray-50 flex-wrap items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 ">
            <div className="p-2 text-lg font-thin tracking-wide">
              <div className="flex text-black ">
                {" "}
                <div className="flex justify-end ml-3 mx-3 max-w-1/2  ">
                  <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
                </div>
                Zen Pack
              </div>

              <p className="text-xs font-normal bg-gray-100 text-black py-2 px-2 rounded-xl">
                5 Classes at Yoga Barn - Expires after 60 Days
              </p>
              <div className="flex p-2 items-center text-2xl font-thin">
                <div className="text-black"> $75</div>
                {user && (
                  <Link href="https://buy.stripe.com/eVa7vP3MEa4adSodR9">
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
          {/* WARRIOR PACK */}
          <div className="flex bg-gray-50 flex-wrap items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2">
            <div className="p-2 text-lg font-thin tracking-wide">
              <div className="flex text-black">
                {" "}
                <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                  <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
                </div>
                Warrior Pack
              </div>
              <p className="text-xs text-black font-normal bg-gray-100 py-2 px-2 rounded-xl">
                10 Classes at the Yoga Barn - Expires after 90 Days
              </p>
              <div className="flex p-2 items-center text-2xl font-thin">
                <div className="text-black"> $140</div>
                {user && (
                  <Link href="https://buy.stripe.com/7sIcQ94QIa4a6pW00i">
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

          {/* VIRTUAL YOGA */}
          <div className="items-center justify-center  border-2 border-gray-100 shadow-md md:max-w-sm sm:w-1/2 rounded-lg mt-2 bg-gray-200 ">
            <div className="p-2 text-lg font-thin tracking-wide text-black">
              <div className="flex items-center mb-1">
                {" "}
                <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                  <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
                </div>
                Virtual Yoga
                <div className="flex ml-3 py-1 px-4  text-center justify-center font-bold  items-center bg-teal-700 text-white    rounded-full tracking-wide   text-xs animate-pulse ">
                  NEW PACK
                </div>
              </div>
              <p className="text-xs font-thin tracking-wider bg-gray-100 py-2 px-2 rounded-xl">
                Monthly Unlimited Virtual Yoga with No Commitment
              </p>
              <div className="flex p-2 items-center text-2xl font-thin">
                <div> $50</div>
                {user && (
                  <Link href="https://buy.stripe.com/4gw17r96Yb8e5lS00o">
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
                <div className="flex-wrap ml-2 justify-center ease-in transform hover:scale-105 transition duration-100"></div>
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
        <h3 className="flex justify-center tracking-wide items-center text-4xl font-thin text-teal-600 px-4 py-2 rounded-2xl ">
          PRIVATE SESSIONS
        </h3>
      </div>
      {/* SINGLE PRIVATE SESSIONS */}
      <div className="flex justify-center">
        <div className="flex-wrap gap-3 sm:flex justify-center text-black">
          <div className="items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 mr-3">
            <div className="p-2 text-lg font-thin tracking-wide">
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
              <div className="flex p-2 items-center text-2xl font-thin">
                <div> $65</div>
                {user && (
                  <Link href="https://buy.stripe.com/eVaaI16YQ0tA15C8wQ">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8 ml-4 text-white rounded-full">
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

          {/* 5 PRIVATE SESSIONS */}

          <div className="items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 mr-3">
            <div className="p-2 text-lg font-thin tracking-wide">
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
              <div className="flex p-2 items-center text-2xl font-thin">
                <div> $300</div>
                <span className="text-xs ml-1 font-normal"> ($25 Off)</span>
                {user && (
                  <Link href="https://buy.stripe.com/6oEdUd96Y0tAaGc8wR">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8 ml-4 text-white rounded-full">
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

          {/* 10 PRIVATE SESSIONS */}

          <div className="items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 mr-3">
            <div className="p-2 text-lg font-thin tracking-wide">
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
              <div className="flex p-2 items-center text-2xl font-thin">
                <div> $550</div>
                <span className="text-xs ml-1 font-normal"> ($100 Off)</span>
                {user && (
                  <Link href="https://buy.stripe.com/cN2eYh1Ewekqg0wfZk">
                    <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8 ml-4 text-white rounded-full">
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

      {/*  */}
      {/*  */}
      {/* FOUR CLOVER PRODUCTS */}
      {/*  */}
      <div className="pt-16  px-3">
        <div className="flex justify-center">
          <Image src={fcLogo} alt="Yoga Barn Icon" className=" w-24 h-18" />
        </div>
        <h3 className="flex justify-center tracking-wide items-center text-4xl font-thin text-teal-600 px-4 py-2 rounded-2xl text-center ">
          Four Clovers Products
        </h3>
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
            <div className="p-2 text-lg font-thin tracking-wide text-black">
              <div className="flex items-center">
                {" "}
                <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                  <Image className="h-6 w-10" src={fcLogo} alt="Four Clovers" />
                </div>
                <h3>Organic Elderberry Elixir</h3>
              </div>
              <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
                Immune boosting supplement to help ease cold, flu, and sinus.
                Encourages healthy skin. Natural diuretic. Eases allergies. This
                is a DIY kit that you can do at home. Add your local raw honey
                (not included) and water. Yields 32oz.
              </p>
              <div className="flex p-2 items-center text-2xl font-thin">
                <div>
                  {" "}
                  $32
                  <div className="flex text-center text-xs font-normal">
                    + Shipping: $5
                  </div>
                </div>

                <Link href="https://buy.stripe.com/4gwdUd96Y7W2cOkaEF">
                  <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8 ml-4 text-white rounded-full">
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
            <div className="p-2 text-lg font-thin tracking-wide text-black">
              <div className="flex items-center">
                {" "}
                <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                  <Image className="h-6 w-10" src={fcLogo} alt="Four Clovers" />
                </div>
                <h3>Organic Sourdough Starter</h3>
              </div>
              <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
                This is a very well loved and nurtured organic starter. Make
                your sourdough journey an easy one by grabbing a kit and getting
                started with a very active healthy starter. Great gift for those
                you love. It&apos;s the gift that keeps giving.
              </p>
              <div className="flex p-2 items-center text-2xl font-thin">
                <div>
                  {" "}
                  $15
                  <div className="flex text-center text-xs font-normal">
                    + Shipping: $5
                  </div>
                </div>

                <Link href="https://buy.stripe.com/bIYg2l2IAb8e3dK8wG">
                  <button className="ease-in transform hover:scale-105 transition duration-100 text-sm bg-teal-600 py-2 px-8 ml-4 text-white rounded-full">
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
