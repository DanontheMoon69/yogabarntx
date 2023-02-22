import React, { useState, useEffect } from "react";
import Link from "next/link";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [inputDate, setInputDate] = useState("6 Mar 2023");
  const [currentDate, setCurrentDate] = useState(inputDate);

  useEffect(() => {
    const changingDate = new Date(inputDate);
    const currentDate = new Date();
    const totalSeconds = (changingDate - currentDate) / 1000;

    setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
    setHours(Math.floor(totalSeconds / 3600) % 24);
    setMinutes(Math.floor(totalSeconds / 60) % 60);
    setSeconds(Math.floor(totalSeconds % 60));
  }, [currentDate]);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  const onChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const onClickHandler = () => {
    setCurrentDate(inputDate);
  };

  return (
    <section className="sm:w-screen py-10 sm-py-8 bg-emerald-800  dark:bg-gray-800 md:py-16 sm:rounded-3xl">
      <div className="box-content max-w-5xl px-5 mx-auto ">
        <div className="flex flex-col items-center -mx-5 md:flex-row bg-emerald-800">
          <div className="w-full px-5 mb-5 text-center md:mb-0 md:text-left bg-emerald-800">
            <h6 className="ml-0 sm:ml-4 bg-emerald-800 text-s font-semibold text-white uppercase md:text-base">
              Join us for our First Class
            </h6>
            <h3 className="ml-0 sm:ml-4 text-2xl font-bold text-white font-heading md:text-4xl bg-emerald-800">
              Sunday - March 5, 2023
            </h3>
            <h3 className="ml-0 sm:ml-4 text-md sm:text-lg font-bold leading-tight text-white font-heading md:text-xl bg-emerald-800">
              @ 5:30 PM
            </h3>
            <div className="w-full mt-4 md:w-44">
              <Link href="/Calendar">
                <button
                  type="button"
                  className="ml-0 sm:ml-4 py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-emerald-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  View our Schedule
                </button>
              </Link>
            </div>
          </div>
          <div className="w-screen px-5 md:w-auto bg-emerald-800">
            <div className="flex justify-center text-center text-white bg-emerald-800">
              <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                <div className="text-2xl font-semibold md:text-3xl ">
                  {days}
                </div>
                <div className="mt-3 text-xs uppercase opacity-75">Day</div>
              </div>
              <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                <div className="text-2xl font-semibold md:text-3xl">
                  {hours}
                </div>
                <div className="mt-3 text-xs uppercase opacity-75 ">Hour</div>
              </div>
              <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                <div className="text-2xl font-semibold md:text-3xl">
                  {minutes}
                </div>
                <div className="mt-3 text-xs uppercase opacity-75 ">Min</div>
              </div>
              <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                <div className="text-2xl font-semibold md:text-3xl">
                  {seconds}
                </div>
                <div className="mt-3 text-xs uppercase opacity-75 ">Second</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Countdown;
// old section
