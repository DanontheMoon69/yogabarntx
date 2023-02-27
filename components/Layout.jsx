import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout bg-gradient-to-b from-white to-gray-200 w-screen ">
      <Head>
        <title>Yoga Barn - Whitesboro, Tx</title>
    <meta
              name="description"
          content="Yoga Studio offering In Person and Virtual Yoga with a Vinyasa Flow base in Whitesboro Texas. We also offer Yoga Workshops in studio and at local businesses"
          key="desc" />
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
