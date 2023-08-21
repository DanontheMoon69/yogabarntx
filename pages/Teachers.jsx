import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

import Becca from "../components/assets/images/YB_Becca.jpg";
import Gena from "../components/assets/images/YB_Gena.jpg";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useStateContext } from "../context/StateContext";

const Teachers = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      <Head>
        <title>Yoga Barn - Meet our Teachers</title>
        <meta
          name="description"
          content="Yoga Barn - Meet our Teachers"
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
      <div className="relative pt-24 font-thin text-2xl tracking-wider text-black justify-center">
        {" "}
        <div className="flex justify-center">
          <div className="flex-col  justify-center flex-1 text-2xl font-thin mb-0 flex  text-gray-600 tracking-widest">
            <div className="flex justify-center pb-1">MEET OUR TEACHERS</div>
          </div>
        </div>
        {/* REBECCA */}
        <div className=" border-t-2 mx-8 mt-8 mb-8 lg:mx-48 md:mx-24" />
        <div className="flex justify-center w-screen">
          <div className="flex flex-col  items-center justify-center px-4 py-4  lg:flex lg:flex-row">
            <Image
              src={Becca}
              width={250}
              className=" object-cover rounded-full mb-8 lg:mb-0"
            />

            <div className="lg:flex lg:flex-col lg:ml-8">
              <div className="flex text-2xl tracking-widest justify-center mb-2 lg:justify-start">
                REBECCA AGUILERA
              </div>
              <p className=" text-xs max-w-md px-4 lg:px-0 leading-5">
                Rebecca Aguilera, Owner and Teacher at the Yoga Barn, has been
                passionate about yoga for over a decade. Her passion has led her
                to build a yoga studio that brings the community together to
                find relaxation, movement and strength. Outside of yoga, you'll
                find her with her husband and four boys, working on their
                homestead and baking bread.
              </p>
              <p className=" text-xs max-w-md px-4 lg:px-0  pt-2 leading-5">
                Her teaching style is a Vinyasa flow that warms the body as you
                find movement. The hardest part of yoga is actually getting to
                the yoga class. So come as you are and find joy on your mat
                within our yoga community.
              </p>
              <p className=" text-xs max-w-md px-4 lg:px-0  pt-2 leading-5">
                RYT200 Certified Yoga Teacher <br />
                RPYT Certified Pre-Natal Yoga Teacher.
              </p>
            </div>
          </div>
        </div>
        {/* GENA */}
        <div className=" border-t-2 mx-8 mt-8 mb-8 lg:mx-48 md:mx-24" />
        <div className="flex justify-center w-screen">
          <div className="flex flex-col  items-center justify-center px-4 py-4  lg:flex lg:flex-row">
            <Image
              src={Gena}
              width={250}
              className=" object-cover rounded-full mb-8 lg:mb-0"
            />
            <div className="lg:flex lg:flex-col lg:ml-8">
              <div className="flex text-2xl  tracking-widest justify-center mb-2 lg:justify-start">
                GENA FLEITMAN
              </div>
              <p className=" text-xs max-w-md px-4 lg:px-0  leading-5">
                My name is Gena Fleitman, my husband and I have 2 children and 3
                dogs! Outside of teaching little humans as a third grade teacher
                at Callisburg Elementary, I love to explore all the beauty in
                this world! You will find me meditating, paddle boarding,
                hiking, kayaking and riding off-road trails.
              </p>
              <p className=" text-xs max-w-md px-4 lg:px-0  pt-2 leading-5">
                I am a certified RYT 200 yoga instructor (currently pursuing an
                additional 50 hours specifically in kids yoga). I pride myself
                as a certified SEL facilitator that prioritizes the process of
                developing each student’s self-awareness, self-control and
                personal skills that are vital for success in school & life. I
                am constantly learning new things to better myself mentally &
                physically to inspire and lift up others by radiating positive
                energy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teachers;
