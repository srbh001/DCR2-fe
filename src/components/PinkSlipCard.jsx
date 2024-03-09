import React from "react";

const PinkSlipCard = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col space-y-4">
      <h2 className="text-2xl font-bold">Pink Slip</h2>
      <span className="flex">
        <img
          className="h-5 w-5"
          src={process.env.PUBLIC_URL + "/file-solid.svg"}
        />
      </span>
    </div>
  );
};

export default PinkSlipCard;
