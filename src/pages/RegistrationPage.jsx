import React from "react";

const RegistrationPage = () => {
  return (
    <div className="flex flex-col h-full space-y-20">
      <div className="flex">
        <img
          src={process.env.PUBLIC_URL + "/logo_text.svg"}
          alt="logo"
          className="w-30 h-30 mx-auto mt-10"
        />{" "}
      </div>
      <div className="min-w-full min-h-[576px] bg-purple-pastel rounded-t-3xl px-6 py-10 h-full">
        <form className="flex flex-col mx-auto space-y-8 items-center">
          <input
            type="text"
            id="name"
            className="border-2 max-w-96 w-full border-purple-700 rounded-2xl placeholder:text-black p-3 shadow-xl"
            placeholder="Enter student name"
          />
          <input
            type="text"
            id="rollno"
            className="border-2 max-w-96 w-full border-purple-700 rounded-2xl placeholder:text-black p-3 shadow-xl"
            placeholder="Enter roll no."
          />
          <input
            type="text"
            id="contact"
            className="border-2 max-w-96 w-full border-purple-700 rounded-2xl placeholder:text-black p-3 shadow-xl"
            placeholder="Enter contact no."
          />
          <input
            type="email"
            id="email"
            className="border-2 max-w-96 w-full border-purple-700 rounded-2xl placeholder:text-black p-3 shadow-xl"
            placeholder="Enter student email"
          />
          <input
            type="password"
            id="password"
            className="border-2 max-w-96 w-full border-purple-700 rounded-2xl placeholder:text-black p-3 shadow-xl"
            placeholder="Enter password"
          />
          <div className="flex flex-col items-center px-4 w-full">
            <button
              type="submit"
              className="bg-teal max-w-80 w-full text-white p-2.5 rounded-2xl"
            >
              Sign Up
            </button>
            <span>Already have an account?</span>
            <a href="/login" className="text-violet-900 font-bold">
              Log In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
