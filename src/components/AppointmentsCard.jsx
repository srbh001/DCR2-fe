import React from "react";
import axios from "axios";

const AppointmentsCard = ({ name, date, loc }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col space-y-4">
      <h2 className="font-bold text-2xl">Appointment with {name}</h2>
      <span className="flex space-x-3">
        <img
          className="h-5 w-5"
          src={process.env.PUBLIC_URL + "/calendar-solid.svg"}
        />
        <p>{date}</p>
      </span>
      <span className="flex space-x-3">
        <img
          className="h-5 w-5"
          src={process.env.PUBLIC_URL + "/location-dot-solid.svg"}
        />
        <p>{loc}</p>
      </span>
    </div>
  );
};

export default AppointmentsCard;
