import React, { useState } from "react";
import { send } from "emailjs-com";
import {
  Product,
  FooterBanner,
  HeroBanner,
  Login,
  PricingPage,
} from "../components";
import Schedule from "../components/Schedule";
import { client } from "../lib/client";
import luckOfTheYogi from "../components/assets/images/LuckOfTheYogi_2023_APP.png";
import Image from "next/image";
import Link from "next/link";
import marchCal from "components/assets/images/YogaBarn_ClassCalendar_March2023.png";

const Home = ({ products, bannerData }) => {
  // Subscribe Logic

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

      {/* SUBSCRIBE BOX  */}

      {/* <div className="flex bg-teal-600 px-4 py-2 rounded-xl">
        <form className="flex-col justify-center " onSubmit={onSubmit}>
          {" "}
          <label className="text-white font-semibold" htmlFor="subscribe">
            Stay up to date! Subscribe to our Newsletter!
          </label>
          <div className="flex items-center mt-2">
            <input
              className="rounded-lg"
              type="text"
              placeholder="Enter your Email Address"
              name="name"
              onChange={handleChange}
            />
            <button className="flex ml-3 justify-center bg-white text-emerald-600 rounded-full py-1 px-4 mt-2 animate-pulse">
              Subscribe
            </button>
          </div>
        </form>
      </div> */}

      <div className="flex-wrap justify-center items-center md:flex   w-full  py-2">
        <div className="flex-1 justify-center   sm:w-1/2 mt-3  p-4">
          <Link href="/Calendar">
            <Image src={marchCal} alt="Yoga Barn - March 2023 Schedule" />
          </Link>
        </div>
        <div className="flex-1 justify-center  sm:w-1/2 mt-4 ml-3 mr-3 -100 p-2">
          <Image src={luckOfTheYogi} width="" />
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
