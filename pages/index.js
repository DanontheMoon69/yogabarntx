import React from "react";

import {
  Product,
  FooterBanner,
  HeroBanner,
  Login,
  PricingPage,
} from "../components";
import Schedule from "../components/Schedule";
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner />

      {/* <div className="products-heading">
        <h2>Yoga For Everyone</h2>
        <span> Welcome</span>
        <div className="products-container">
          {products?.map((product) => (
            <div className="w-30">
              <Product key={product._id} product={product} />
            </div>
          ))}
        </div>
      </div>
      <div className="lg: flex xl: flex md: flex-wrap justify-center">
        <div className="flex justify-center m-5">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              Zen Pack
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Our Zen Pack included 5 Classes at the Yoga Barn.
            </p>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Buy Plan
            </button>
          </div>
        </div>
        <div className="flex justify-center m-5">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              Warrior Pack
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Our Warrior Pack included 10 Classes at the Yoga Barn.
            </p>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Buy Plan
            </button>
          </div>
        </div>
        <div className="flex justify-center m-5">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              Enlightened Pack
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Our Enlightened Pack includes Unlimited Monthly Classes at the
              Yoga Barn. Also includes access to our Virtual Yoga Classes.
            </p>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Buy Plan
            </button>
          </div>
        </div>
      </div> */}

      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
export default Home;
