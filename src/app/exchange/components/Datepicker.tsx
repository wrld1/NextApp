"use client";

import { useConverter } from "@/app/_stores/converter.store";
import React from "react";

const Datepicker = () => {
  const { date, setDate } = useConverter();

  const today = new Date();
  const maxDate = new Date().toISOString().split("T")[0];

  const minDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const formattedDate = new Date(Date.UTC(date.year, date.month - 1, date.day))
    .toISOString()
    .split("T")[0];

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    const utcDate = new Date(
      Date.UTC(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate()
      )
    )
      .toISOString()
      .split("T")[0];

    setDate({
      year: parseInt(utcDate.slice(0, 4)),
      month: parseInt(utcDate.slice(5, 7)),
      day: parseInt(utcDate.slice(8, 10)),
    });
  };

  return (
    <input
      type="date"
      id="calendar"
      name="calendar"
      value={formattedDate}
      min={minDate}
      max={maxDate}
      onChange={handleChangeDate}
      className="custom-date-icon block p-4 w-[220px] text-[#707C87] border border-[#C1C2CA] rounded outline-none shadow-sm focus:border-[#3a3a3b] focus:ring focus:ring-primary-200 focus:ring-opacity-50"
    />
  );
};

export default Datepicker;
