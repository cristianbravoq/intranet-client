import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export function Calendario() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="flex flex-col">
      <Calendar
        className="my-5 rounded-md font-bold !w-full text-black active:text-red-600"
        onClickDay={(date) => onChange(date)}
        value={value}
      />
      <p>{value.toString()}</p>
    </div>
  );
}