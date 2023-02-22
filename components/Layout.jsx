import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Yoga Barn Store</title>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container mb-10">{children}</main>
      {/* <footer className="">
        <Footer />{" "}
      </footer> */}
    </div>
  );
};

export default Layout;
