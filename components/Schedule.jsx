import React, { useRef } from "react";

import { AiOutlineLeft } from "react-icons/ai";
import marchCal from "components/assets/images/YogaBarn_ClassCalendar_March2023.png";

import { useStateContext } from "../context/StateContext";
import Link from "next/link";
import Image from "next/image";

const Schedule = () => {
  const { setShowSchedule, setShowMemberLoginButton } = useStateContext();
  const cartRef = useRef();
  return (
    <>
      <div className="flex justify-center w-screen bg-gray-200  p-2 mr-5">
        <div className="bg-white  sm:w-3/4 mt-10 px-2 py-2 opacity-100 rounded-xl">
          <div className="flex mb-3">
            <button
              type="button"
              className="flex font-semibold text-sm text-white items-center animate-pulse bg-teal-600 rounded-full px-4 py-1"
              onClick={() => {
                setShowSchedule(false);
              }}
            >
              <AiOutlineLeft /> Close Calendar
              <span className="text-white font-bold ml-1"></span>
            </button>
          </div>
          <Image src={marchCal} alt="Yoga Barn - March 2023 Schedule" />
        </div>
      </div>
    </>
  );
};

export default Schedule;
