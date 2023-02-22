import React from "react";

const Contact = () => {
  return (
    <section className="w-3/4  mb-32 text-gray-800 mt-5 sm:mt-10">
      <div className="text-xl font-bold mb-5 flex items-center align-middle justify-center text-gray-600">
        Contact the Yoga Barn
      </div>
      <div className="flex w-full h-500 block rounded-lg shadow-lg ">
        <div className="flex w-full justify-center ">
          <div className=" block w-3/4  items-center justify-center align-middle mb-10 py-2 px-4">
            <iframe
              src="https://maps.google.com/maps?q=501%20N%20union%20st,%20Whitesboro%20Tx&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-48 w-full rounded-xl mt-2 mr-2"
              frameborder="0"
              allowfullscreen
            ></iframe>

            <div className="flex items-center justify-center text-xs sm:text-sm font-semibold mt-2 text-center text-gray-600">
              Address: 501 N. Union St, Whitesboro, TX 76273
            </div>
            <div className="flex justify-center mt-3">
              <form>
                <div className="flex justify-center mt-4 mb-4 text-sm sm:text-lg font-bold text-gray-600">
                  Send us a message!
                </div>
                <div class="form-group mb-6">
                  <input
                    type="text"
                    class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group mb-6">
                  <input
                    type="email"
                    class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="Email address"
                  />
                </div>
                <div class="form-group mb-6">
                  <textarea
                    class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out mb-10"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
