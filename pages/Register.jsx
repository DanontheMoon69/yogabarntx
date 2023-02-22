import React, { useRef, useState } from "react";

// import { AiOutlineLeft } from "react-icons/ai";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useStateContext } from "../context/StateContext";
import { GrGoogle } from "react-icons/gr";
import UserProfile from "./UserProfile";

const SignUp = () => {
  const [user, loading] = useAuthState(auth);
  const googleProvider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const register = () => {
    const auth = getAuth();

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
        <div>
          <section className="h-screen">
            <div className="px-6 h-full text-gray-800">
              <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="w-full"
                    alt="Sample image"
                  />
                </div>
                <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                  <div className="flex text-xl font-bold mb-10 items-center justify-center">
                    Create Yoga Barn Account
                  </div>
                  <form>
                    <div className="flex flex-row items-center justify-center lg:justify-start">
                      <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="flex align-center justify-center gap-2 p-3 bg-blue-600 text-white font-medium text-xs leading-tight  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                        onClick={GoogleLogin}
                      >
                        <GrGoogle /> Sign Up with Google
                      </button>
                    </div>

                    <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                      <p className="text-center font-semibold mx-4 mb-0">Or</p>
                    </div>
                    {/* <!-- Name input --> */}
                    <div className="mb-6">
                      <label className="block text-xs pb-2" htmlFor="name">
                        Display Name
                      </label>
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="newAccount"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    {/* <!-- Email input --> */}
                    <div className="mb-6">
                      <label className="block text-xs pb-2" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="newAccount"
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="mb-6">
                      <label className="block text-xs pb-2" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="newAccount"
                        placeholder="Password"
                        onInput={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <div className="form-group form-check">
                        <input
                          type="checkbox"
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          id="newAccount"
                        />
                        <label
                          className="form-check-label inline-block text-gray-800"
                          for="newAccount"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>

                    <div className="text-center lg:text-left">
                      <button
                        type="submit"
                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        for="signUp"
                        onClick={register}
                      >
                        Create Account
                      </button>
                      <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                        Already have an account?
                        <a
                          href="/Login"
                          className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                        >
                          {" "}
                          Login
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {user && <UserProfile />}
    </>
  );
};

export default SignUp;
