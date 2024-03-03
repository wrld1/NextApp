"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "react-feather";

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date(Date.now()).toISOString().split("T")[0]
  );

  const today = new Date();
  const maxDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  )
    .toISOString()
    .split("T")[0];

  const minDate = new Date(today.getDate() - 7).toISOString().split("T")[0];

  return (
    // <DatePicker
    //   selected={selectedDate}
    //   showIcon
    //   icon={<Calendar className="mt-[2px]" />}
    //   onChange={handleDateChange}
    //   minDate={minDate}
    //   maxDate={maxDate}
    //   dateFormat="dd/MM/yyyy"
    //   className="w-3/4 rounded-md px-3 text-gray-700 border border-[#C1C2CA] shadow-sm focus:border-[#3a3a3b] focus:ring focus:ring-primary-200 focus:ring-opacity-50 flex items-center"
    // />
    <input
      type="date"
      id="calendar"
      name="calendar"
      value={selectedDate}
      min={minDate}
      max={maxDate}
      onChange={(e) => setSelectedDate(e.target.value)}
      className="block p-4 text-gray-400 border border-[#C1C2CA] rounded outline-none shadow-sm focus:border-[#3a3a3b] focus:ring focus:ring-primary-200 focus:ring-opacity-50"
    />
  );
};

export default Datepicker;
