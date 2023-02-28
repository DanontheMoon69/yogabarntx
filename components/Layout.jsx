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
          key="desc"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
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
