"use client";

import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import { IOptions } from "tailwind-datepicker-react/types/Options";

const options: IOptions = {
  autoHide: true,
  todayBtn: true,
  clearBtn: true,
  maxDate: new Date(),
  minDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
  defaultDate: new Date(),
  inputDateFormatProp: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  },
  theme: {
    background: "",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "",
    input: "",
    inputIcon: "",
    selected: "",
  },
};

const DatePicker = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleChange = (selectedDate: Date) => {
    console.log(selectedDate);
  };
  const handleClose = (state: boolean) => {
    setShow(state);
  };

  return (
    <div className="relative w-60">
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
        classNames="absolute"
      />
    </div>
  );
};

export default DatePicker;
