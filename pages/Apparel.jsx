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
import Head from "next/head";
import Script from "next/script";
function Apparel() {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      <Head>
        <title>Yoga Barn - Apparel</title>
        <meta
          name="description"
          content="Yoga Barn - Yogi Apparel"
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
      <div className=" w-full h-4/5 pt-24 flex justify-center items-center">
        <iframe
          src="https://yoga-barn.printify.me"
          className="w-full h-[600px] "
        ></iframe>
      </div>
    </>
  );
}

export default Apparel;
