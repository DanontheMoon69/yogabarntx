import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import fcLogo from "../components/assets/images/fourClover_logo.png";
import ybLogo from "../components/assets/images/YB_Logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function PricingPage() {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      {/* WORKSHOPS */}

      <div className="flex justify-center text-xl  font-bold mt-5 sm:mt-10 text-gray-600  w-3/4 mr-3 ">
        Yoga Workshops
      </div>

      {/* FILL YOUR CUP @ COMBS */}
      <div className="flex-wrap sm:flex ">
        <div className="items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 mb-3 mr-3 ">
          <div className="p-2 text-lg font-bold">
            <div className="flex">
              {" "}
              <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
              </div>
              Fill Your Cup @ Combs&apos; Coffee
            </div>
            <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
              Join Becca from Yoga Barn at the downtown Gainesville coffee shop
              Combs&apos; Coffee for a fun yoga flow and a coffee tasting. Leave
              with your body energized while understanding and loving coffee in
              a much deeper way. <br />
              <br />
              Experience coffee cupping in our new CQI certified cupping lab,
              which consists of objective measures in order to evaluate and
              qualify specialty grade coffee. We will cover many technical and
              procedurdal aspects of the evaluation process, while keeping the
              process fun and easy. We will smell and taste our way through a
              few unique coffees, while explaining how the ten cupping
              attributes are used to evaluate, score and describe each specialty
              grade coffee. This is geared towards beginners but a great
              opportunity to try a flight of World Class Coffees. In the end,
              you should feel more confident in your ability to decipher which
              varieties and processing methods you prefer. (and those that you
              may dislike).
              <br />
              <br />
              Workshop is $25 - Space is limited purchase tickets as soon as
              possible!
            </p>
            <div className="flex p-2 items-center text-2xl font-black">
              <div> $25</div>
              {user && (
                <Link href="https://buy.stripe.com/6oE03nfvm3FMbKg00b">
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
        {/* BLESSINGS OF SPRING EQUINOX */}

        <div className="items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 mr-3 ">
          <div className="p-2 text-lg font-bold">
            <div className="flex">
              {" "}
              <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
              </div>
              Blessings of Spring Equinox
            </div>
            <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
              Welcome Spring Equinox at the Yoga Barn. We will be moving through
              108 Sun Salutations to welcome this new season. This is a very
              challenging practice that help strengthen body and mind. Leave
              feeling refreshed and ready for what ever life offers you in this
              new season. Mat, Water and Small Towel recommended
            </p>
            <div className="flex p-2 items-center text-2xl font-black">
              <div> $25</div>
              {user && (
                <Link href="https://buy.stripe.com/9AQ8zTdneekqg0w5kw">
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

      {/* YOGA CLASSES */}

      <div className="flex justify-center text-xl  font-bold mt-5 sm:mt-10 text-gray-600  w-3/4 ">
        Yoga Class Packages
      </div>
      <div className="flex text-sm font-semibold mt-1 text-gray-600 justify-center">
        Virtual yoga coming soon!
      </div>
      <div className="flex justify-center text-center text-xs mb-2 font-semibold text-gray-500 mt-1 mr-2">
        Private Yoga Sessions Available. Please Inquire using our Contact Form.
      </div>
      <div className="flex justify-center text-xs mb-2 font-semibold text-gray-500 mt-1">
        Ages 55 and up qualify for Senior Discount.
      </div>

      <div className="flex-wrap gap-3 sm:flex justify-center">
        {/* NEW STUDENT SPECIAL */}

        <div className="items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 mr-3 ">
          <div className="p-2 text-lg font-bold">
            <div className="flex">
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
            <div className="flex p-2 items-center text-2xl font-black">
              <div> $30</div>
              {user && (
                <Link href="https://buy.stripe.com/eVa5nH0As3FMdSo4gj">
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

        {/* SINGLE CLASS/DROP IN */}

        <div className="items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 mr-3 ">
          <div className="p-2 text-lg font-bold">
            <div className="flex">
              {" "}
              <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
              </div>
              Single Class/Drop-In
            </div>
            <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
              One single class at the Yoga Barn - Expires after 30 days
            </p>
            <div className="flex p-2 items-center text-2xl font-black">
              <div> $20</div>
              {user && (
                <Link href="https://buy.stripe.com/7sI2bv96Ygsy01y4gk">
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

        {/* ZEN PACK*/}

        <div className="items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 mr-3">
          <div className="p-2 text-lg font-bold">
            <div className="flex">
              {" "}
              <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
              </div>
              Zen Pack
            </div>

            <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
              5 Classes at Yoga Barn - Expires after 30 Days
            </p>
            <div className="flex p-2 items-center text-2xl font-black">
              <div> $65</div>
              {user && (
                <Link href="https://buy.stripe.com/6oEdUd2IA0tA9C828d">
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

        {/* ENLIGHTENED PACK */}
        <div className="items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 bg-gray-200 mr-3">
          <div className="p-2 text-lg font-bold">
            <div className="flex items-center mb-1">
              {" "}
              <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
              </div>
              Enlightened Pack
              <div className="flex ml-3 py-0 px-2 mb-2 text-center justify-center font-normal  items-center bg-blue-500 text-white    rounded-full  text-xs animate-pulse ">
                MOST POPULAR
              </div>
            </div>
            <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
              Monthly Unlimited - Includes Virtual Yoga
            </p>
            <div className="flex p-2 items-center text-2xl font-black">
              <div> $100</div>
              {user && (
                <Link href="https://buy.stripe.com/fZe7vP6YQ1xE01y28e">
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

        {/* WARRIOR PACK */}

        <div className="items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 mr-3">
          <div className="p-2 text-lg font-bold">
            <div className="flex">
              {" "}
              <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
              </div>
              Warrior Pack
            </div>
            <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
              10 Classes at the Yoga Barn - Expires after 60 Days
            </p>
            <div className="flex p-2 items-center text-2xl font-black">
              <div> $120</div>
              {user && (
                <Link href="https://buy.stripe.com/3csaI12IA1xEaGcaEL">
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

        {/* ENLIGHTENED FAMILY PACK */}

        <div className="items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 mr-3">
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
              unlimited classes with. - Includes 2 Members and expires after 30
              days from first attended class. Each Additional member is $40
            </p>
            <div className="flex p-2 items-center text-2xl font-black">
              <div> $140</div>
              {user && (
                <Link href="https://buy.stripe.com/fZe6rLeri906eWs28g">
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

        {/* MAT RENTAL */}

        <div className="items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 mr-3">
          <div className="p-2 text-lg font-bold">
            <div className="flex">
              {" "}
              <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                <Image className="h-6 w-10" src={ybLogo} alt="Yoga Barn" />
              </div>
              Yoga Mat Rental
            </div>
            <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
              We encourage you to invest into your yoga practice by purchasing
              your own mat, but we will always be able to supply one for you.
            </p>
            <div className="flex p-2 items-center text-2xl font-black">
              <div> $2</div>
              {user && (
                <Link href="https://buy.stripe.com/eVaaI1dneb8ebKg28h">
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
      <div className="text-xl flex justify-center font-bold mt-10 sm:mt-10 text-gray-600  w-3/4 text-center ">
        Four Clover Farms Products
      </div>
      <span className="flex justify-center text-xs font-semibold mt-1 text-gray-500 text-center mr-2">
        All Items will include shipping. For Local Pick Up, Enter code at
        checkout for $5 Off
      </span>
      <div className="flex-wrap gap-3 sm:flex justify-center">
        {/* ELDERBERRY */}

        <div className="items-center justify-center  border-2 border-gray-100 shadow-md md: max-w-sm sm:w-1/2 rounded-lg mt-2 mr-3">
          <div className="p-2 text-lg font-bold">
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
          <div className="p-2 text-lg font-bold">
            <div className="flex items-center">
              {" "}
              <div className="flex justify-end ml-3 mx-3 max-w-1/2   ">
                <Image className="h-6 w-10" src={fcLogo} alt="Four Clovers" />
              </div>
              Organic Sourdough Starter
            </div>
            <p className="text-xs font-normal bg-gray-100 py-2 px-2 rounded-xl">
              This is a very well loved and nurtured organic starter. Make your
              sourdough journey an easy one by grabbing a kit and getting
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
    </>
  );
}

export default PricingPage;
