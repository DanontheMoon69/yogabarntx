import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
interface SignupType {
  email: string;
  password: string;
  password_confirm: string;
}
import { useAuth } from "../context/AuthContext";
import { GrGoogle } from "react-icons/gr";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
const SignupPage = () => {
  const googleProvider = new GoogleAuthProvider();
  const methods = useForm<SignupType>({ mode: "onBlur" });
  const { signUp } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: SignupType) => {
    try {
      await signUp(data.email, data.password);
      router.push("/UserProfile");
    } catch (error: any) {
      console.log(error.message);
      alert(error.message);
    }
  };

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
      router.push("/UserProfile");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
      <Head>
        <title>Yoga Barn - Sign Up</title>
        <meta
          name="description"
          content="Yoga Barn - Sign Up and create a Yoga Barn Account"
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
      <div className="">
        <div className=" flex justify-center text-xl  font-bold mt-5 sm:mt-10 text-gray-600">
          Create an Account
        </div>

        <FormProvider {...methods}>
          <div className="flex items-center justify-center">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="flex align-center justify-center gap-2 p-3 bg-emerald-600 text-white ease-in transform hover:scale-105 transition duration-100 font-medium text-xs leading-tight  rounded-full shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out mx-1 mt-5"
              onClick={GoogleLogin}
            >
              <GrGoogle /> Create Account using Google
            </button>
          </div>
          <form
            action=""
            className="w-80 mx-auto pb-12 px-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="block mb-3 font-sans text-gray-900"
                >
                  Email
                </label>
              </div>

              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className={`bg-gray-100 border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
              />
              {errors.email && (
                <p className="text-red-400">{errors.email.message}</p>
              )}
            </div>
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="block mb-3 font-sans text-gray-900"
                >
                  Password
                </label>
              </div>

              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className={`bg-gray-100 border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
              />
              {errors.password && (
                <p className="text-red-400">{errors.password.message}</p>
              )}
            </div>
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="block mb-3 font-sans text-gray-900"
                >
                  Confirm Password
                </label>
              </div>

              <input
                type="password"
                {...register("password_confirm", {
                  required: "Verify your password",
                })}
                className={`bg-gray-100 border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
              />
              {errors.password_confirm && (
                <p className="text-red-400">
                  {errors.password_confirm.message}
                </p>
              )}
            </div>
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className={`flex px-7 py-3 bg-emerald-600 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-emerald-600 hover:shadow-lg ease-in transform hover:scale-105 transition duration-100 focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
              >
                <p className="capitalize text-white font-normal">
                  Create Account
                </p>
              </button>
            </div>
            <div className="flex justify-center">
              <p className="text-sm font-semibold mt-2 pt-1 mb-10">
                Already have an account?
                <Link
                  href="/Login"
                  className="text-emerald-600 hover:text-emerald-700 ease-in transform hover:scale-105 transition duration-100"
                >
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default SignupPage;
