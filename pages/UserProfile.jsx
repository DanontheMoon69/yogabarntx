import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../utils/firebase";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState, useEffect } from "react";
import { send } from "emailjs-com";
import Head from "next/head";
import Script from "next/script";
function UserProfile() {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();

  // const handleChange = (e) => {
  //   setToSend({ ...toSend, [e.target.name]: e.target.value });
  // };

  // const [name, setName] = useState("");

  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [zip, setZip] = useState("");
  // const [dobD, setDobD] = useState("");
  // const [dobM, setDobM] = useState("");
  // const [dobY, setDobY] = useState("");
  // const [phone, setPhone] = useState("");
  // const [practiced, setPracticed] = useState("");
  // const [limitationsCheck, setLimitationsCheck] = useState("");
  // const [limitations, setLimitations] = useState("");
  // const [pregnant, setPregnant] = useState("");
  // const [emergencyContact, setEmergencyContact] = useState("");
  // const [emergencyPh, setEmergencyPh] = useState("");
  // const [reltoContact, setReltoContact] = useState("");
  // const [liability, setLiability] = useState("checked");

  const [toSend, setToSend] = useState({
    firstName: "",
    lastName: "",
    email: user?.email,
    address: "",
    city: "",
    zip: "",
    practiced: "",
    limitationsCheck: "",
    limitations: "",
    pregnant: "",
    howHear: "",
    howHearOther: "",
    emergencyContact: "",
    emergencyPh: "",
    reltoContact: "",
    phone: "",
    dobM: "",
    dobD: "",
    dobY: "",
    liability: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const sendUserInfo = async (e) => {
    e.preventDefault();

    const collectionRef = collection(db, "user");
    await addDoc(collectionRef, {
      toSend,
    });

    send("service_g0cucze", "template_i9dfevg", toSend, "HYY8JDeeZmiQZ-f79")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert(err);
      });
    alert("Thank you! Your information has been saved!");
    route.push("/Pricing");
  };

  // const formik = useFormik({
  //   initialValues: {
  // name: "",
  // email: "",
  // address: "",
  // city: "",
  // zip: "",
  // practiced: "",
  // limitationsCheck: "",
  // limitations: "",
  // pregnant: "",
  // emergencyContact: "",
  // emergencyPh: "",
  // reltoContact: "",
  // phone: "",
  // dobM: "",
  // dobD: "",
  // dobY: "",
  // liability: "",
  //   },

  //   //validate form
  //   validationSchema: Yup.object({
  //     name: Yup.string()
  //       .max(40, "Name must be 20 characters or less.")
  //       .required("Name is required"),
  //     liability: Yup.array().required(
  //       "Liability waiver must be accepted before continuing"
  //     ),
  //   }),

  //   //submit form
  //   onSubmit: (values) => {
  //     console.log(values);
  //
  //   },
  // });

  // console.log(formik.errors);

  return (
    <>
      <Head>
        <title>Yoga Barn - User Profile</title>
        <meta
          name="description"
          content="Yoga Barn - Edit your Yoga Barn User Profile"
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
      {/* {!user && route.push("/Pricing")} */}
      <div className="flex justify-center">
        {user && (
          <section className="w-3/4 mt-24 mb-15">
            <div className="text-xl font-bold flex items-center align-middle justify-center text-gray-600 mb-10">
              Edit Personal Profile
            </div>
            <p className="flex items-center justify-center font-semibold text-xs mb-2">
              Welcome! Please fill out the form below
            </p>
            <form
              onSubmit={sendUserInfo}
              className="container max-w-2xl mx-auto shadow-md md:w-full"
            >
              <div className="p-4 border-t-2 border-indigo-400 rounded-lg bg-gray-100/5 ">
                <div className="max-w-sm mx-auto md:w-full md:mx-0">
                  <div className="inline-flex items-center space-x-4">
                    {user.photoURL && (
                      <img
                        alt="img"
                        src={user.photoURL}
                        className="mx-auto object-cover rounded-full h-16 w-16 "
                      />
                    )}
                    {!user.photoURL && (
                      <div className="w-10 h-10 bg-emerald-600 rounded-full ">
                        <h2 className="flex mt-3 justify-center object-center text-white text-xs text-center font-semibold">
                          Img
                        </h2>
                      </div>
                    )}
                    {user.displayName && (
                      <h1 className="text-gray-600">{user.displayName}</h1>
                    )}
                    {!user.displayName && (
                      <h1 className="text-gray-600">{name}</h1>
                    )}
                  </div>
                </div>
              </div>
              <div className="items-center w-full p-4 space-y-4 text-gray-500  md:space-y-0 ">
                <div>
                  <div className="max-w-full mx-auto space-y-5  ">
                    <div className="flex w-full align-left bg-emerald-500 rounded-lg">
                      <h2 className="flex py-2 px-4  mx-auto  text-white font-semibold">
                        Account
                      </h2>
                    </div>

                    <div className=" relative ">
                      <label className="block text-xs">Email</label>
                      <input
                        type="text"
                        name="email"
                        value={user.email}
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder={user.email}
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0  ">
                  <div className="max-w-full mx-auto space-y-5  ">
                    <div className="flex w-full align-left bg-emerald-500 rounded-lg">
                      <h2 className="flex  py-2 px-4  mx-auto  text-white font-semibold">
                        Personal Information
                      </h2>
                    </div>
                    <div className=" relative ">
                      <label className="block text-xs pb-2" htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        // value="name"
                        onChange={handleChange}
                        // onChange={formik.handleChange}
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="First Name"
                      />
                    </div>
                    <div className=" relative ">
                      <label className="block text-xs pb-2" htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        // value="name"
                        onChange={handleChange}
                        // onChange={formik.handleChange}
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Last Name"
                      />
                    </div>

                    <div className=" relative ">
                      <label className="block text-xs pb-2" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        onChange={handleChange}
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Phone Number"
                      />
                    </div>

                    <div>
                      <div className="">
                        <label className="block text-xs pb-2" htmlFor="DOB">
                          Date of Birth
                        </label>
                        <div className="flex lg:w-2/3 sm:w-full">
                          <input
                            type="text"
                            name="dobM"
                            onChange={handleChange}
                            className="w-1/4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="mm"
                          />
                          {" - "}
                          <input
                            type="text"
                            name="dobD"
                            onChange={handleChange}
                            className="ml-2 w-1/4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="dd"
                          />
                          {" - "}
                          <input
                            type="text"
                            name="dobY"
                            onChange={handleChange}
                            className="ml-2 w-1/4 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            placeholder="yyyy"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className=" relative ">
                        <label className="block text-xs pb-2" htmlFor="address">
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          onChange={handleChange}
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Address"
                        />
                      </div>
                    </div>
                    <div>
                      <div className=" relative ">
                        <label className="block text-xs pb-2" htmlFor="city">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          onChange={handleChange}
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="City"
                        />
                      </div>
                    </div>
                    <div>
                      <div className=" relative ">
                        <label className="block text-xs pb-2" htmlFor="zip">
                          Zip Code
                        </label>
                        <input
                          type="text"
                          name="zip"
                          onChange={handleChange}
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Zip Code"
                        />
                      </div>
                    </div>
                    <div>
                      <div className=" relative ">
                        <label
                          className="block text-xs pb-2"
                          htmlFor="practiced"
                        >
                          Have you practiced yoga before?
                        </label>
                        <select
                          name="practiced"
                          onChange={handleChange}
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        >
                          <option></option>
                          <option>No</option>
                          <option>Yes</option>
                        </select>
                      </div>
                    </div>

                    <div className=" relative ">
                      <label
                        className="block text-xs pb-2"
                        htmlFor="limitationsCheck"
                      >
                        Do you have any limitations or injuries?
                      </label>

                      <div className=" relative ">
                        <select
                          name="limitationsCheck"
                          onChange={handleChange}
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        >
                          <option></option>
                          <option>No</option>
                          <option>Yes</option>
                        </select>
                      </div>

                      <input
                        type="text"
                        name="limitations"
                        onChange={handleChange}
                        className="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="If yes, describe here"
                      />
                    </div>

                    <div className=" relative ">
                      <label className="block text-xs pb-2" htmlFor="pregnant">
                        Pregnant?
                      </label>
                      <select
                        name="pregnant"
                        onChange={handleChange}
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      >
                        <option></option>
                        <option>No</option>
                        <option>Yes</option>
                      </select>
                    </div>
                    <div className=" relative ">
                      <label className="block text-xs pb-2" htmlFor="howHear">
                        How did you hear about us?
                      </label>
                      <select
                        name="howHear"
                        onChange={handleChange}
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      >
                        <option></option>
                        <option>Facebook</option>
                        <option>Instagram</option>
                        <option>Flyer</option>
                        <option>Friend or Family</option>
                        <option>Other</option>
                      </select>
                      <input
                        type="text"
                        name="howHearOther"
                        onChange={handleChange}
                        className="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="If other, tell us here"
                      />
                    </div>

                    <div className=" relative ">
                      <label
                        className="block text-xs pb-2"
                        htmlFor="emergencyContact"
                      >
                        Emergency Contact
                      </label>
                      <input
                        type="text"
                        name="emergencyContact"
                        onChange={handleChange}
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Emergency Contact"
                      />
                    </div>

                    <div className=" relative ">
                      <label
                        className="block text-xs pb-2"
                        htmlFor="emergencyPh"
                      >
                        Emergency Contact Phone Number
                      </label>
                      <input
                        type="text"
                        name="emergencyPh"
                        onChange={handleChange}
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Emergency Phone"
                      />
                    </div>

                    <div className=" relative ">
                      <label
                        className="block text-xs pb-2"
                        htmlFor="reltoContact"
                      >
                        Relation to Contact
                      </label>
                      <input
                        type="text"
                        name="reltoContact"
                        onChange={handleChange}
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Relation to Contact"
                      />
                    </div>
                    <div className=" relative ">
                      <label
                        className="block text-xs pb-2"
                        htmlFor="emRelation"
                      >
                        Liability Waiver
                      </label>
                      <p className="text-xs mt-1">
                        I, the undersigned, being aware of my own health and
                        physical condition, and having knowledge that my
                        participation in any exercise program may be injurious
                        to my health, am voluntarily participating in a physical
                        activity Having such knowledge, I hereby acknowledge
                        this release, any representatives, agents, and
                        successors from liability for accidental injury or
                        illness which I may incur as a result of participating
                        in the said physical activity. I hereby assume all risks
                        connected therewith and consent to participate in sad
                        program. I agree to disclose any physical limitations,
                        disabilities, ailments, or impairments which may affect
                        my ability to participate in said fitness program.
                      </p>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="liability"
                          value="checked"
                          onChange={handleChange}
                          className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500 mt-2"
                        />
                        <p className="ml-1 text-xs">
                          Please check to accept terms
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />

                <hr />
                <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                  <button
                    type="submit"
                    className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>
        )}
      </div>
    </>
  );
}

export default UserProfile;
