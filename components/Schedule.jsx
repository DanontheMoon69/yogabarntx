import React, { useRef } from "react";

import { AiOutlineLeft } from "react-icons/ai";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

import { useStateContext } from "../context/StateContext";

const Schedule = () => {
  const { setShowSchedule, setShowMemberLoginButton } = useStateContext();
  const cartRef = useRef();
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => {
            setShowSchedule(false);
            setShowMemberLoginButton(true);
          }}
        >
          <AiOutlineLeft /> Back
        </button>
        <div className="schedule-container">
          Available Classes for March 2023
          {/* <FullCalendar
            plugins={[dayGridPlugin]}
            width={400}
            maxWidth={90}
            initialView="dayGridPlugin"
            weekends={true}
            hiddenDays={[2, 4]}
            events={[
              { title: "Rise & Shine", date: "2023-02-01" },
              { title: "Power 30", date: "2023-02-15" },
            ]}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
