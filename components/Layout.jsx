import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout bg-gradient-to-b from-white to-gray-200 w-screen ">
      <Head>
        <title>Yoga Barn - Whitesboro, Tx</title>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container ">{children}</main>
      <footer className="">
        <Footer />{" "}
      </footer>
    </div>
  );
};

export default Layout;
