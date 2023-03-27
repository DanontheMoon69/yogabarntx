import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout bg-gray-50 w-full">
      <Head>
        <title>Yoga Barn - Whitesboro, Tx</title>
        <meta
          name="description"
          content="Yoga Studio offering In Person and Virtual Yoga with a Vinyasa Flow base in Whitesboro Texas. We also offer Yoga Workshops in studio and at local businesses"
          key="desc"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className=" ">{children}</main>
      <footer className="">
        <Footer />{" "}
      </footer>
    </div>
  );
};

export default Layout;
