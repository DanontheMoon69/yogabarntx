import dayjs from "dayjs";
import React, { useState } from "react";
// import { generateDate, months } from "./util/calendar";
import cn from "./util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const schedule = [
  {
    id: 1,
    name: "Rise & Shine",
    // imageUrl:
    startDateTime: "2023-03-05T13:00",
    endDateTime: "2023-03-05T14:30",
  },
];

export default function Calendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  return (
    <>
      <div className="text-xl font-bold mt-5 sm:mt-10 text-gray-600">
        Yoga Barn Scheduled Classes
      </div>
      <div className="text-xs font-semibold mt-1 text-gray-500">
        List of classes below calendar.
      </div>

      <div className="flex gap-10 sm:divide-x justify-center sm:w-full mx-auto  h-1/2 mt-10 items-center sm:flex-row flex-col pb-10 mb-10">
        {/* <div className="sm: w-64 ">
          <div className="sm: w-64 flex justify-between items-center">
            <h1 className="select-none font-semibold">
              {months[today.month()]}, {today.year()}
            </h1>
            <div className="flex gap-10 items-center ">
              <GrFormPrevious
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
              />
              <h1
                className=" cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(currentDate);
                }}
              >
                Today
              </h1>
              <GrFormNext
                className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-7 ">
            {days.map((day, index) => {
              return (
                <h1
                  key={index}
                  className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
                >
                  {day}
                </h1>
              );
            })}
          </div>

          <div className=" grid grid-cols-7 ">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => {
                return (
                  <div
                    key={index}
                    className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                  >
                    <h1
                      className={cn(
                        currentMonth ? "" : "text-gray-400",
                        today ? "bg-red-600 text-white" : "",
                        selectDate.toDate().toDateString() ===
                          date.toDate().toDateString()
                          ? "bg-black text-white"
                          : "",
                        "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                      )}
                      onClick={() => {
                        setSelectDate(date);
                      }}
                    >
                      {date.date()}
                    </h1>
                  </div>
                );
              }
            )}
          </div>
        </div> */}
        <div className="w-full ml-25 mr-25 sm: px-5 sm:max-w-lg ">
          <h1 className="flex justify-center text-xl font-bold text-gray-700 border-b-2">
            Scheduled Classes
          </h1>

          {/* Tuesdays and Thursdays */}

          <h1 className="text-lg font-semibold text-gray-600 mt-4">
            Tuesdays and Thursdays:
          </h1>
          <p className="flex text-md mt-2 font-semibold text-gray-700">
            Power 30:
          </p>
          <p className="flex text-xs font-bold text-gray-900">
            {" "}
            6:00am - 6:30am
          </p>
          <p className="text-xs font-semibold mt-2 text-gray-500">
            Class Description:
          </p>
          <p className="text-xs mt-1 text-gray-500  pb-2">
            Can&apos;t fit an hour class into your schedule? Well this 30 minute
            class is just right for you. Wake up, get in, sweat and go! This is
            a quick 30 minuite power flow. All levels welcome but this will
            challenge you. No savasana but we will finish with a 5 minute
            meditation that you can take any way you like, whether it&apos;s
            laying down, sitting up or whatever feels good! If you give anything
            to yourself in a day, let it be 30 minutes of activity.
          </p>
          <div className="border-b-2 border-gray-100 mt-4"></div>
          <p className="flex text-md mt-2 font-semibold text-gray-700">
            Rise & Shine:
          </p>
          <p className="flex text-xs font-bold text-gray-900">
            {" "}
            6:45am - 7:45am
          </p>
          <p className="text-xs font-semibold mt-2 text-gray-500">
            Class Description:
          </p>
          <p className="text-xs mt-1 text-gray-500  pb-2">
            Start your day right. Whether it&apos;s before work, a day running
            the kids around, or before household chores, start your day at the
            studio. This is an All Levels class that you will build up your own
            heat and strength and then slowly cool the body for a nice savasana.
          </p>
          <div className="border-b-4 mt-4"></div>

          {/* Sundays */}

          <h1 className="text-lg font-semibold text-gray-600 mt-4">Sundays:</h1>
          <p className="flex text-md mt-2 font-semibold text-gray-700">
            Mindful Movement:
          </p>
          <p className="flex text-xs font-bold text-gray-900">
            {" "}
            4:00pm - 5:00pm
          </p>
          <p className="text-xs font-semibold mt-2 text-gray-500">
            Class Description:
          </p>
          <p className="text-xs mt-1 text-gray-500  pb-2">
            Start the week off slow and steady. Our slow flow is a vinyasa Flow
            that focuses on stretching and lengthening the body. We may linger
            in poses longer and slow things down when needed. All levels
            welcome.
          </p>
          <div className="border-b-2 border-gray-100 mt-4"></div>
          <p className="flex text-md mt-2 font-semibold text-gray-700">
            Fire Flow:
          </p>
          <p className="flex text-xs font-bold text-gray-900">
            {" "}
            5:30pm - 6:30am
          </p>
          <p className="text-xs font-semibold mt-2 text-gray-500">
            Class Description:
          </p>
          <p className="text-xs mt-1 text-gray-500  pb-2 mb-10">
            Start the week of strong! Challenge yourself in this evening class.
            Grow your practice both in mind and body. You will quickly build
            heat moving through more challenging poses and transitions. Leave
            feeling cleansed and renewd, ready to start your week! Experienced
            yogis welcome or ones wanting to challenge their practice.
          </p>
          {/* <h1 className=" font-semibold">
            Schedule for {selectDate.toDate().toDateString()}
          </h1>
          <p className="text-gray-400">No meetings for today.</p> */}
        </div>
      </div>
    </>
  );
}
