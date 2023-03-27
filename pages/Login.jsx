import React, { useRef, useState } from "react";

import { useRouter } from "next/router";

// import { AiOutlineLeft } from "react-icons/ai";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useStateContext } from "../context/StateContext";
import { GrGoogle } from "react-icons/gr";
import UserProfile from "./UserProfile";
import Link from "next/link";

const Login = () => {
  const [user, loading] = useAuthState(auth);
  const googleProvider = new GoogleAuthProvider();

  const route = useRouter();

  if (user) route.push("/");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        //alert("Success!");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        //alert(error.code);
        console.log(error.code);
      });
  };

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {!user && (
        <section className="h-screen pt-24">
          <div className=" text-gray-800">
            <div className="flex justify-center  items-center flex-wrap h-full g-6">
              <div className="">
                <div className="flex text-xl font-thin mb-10 items-center justify-center tracking-wide">
                  LOGIN TO THE YOGA BARN
                </div>
                <form>
                  <div className="flex flex-row items-center justify-center ">
                    <button
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="flex items-center justify-center gap-2 p-3 bg-teal-600 text-white font-medium text-xs leading-tight  rounded-full shadow-md ease-in transform hover:scale-105 transition duration-100 mx-1 tracking-wide"
                      onClick={GoogleLogin}
                    >
                      <GrGoogle /> Sign In With Google
                    </button>
                  </div>

                  <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p className="text-center font-semibold mx-4 mb-0">Or</p>
                  </div>

                  {/* <!-- Email input --> */}
                  <div className="mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="mb-6">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="flex justify-between items-center mb-6">
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-teal-600 checked:border-teal-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck2"
                      />
                      <label
                        className="text-sm form-check-label inline-block text-gray-800 font-thin tracking-wide"
                        for="exampleCheck2"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#!"
                      className="text-sm font-thin tracking-wide text-gray-600"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center ">
                    <button
                      type="button"
                      className="inline-block px-7 py-3 bg-teal-600 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md ease-in transform hover:scale-105 transition tracking-widest duration-100"
                      onClick={signIn}
                    >
                      Login
                    </button>

                    <p className="text-sm font-semibold mt-2 pt-1 mb-10">
                      Don&apos;t have an account?
                      <Link
                        href="/signUpPage"
                        className="text-teal-600 hover:text-teal-700 ease-in transform hover:scale-105 transition duration-100"
                      >
                        {" "}
                        Register
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {user && <UserProfile />}
    </>
  );
};

export default Login;
